package com.aiavatar.core.model;

import lombok.Data;
import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 历史记录视图对象
 */
@Data
public class HistoryVO implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 任务ID
     */
    private String taskId;

    /**
     * 原始图片URL
     */
    private String originalUrl;

    /**
     * 生成结果URL
     */
    private String resultUrl;

    /**
     * 风格类型
     */
    private String styleType;

    /**
     * 生成状态：0-生成中，1-成功，2-失败
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
     * 错误信息
     */
    private String errorMessage;
}