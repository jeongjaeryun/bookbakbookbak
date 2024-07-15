package com.minjae.bookbak.wish.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Wish {
    private int wishId;
    private String memberId;
    private String readingBook;
}
