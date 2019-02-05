import axios from 'axios';

function buildResponse(body) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(body),
  };
}

export function get(event, context, callback) {
  let requestId;
  let url = 'https://xkcd.com/info.0.json';
  if (event.pathParameters) {
    requestId = event.pathParameters.id;
    url = `https://xkcd.com/${requestId}/info.0.json`;
  }

  axios.get(url).then(res => {
    const { alt, img: image, num: id, safe_title: title } = res.data;
    callback(null, buildResponse({ alt, image, id, title }));
  });
}

export function post(event, context, callback) {
  callback(null, buildResponse({ result: 'ok' }));
}

export default {
  get,
  post,
};
