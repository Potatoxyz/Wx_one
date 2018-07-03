//logs.js
const util = require('../../utils/util.js')
var template = require('../../template/tabbar/tabbar.js');
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    template.tabbar("tabBar", 2, this)//0表示第一个tabbar
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
