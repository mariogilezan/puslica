export default {
  name: 'galerija',
  title: 'Galerija',
  type: 'document',
  fields: [
    {
      name: 'imageGallery',
      type: 'imageGallery',
    },
  ],
  preview: {
    select: {
      images: 'imageGallery.images',
      image: 'imageGallery.images.0',
    },
    prepare(selection) {
      const { images, image } = selection;
      const imgGallery = Object.keys(images).filter(
        (image) => !image.includes('undefined')
      );

      return {
        title: `Galerija od ${imgGallery.length} fotografija`,
        media: image,
      };
    },
  },
};
