package com.university.account.controller;

import com.university.account.dto.UserResponse;
import com.university.account.service.InfoService;
import com.university.securityutils.jwt.JwtUtils;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class InfoController {

    private final InfoService infoService;
    @GetMapping
    public ResponseEntity<UserResponse> test(@NonNull HttpServletRequest request) {
        return ResponseEntity.ok(infoService.getInformation(request));
    }
}
