-- 每日统计视图
CREATE VIEW `daily_statistics` AS
SELECT 
    DATE(create_time) AS stat_date,
    COUNT(DISTINCT user_id) AS new_users,
    COUNT(*) AS total_generations,
    SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS success_generations,
    SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS failed_generations
FROM 
    avatar
GROUP BY 
    DATE(create_time);

-- 风格使用统计视图
CREATE VIEW `style_statistics` AS
SELECT 
    s.id AS style_id,
    s.name AS style_name,
    COUNT(a.id) AS usage_count,
    SUM(CASE WHEN a.status = 1 THEN 1 ELSE 0 END) AS success_count,
    SUM(CASE WHEN a.status = 2 THEN 1 ELSE 0 END) AS failed_count
FROM 
    style s
LEFT JOIN 
    avatar a ON s.id = a.style_id
GROUP BY 
    s.id, s.name;

-- 创建统计视图
CREATE VIEW v_daily_stats AS
SELECT 
    DATE(created_time) as stat_date,
    COUNT(DISTINCT 