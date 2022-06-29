import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '7cqcyj9t',
  dataset: 'production',
  apiVersion: '2022-06-16',
  useCdn: true,
});
