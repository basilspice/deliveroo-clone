import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const sanityClient = createClient({
  projectId: "w0p969iw",
  dataset: "production",
  useCdn: true,
  apiVersion: '2023-08-12',
});

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source) => {
  return builder.image(source)
}



export default sanityClient;