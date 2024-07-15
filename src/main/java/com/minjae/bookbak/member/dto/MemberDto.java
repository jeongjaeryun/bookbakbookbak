package com.minjae.bookbak.member.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class MemberDto {
    private String memberId;
    private String memberNickname;
    private String token;
    private String refreshToken;
    private Date memberJoinDate;
}
