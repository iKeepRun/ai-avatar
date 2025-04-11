package com.aiavatar.core.service;

import org.springframework.web.multipart.MultipartFile;

/**
 * 文件存储服务接口
 */
public interface StorageService {
    /**
     * 上传文件
     * @param file 文件
     * @param key 存储路径
     * @return 文件访问URL
     */
    String uploadFile(MultipartFile file, String key);
} 