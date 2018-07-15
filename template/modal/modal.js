var modal=function(that){
  that.setData({showModal:false});
}
var closeModal = function () {
  this.setData({ showModal: false });
  console.log('?')
}
//防止弹窗后面的页面滚动
var preventTouchMove=function(){
  
}
module.exports={
  modal: modal,
  closeModal: closeModal
};