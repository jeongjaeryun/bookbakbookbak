package com.minjae.bookbak.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String bookRecord(){
        return "home/index.html";
    }
}
