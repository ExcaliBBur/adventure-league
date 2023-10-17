package com.university.security.test;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @PreAuthorize("hasAuthority('USER_READ')")
    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }

    @PreAuthorize("hasAuthority('ADMIN_READ')")
    @GetMapping("/world")
    public String world() {
        return "World";
    }
}
