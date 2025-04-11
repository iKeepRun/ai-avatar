package com.aiavatar.user;

import com.aiavatar.common.config.CommonRedisConfig;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;

@EnableConfigurationProperties
@SpringBootApplication
@ComponentScan(basePackages = {"com.aiavatar.user", "com.aiavatar.common"})
@Import({CommonRedisConfig.class})
public class UserApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserApplication.class, args);
    }
}