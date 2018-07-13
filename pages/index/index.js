var touchEvent=[];
var tabbar=require('../../template/tabbar/tabbar.js');
var modal = require('../../template/modal/modal.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageItems: ['page1', 'page2','page3'],
    current:0,
    tempItem:new Array(9)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    tabbar.tabbar("tabBar", 0, this);
    // 绑定跳转事件
    this.redirect = tabbar.redirect;
    modal.modal('???',this);
  },
  //向左翻页按钮
  pageChange: function(e) {
    var isRight = Number(e.currentTarget.dataset.direction);
    if(isRight){
      var pageLH = this.data.pageItems.length - 1;
      var next = this.data.current < pageLH ? this.data.current + 1 : pageLH;
      this.setData({ current: next})
    }
    else{
      var prev = this.data.current > 0 ? this.data.current - 1 : 0;
      this.setData({ current: prev })
    }
    console.log(this.data.current);
  },
  // 触摸翻页事件
  slided:function(e){
    // console.log(e);
    var current=e.detail.current;
    this.setData({ current: current });
    // console.log(this.data.current);
  },
  nav:function(){
    wx.navigateTo({
      url: '../../pages/index1/index1',
      success:function(){
        console.log('s');
      },
      fail:function(){
        console.log();
      }
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})