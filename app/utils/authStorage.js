import {AsyncStorage} from 'react-native';
const AWS = require('aws-sdk');
const aws4 = require('aws4-react-native');

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

const getSignedAWSHeaders = (path, body, token) => {
  const opts = {
  host: 'api.ecoation.com',
  path,
  service: 'execute-api',
  region: 'us-west-2',
  headers: {
      'x-access-token': token,
      'content-type': 'application/json'
    }
  };
  const cred = {
  accessKeyId: AWS.config.credentials.accessKeyId,
    secretAccessKey: AWS.config.credentials.secretAccessKey,
    sessionToken: AWS.config.credentials.sessionToken
  };
  if (body) {
    opts.body = body;
  }
  return aws4.sign(opts, cred).headers;
};

//@todo refactoring
export async function getAuthHeaders() {
  let token = await getAuthenticationToken();
  const Logins = {};
  let body = JSON.stringify({
    "timestampRange":"1517356800-1518566399",
    "farmId":"a41106d0-8c49-11e7-a152-6dbd2fb9dc73", "siteId":[
      "5cf598a0-8d0d-11e7-89be-81f16739711d",
      "d1e10b20-9066-11e7-89be-81f16739711d" ],
    "filter":{
      "node":{
        "name":"coverage", "displayName":"coverage", "parent":"root",
        "children":[
        ],
        "color":"coverage" },
      "types":[ "present", "pressure"
      ], "values":[
        1, 2, 3
      ],
      "source":null },
    "upsideDown":"true"
  });

  Logins['cognito-idp.us-west-2.amazonaws.com/us-west-2_7qlpZw5pA'] = token;
  AWS.config.region = 'us-west-2';
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-west-2:2e559aa3-5c62-4bbb-ac27-f37fbf0bc046',
    Logins
  });

  return new Promise((resolve, reject) => {
    AWS.config.credentials.refresh(() => {
      const headers = getSignedAWSHeaders('/predictionservice/dev/predictions/filter', body, token);
      resolve({method: "POST", headers, body});
    });
  })
}