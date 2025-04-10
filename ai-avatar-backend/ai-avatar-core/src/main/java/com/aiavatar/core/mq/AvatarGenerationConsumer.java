//package com.aiavatar.core.mq;
//
//import com.aiavatar.common.model.AvatarGenerationTask;
//import com.aiavatar.core.service.AIService;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.amqp.rabbit.annotation.RabbitListener;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//@Component
//@Slf4j
//public class AvatarGenerationConsumer {
//
//    @Autowired
//    private AIService aiService;
//
//    @RabbitListener(queues = "avatar.generation.queue")
//    public void handleGenerationTask(AvatarGenerationTask task) {
//        try {
//            log.info("开始处理头像生成任务: {}", task.getTaskId());
//
//            // 调用AI服务生成头像
//            String resultUrl = aiService.generateAvatar(
//                task.getOriginalImageUrl(),
//                task.getStyleType(),
//                task.getErrorMessage()
//            );
//
//            // 更新任务状态
//            task.setStatus(1);
//            task.setResultImageUrl(resultUrl);
//
//            log.info("头像生成任务完成: {}", task.getTaskId());
//        } catch (Exception e) {
//            log.error("头像生成任务失败: {}", task.getTaskId(), e);
//            task.setStatus(2);
//            task.setErrorMessage(e.getMessage());
//        }
//    }
//}