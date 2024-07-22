package com.minjae.bookbak.view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/booklist")
public class BooklistController {

    @GetMapping("/main")
    public String bookSearch(){
        return "reading/bookSearch.html";
    }
}
