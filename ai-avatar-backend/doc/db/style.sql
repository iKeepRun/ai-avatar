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