package com.example.account.config;

import jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SecurityConfig {

    @Bean
    public JwtUtils jwtUtil(@Value("${jwt.secret}") String secret) {
        return new JwtUtils(secret);
    }
}
