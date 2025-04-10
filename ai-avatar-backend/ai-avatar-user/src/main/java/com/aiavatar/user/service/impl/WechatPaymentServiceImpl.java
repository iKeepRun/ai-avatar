//package com.aiavatar.user.service.impl;
//
//import com.aiavatar.common.model.Result;
//import com.aiavatar.user.model.PaymentDTO;
//import com.aiavatar.user.model.PaymentResultVO;
//import com.aiavatar.user.service.PaymentService;
//import com.github.binarywang.wxpay.bean.request.WxPayUnifiedOrderRequest;
//import com.github.binarywang.wxpay.service.WxPayService;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//@Slf4j
//public class WechatPaymentServiceImpl implements PaymentService {
//
//    @Autowired
//    private WxPayService wxPayService;
//
//    @Override
//    public Result<PaymentResultVO> createPayment(PaymentDTO paymentDTO) {
//        try {
//            WxPayUnifiedOrderRequest request = new WxPayUnifiedOrderRequest();
//            request.setBody("AI头像会员订阅");
//            request.setOutTradeNo(generateTradeNo(paymentDTO.getUserId()));
//            request.setTotalFee(paymentDTO.getAmount());
//            request.setTradeType("JSAPI");
//            request.setOpenid(getUserOpenId(paymentDTO.getUserId()));
//
//            PaymentResultVO resultVO = new PaymentResultVO();
//            resultVO.setPaymentId(request.getOutTradeNo());
//            resultVO.setPayParams(wxPayService.createOrder(request));
//
//            return Result.success(resultVO);
//        } catch (Exception e) {
//            log.error("创建支付订单失败", e);
//            return Result.failure("创建支付订单失败");
//        }
//    }
//
//    @Override
//    public Result<Boolean> verifyPayment(String paymentId) {
//        try {
//            return Result.success(wxPayService.queryOrder(paymentId).getTradeState().equals("SUCCESS"));
//        } catch (Exception e) {
//            log.error("验证支付状态失败", e);
//            return Result.failure("验证支付状态失败");
//        }
//    }
//
//    @Override
//    public Result<PaymentResultVO> queryPaymentStatus(String paymentId) {
//        try {
//            PaymentResultVO resultVO = new PaymentResultVO();
//            resultVO.setPaymentId(paymentId);
//            resultVO.setStatus(wxPayService.queryOrder(paymentId).getTradeState());
//            return Result.success(resultVO);
//        } catch (Exception e) {
//            log.error("查询支付状态失败", e);
//            return Result.failure("查询支付状态失败");
//        }
//    }
//
//    private String generateTradeNo(Long userId) {
//        return String.format("PAY%d%d", userId, System.currentTimeMillis());
//    }
//
//    private String getUserOpenId(Long userId) {
//        // TODO: 从用户系统获取openId
//        return "mock-open-id";
//    }
//}