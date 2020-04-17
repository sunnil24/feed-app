export const getDomainName = (url) => {
  var urlParts = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(/[/?#]/);
  return urlParts[0];
};
