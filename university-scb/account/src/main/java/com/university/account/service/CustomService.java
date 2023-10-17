package com.university.account.service;

import com.university.account.dto.UserInfo;
import com.university.account.dto.UserResponse;

public interface CustomService {
    public UserResponse invoke(String userEmail);
}
