package com.minjae.bookbak.challenge.entity;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class Challenge { //챌린지
    private int challengeId;
    private String memberId;
    private String challengePeriod;
    private int challengeTarget;
    private String challengeStatus;
    private LocalDateTime challengeStart;
    private LocalDateTime challengeEnd;
}
