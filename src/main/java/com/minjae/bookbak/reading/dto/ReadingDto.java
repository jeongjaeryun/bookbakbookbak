package com.minjae.bookbak.reading.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ReadingDto {
    private String memberId;
    private String readingBook;
    private String readingStatus;
    private LocalDateTime readingStart;
    private LocalDateTime readingEnd;
    private String readingMemo;
    private int readingReview;
}
