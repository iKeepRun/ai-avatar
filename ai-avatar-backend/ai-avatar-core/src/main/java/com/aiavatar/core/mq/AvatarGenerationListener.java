package com.aiavatar.core.mq;

import cn.hutool.json.JSON;
import cn.hutool.json.JSONArray;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.aiavatar.common.model.AvatarGenerationTask;
import com.aiavatar.common.model.Result;
import com.aiavatar.common.util.RedisUtil;
import com.aiavatar.core.service.AvatarService;
import com.coze.openapi.client.chat.CreateChatReq;
import com.coze.openapi.client.chat.CreateChatResp;
import com.coze.openapi.client.chat.model.Chat;
import com.coze.openapi.client.connversations.message.model.Message;
import com.coze.openapi.service.service.CozeAPI;
import com.coze.openapi.service.service.websocket.WebsocketsClient;
import lombok.extern.slf4j.Slf4j;
import okhttp3.OkHttp;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.TimeUnit;

@Component
@Slf4j
public class AvatarGenerationListener {

    @Autowired
    private RedisUtil redisUtil;

    @RabbitListener(queues = "avatar.generation.queue")
    public void handleAvatarGeneration(AvatarGenerationTask task) {

        log.info("接收到头像生成任务: {}", task);
        try {
             pollCozeResult(task);
            // 处理生成结果
        } catch (Exception e) {
            log.error("处理头像生成任务失败: {}", task, e);
        }
    }

    @Async
    public void pollCozeResult(AvatarGenerationTask task) {
        String cozeAPIToken = System.getenv("COZE_API_TOKEN");
        boolean completed = false;
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url(String.format("https://api.coze.cn/v3/chat/retrieve?conversation_id=%s&chat_id=%s", task.getConversationId(), task.getChatId()))
                .method("GET", null)
                .header("Authorization", "Bearer " + cozeAPIToken)
                .header("content-type", "application/json")
                .build();

        while (!completed) {
            // 查询Coze API获取状态
            try {
                Response response = client.newCall(request).execute();
                String obj = response.body().string();
                System.out.println("返回对象======"+obj);
                // 转换成chat对象
                JSONObject chat = (JSONObject) JSONUtil.parseObj(obj).get("data");
                if (chat.get("status").equals("completed")) {
                    completed = true;
                    //调用查询会话详情接口获取图片url
                     request = new Request.Builder()
                            .url(String.format("https://api.coze.cn/v3/chat/message/list?conversation_id=%s&chat_id=%s", task.getConversationId(), task.getChatId()))
                            .method("GET", null)
                            .header("Authorization", "Bearer " + cozeAPIToken)
                            .header("content-type", "application/json")
                            .build();
                     response = client.newCall(request).execute();

                    List<JSONObject> objList = (List<JSONObject>) JSONUtil.parseObj( response.body().string()).get("data");
                    System.out.println("返回对象22222======"+objList);
//                    ChatV3MessageDetail chatV3MessageDetail=JSONUtil.toList(data.toString(), ChatV3MessageDetail.class).get(0);
                    JSONObject content = JSONUtil.parseObj( objList.get(1).get("content"));
                    Object images = (JSONUtil.parseObj(content.get("data"))).get("image_urls");

                    JSONArray jsonArray = JSONUtil.parseArray(images);

                    task.setStatus(1);
                    task.setResultImageUrl( jsonArray.get(0).toString());

                    redisUtil.set(task.getTaskId(), JSONUtil.toJsonPrettyStr(task), 60 * 60 * 24, TimeUnit.SECONDS);
                } else if (chat.get("status").equals("failed")) {
                    // 更新任务状态为失败
                    task.setStatus(2);
                    task.setErrorMessage("生成失败");
                    completed = true;
                } else {
                    // 等待一段时间后再次查询
                    Thread.sleep(2000);
                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }

        }
    }
}
