package com.example.account.service;

import com.example.account.dto.User;
import org.springframework.stereotype.Service;

@Service
public class TeacherService implements CustomService {
    @Override
    public String invoke(User user) {
        return "TeacherInfo";
    }
}
