package com.aiavatar.core.controller;

import com.aiavatar.common.model.Result;
import com.aiavatar.core.model.ShareDTO;
import com.aiavatar.core.model.ShareResultVO;
import com.aiavatar.core.service.ShareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/share")
public class ShareController {

    @Autowired
    private ShareService shareService;

    @PostMapping("/generate")
    public Result<ShareResultVO> generateShareInfo(@RequestBody ShareDTO shareDTO) {
        return shareService.generateShareInfo(shareDTO);
    }

    @PostMapping("/record")
    public Result<Boolean> recordShare(
            @RequestParam Long avatarId,
            @RequestParam String shareType) {
        return shareService.recordShare(avatarId, shareType);
    }
} 