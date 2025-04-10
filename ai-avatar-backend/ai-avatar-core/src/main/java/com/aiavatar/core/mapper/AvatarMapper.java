package com.aiavatar.core.mapper;

import com.aiavatar.core.entity.Avatar;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 头像生成记录数据访问接口
 */
@Mapper
public interface AvatarMapper extends BaseMapper<Avatar> {
    // 继承BaseMapper后，已经有了基本的CRUD方法
    // 如果有特殊的查询需求，可以在这里添加自定义方法
}