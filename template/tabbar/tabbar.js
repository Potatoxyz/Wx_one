//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/index/index",
      "iconPath": "/imgs/home_on.png",
      "selectedIconPath": "/imgs/home_on.png",
      "text": "首页GO"
    },
    {
      "current": 0,
      "pagePath": "#",
      "iconPath": "/imgs/list_on.png",
      "selectedIconPath": "/imgs/list_on.png",
      "text": "活动规则"

    },
    {
      "current": 0,
      "pagePath": "/pages/logs/logs",
      "iconPath": "/imgs/user_on.png",
      "selectedIconPath": "/imgs/user_on.png",
      "text": "个人中心"
    }
  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var  that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
  console.log(bindData);
}
var showModal = function () {
  this.setData({ showModal: true });
}
var redirect=function(e){
  console.log(e.currentTarget.dataset.url);
  var url = e.currentTarget.dataset.url;
  if(url!='#'){
    wx.navigateTo({
      url: url,
    })
  }
  else{
   this.showModal();
  }
}
module.exports = {
  tabbar: tabbarmain,
  redirect: redirect,
  showModal: showModal
}