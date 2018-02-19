import {AsyncStorage} from 'react-native';

const AUTHENTICATION_STORAGE_KEY = 'ecoation:Authentication';

export function getAuthenticationToken() {
  return AsyncStorage.getItem(AUTHENTICATION_STORAGE_KEY);
}

export function setAuthenticationToken(token) {
  return AsyncStorage.setItem(AUTHENTICATION_STORAGE_KEY, token);
}

export function clearAuthenticationToken() {
  return AsyncStorage.removeItem(AUTHENTICATION_STORAGE_KEY);
}

export async function getAuthHeaders() {
  let token = await getAuthenticationToken();

  return new Headers({
    "Content-Type": 'application/json',
    "Accept-Language": "ru",
    "Authorization": `Bearer ${token}`
  });
}



export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    return getAuthenticationToken()
      .then(res => {
        return (res !== null) ? resolve(true) : resolve(false)
      })
      .catch(err => reject(err));
  });
};

