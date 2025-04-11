package com.aiavatar.user.mapper;


import com.aiavatar.user.entity.User;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 用户数据访问接口
 */
@Mapper
public interface UserMapper extends BaseMapper<User> {
    User selectByOpenId(String openId);
    // 继承BaseMapper后，已经有了基本的CRUD方法
    // 如果有特殊的查询需求，可以在这里添加自定义方法
}