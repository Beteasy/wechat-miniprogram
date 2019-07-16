var newsData = [
  {
    "newsId":0,
    "userHead":"../images/userHead.jpg",
    "userName":"MR.JOHN",
    "publishDate": "publishDate",
    "newsTitle":"消息的标题",
    "newsImage":"../images/newsImage.jpg",
    "newsContent":"​网页开发渲染线程和脚本线程是互斥的，这也是为什么长时间的脚本运行可能会导致页面失去响应，而在小程序中，二者是分开的，分别运行在不同的线程中。网页开发者可以使用到各种浏览器暴露出来的 DOM API，进行 DOM 选中和操作。而如上文所述，小程序的逻辑层和渲染层是分开的，逻辑层运行在 JSCore 中，并没有一个完整浏览器对象，因而缺少相关的DOM API和BOM API。这一区别导致了前端开发非常熟悉的一些库，例如 jQuery、 Zepto 等，在小程序中是无法运行的。同时 JSCore 的环境同 NodeJS 环境也是不尽相同，所以一些 NPM 的包在小程序中也是无法运行的",
    "newsPreview":"网页开发渲染线程和脚本线程是互斥的"
  },
  {
    "newsId": 1,
    "userHead": "../images/userHead.jpg",
    "userName": "MR.JOHN",
    "publishDate": "publishDate",
    "newsTitle": "消息的标题",
    "newsImage": "../images/newsImage.jpg",
    "newsContent": "​JS-SDK 解决了移动网页能力不足的问题，通过暴露微信的接口使得 Web 开发者能够拥有更多的能力，然而在更多的能力之外，JS-SDK 的模式并没有解决使用移动网页遇到的体验不良的问题。用户在访问网页的时候，在浏览器开始显示之前都会有一个的白屏过程，在移动端，受限于设备性能和网络速度，白屏会更加明显。我们团队把很多技术精力放置在如何帮助平台上的Web开发者解决这个问题。因此我们设计了一个 JS-SDK 的增强版本，其中有一个重要的功能，称之为“微信 Web 资源离线存储",
    "newsPreview": "JS-SDK 解决了移动网页能力不足的问题"
  },
  
]

// 导出模板
module.exports = {
  newsData:newsData
}