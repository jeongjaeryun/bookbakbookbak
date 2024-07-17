package com.minjae.bookbak.reading.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/reading")
public class ReadingController {

    @GetMapping()
    public String calendar(){
        return "calendar/calendar.html";
    }
}
