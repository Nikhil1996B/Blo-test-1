import axios from 'axios';

export function requestGetUser() {
  return axios.request({
    method: 'get',
    url: 'mockdata/mockProduct.json'
  });
}
