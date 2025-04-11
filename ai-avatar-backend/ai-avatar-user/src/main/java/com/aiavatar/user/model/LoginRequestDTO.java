package com.aiavatar.user.model;


import lombok.Data;

import java.io.Serializable;

@Data
public class LoginRequestDTO implements Serializable {
    private String code;
    private String avatarUrl;
    private String nickName;
}
