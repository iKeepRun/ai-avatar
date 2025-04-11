package com.aiavatar.core.service.impl;

import com.aiavatar.common.model.AvatarGenerationTask;
import com.aiavatar.common.model.Result;
import com.aiavatar.core.service.AvatarService;
import com.aiavatar.core.service.StorageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@Slf4j
public class AvatarServiceImpl implements AvatarService {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private StorageService storageService;

    @Override
    public Result<String> createGenerationTask(MultipartFile image, String styleType, Long userId) {
        try {
            // 1. 上传原始图片
            String imageUrl = storageService.uploadFile(image,
                String.format("original/%s", userId));

            // 2. 创建生成任务
            AvatarGenerationTask task = new AvatarGenerationTask();
            task.setUserId(userId);
            task.setOriginalImageUrl(imageUrl);
            task.setStyleType(styleType);

            // 3. 发送到消息队列
            rabbitTemplate.convertAndSend("avatar.exchange", "avatar.generation", task);

            return Result.success(task.getTaskId());
        } catch (Exception e) {
            log.error("创建头像生成任务失败", e);
            return Result.failure("创建任务失败");
        }
    }

    @Override
    public Result<String> getGenerationResult(String taskId) {
        return null;
    }

    @Override
    public Result<Void> updateStyle(String taskId, String styleType) {
        return null;
    }

    @Override
    public Result<Void> updateParams(String taskId, String params) {
        return null;
    }

    // ... 其他方法实现
}