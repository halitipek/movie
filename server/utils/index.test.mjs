import config from '../config/dotenv'

import test from 'ava'
import { fetchKeywordDataFromOmdb } from './index.mjs'
import mockData from '../mock/mock.json';

export const fakeServerRequest = (keyword, pageNumber = 1) => {
	return new Promise(resolve => {
		if (pageNumber === 1) {
			resolve(mockData.page_1)
		} else {
			resolve(mockData.page_2)
		}
	})
}

test('Fetch data test', async t => {
  t.deepEqual(await fetchKeywordDataFromOmdb('spiderman', fakeServerRequest), mockData.result)
})