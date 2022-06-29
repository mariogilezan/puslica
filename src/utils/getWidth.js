export const getWidth = () => {
  if (typeof window === 'undefined' || !window.document) {
    return;
  }

  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};
