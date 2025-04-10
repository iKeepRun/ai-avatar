package com.aiavatar.core.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.annotation.EnableRabbit;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableRabbit
public class RabbitMQConfig {

    // 队列名称
    public static final String AVATAR_GENERATION_QUEUE = "avatar.generation.queue";
    public static final String AVATAR_GENERATION_EXCHANGE = "avatar.generation.exchange";
    public static final String AVATAR_GENERATION_ROUTING_KEY = "avatar.generation";

    // 创建队列
    @Bean
    public Queue avatarGenerationQueue() {
        return new Queue(AVATAR_GENERATION_QUEUE, true);
    }

    // 创建Direct交换机
    @Bean
    public DirectExchange avatarGenerationExchange() {
        return new DirectExchange(AVATAR_GENERATION_EXCHANGE);
    }

    // 绑定队列和交换机
    @Bean
    public Binding bindingAvatarGeneration() {
        return BindingBuilder.bind(avatarGenerationQueue())
                .to(avatarGenerationExchange())
                .with(AVATAR_GENERATION_ROUTING_KEY);
    }
}