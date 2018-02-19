import {getAuthHeaders} from './utils/authStorage';

export const API_URL = 'https://api.ecoation.com';
const API_SIGN_IN_URL = `${API_URL}/userservice/dev/users/signin`;

export function fetchSignIn(credentials) {
  return fetch(API_SIGN_IN_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'en'
    },
    body: JSON.stringify(credentials)
  }).then(resp => resp.json());
}
//@todo refactoring
export async function fetchGreenhouseData() {
  const opts = await getAuthHeaders();
  const s3links = await fetch('https://api.ecoation.com/predictionservice/dev/predictions/filter', {...opts})
    .then((res) => res.json())
    .catch(console.log);
  return await fetchS3Links(s3links);
}

export async function fetchS3Links(linksArray) {
  const promiseArray = linksArray.map((link) => fetch(link).then(res => res.json()));
  return await Promise.all(promiseArray);
}

