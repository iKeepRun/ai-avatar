 -- 创建数据库
 CREATE DATABASE IF NOT EXISTS ai_avatar;

 -- 使用数据库
 USE ai_avatar;

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

-- 会员表
CREATE TABLE `member` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `member_type` tinyint(4) NOT NULL COMMENT '会员类型：1-月度会员，2-年度会员',
  `start_time` datetime NOT NULL COMMENT '开始时间',
  `end_time` datetime NOT NULL COMMENT '结束时间',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态：0-已过期，1-有效',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_end_time` (`end_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='会员表'; 

-- 风格模板表
CREATE TABLE `style` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `name` varchar(64) NOT NULL COMMENT '风格名称',
  `description` varchar(255) DEFAULT NULL COMMENT '风格描述',
  `preview_url` varchar(255) NOT NULL COMMENT '预览图URL',
  `is_vip` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否VIP专属：0-否，1-是',
  `sort_order` int(11) NOT NULL DEFAULT '0' COMMENT '排序顺序',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态：0-禁用，1-启用',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_sort_order` (`sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='风格模板表'; 

-- 用户表
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `openid` varchar(64) NOT NULL COMMENT '微信openid',
  `nickname` varchar(64) DEFAULT NULL COMMENT '昵称',
  `avatar_url` varchar(255) DEFAULT NULL COMMENT '头像URL',
  `gender` tinyint(4) DEFAULT NULL COMMENT '性别：0-未知，1-男，2-女',
  `country` varchar(64) DEFAULT NULL COMMENT '国家',
  `province` varchar(64) DEFAULT NULL COMMENT '省份',
  `city` varchar(64) DEFAULT NULL COMMENT '城市',
  `language` varchar(32) DEFAULT NULL COMMENT '语言',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_openid` (`openid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- 订单表
 CREATE TABLE IF NOT EXISTS `order` (
                                        `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
                                        `order_no` varchar(64) NOT NULL COMMENT '订单编号',
                                        `user_id` bigint(20) NOT NULL COMMENT '用户ID',
                                        `member_type` tinyint(4) NOT NULL COMMENT '会员类型：1-月度会员，2-年度会员',
                                        `amount` int(11) NOT NULL COMMENT '订单金额（分）',
                                        `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '订单状态：0-待支付，1-已支付，2-已取消，3-已退款',
                                        `pay_time` datetime DEFAULT NULL COMMENT '支付时间',
                                        `transaction_id` varchar(64) DEFAULT NULL COMMENT '微信支付交易ID',
                                        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
                                        `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
                                        PRIMARY KEY (`id`),
                                        UNIQUE KEY `uk_order_no` (`order_no`),
                                        KEY `idx_user_id` (`user_id`),
                                        KEY `idx_create_time` (`create_time`),
                                        KEY `idx_status` (`status`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='订单表';

-- 会员价格配置表
 CREATE TABLE IF NOT EXISTS `member_price` (
                                               `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
                                               `member_type` tinyint(4) NOT NULL COMMENT '会员类型：1-月度会员，2-年度会员',
                                               `price` int(11) NOT NULL COMMENT '价格（分）',
                                               `original_price` int(11) NOT NULL COMMENT '原价（分）',
                                               `description` varchar(255) DEFAULT NULL COMMENT '描述',
                                               `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态：0-禁用，1-启用',
                                               `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
                                               `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
                                               PRIMARY KEY (`id`),
                                               UNIQUE KEY `uk_member_type` (`member_type`),
                                               KEY `idx_status` (`status`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='会员价格配置表';
-- 用户表索引优化
ALTER TABLE `user` ADD INDEX `idx_create_time` (`create_time`);

-- 会员表索引优化
ALTER TABLE `member` ADD INDEX `idx_start_time` (`start_time`);
ALTER TABLE `member` ADD INDEX `idx_status` (`status`);

-- 头像生成记录表索引优化
ALTER TABLE `avatar` ADD INDEX `idx_status` (`status`);
ALTER TABLE `avatar` ADD INDEX `idx_style_id` (`style_id`);

-- 风格模板表索引优化
ALTER TABLE `style` ADD INDEX `idx_status` (`status`);
ALTER TABLE `style` ADD INDEX `idx_is_vip` (`is_vip`);

-- 用户反馈表索引优化
ALTER TABLE `feedback` ADD INDEX `idx_type` (`type`);
ALTER TABLE `feedback` ADD INDEX `idx_create_time` (`create_time`); 


-- 初始化风格模板数据
INSERT INTO `style` (`name`, `description`, `preview_url`, `is_vip`, `sort_order`, `status`) VALUES
('卡通风格', '可爱的卡通风格头像', 'https://example.com/styles/cartoon.jpg', 0, 1, 1),
('写实风格', '逼真的写实风格头像', 'https://example.com/styles/realistic.jpg', 0, 2, 1),
('油画风格', '艺术感十足的油画风格', 'https://example.com/styles/oil-painting.jpg', 1, 3, 1),
('水彩风格', '清新自然的水彩风格', 'https://example.com/styles/watercolor.jpg', 1, 4, 1),
('像素风格', '复古的像素风格', 'https://example.com/styles/pixel.jpg', 0, 5, 1),
('素描风格', '简约的素描风格', 'https://example.com/styles/sketch.jpg', 0, 6, 1),
('赛博朋克', '未来感十足的赛博朋克风格', 'https://example.com/styles/cyberpunk.jpg', 1, 7, 1),
('国风', '传统中国风风格', 'https://example.com/styles/chinese.jpg', 1, 8, 1);

