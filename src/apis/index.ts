import request from '../utils/request';
// 测试api
const testApi = (query: unknown) => request({
  url: '/test',
  method: 'get',
  params: query,
})

export default {
  testApi
}