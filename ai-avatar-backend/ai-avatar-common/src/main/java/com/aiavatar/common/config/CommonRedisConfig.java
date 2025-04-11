package com.aiavatar.common.config;

import com.aiavatar.common.util.RedisUtil;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.data.redis.RedisAutoConfiguration;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;

@Configuration
@AutoConfigureAfter(RedisAutoConfiguration.class)
@ConditionalOnClass(RedisTemplate.class)
public class CommonRedisConfig {

    @Bean
    @ConditionalOnMissingBean(name = "redisTemplate")
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory factory) {
        RedisTemplate<String, Object> template = new RedisTemplate<>();
        template.setConnectionFactory(factory);
        
        // 设置key的序列化方式
        template.setKeySerializer(new StringRedisSerializer());
        // 设置value的序列化方式
        template.setValueSerializer(new StringRedisSerializer());
        // 设置hash key的序列化方式
        template.setHashKeySerializer(new StringRedisSerializer());
        // 设置hash value的序列化方式
        template.setHashValueSerializer(new StringRedisSerializer());
        
        template.afterPropertiesSet();
        return template;
    }

    @Bean
    @ConditionalOnMissingBean(RedisUtil.class)
    public RedisUtil redisUtil(RedisTemplate<String, Object> redisTemplate) {
        return new RedisUtil(redisTemplate);
    }
} 