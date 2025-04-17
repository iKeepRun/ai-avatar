package com.aiavatar.user.controller;

import com.aiavatar.common.model.Result;
import com.aiavatar.common.util.RedisUtil;
import com.aiavatar.user.model.LoginRequestDTO;
import com.aiavatar.user.service.UserService;
import me.chanjar.weixin.common.error.WxErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/v1/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private RedisUtil redisUtil;

    @PostMapping("/login")
    public Result<String> login(@RequestBody  LoginRequestDTO loginRequestDTO)  {
        return userService.login(loginRequestDTO);
    }

//    @GetMapping("/profile")
//    public Result<UserVO> getProfile() {
//        Long userId = getCurrentUserId();
//        return userService.getUserInfo(userId);
//    }

    private Long getCurrentUserId(HttpServletRequest request) {
        // TODO: 从JWT token中获取用户ID
        Long userId= (Long) redisUtil.get(request.getHeader("Authorization").substring(7));
        return userId;
    }
} 