import axios from 'axios';
import * as app from '..';

jest.mock('axios');

let getData;

describe('API', () => {
  describe('get', () => {
    beforeEach(() => {
      jest.resetAllMocks();

      getData = {
        data: {
          alt: 'Test alt',
          num: 123456,
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
    it('receives reactions', async () => {
      const cb = jest.fn();
      const event = { body: JSON.stringify({ reaction: 'funny' }) };
      await app.post(event, null, cb);
      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb.mock.calls[0][1].statusCode).toEqual(200);
      expect(JSON.parse(cb.mock.calls[0][1].body)).toEqual({ result: 'ok' });
    });
  });
});
