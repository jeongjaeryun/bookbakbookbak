package com.minjae.bookbak;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class BookbakApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookbakApplication.class, args);
	}

}