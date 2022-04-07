import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'mogiwnf7',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'sk8zOptJO4vKUztgf4R5vlwTEkm9Q6c6ma3piRXGcUaXLEn5LavTWJWWUbEeEKuzPWD7xzWRk1wARkaaCo4nTDYvFwTfYjVHmrtOgWYAamYTnBNYjERIzxG2mZGgt4mTRXigh8ANlU0nbwK9FPE4ZD1SwVd7N0JsiVyoAwKbSzUnlTLJFVc3',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);