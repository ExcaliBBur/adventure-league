package com.university.security.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/admin")
@Secured("ADMIN")
public class AdminController {

    @GetMapping
    public ResponseEntity<String> getContent() {
        return ResponseEntity.ok("Hello, ADMIN");
    }

}
