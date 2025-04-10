//package com.aiavatar.core.service;
//
//import com.tencentcloudapi.common.Credential;
//import com.tencentcloudapi.common.exception.TencentCloudSDKException;
//import com.tencentcloudapi.common.profile.ClientProfile;
//import com.tencentcloudapi.common.profile.HttpProfile;
//import com.tencentcloudapi.ft.v20200304.FtClient;
//import com.tencentcloudapi.ft.v20200304.models.StyleImageRequest;
//import com.tencentcloudapi.ft.v20200304.models.StyleImageResponse;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.util.Base64;
//
///**
// * AI服务接口实现类
// */
//@Service
//@Slf4j
//public class AIService {
//
//    @Value("${tencent.cloud.secret-id}")
//    private String secretId;
//
//    @Value("${tencent.cloud.secret-key}")
//    private String secretKey;
//
//    @Value("${tencent.cloud.region}")
//    private String region;
//
//    /**
//     * 生成AI头像
//     *
//     * @param file 原始图片
//     * @param styleType 风格类型 (1:卡通, 2:油画, 3:素描, 4:水彩等)
//     * @return 任务ID或直接返回处理后的图片URL
//     * @throws IOException 如果文件处理出错
//     */
//    public String generateAvatar(MultipartFile file, String styleType) throws IOException {
//        try {
//            // 实例化一个认证对象
//            Credential cred = new Credential(secretId, secretKey);
//
//            // 实例化一个HTTP选项
//            HttpProfile httpProfile = new HttpProfile();
//            httpProfile.setEndpoint("ft.tencentcloudapi.com");
//
//            // 实例化一个client选项
//            ClientProfile clientProfile = new ClientProfile();
//            clientProfile.setHttpProfile(httpProfile);
//
//            // 实例化FT的client对象
//            FtClient client = new FtClient(cred, region, clientProfile);
//
//            // 将图片转为Base64
//            byte[] fileBytes = file.getBytes();
//            String base64Image = Base64.getEncoder().encodeToString(fileBytes);
//
//            // 实例化请求对象，根据风格类型选择不同的参数
//            StyleImageRequest req = new StyleImageRequest();
//            req.setImage(base64Image);
//            req.setStyle(Integer.parseInt(styleType));
//
//            // 返回的resp是一个StyleImageResponse的实例，与请求对象对应
//            StyleImageResponse resp = client.StyleImage(req);
//
//            // 可以获取自动鉴别的处理结果
//            log.info("生成AI头像成功，返回结果: {}", resp);
//
//            // 根据您的需求返回任务ID或直接返回处理后的图片URL
//            // 在实际应用中，这里可能需要保存结果到数据库，并返回任务ID
//            // 为了简化示例，我们直接返回结果中的图片URL（实际API可能不同）
//            return resp.getResultUrl();
//
//        } catch (TencentCloudSDKException e) {
//            log.error("生成AI头像失败", e);
//            throw new RuntimeException("生成AI头像失败: " + e.getMessage());
//        }
//    }
//
//    /**
//     * 查询头像生成结果
//     *
//     * @param taskId 任务ID
//     * @return 结果URL，如果未完成返回null
//     */
//    public String getAvatarResult(String taskId) {
//        // 在实际应用中，您可能需要从数据库查询任务状态
//        // 如果是异步处理，可能需要向腾讯云API查询任务状态
//
//        try {
//            // 实例化一个认证对象
//            Credential cred = new Credential(secretId, secretKey);
//
//            // 查询任务结果
//            // ... 根据您的实际业务逻辑实现 ...
//
//            // 示例返回，实际应返回真实URL
//            return "https://example.com/result_" + taskId + ".jpg";
//        } catch (Exception e) {
//            log.error("查询头像生成结果失败", e);
//            throw new RuntimeException("查询头像生成结果失败: " + e.getMessage());
//        }
//    }
//}