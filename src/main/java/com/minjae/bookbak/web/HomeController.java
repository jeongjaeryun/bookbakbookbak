package com.minjae.bookbak.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String bookRecord(){
        return "record/record.html";
    }
}
