package com.aiavatar.core.service.impl;

import com.aiavatar.core.service.StorageService;
import com.qcloud.cos.COSClient;
import com.qcloud.cos.ClientConfig;
import com.qcloud.cos.auth.BasicCOSCredentials;
import com.qcloud.cos.auth.COSCredentials;
import com.qcloud.cos.model.PutObjectResult;
import com.qcloud.cos.region.Region;
import com.qcloud.cos.model.ObjectMetadata;
import com.qcloud.cos.model.PutObjectRequest;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
@Data
@Slf4j
public class COSStorageServiceImpl implements StorageService {
    @Autowired
    private COSClient cosClient;

    private final String bucketName="avatar-1310623687";

    @Override
    public String uploadFile(MultipartFile file, String key) {
        String region = "ap-shanghai";
        // 生成唯一的文件名
        String fileName = UUID.randomUUID() + getFileExtension(file.getOriginalFilename());
        String objectKey = key + "/" + fileName;

        try {
            // 设置文件元数据
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType(file.getContentType());
            metadata.setContentLength(file.getSize());

            // 上传文件
            PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, objectKey, file.getInputStream(), metadata);
            cosClient.putObject(putObjectRequest);

            // 生成文件访问URL
            String url = String.format("https://%s.cos.%s.myqcloud.com/%s", bucketName, region, objectKey);
            log.info("文件上传成功，访问URL: {}", url);

            return url;
        } catch (IOException e) {
            log.error("文件上传失败", e);
            throw new RuntimeException("文件上传失败: " + e.getMessage());
        }
    }

    private String getFileExtension(String fileName) {
        if (fileName == null) return "";
        int lastDotIndex = fileName.lastIndexOf(".");
        return lastDotIndex == -1 ? "" : fileName.substring(lastDotIndex);
    }
} 