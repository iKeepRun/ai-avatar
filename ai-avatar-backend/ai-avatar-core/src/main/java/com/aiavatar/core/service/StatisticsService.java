package com.aiavatar.core.service;

import com.aiavatar.common.model.Result;
import com.aiavatar.core.model.StatisticsVO;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

public interface StatisticsService {
    Result<StatisticsVO> getDashboardStats();
    Result<StatisticsVO> getDateRangeStats(LocalDate startDate, LocalDate endDate);
    Result<Map<String, Long>> getStyleUsageStats();
//    Result<List<DailyStatVO>> getDailyStats(LocalDate startDate, LocalDate endDate);
} 