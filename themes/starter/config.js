/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_BRAND_TITLE: 'Our Partners',
  STARTER_BRAND_TEXT_1: 'Partnering with Industry Leaders to Drive Innovation',
  STARTER_BRAND_TEXT_2: 'Building a New Ecosystem with Industry Leaders',
  STARTER_HERO_TITLE_1: 'Sprunki Incredibox: Your Sprunky Musical Playground', // 英雄区文字
  STARTER_HERO_TITLE_2: 'Design, Blend, and Bounce to Your Own Spunky Rhythms!', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Get', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: 'Contact', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/sign-in',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  // 特性区块
  STARTER_FEATURE_TITLE: 'Features',
  STARTER_FEATURE_TEXT_1: 'Key Features of Super Factory', // 特性
  STARTER_FEATURE_TEXT_2: 'Super Factory helps you build and maintain your website effortlessly, amplifying your brand value.', // 特性

  STARTER_FEATURE_1_TITLE_1: 'Free and Open Source', // 特性1
  STARTER_FEATURE_1_TEXT_1: 'Project source code is fully open on Github under MIT license', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: 'Learn More', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'Multiple Themes', // 特性2
  STARTER_FEATURE_2_TEXT_1: 'Dozens of themes for different scenarios - there\'s always one for you', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: 'Learn More', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'Excellent Performance', // 特性3
  STARTER_FEATURE_3_TEXT_1: 'Built with NextJS for faster response and better SEO', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: 'Learn More', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'Easy Content Management', // 特性4
  STARTER_FEATURE_4_TEXT_1: 'Edit in Notion, automatically syncs to your website', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: 'Learn More', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_TITLE: 'A Lightweight Website Solution',
  STARTER_ABOUT_TEXT: 'Super Factory helps non-technical users build their websites quickly and at minimal cost, enabling you to effectively communicate your products and stories to the world. <br /> <br /> Powered by Notion\'s robust note-taking and Vercel\'s simple hosting platform.',
  STARTER_ABOUT_BUTTON_TEXT: 'Learn More',
  STARTER_ABOUT_TIPS_1: '7000+',
  STARTER_ABOUT_TIPS_2: 'Websites',
  STARTER_ABOUT_TIPS_3: 'Running Online',

  // 首页价格区块
  STARTER_PRICING_TITLE: 'Pricing',
  STARTER_PRICING_TEXT_1: 'Great Pricing Plans',
  STARTER_PRICING_TEXT_2: 'We offer flexible payment plans to suit your needs. (This is just a demo of subscription features, please do not purchase!)',

  STARTER_PRICING_1_TITLE: 'Starter',
  STARTER_PRICING_1_PRICE_PERIOD: 'per month',
  STARTER_PRICING_1_HEADER: 'Features',
  STARTER_PRICING_1_BUTTON_TEXT: 'Buy Now',

  STARTER_PRICING_2_TAG: 'Popular',
  STARTER_PRICING_2_TITLE: 'Basic',
  STARTER_PRICING_2_PRICE_PERIOD: 'per month',
  STARTER_PRICING_2_HEADER: 'Features',
  STARTER_PRICING_2_BUTTON_TEXT: 'Buy Now',

  STARTER_PRICING_3_TITLE: 'Premium',
  STARTER_PRICING_3_PRICE_PERIOD: 'per month',
  STARTER_PRICING_3_HEADER: 'Features',
  STARTER_PRICING_3_BUTTON_TEXT: 'Buy Now',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_TITLE: 'Testimonials',
  STARTER_TESTIMONIALS_TEXT_1: 'What Our Users Say',
  STARTER_TESTIMONIALS_TEXT_2: 'Thousands of users have chosen Super Factory to build their websites. Through our documentation, community support, and technical consulting, they\'ve successfully launched their sites.',

  //   FAQ 常见问题模块
  STARTER_FAQ_TITLE: 'FAQ',
  STARTER_FAQ_TEXT_1: 'Have Questions? Look Here',
  STARTER_FAQ_TEXT_2: 'We\'ve collected common user questions',

  STARTER_FAQ_1_QUESTION: 'Is there documentation available?',
  STARTER_FAQ_1_ANSWER: 'We provide <a href="https://docs.tangly1024.com/about" className="underline">documentation</a>, <a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">tutorial videos</a>, and a <a href="https://docs.tangly1024.com/article/chat-community" className="underline">community</a> to help you build and deploy your website',

  STARTER_FAQ_2_QUESTION: 'How do I write articles after deployment?',
  STARTER_FAQ_2_ANSWER: 'You can add or modify Post-type pages in Notion, and the content will be synced to your site in real-time. See <a className="underline" href="https://docs.tangly1024.com/article/start-to-write">Documentation</a> for details',

  STARTER_FAQ_3_QUESTION: 'Deployment or update failed?',
  STARTER_FAQ_3_ANSWER: 'Usually caused by configuration errors. Please check your settings or retry the steps. You can also find error logs in Vercel\'s Deployments section and seek community help',

  STARTER_FAQ_4_QUESTION: 'Content not syncing in real-time?',
  STARTER_FAQ_4_ANSWER: 'First check if your Notion_Page_ID is correctly configured. Also, each page has its own cache - refreshing the page should resolve the issue',

  // 团队成员区块
  STARTER_TEAM_TITLE: 'Our Team',
  STARTER_TEAM_TEXT_1: 'Our Development Team',
  STARTER_TEAM_TEXT_2: 'Super Factory is built through collaboration of many open-source technology enthusiasts. Thanks to every <a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">contributor</a>',

  STARTER_FOOTER_SLOGAN: 'Creating digital experiences for brands and companies through technology.',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'About Us',
      LINK_GROUP: [
        { TITLE: 'Homepage', URL: '/#home' },
        { TITLE: 'Documentation', URL: 'https://docs.tangly1024.com/about' },
        { TITLE: 'Support', URL: 'https://docs.tangly1024.com/article/how-to-question' },
        { TITLE: 'Partnership', URL: 'https://docs.tangly1024.com/article/my-service' }
      ]
    },
    {
      TITLE: 'Features',
      LINK_GROUP: [
        { TITLE: 'Deployment Guide', URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next' },
        { TITLE: 'Update Guide', URL: 'https://docs.tangly1024.com/article/how-to-update-notionnext' },
        { TITLE: 'Latest Version', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    },
    {
      TITLE: 'Writing',
      LINK_GROUP: [
        { TITLE: 'Start Writing', URL: 'https://docs.tangly1024.com/article/start-to-write' },
        { TITLE: 'Keyboard Shortcuts', URL: 'https://docs.tangly1024.com/article/notion-short-key' },
        { TITLE: 'Using Notion in China', URL: 'https://docs.tangly1024.com/article/notion-faster' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest Posts',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Notice',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Terms of Service',

  // 404页面的提示语
  STARTER_404_TITLE: 'We can\'t seem to find the page you\'re looking for.',
  STARTER_404_TEXT: 'Sorry! The page you are looking for doesn\'t exist. It might have been moved or deleted.',
  STARTER_404_BACK: 'Back to Homepage',

  // 页面底部的行动呼吁模块
  STARTER_CTA_TITLE: 'What Are You Waiting For?',
  STARTER_CTA_TITLE_2: 'Get Started Now',
  STARTER_CTA_DESCRIOTN: 'Visit our documentation for detailed tutorials to help you build your site instantly',
  STARTER_CTA_BUTTON_TEXT: 'Get Started',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
