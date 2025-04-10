package com.aiavatar.user.controller;

import com.aiavatar.common.model.Result;
import com.aiavatar.user.model.LoginDTO;
import com.aiavatar.user.model.UserVO;
import com.aiavatar.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Result<String> login(@RequestBody LoginDTO loginDTO) {
        return userService.login(loginDTO);
    }

    @GetMapping("/profile")
    public Result<UserVO> getProfile() {
        Long userId = getCurrentUserId();
        return userService.getUserInfo(userId);
    }

    private Long getCurrentUserId() {
        // TODO: 从JWT token中获取用户ID
        return 1L;
    }
} 