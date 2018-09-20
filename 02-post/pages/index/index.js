Page({
  tapMotto: function () {
    /*
    wx.navigateTo({
      url: '../article/article',
    })
    */
    wx.redirectTo({
      url: '../article/article',
    })
    
    // console.log('tadie')
  },
  /*
  btn:function(){
    console.log('bind会冒泡,catch不会冒泡')
  }
  */
})
