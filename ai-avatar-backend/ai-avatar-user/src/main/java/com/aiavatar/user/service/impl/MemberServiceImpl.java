//package com.aiavatar.user.service.impl;
//
//import com.aiavatar.common.model.Result;
//import com.aiavatar.user.entity.Member;
//import com.aiavatar.user.mapper.MemberMapper;
//import com.aiavatar.user.model.MemberVO;
//import com.aiavatar.user.model.SubscribeDTO;
//import com.aiavatar.user.service.MemberService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.time.LocalDateTime;
//
//@Service
//public class MemberServiceImpl implements MemberService {
//
//    @Autowired
//    private MemberMapper memberMapper;
//
//    @Override
//    public Result<MemberVO> getMemberInfo(Long userId) {
//        Member member = memberMapper.selectByUserId(userId);
//        if (member == null) {
//            return Result.success(new MemberVO(false, null, null));
//        }
//
//        boolean isValid = member.getExpireTime().isAfter(LocalDateTime.now());
//        MemberVO vo = new MemberVO(
//            isValid,
//            member.getMemberType(),
//            member.getExpireTime()
//        );
//        return Result.success(vo);
//    }
//
//    @Override
//    @Transactional
//    public Result<String> subscribe(SubscribeDTO dto) {
//        // 1. 验证支付状态
//        if (!verifyPayment(dto.getPaymentId())) {
//            return Result.failure("支付验证失败");
//        }
//
//        // 2. 更新或创建会员记录
//        Member member = memberMapper.selectByUserId(dto.getUserId());
//        if (member == null) {
//            member = new Member();
//            member.setUserId(dto.getUserId());
//        }
//
//        // 3. 计算会员有效期
//        LocalDateTime expireTime = calculateExpireTime(
//            member.getExpireTime(),
//            dto.getMemberType()
//        );
//
//        member.setMemberType(dto.getMemberType());
//        member.setExpireTime(expireTime);
//        member.setStatus(1);
//
//        if (member.getId() == null) {
//            memberMapper.insert(member);
//        } else {
//            memberMapper.updateById(member);
//        }
//
//        return Result.success("订阅成功");
//    }
//
//    @Override
//    public Result<Boolean> checkMemberPrivilege(Long userId, String privilegeType) {
//        Member member = memberMapper.selectByUserId(userId);
//        if (member == null || member.getExpireTime().isBefore(LocalDateTime.now())) {
//            return Result.success(false);
//        }
//
//        boolean hasPrivilege = checkPrivilegeByType(member.getMemberType(), privilegeType);
//        return Result.success(hasPrivilege);
//    }
//
//    private boolean verifyPayment(String paymentId) {
//        // TODO: 实现支付验证逻辑
//        return true;
//    }
//
//    private LocalDateTime calculateExpireTime(LocalDateTime currentExpireTime, Integer memberType) {
//        LocalDateTime baseTime = currentExpireTime != null && currentExpireTime.isAfter(LocalDateTime.now())
//            ? currentExpireTime
//            : LocalDateTime.now();
//
//        return memberType == 1
//            ? baseTime.plusMonths(1)  // 月度会员
//            : baseTime.plusYears(1);  // 年度会员
//    }
//
//    private boolean checkPrivilegeByType(Integer memberType, String privilegeType) {
//        // TODO: 实现权限检查逻辑
//        return true;
//    }
//}