import Header from "../../Components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";

interface Props{
    post: Post;
}

function Post({post}: Props){
    console.log(post);
    return(
        <div>
            <Header/>
        </div>
    );
}

export default Post;

export const getStaticPaths = async () =>{
    const query = `*[_type == "post"]{
        _id,
        slug {
            current
        }
      }`;

      const posts = await sanityClient.fetch(query);

      const paths = posts.map((post: Post) => ({
        params:{
            slug: post.slug.current,
        },
      }));

      return(
          paths
        //   fallback: 'blocking',
      )
};

export const getStaticPaths: GetStaticPaths = async ({ params }) =>{
    const query = `*[_type == "post"]{
        _id,
        _createdAt,
        title,
        'comments': =[
            _type == "comment" &&
            post._ref == ^._id &&
            approved == true
        ],
        description,
        mainImage,
        slug,
        author{
          name,
          image,
        },
        body
      }` 

      const post = await sanityClient.fetch(query, {
          slug:params?.slug,
      });

      if(!post){
          return{
              notFound: true
          }
      }

      return {
          props: {
              post,
          }
      }
}