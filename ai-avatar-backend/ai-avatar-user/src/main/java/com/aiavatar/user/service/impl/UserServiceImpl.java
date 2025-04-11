package com.aiavatar.user.service.impl;

import cn.binarywang.wx.miniapp.api.WxMaService;
import cn.binarywang.wx.miniapp.bean.WxMaJscode2SessionResult;
import cn.hutool.core.bean.BeanUtil;
import cn.hutool.jwt.JWTUtil;
import com.aiavatar.common.model.Result;
import com.aiavatar.user.entity.User;
import com.aiavatar.user.mapper.UserMapper;
import com.aiavatar.user.model.LoginRequestDTO;
import com.aiavatar.user.model.UserVO;
import com.aiavatar.user.service.UserService;
import com.aiavatar.common.util.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private WxMaService wxMaService;
    
    @Autowired
    private UserMapper userMapper;
    
    @Autowired
    private RedisUtil redisUtil;

    private static final String TOKEN_PREFIX = "user:token:";
    private static final long TOKEN_EXPIRE_TIME = 24; // 24小时

    @Override
    public Result<String> login(LoginRequestDTO loginRequestDTO) {
        try {
            WxMaJscode2SessionResult session = wxMaService.getUserService()
                    .getSessionInfo(loginRequestDTO.getCode());

            String openid = session.getOpenid();
//            String sessionKey = session.getSessionKey();
            // 查询或创建用户
            User user = userMapper.selectByOpenId(openid);
            if (user == null) {
                user = new User();
                user.setOpenid(openid);
                user.setNickname(loginRequestDTO.getNickName());
                user.setAvatarUrl(loginRequestDTO.getAvatarUrl());
                userMapper.insert(user);
            }

            // 生成JWT token
            String token = generateToken(user);
            
            // 将token存入Redis，设置24小时过期
            redisUtil.set(token, String.valueOf(user.getId()), TOKEN_EXPIRE_TIME, TimeUnit.HOURS);

            return Result.success(token);
        } catch (Exception e) {
            return Result.failure(e.getMessage());
        }
    }

    @Override
    public Result<UserVO> getUserInfo(Long userId) {
        // 验证token是否有效
        String redisKey = TOKEN_PREFIX + userId;
        if (!redisUtil.hasKey(redisKey)) {
            return Result.failure("用户未登录或登录已过期");
        }

        User user = userMapper.selectById(userId);
        if (user == null) {
            return Result.failure("用户不存在");
        }
        UserVO userVO = BeanUtil.copyProperties(user, UserVO.class);
        return Result.success(userVO);
    }

    private String generateToken(User user) {
        Map<String, Object> payload = new HashMap<>();
        payload.put("userId", user.getId());
        payload.put("openid", user.getOpenid());
        // 生成JWT token
        return JWTUtil.createToken(payload, "secret".getBytes());
    }
} 