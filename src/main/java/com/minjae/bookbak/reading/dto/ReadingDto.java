package com.minjae.bookbak.reading.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ReadingDto {
    private String memberId;
    private String readingBook;
    private String readingStatus;
    private Date readingStart;
    private Date readingEnd;
    private String readingMemo;
    private int readingReview;
}
