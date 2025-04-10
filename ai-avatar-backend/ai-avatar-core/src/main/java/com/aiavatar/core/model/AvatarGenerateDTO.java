package com.aiavatar.core.model;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

/**
 * 头像生成请求DTO
 */
@Data
public class AvatarGenerateDTO {
    /**
     * 上传的文件
     */
    private MultipartFile file;

    /**
     * 用户ID
     */
    private Long userId;

    /**
     * 风格类型
     */
    private String styleType;
}