export const getFileExtension = (fileName) => {
  let typeFileSplit = fileName.split('.');
  return typeFileSplit[typeFileSplit.length - 1];
}
