package com.aiavatar.core.service;

import com.aiavatar.common.model.AvatarGenerationTask;
import com.aiavatar.common.model.Result;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

public interface AvatarService {
    /**
     * 创建头像生成任务
     */
    Result<String> createGenerationTask(String url,String styleType,Long userId);

    /**
     * 获取生成结果
     */
//    Result<String> getGenerationResult(String taskId);

    /**
     * 更新风格设置
     */
    Result<Void> updateStyle(String taskId, String styleType);

    /**
     * 更新调整参数
     */
    Result<Void> updateParams(String taskId, String params);
    Long currentUser(HttpServletRequest request);
} 