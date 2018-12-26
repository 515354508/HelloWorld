Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:[{
      name:'全部',
      number:6
    },{
      name:'待付款',
      number:1
    },{
      name:'待开始',
      number:3
    },{
      name:'使用中',
      number:0
    },{
      name:'已完成',
      number:2
    }],
    current:0,

    state2:[{
      srr: "../../assets/avatar.png",
      title:'拔刀道',
      right:'待付款',
      date:'2018-09-10\t18:00-19:00',
      stress:'科技园\t龙珠四路金谷创业园F栋'
    },{
      srr: "../../assets/avatar.png",
      title:'白鹿尾舞蹈工作室',
      right:'待开始',
      date:'2018-09-10\t18:00-19:00',
      stress:'科技园\t龙珠四路金谷创业园F栋'
    },{
      srr: "../../assets/avatar.png",
      title:'攀岩',
      right:'使用中',
      date:'2018-09-10\t18:00-19:00',
      stress:'科技园\t龙珠四路金谷创业园F栋'
    },{
      srr: "../../assets/avatar.png",
      title:'美国主题馆',
      right:'已完成',
      date:'2018-09-10\t18:00-19:00',
      stress:'科技园\t龙珠四路金谷创业园F栋'
    }],
  },

  switchState(e) {
    console.log(e)
    this.setData({
      current: e.currentTarget.dataset.list
    })
  }
})