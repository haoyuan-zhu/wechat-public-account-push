/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx80703f3fb04b42fa',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '47fe9a2c91a36c137e58c71f7d1358bf',

  PROVINCE: '湖北',
  CITY: '武汉',

  USERS: [
    {
      // 想要发送的人的名字
      name: '胡唯一小朋友',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oTImk6o03c8hEztW-dd4CDAFg2s8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'EJGSqPFbIZrn1lc8m0xjXlkVvyc2k0opF_tAeyTmy94',
     
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '胡唯一小朋友', year: '1995', date: '09-22',
        },
      
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '08-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-10-21' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'pURaZ75OpINsRIQqJnIuJNOChSvWQWPvJBsluhR6Grk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oTImk6o03c8hEztW-dd4CDAFg2s8',
    }
  ],

}

module.exports = USER_CONFIG

