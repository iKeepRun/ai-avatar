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

-- 初始化会员价格配置
INSERT INTO `member_price` (`member_type`, `price`, `original_price`, `description`, `status`) VALUES
(1, 1990, 2990, '月度会员', 1),
(2, 19900, 29900, '年度会员', 1); 