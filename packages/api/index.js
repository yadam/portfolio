import axios from 'axios';
import { DynamoDB } from 'aws-sdk';
import config from './config';

let db;

// Used for testing only
/* eslint-disable-next-line no-underscore-dangle */
export function _resetDB() {
  db = undefined;
}

function getDB() {
  if (!db) {
    const options = { apiVersion: '2012-08-10' };

    // This is for serverless-offline
    if (process.env.IS_OFFLINE) {
      options.region = 'localhost';
      options.endpoint = 'http://localhost:8000';
    }
    db = new DynamoDB(options);
  }
  return db;
}

const REACTIONS_TABLE = config.get('db.reactions.name');

function buildResponse(body, statusCode = 200) {
  return {
    statusCode,
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
  const { reaction } = JSON.parse(event.body);
  const { id: comicId } = event.pathParameters;
  const params = {
    TableName: REACTIONS_TABLE,
    Item: {
      comicId: {
        S: comicId,
      },
      reaction: {
        S: reaction,
      },
    },
    ReturnValues: 'ALL_OLD',
  };
  getDB().putItem(params, (error, response) => {
    if (error) {
      callback(null, buildResponse({ result: 'error', error }, 400));
      return;
    }
    callback(null, buildResponse({ result: 'ok', response }));
  });
}

export default {
  get,
  post,
};
