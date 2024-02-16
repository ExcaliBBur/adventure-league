package com.university.account.controller;

import com.university.account.dto.UserRequest;
import com.university.account.dto.UserResponse;
import com.university.account.service.InfoService;
import com.university.securityutils.jwt.JwtUtils;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class InfoController {

    private final InfoService infoService;
    @GetMapping("/getInformation")
    public ResponseEntity<UserResponse> test(@NonNull HttpServletRequest request) {
        return ResponseEntity.ok(infoService.getInformation(request));
    }

    @PutMapping("/updateInformation")
    public ResponseEntity<UserResponse> updateInformation(@NonNull HttpServletRequest request,
                                                          @RequestBody UserRequest userRequest) {
        return ResponseEntity.ok(infoService.updateInformation(request, userRequest));
    }

    @PutMapping("/entrance")
    public ResponseEntity<UserResponse> entry(@NonNull HttpServletRequest request,
                                              @RequestBody UserRequest userRequest) {
        return ResponseEntity.ok(infoService.entranceInformation(request, userRequest));
    }
}
