package com.aiavatar.user.service.impl;

import cn.hutool.core.bean.BeanUtil;
import com.aiavatar.common.model.Result;

import com.aiavatar.core.entity.User;
import com.aiavatar.user.mapper.UserMapper;
import com.aiavatar.user.model.LoginDTO;
import com.aiavatar.user.model.UserVO;
import com.aiavatar.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public Result<String> login(LoginDTO loginDTO) {
        // 调用微信登录接口获取openId
        String openId = getOpenId(loginDTO.getCode());
        
        // 查询或创建用户
        User user = userMapper.selectByOpenId(openId);
        if (user == null) {
            user = new User();
            user.setOpenid(openId);
            userMapper.insert(user);
        }
        
        // 生成JWT token
        String token = generateToken(user);
        
        return Result.success(token);
    }

    @Override
    public Result<UserVO> getUserInfo(Long userId) {
        User user = userMapper.selectById(userId);
        if (user == null) {
            return Result.failure("用户不存在");
        }
        UserVO userVO = BeanUtil.copyProperties(user,UserVO.class);
        return Result.success(userVO);
    }

    @Override
    public Result<Void> updateUserInfo(Long userId, UserVO userVO) {
        return null;
    }

    private String getOpenId(String code) {
        // 调用微信接口获取openId
        return "mock-open-id";
    }

    private String generateToken(User user) {
        // 生成JWT token
        return "mock-token";
    }
} 