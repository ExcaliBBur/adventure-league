package com.university.account.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.university.account.dto.UserInfo;
import com.university.account.dto.UserResponse;
import com.university.account.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class StudentService implements CustomService {

    @Autowired
    private UserInfoRepository userInfoRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public UserResponse invoke(String userEmail) {
        UserInfo userInfo = userInfoRepository.findByEmail(userEmail);
        if (userInfo == null) {
            userInfoRepository.save(
                    UserInfo.builder()
                            .email(userEmail)
                            .build());
            return null; // TODO: 17.10.2023 maybe email in json??
        }
        return UserResponse.builder()
                .firstName(userInfo.getFirstName())
                .middleName(userInfo.getMiddleName())
                .lastName(userInfo.getLastName())
                .info(serializeCustomerAttributes(userInfo.getInfo()))
                .build();
    }

    public String serializeCustomerAttributes(Map<String, Object> info) {
        try {
            return objectMapper.writeValueAsString(info);
        } catch (JsonProcessingException exception){
            System.out.println(exception.getMessage());
        }
        return null;
    }
}
