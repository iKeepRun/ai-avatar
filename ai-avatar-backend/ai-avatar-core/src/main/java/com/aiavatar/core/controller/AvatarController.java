package com.aiavatar.core.controller;

import com.aiavatar.common.model.Result;
import com.aiavatar.core.service.AvatarService;
import com.aiavatar.common.util.RedisUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/v1/avatars")
@Api(tags = "头像生成接口")
@Slf4j
public class AvatarController {
    @Autowired
    private RedisUtil redisUtil;
    @Autowired
    private AvatarService avatarService;

    @PostMapping
    @ApiOperation("创建头像生成任务")
    public Result<String> generateAvatar(@RequestParam("file") MultipartFile file,
                                         @RequestParam(required = false) String styleType,HttpServletRequest request) {
        Long currentUserId = getCurrentUserId(request);
        if (currentUserId == null) {
            return Result.failure("用户未登录");
        }

        return avatarService.createGenerationTask(file, styleType,currentUserId);
    }

    @GetMapping("/{taskId}")
    @ApiOperation("获取生成结果")
    public Result<String> getGenerateResult(@PathVariable String taskId) {
        return avatarService.getGenerationResult(taskId);
    }

    @PutMapping("/{taskId}/style")
    @ApiOperation("更新风格设置")
    public Result<Void> updateStyle(
            @PathVariable String taskId,
            @RequestParam String styleType
    ) {
        return avatarService.updateStyle(taskId, styleType);
    }

    private Long getCurrentUserId(HttpServletRequest request) {
        // TODO: 从JWT token中获取用户ID
        // TODO: 从JWT token中获取用户ID
        String  userId = (String) redisUtil.get(request.getHeader("Authorization").substring(7));
        return Long.valueOf(userId);
    }

}