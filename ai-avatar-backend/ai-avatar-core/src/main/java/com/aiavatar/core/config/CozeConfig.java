package com.aiavatar.core.config;

import com.coze.openapi.service.auth.TokenAuth;
import com.coze.openapi.service.service.CozeAPI;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CozeConfig {
    String cozeAPIToken = System.getenv("COZE_API_TOKEN");

    @Bean
    public  CozeAPI createCoze(){
        return   new CozeAPI.Builder().auth(new TokenAuth(cozeAPIToken)).baseURL("https://api.coze.cn").build();
    }

}
