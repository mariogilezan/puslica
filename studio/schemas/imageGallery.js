export default {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'altText',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
};
