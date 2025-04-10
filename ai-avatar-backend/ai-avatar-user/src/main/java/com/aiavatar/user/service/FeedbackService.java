//package com.aiavatar.user.service;
//
//import com.aiavatar.common.model.Result;
//import com.aiavatar.user.model.FeedbackDTO;
//import com.aiavatar.user.model.FeedbackVO;
//import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
//
//public interface FeedbackService {
//    Result<Long> submitFeedback(FeedbackDTO feedbackDTO);
//    Result<Page<FeedbackVO>> getUserFeedbacks(Long userId, Integer pageNum, Integer pageSize);
//    Result<Boolean> updateFeedbackStatus(Long feedbackId, String status);
//    Result<Boolean> replyFeedback(Long feedbackId, String replyContent);
//}