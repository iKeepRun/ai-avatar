//package com.aiavatar.user.controller;
//
//import com.aiavatar.user.service.MemberService;
//import com.github.binarywang.wxpay.bean.notify.WxPayNotifyResponse;
//import com.github.binarywang.wxpay.bean.notify.WxPayOrderNotifyResult;
//import com.github.binarywang.wxpay.service.WxPayService;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/v1/payment")
//@Slf4j
//public class PaymentNotifyController {
//
//    @Autowired
//    private WxPayService wxPayService;
//
//    @Autowired
//    private MemberService memberService;
//
//    @PostMapping("/notify")
//    public String handlePaymentNotify(@RequestBody String xmlData) {
//        try {
//            WxPayOrderNotifyResult result = wxPayService.parseOrderNotifyResult(xmlData);
//
//            // 处理支付成功逻辑
//            if ("SUCCESS".equals(result.getResultCode())) {
//                String[] orderInfo = result.getOutTradeNo().split("_");
//                Long userId = Long.parseLong(orderInfo[0]);
//                Integer memberType = Integer.parseInt(orderInfo[1]);
//
//                // 更新会员状态
//                memberService.subscribe(new SubscribeDTO(userId, memberType));
//            }
//
//            return WxPayNotifyResponse.success("处理成功");
//        } catch (Exception e) {
//            log.error("处理支付回调失败", e);
//            return WxPayNotifyResponse.fail("处理失败");
//        }
//    }
//}