package com.minjae.bookbak.challenge.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ChallengeDto {
    private int challengeId;
    private String memberId;
    private String challengePeriod;
    private int challengeTarget;
    private String challengeStatus;
    private Date challengeStart;
    private Date challengeEnd;
}
