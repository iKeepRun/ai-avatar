package com.aiavatar.common.model;

import lombok.Data;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class AvatarGenerationTask implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 任务ID
     */
    private String taskId;

    /**
     * 用户ID
     */
    private Long userId;

    /**
     * 原始图片URL
     */
    private String originalImageUrl;

    /**
     * 风格类型
     */
    private String styleType;

    /**
     * 结果图片URL
     */
    private String resultImageUrl;

    /**
     * 任务状态：0-处理中，1-已完成，2-失败
     */
    private Integer status;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;

    /**
     * 完成时间
     */
    private LocalDateTime completeTime;

    /**
     * 错误消息
     */
    private String errorMessage;

    private String chatId;

    private String conversationId;
}