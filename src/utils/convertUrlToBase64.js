import { readAsDataURL } from './readFilePromise';
export async function convertUrlToBase64(url, callback) {
  var xhr = new XMLHttpRequest();
  let data = '';
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = async function () {
    var file = this.response;
    data = await readAsDataURL(file);
    if (data) callback(null, data);
    else callback('fail', null);
  };
  xhr.send();
}
