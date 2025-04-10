package com.aiavatar.core.service;

import com.aiavatar.common.model.Result;
import com.aiavatar.core.model.ShareDTO;
import com.aiavatar.core.model.ShareResultVO;

public interface ShareService {
    Result<ShareResultVO> generateShareInfo(ShareDTO shareDTO);
    Result<Boolean> recordShare(Long avatarId, String shareType);
} 