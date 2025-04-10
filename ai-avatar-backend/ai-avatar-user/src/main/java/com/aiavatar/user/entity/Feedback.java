package com.aiavatar.user.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@TableName("t_feedback")
public class Feedback {
    @TableId(type = IdType.AUTO)
    private Long id;
    
    private Long userId;
    
    private String content;
    
    private String contactInfo;
    
    private String type; // BUG-问题反馈 FEATURE-功能建议 OTHER-其他
    
    private String status; // PENDING-待处理 PROCESSING-处理中 RESOLVED-已解决
    
    private String replyContent;
    
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdTime;
    
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedTime;
} 