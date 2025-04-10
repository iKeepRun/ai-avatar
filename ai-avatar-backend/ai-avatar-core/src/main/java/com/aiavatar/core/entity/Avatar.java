package com.aiavatar.core.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 头像生成记录实体类
 */
@Data
@TableName("avatar")
public class Avatar implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 主键ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 用户ID
     */
    private Long userId;

    /**
     * 图片ID
     */
    private String imageId;

    /**
     * 原始图片URL
     */
    private String originalUrl;

    /**
     * 风格ID
     */
    private Long styleId;

    /**
     * 生成参数，JSON格式
     */
    private String parameters;

    /**
     * 结果图片URL
     */
    private String resultUrl;

    /**
     * 状态：0-生成中，1-成功，2-失败
     */
    private Integer status;

    /**
     * 错误信息
     */
    private String errorMessage;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    private LocalDateTime updateTime;
}