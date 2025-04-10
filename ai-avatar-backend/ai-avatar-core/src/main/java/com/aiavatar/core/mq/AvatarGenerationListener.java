package com.aiavatar.core.mq;

import com.aiavatar.core.service.AvatarService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class AvatarGenerationListener {

    @Autowired
    private AvatarService avatarService;

    @RabbitListener(queues = "avatar.generation.queue")
    public void handleAvatarGeneration(String taskId) {
        log.info("接收到头像生成任务: {}", taskId);
        try {
            // 处理头像生成逻辑
            // avatarService.processGeneration(taskId);
        } catch (Exception e) {
            log.error("处理头像生成任务失败: {}", taskId, e);
        }
    }
}