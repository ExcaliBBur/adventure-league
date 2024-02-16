package com.university.account.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.university.account.dto.UserInfo;
import com.university.account.dto.UserRequest;
import com.university.account.dto.UserResponse;
import com.university.account.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentService implements CustomService {

    private final UserInfoRepository userInfoRepository;
    private final UtilityService utilityService;

    @Override
    public UserResponse getInformation(String userEmail) {
        Optional<UserInfo> userInfo = userInfoRepository.findByEmail(userEmail);
        if (userInfo.isEmpty()) {

            userInfoRepository.save(
                    UserInfo.builder()
                            .email(userEmail)
                            .build());

            return UserResponse.builder()
                    .email(userEmail)
                    .build();
        }
        UserInfo userInfoPresent = userInfo.get();
        return UserResponse.builder()
                .email(userInfoPresent.getEmail())
                .firstName(userInfoPresent.getFirstName())
                .middleName(userInfoPresent.getMiddleName())
                .lastName(userInfoPresent.getLastName())
                .info(serializeCustomerAttributes(userInfoPresent.getInfo()))
                .build();
    }

    @Override
    public UserResponse updateInformation(String userEmail, UserRequest userRequest) {
        Optional<UserInfo> userInfo = userInfoRepository.findByEmail(userEmail);

        if (userInfo.isEmpty()) {
            throw new NoSuchElementException();
        }

        UserInfo userInfoPresent = userInfo.get();
        userInfoPresent = UserInfo.builder()
                .id(userInfoPresent.getId())
                .email(userRequest.getEmail())
                .informationAbout(userRequest.getInformationAbout())
                .firstName(userRequest.getFirstName())
                .middleName(userRequest.getMiddleName())
                .lastName(userRequest.getLastName())
                .build();

        userInfoRepository.save(userInfoPresent);

        UserResponse userResponse = UserResponse.builder()
                .email(userInfoPresent.getEmail())
                .informationAbout(userInfoPresent.getInformationAbout())
                .firstName(userInfoPresent.getFirstName())
                .middleName(userInfoPresent.getMiddleName())
                .lastName(userInfoPresent.getLastName())
                .info(serializeCustomerAttributes(userInfoPresent.getInfo()))
                .build();

        if (userRequest.getPassword() != null) {
            String newUserEmail;

            if (userRequest.getEmail() == null) {
                newUserEmail = userEmail;
            } else {
                newUserEmail = userRequest.getEmail();
            }

            utilityService.updateUserEmailAndPasswordAndSave(userEmail,
                    newUserEmail, userRequest.getPassword());
        }

        return userResponse;
    }

    private String serializeCustomerAttributes(Map<String, Object> info) {
        try {
            return utilityService.getObjectMapper().writeValueAsString(info);
        } catch (JsonProcessingException exception){
            System.out.println(exception.getMessage());
        }
        return null;
    }

}
