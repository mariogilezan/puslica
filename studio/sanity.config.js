import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID;
const dataset = import.meta.env.SANITY_STUDIO_DATASET;

export default defineConfig({
  title: 'puslica-studio',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  tools: (prev, context) => {
    const isAdmin = context.currentUser.roles.find(
      ({ name }) => name === 'administrator'
    );
    if (isAdmin) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== 'vision');
  },
  schema: {
    types: schemas,
  },
});
