package com.university.account.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.university.account.dto.UserInfo;
import com.university.account.dto.UserResponse;
import com.university.account.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class StudentService implements CustomService {

    private final UserInfoRepository userInfoRepository;
    private final ObjectMapper objectMapper;

    @Override
    public UserResponse invoke(String userEmail) {
        UserInfo userInfo = userInfoRepository.findByEmail(userEmail);
        if (userInfo == null) {
            Map<String, Object> infoMap = new HashMap<>();

            userInfoRepository.save(
                    UserInfo.builder()
                            .email(userEmail)
                            .info(infoMap)
                            .build());

            return UserResponse.builder()
                    .userEmail(userEmail)
                    .build();
        }
        return UserResponse.builder()
                .userEmail(userInfo.getEmail())
                .firstName(userInfo.getFirstName())
                .middleName(userInfo.getMiddleName())
                .lastName(userInfo.getLastName())
                .info(serializeCustomerAttributes(userInfo.getInfo()))
                .build();
    }

    private String serializeCustomerAttributes(Map<String, Object> info) {
        try {
            return objectMapper.writeValueAsString(info);
        } catch (JsonProcessingException exception){
            System.out.println(exception.getMessage());
        }
        return null;
    }

}
