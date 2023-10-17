package com.example.account.controller;

import jakarta.servlet.http.HttpServletRequest;
import jwt.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class InfoController {

    private final JwtUtils jwtUtils;
    @GetMapping
    public String test(@NonNull HttpServletRequest request) {
        final String authHeader = request.getHeader("Authorization");
        final String jwt = authHeader.substring(7); // TODO: 17.10.2023    TO SERVICE
        final String userEmail = jwtUtils.extractUsername(jwt);
        System.out.println("here");
        return SecurityContextHolder.getContext().getAuthentication().getAuthorities().toString();
    }
}
