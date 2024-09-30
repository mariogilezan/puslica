import { createClient } from '@sanity/client';
import env from 'react-dotenv';

export const client = createClient({
  projectId: env.SANITY_STUDIO_PROJECT_ID,
  dataset: env.SANITY_STUDIO_DATASET,
  apiVersion: '2022-06-16',
  useCdn: false,
});
