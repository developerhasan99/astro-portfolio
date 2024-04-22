import { defineCollection, z } from 'astro:content';


const blogCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        date: z.string(),
        image: z.string().optional(),
    }),
}); 

export const collections = {
    'blog': blogCollection,
};