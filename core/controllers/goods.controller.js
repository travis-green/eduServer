/**
 * 获取商品详情
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.current = function (req, res) {
    console.log(req.query)
	if(req.query.cateId = '1'){
        console.log('1123');
        let data =  [{
          goods_now_price: "399",
          goods_name: '[年终钜惠]不限类别不限次数全国通用年卡',
          goods_sale_num: '112310',
          grade_limit: "不限年龄",
          goodstype: "空间感|推理力|坚韧心",
          info_img: '/asset/img/mineheadbg2x.png',
        },
        {
          goods_now_price: "1",
          info_img: '/asset/img/mineheadbg2x.png',
          goods_name: '经典对决经典对决经典对决经典对决经典对决经典对决经典对决经典对决经典对决',
          goodstype: "思维方式|性格习惯|动手能力",
          grade_limit: "3-5年级",
          goods_sale_num: '9910',
        },
        {
          goods_now_price: "1",
          info_img: '/asset/img/mineheadbg2x.png',
          goods_name: '神奇实验',
          grade_limit: "3-5年级",
          goodstype: "思维方式|性格习惯|动手能力",
          goods_sale_num: '40',
        },
        {
          goods_now_price: "1",
          info_img: '/asset/img/mineheadbg2x.png',
          goods_name: '超脑PK',
          grade_limit: "3-5年级",
          goodstype: "思维方式|性格习惯|动手能力",
          goods_sale_num: '610',
        },
        {
          goods_now_price: "1",
          info_img: '/asset/img/mineheadbg2x.png',
          goods_name: '能演善辩',
          grade_limit: "3-5年级",
          goodstype: "思维方式|性格习惯|动手能力",
          goods_sale_num: '210',
        },
        {
          goods_now_price: "1",
          info_img: '/asset/img/mineheadbg2x.png',
          goods_name: '英XXX',
          grade_limit: "3-5年级",
          goodstype: "思维方式|性格习惯|动手能力",
          goods_sale_num: '1330',
        }]
        res.json({
            code:0,
            msg:'ok',
            data:data
          })
      } else {
          console.log('3344');
        let data =  [{
          goods_now_price: "111",
          goods_name: '[年终钜惠]年卡年卡年卡',
          goods_sale_num: '112310',
          grade_limit: "不限年龄",
          goodstype: "空间感|推理力|坚韧心",
          info_img: '/asset/img/mineheadbg2x.png',
        },
        {
          goods_now_price: "1411114",
          info_img: '/asset/img/mineheadbg2x.png',
          goods_name: '经典对决经典对决经典对决经典对决经典对决经典对决经典对决经典对决经典对决',
          goodstype: "思维方式|性格习惯|动手能力",
          grade_limit: "3-5年级",
          goods_sale_num: '9910',
        }]
        res.json({
          code:0,
          msg:'ok',
          data:data
        })
      }
};
