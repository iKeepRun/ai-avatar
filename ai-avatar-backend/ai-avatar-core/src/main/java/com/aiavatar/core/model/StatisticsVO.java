package com.aiavatar.core.model;

import lombok.Data;
import java.util.List;
import java.util.Map;

@Data
public class StatisticsVO {
    private Long totalUsers;
    private Long totalMembers;
    private Long totalGenerations;
    private Long dailyActiveUsers;
    private Map<String, Long> styleUsageStats;
    private List<DailyStatVO> dailyStats;
}

