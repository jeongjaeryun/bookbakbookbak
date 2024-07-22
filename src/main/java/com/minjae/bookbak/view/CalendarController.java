package com.minjae.bookbak.view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/calendar")
public class CalendarController {

    @GetMapping("/main")
    public String calendar(){
        return "calendar/calendar.html";
    }
}
