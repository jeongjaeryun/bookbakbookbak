package com.minjae.bookbak.member.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Member {
    private String memberId;
    private String memberNickname;
    private String token;
    private String refreshToken;
    private Date memberJoinDate;
}
