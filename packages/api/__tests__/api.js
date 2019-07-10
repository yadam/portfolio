import axios from 'axios';
import AWS from 'aws-sdk';
import AWSMock from 'aws-sdk-mock';
import * as app from '..';

jest.mock('axios');
AWSMock.setSDKInstance(AWS);

let getData;

describe('API', () => {
  describe('get', () => {
    beforeEach(() => {
      jest.resetAllMocks();

      getData = {
        data: {
          alt: 'Test alt',
          num: '123456',
          img: 'TestImageUrl',
          safe_title: 'TestTitle',
        },
      };

      axios.get = jest.fn(
        () =>
          new Promise(resolve => {
            resolve(getData);
          }),
      );
    });

    it('gets the latest comic', async () => {
      const cb = jest.fn();
      const expected = {
        alt: getData.data.alt,
        id: getData.data.num,
        image: getData.data.img,
        title: getData.data.safe_title,
      };
      const event = {};
      await app.get(event, null, cb);
      expect(axios.get).toHaveBeenCalledWith('https://xkcd.com/info.0.json');
      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb.mock.calls[0][1].statusCode).toEqual(200);
      expect(JSON.parse(cb.mock.calls[0][1].body)).toEqual(expected);
    });

    it('gets a specific comic', async () => {
      const cb = jest.fn();
      const expected = {
        alt: getData.data.alt,
        id: getData.data.num,
        image: getData.data.img,
        title: getData.data.safe_title,
      };
      const event = { pathParameters: { id: getData.data.num } };
      await app.get(event, null, cb);
      expect(axios.get).toHaveBeenCalledWith(
        `https://xkcd.com/${getData.data.num}/info.0.json`,
      );
      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb.mock.calls[0][1].statusCode).toEqual(200);
      expect(JSON.parse(cb.mock.calls[0][1].body)).toEqual(expected);
    });
  });

  describe('post', () => {
    afterEach(() => {
      /* eslint-disable-next-line no-underscore-dangle */
      app._resetDB();
      process.env.IS_OFFLINE = '';
      AWSMock.restore();
    });

    it('configures the database in offline mode', async () => {
      process.env.IS_OFFLINE = true;
      AWSMock.mock('DynamoDB', 'putItem', (params, callback) => {
        callback(null, 'successfully put item in database');
      });
      const cb = jest.fn();
      const event = {
        pathParameters: { id: getData.data.num },
        body: JSON.stringify({ reaction: 'funny' }),
      };
      await app.post(event, null, cb);
      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb.mock.calls[0][1].statusCode).toEqual(200);
      expect(JSON.parse(cb.mock.calls[0][1].body)).toEqual({
        result: 'ok',
        response: 'successfully put item in database',
      });
    });

    it('receives reactions', async () => {
      AWSMock.mock('DynamoDB', 'putItem', (params, callback) => {
        callback(null, 'successfully put item in database');
      });
      const cb = jest.fn();
      const event = {
        pathParameters: { id: getData.data.num },
        body: JSON.stringify({ reaction: 'funny' }),
      };
      await app.post(event, null, cb);
      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb.mock.calls[0][1].statusCode).toEqual(200);
      expect(JSON.parse(cb.mock.calls[0][1].body)).toEqual({
        result: 'ok',
        response: 'successfully put item in database',
      });
    });

    it('handles database errors', async () => {
      AWSMock.mock('DynamoDB', 'putItem', (params, callback) => {
        callback('an error occurred.');
      });
      const cb = jest.fn();
      const event = {
        pathParameters: { id: getData.data.num },
        body: JSON.stringify({ reaction: 'funny' }),
      };
      await app.post(event, null, cb);
      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb.mock.calls[0][1].statusCode).toEqual(400);
      expect(JSON.parse(cb.mock.calls[0][1].body)).toEqual({
        error: 'an error occurred.',
        result: 'error',
      });
    });

    it('consecutive post calls reuse the same db instance', async () => {
      AWSMock.mock('DynamoDB', 'putItem', (params, callback) => {
        callback(null, 'successfully put item in database');
      });
      const cb = jest.fn();
      const event = {
        pathParameters: { id: getData.data.num },
        body: JSON.stringify({ reaction: 'funny' }),
      };

      await app.post(event, null, cb);
      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb.mock.calls[0][1].statusCode).toEqual(200);
      expect(JSON.parse(cb.mock.calls[0][1].body)).toEqual({
        result: 'ok',
        response: 'successfully put item in database',
      });

      await app.post(event, null, cb);
      expect(cb).toHaveBeenCalledTimes(2);
      expect(cb.mock.calls[1][1].statusCode).toEqual(200);
      expect(JSON.parse(cb.mock.calls[1][1].body)).toEqual({
        result: 'ok',
        response: 'successfully put item in database',
      });
    });
  });
});
