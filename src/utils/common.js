export const getDomainName = (url) => {
  if(url){
  var urlParts = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(/[/?#]/);
  return urlParts[0];}
  return null
};
