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