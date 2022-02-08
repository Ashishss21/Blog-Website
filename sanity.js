import { createClient, createCurrentUserHook, createImageUrlBuilder } from "next-sanity";

export const sanityConfig = {
    dataset: process.env.SANITY_PROJECT_DATASET_NAME || 'production',
    projectId: process.env.SANITY_PROJECT_ID || 'f3oce1ih',
    apiVersion: '2021-03-25',
    setCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(sanityConfig);


export const urlFor = (source)=> createImageUrlBuilder(sanityConfig).image(source);
export const useCurrentUser = createCurrentUserHook(sanityConfig);