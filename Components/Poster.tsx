import Image from "next/image"

function Poster() {
  return (
    <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-5 lg:py-10">
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write, read and connect.
        </h1>
        <h2>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers
        </h2>
      </div>

      <div className="bg-yellow-400 px-10">
        <img
          src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png"
          alt="medium-logo-poster"
          className="hidden bg-yellow-400 h-32 md:inline-flex lg:h-72"
          style={{background:'rgb(250 204 21 / var(--tw-bg-opacity))'}}
        />
      </div>
    </div>
  )
}

export default Poster
