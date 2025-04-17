package com.aiavatar.core.controller;

import cn.hutool.json.JSONUtil;
import com.aiavatar.common.model.AvatarGenerationTask;
import com.aiavatar.common.model.Result;
import com.aiavatar.core.service.AvatarService;
import com.aiavatar.common.util.RedisUtil;
import com.aiavatar.core.service.StorageService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/v1/avatars")
@Api(tags = "头像生成接口")
@Slf4j
public class AvatarController {
    @Autowired
    private RedisUtil redisUtil;
    @Autowired
    private AvatarService avatarService;
    @Autowired
    private StorageService storageService;
    @ApiOperation("上传头像")
    @PostMapping("/upload")
    public Result<String> uploadAvatar(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        Long currentUserId = getCurrentUserId(request);
        return Result.success(storageService.uploadFile(file, String.format("original/%s", currentUserId)));

    }

    @PostMapping("/generate")
    @ApiOperation("创建头像生成任务")
    public Result<String> generateAvatar(@RequestParam("url") String url,
                                         @RequestParam("styleType") String styleType, HttpServletRequest request) {
        Long currentUserId = getCurrentUserId(request);
        if (currentUserId == null) {
            return Result.failure("用户未登录");
        }

        return avatarService.createGenerationTask(url, styleType, currentUserId);
    }

    @GetMapping("/result/{taskId}")
    @ApiOperation("获取生成结果")
    public Result<AvatarGenerationTask> getGenerateResult(@PathVariable String taskId) {
        String o = (String) redisUtil.get(taskId);
        AvatarGenerationTask task=new AvatarGenerationTask();
        if (o != null) {
           task= JSONUtil.toBean(o,AvatarGenerationTask.class);
            return Result.success(task);
        }
        return Result.success(task);
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
        return avatarService.currentUser(request);
    }

}