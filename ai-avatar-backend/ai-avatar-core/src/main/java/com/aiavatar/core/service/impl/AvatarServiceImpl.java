package com.aiavatar.core.service.impl;

import cn.hutool.core.util.StrUtil;
import com.aiavatar.common.model.AvatarGenerationTask;
import com.aiavatar.common.model.Result;
import com.aiavatar.common.util.RedisUtil;
import com.aiavatar.core.service.AvatarService;
import com.aiavatar.core.service.StorageService;
import com.coze.openapi.client.chat.CreateChatReq;
import com.coze.openapi.client.chat.CreateChatResp;
import com.coze.openapi.client.chat.model.Chat;
import com.coze.openapi.client.connversations.message.model.Message;
import com.coze.openapi.service.service.CozeAPI;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.Collections;
import java.util.UUID;

@Service
@Slf4j
public class AvatarServiceImpl implements AvatarService {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private RedisUtil redisUtil;

    @Autowired
    private CozeAPI cozeAPI;

    @Override
    public Result<String> createGenerationTask(String url, String styleType, Long userId) {
        try {
            // 处理头像生成逻辑
            // 1. 创建生成任务
            AvatarGenerationTask task = new AvatarGenerationTask();
            //生成请求
            CreateChatReq req =
                    CreateChatReq.builder()
                            .botID("7493360720004907049")
                            .userID(String.valueOf(task.getUserId()))
                            .messages(Collections.singletonList(Message.buildUserQuestionText(url + "\n" + styleType)))
                            .build();

            //发送请求
            CreateChatResp createChatResp = cozeAPI.chat().create(req);

            Chat chat = createChatResp.getChat();
            task.setChatId(chat.getID());
            task.setConversationId(chat.getConversationID());
            task.setUserId(userId);
            task.setOriginalImageUrl(url);
            task.setStyleType(styleType);
            // 生成唯一的 taskId
            String taskId = UUID.randomUUID().toString();
            task.setTaskId(taskId);
            // 3. 发送到消息队列
            rabbitTemplate.convertAndSend("avatar.generation.exchange", "avatar.generation", task);

            return Result.success(task.getTaskId());
        } catch (Exception e) {
            log.error("创建头像生成任务失败", e);
            return Result.failure("创建任务失败");
        }
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
    @Override
    public Long currentUser(HttpServletRequest request) {
        // TODO: 从JWT token中获取用户ID
        // TODO: 从JWT token中获取用户ID
        if (StrUtil.isBlank(request.getHeader("Authorization"))) {
            throw new RuntimeException("未登录");
        }
        String userId = (String) redisUtil.get(request.getHeader("Authorization").substring(7));
        return Long.valueOf(userId);
    }
}