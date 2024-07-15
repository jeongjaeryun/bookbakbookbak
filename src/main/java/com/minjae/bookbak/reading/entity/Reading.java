package com.minjae.bookbak.reading.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Reading {
    private String memberId;
    private String readingBook;
    private String readingStatus;
    private Date readingStart;
    private Date readingEnd;
    private String readingMemo;
    private int readingReview;
}
