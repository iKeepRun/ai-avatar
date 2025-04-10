//package com.aiavatar.user.controller;
//
//import com.aiavatar.common.model.Result;
//import com.aiavatar.user.model.FeedbackDTO;
//import com.aiavatar.user.model.FeedbackVO;
//import com.aiavatar.user.service.FeedbackService;
//import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/v1/feedback")
//public class FeedbackController {
//
//    @Autowired
//    private FeedbackService feedbackService;
//
//    @PostMapping
//    public Result<Long> submitFeedback(@RequestBody FeedbackDTO feedbackDTO) {
//        feedbackDTO.setUserId(getCurrentUserId());
//        return feedbackService.submitFeedback(feedbackDTO);
//    }
//
//    @GetMapping
//    public Result<Page<FeedbackVO>> getFeedbacks(
//            @RequestParam(defaultValue = "1") Integer pageNum,
//            @RequestParam(defaultValue = "10") Integer pageSize) {
//        return feedbackService.getUserFeedbacks(getCurrentUserId(), pageNum, pageSize);
//    }
//
//    private Long getCurrentUserId() {
//        // TODO: 从JWT token中获取用户ID
//        return 1L;
//    }
//}