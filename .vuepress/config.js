module.exports = {
  title: '分享文档',
  description: 'lan写的文档',
  themeConfig: {
  	nav: [
      { text: 'github', link: 'https://github.com/lanyanan' },
    ],
    sidebar:  [{
        title: '为何使用dva',
        collapsable: false,
        children: [
        	['/', 'original'],
          ['/modern', 'modern'],
          ['/feature', 'feature'],
        ]
      }
      ]
  }
}
