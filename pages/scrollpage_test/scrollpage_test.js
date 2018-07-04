var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'yellow',
    scrollTop: 0,
    scrollLeft:0
  },
  //   向左翻页按钮
  // toLeft:function(){
  //   var index= this.data.pageItems.findIndex(this.data.currenPage);
  //   var length = this.data.pageItems.length;
  //   index++;
  //   var firstPage = this.data.pageItems[0];
  //   if (index == length) this.setData({ currentPage: firstPage});
  // },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})