package com.example.account.controller;

import jakarta.servlet.http.HttpServletRequest;
import jwt.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class TestController {

    private final JwtUtils jwtUtils;
    @GetMapping
    public String test(@NonNull HttpServletRequest request) {
        final String authHeader = request.getHeader("Authorization");
        System.out.println(authHeader);
        final String jwt = authHeader.substring(7);

        return jwtUtils.extractUsername(jwt);
    }
}
