package com.university.account.service;

import com.university.account.dto.UserInfo;
import com.university.account.dto.UserRequest;
import com.university.account.dto.UserResponse;

public interface CustomService {
    UserResponse getInformation(String userEmail);

    UserResponse updateInformation(String userEmail, UserRequest userRequest);
}

