package com.aiavatar.core.model;

import lombok.Data;

@Data
public class ShareDTO {
    private Long avatarId;
    private String shareType; // WECHAT-微信好友 TIMELINE-朋友圈
    private String shareChannel;
} 