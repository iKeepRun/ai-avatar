package com.aiavatar.core.controller;

import com.aiavatar.common.model.Result;
import com.aiavatar.core.model.HistoryVO;
import com.aiavatar.core.service.HistoryService;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/history")
public class HistoryController {

    @Autowired
    private HistoryService historyService;

    @GetMapping
    public Result<Page<HistoryVO>> getHistoryList(
            @RequestParam(defaultValue = "1") Integer pageNum,
            @RequestParam(defaultValue = "10") Integer pageSize) {
        Long userId = getCurrentUserId();
        return historyService.getHistoryList(userId, pageNum, pageSize);
    }

    @GetMapping("/{id}")
    public Result<HistoryVO> getHistoryDetail(@PathVariable Long id) {
        return historyService.getHistoryDetail(id);
    }

    @DeleteMapping("/{id}")
    public Result<Boolean> deleteHistory(@PathVariable Long id) {
        Long userId = getCurrentUserId();
        return historyService.deleteHistory(id, userId);
    }

    private Long getCurrentUserId() {
        // TODO: 从JWT token中获取用户ID
        return 1L;
    }
} 