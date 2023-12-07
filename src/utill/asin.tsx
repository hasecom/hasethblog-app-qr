
export const getAsin = (url:string) => {
  const match = url.match(/dp\/([A-Z0-9]{10})/i);
  return match ? match[1] : null;
}