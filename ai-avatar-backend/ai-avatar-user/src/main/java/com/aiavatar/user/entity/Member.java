package com.aiavatar.user.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@TableName("t_member")
public class Member {
    @TableId(type = IdType.AUTO)
    private Long id;
    
    private Long userId;
    
    private Integer memberType; // 1-月度会员 2-年度会员
    
    private LocalDateTime expireTime;
    
    private Integer status; // 0-未激活 1-正常 2-已过期
    
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdTime;
    
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedTime;
} 