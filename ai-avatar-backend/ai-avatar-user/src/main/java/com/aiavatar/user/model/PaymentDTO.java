package com.aiavatar.user.model;

import lombok.Data;

@Data
public class PaymentDTO {
    private Long userId;
    private Integer memberType; // 1-月度会员 2-年度会员
    private String paymentType; // WECHAT-微信支付
    private Integer amount;
} 