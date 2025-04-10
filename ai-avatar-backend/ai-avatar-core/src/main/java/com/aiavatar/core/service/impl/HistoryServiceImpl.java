package com.aiavatar.core.service.impl;

import com.aiavatar.common.model.Result;
import com.aiavatar.core.entity.Avatar;
import com.aiavatar.core.mapper.AvatarMapper;
import com.aiavatar.core.model.HistoryVO;
import com.aiavatar.core.service.HistoryService;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class HistoryServiceImpl implements HistoryService {

    @Autowired
    private AvatarMapper avatarMapper;

    @Override
    public Result<Page<HistoryVO>> getHistoryList(Long userId, Integer pageNum, Integer pageSize) {
        Page<Avatar> page = new Page<>(pageNum, pageSize);
        
        LambdaQueryWrapper<Avatar> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(Avatar::getUserId, userId)
               .orderByDesc(Avatar::getCreateTime);
        
        Page<Avatar> recordPage = avatarMapper.selectPage(page, wrapper);
        
        // 转换为VO
        Page<HistoryVO> voPage = new Page<>(pageNum, pageSize, recordPage.getTotal());
        voPage.setRecords(recordPage.getRecords().stream()
            .map(this::convertToVO)
            .collect(Collectors.toList()));
        
        return Result.success(voPage);
    }

    @Override
    public Result<HistoryVO> getHistoryDetail(Long historyId) {
        Avatar record = avatarMapper.selectById(historyId);
        if (record == null) {
            return Result.failure("记录不存在");
        }
        
        return Result.success(convertToVO(record));
    }

    @Override
    public Result<Boolean> deleteHistory(Long historyId, Long userId) {
        LambdaQueryWrapper<Avatar> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(Avatar::getId, historyId)
               .eq(Avatar::getUserId, userId);
        
        int count = avatarMapper.delete(wrapper);
        return Result.success(count > 0);
    }

    private HistoryVO convertToVO(Avatar avatar) {
        HistoryVO vo = new HistoryVO();
//        vo.setId(record.getId());
//        vo.setOriginalImageUrl(avatar.getOriginalImageUrl());
//        vo.setResultImageUrl(avatar.getResultImageUrl());
////        vo.setStyleType(avatar.getStyleId());
//        vo.setStatus(avatar.getStatus());
//        vo.setCreatedTime(avatar.getCreateTime());
        return vo;
    }
} 