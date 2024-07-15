package com.minjae.bookbak.reading.entity;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class Reading {
    private String memberId;
    private String readingBook;
    private String readingStatus;
    private LocalDateTime readingStart;
    private LocalDateTime readingEnd;
    private String readingMemo;
    private int readingReview;
}
