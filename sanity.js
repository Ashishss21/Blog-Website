import { createClient, createCurrentUserHook, createImageUrlBuilder } from "next-sanity";

export const config = {
    dataset: process.env.SANITY_PROJECT_DATASET_NAME || 'production',
    projectId: process.env.SANITY_PROJECT_ID,
    apiVersion: '2021-03-25',
    setCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);
export const urlFor = (source)=> createImageUrlBuilder(config).image(source);
export const useCurrentUser = createCurrentUserHook(config);