export const getImageUrl = (path) => {
  if (!path) return path;
  // If it's already an absolute URL (http), return as is
  if (path.startsWith('http')) return path;
  
  // Ensure the path doesn't start with a slash so it concatenates properly with BASE_URL
  // import.meta.env.BASE_URL always starts and ends with a slash (e.g. '/' or '/repo/')
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
