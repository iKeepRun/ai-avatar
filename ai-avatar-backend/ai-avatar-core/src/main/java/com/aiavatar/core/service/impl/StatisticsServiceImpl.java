//package com.aiavatar.core.service.impl;
//
//import com.aiavatar.common.model.Result;
//import com.aiavatar.core.mapper.StatisticsMapper;
//import com.aiavatar.core.model.StatisticsVO;
//import com.aiavatar.core.service.StatisticsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.cache.annotation.Cacheable;
//import java.time.LocalDate;
//
//@Service
//public class StatisticsServiceImpl implements StatisticsService {
//
//    @Autowired
//    private StatisticsMapper statisticsMapper;
//
//    @Override
//    @Cacheable(value = "dashboard_stats", key = "#root.methodName", unless = "#result.code != 200")
//    public Result<StatisticsVO> getDashboardStats() {
//        try {
//            StatisticsVO vo = new StatisticsVO();
//            vo.setTotalUsers(statisticsMapper.countTotalUsers());
//            vo.setTotalMembers(statisticsMapper.countTotalMembers());
//            vo.setTotalGenerations(statisticsMapper.countTotalGenerations());
//            vo.setDailyActiveUsers(statisticsMapper.countDailyActiveUsers());
//            vo.setStyleUsageStats(statisticsMapper.getStyleUsageStats());
//            vo.setDailyStats(statisticsMapper.getDailyStats(LocalDate.now().minusDays(7), LocalDate.now()));
//
//            return Result.success(vo);
//        } catch (Exception e) {
//            return Result.failure("获取统计数据失败");
//        }
//    }
//
//    @Override
//    public Result<StatisticsVO> getDateRangeStats(LocalDate startDate, LocalDate endDate) {
//        // 实现日期范围统计
//        return null;
//    }
//}