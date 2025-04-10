package com.aiavatar.core.service;

import com.aiavatar.common.model.Result;
import com.aiavatar.core.model.HistoryVO;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

public interface HistoryService {
    Result<Page<HistoryVO>> getHistoryList(Long userId, Integer pageNum, Integer pageSize);
    Result<HistoryVO> getHistoryDetail(Long historyId);
    Result<Boolean> deleteHistory(Long historyId, Long userId);
} 