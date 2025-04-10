package com.aiavatar.core.model;

import lombok.Data;
import java.io.Serializable;

/**
 * 分享结果视图对象
 */
@Data
public class ShareResultVO implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 分享ID
     */
    private String shareId;

    /**
     * 分享链接
     */
    private String shareUrl;

    /**
     * 分享图片URL
     */
    private String imageUrl;

    /**
     * 分享标题
     */
    private String title;

    /**
     * 分享描述
     */
    private String description;

    /**
     * 小程序路径
     */
    private String path;

    /**
     * 创建时间的时间戳
     */
    private Long createTime;

    /**
     * 二维码URL
     */
    private String qrCodeUrl;

    public ShareResultVO() {
    }

    public ShareResultVO(String shareId, String shareUrl, String imageUrl, String title, String description, String path) {
        this.shareId = shareId;
        this.shareUrl = shareUrl;
        this.imageUrl = imageUrl;
        this.title = title;
        this.description = description;
        this.path = path;
        this.createTime = System.currentTimeMillis();
    }
}