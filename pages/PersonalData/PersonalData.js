Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  save(){
    wx.navigateBack({
      delta: 1
    })
  }
})