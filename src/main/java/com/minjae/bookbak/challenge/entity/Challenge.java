package com.minjae.bookbak.challenge.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Challenge {
    private int challengeId;
    private String memberId;
    private String challengePeriod;
    private int challengeTarget;
    private String challengeStatus;
    private Date challengeStart;
    private Date challengeEnd;
}
