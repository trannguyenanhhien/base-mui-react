export const readAsDataURL = (file) => {
  return new Promise((resolve) => {
    let fileReader = new FileReader();
    fileReader.onload = function () {
      return resolve({
        data: fileReader.result,
        name: file.name || '',
        size: file.size,
        type: file.type
      });
    };
    fileReader.readAsDataURL(file);
  });
}
