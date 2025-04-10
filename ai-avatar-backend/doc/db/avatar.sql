-- 头像生成记录表
CREATE TABLE `avatar` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `image_id` varchar(64) NOT NULL COMMENT '图片ID',
  `original_url` varchar(255) NOT NULL COMMENT '原始图片URL',
  `style_id` bigint(20) NOT NULL COMMENT '风格ID',
  `parameters` json DEFAULT NULL COMMENT '生成参数',
  `result_url` varchar(255) DEFAULT NULL COMMENT '生成结果URL',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态：0-生成中，1-成功，2-失败',
  `error_message` varchar(255) DEFAULT NULL COMMENT '错误信息',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_image_id` (`image_id`),
  KEY `idx_create_time` (`create_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='头像生成记录表'; 