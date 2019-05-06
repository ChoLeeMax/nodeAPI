/*
 * @Author: ecitlm
 * @Date:   2017-12-06 21:41:02
 * @Last Modified by: ecitlm
 * @Last Modified time: 2018-04-14 23:33:23
 */
const express = require('express')
const app = express()
const Server = require('../../../utils/httpServer')

app.get('/:type', function (req, res) {
  let type = parseInt(req.params.type)
  let path=''
  // 0 热点新闻 1 社会新闻 2 娱乐新闻 3体育新闻 4美文 散文 5科技 6 财经 7 时尚
  switch (type) {
    case 0:
      path ='/api/pc/feed/?category=news_hot&utm_source=toutiao&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true'
      break
    case 1:
      path ='/api/pc/feed/?category=news_society&utm_source=toutiao&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true'
      break
    case 2:
      path ='/api/pc/feed/?category=news_entertainment&utm_source=toutiao&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true'
      break
    case 3:
      path ='/api/pc/feed/?category=news_sports&&utm_source=toutiao&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true'
      break
    case 4:
      path ='/api/pc/feed/?category=news_essay&utm_source=toutiao&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true'
      break
    case 5:
      path ='/api/pc/feed/?category=news_tech&utm_source=toutiao&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true'
      break
    case 6:
      path ='/api/pc/feed/?category=news_finance&utm_source=toutiao&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true'
      break
    case 7:
      path ='/api/pc/feed/?category=news_fashion&utm_source=toutiao&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true'
      break
    default:
      path ='/api/pc/feed/?category=news_hot&utm_source=toutiao&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true'
  }

  let host = 'www.toutiao.com'
  // false:http请求  true:https请求
  Server.httpGet(host, {}, path, true)
    .then(function (body) {
      res.send({
        code: 200,
        data: JSON.parse(body)['data'],
        msg: 'cholee',
		id:JSON.parse(body)['page_id']
      })
    })
    .catch(function (err) {
      res.send({
        code: 404,
        msg: '网络好像有点问题'
      })
      console.log(err)
    })
})
module.exports = app
