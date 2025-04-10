-- 用户反馈表
CREATE TABLE `feedback` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `type` tinyint(4) NOT NULL COMMENT '反馈类型：1-功能建议，2-问题反馈，3-其他',
  `content` text NOT NULL COMMENT '反馈内容',
  `contact_info` varchar(255) DEFAULT NULL COMMENT '联系方式',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态：0-未处理，1-已处理',
  `reply_content` text DEFAULT NULL COMMENT '回复内容',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户反馈表'; 