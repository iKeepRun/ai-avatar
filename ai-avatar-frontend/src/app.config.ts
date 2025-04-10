export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/style/index',
    'pages/edit/index',
    'pages/result/index',
    'pages/member/index',
    'pages/history/index',
    'pages/feedback/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'AI头像生成器',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#07c160',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/home.png',
        selectedIconPath: 'assets/images/home-active.png'
      },
      {
        pagePath: 'pages/history/index',
        text: '历史',
        iconPath: 'assets/images/history.png',
        selectedIconPath: 'assets/images/history-active.png'
      },
      {
        pagePath: 'pages/member/index',
        text: '会员',
        iconPath: 'assets/images/member.png',
        selectedIconPath: 'assets/images/member-active.png'
      }
    ]
  }
}) 