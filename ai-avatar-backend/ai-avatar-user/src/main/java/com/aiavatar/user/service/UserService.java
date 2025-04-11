package com.aiavatar.user.service;

import com.aiavatar.common.model.Result;

import com.aiavatar.user.model.LoginRequestDTO;
import com.aiavatar.user.model.UserVO;

public interface UserService {


    Result<String> login(LoginRequestDTO loginRequestDTO);

    Result<UserVO> getUserInfo(Long userId);
//    Result<Void> updateUserInfo(Long userId, UserVO userVO);
} 