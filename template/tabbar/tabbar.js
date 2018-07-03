//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/index1/index1",
      "iconPath": "/imgs/home_on.png",
      "selectedIconPath": "/imgs/home_on.png",
      "text": "首页GO"
    },
    {
      "current": 0,
      "pagePath": "/pages/index/index",
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
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}