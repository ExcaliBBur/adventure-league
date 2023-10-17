package com.example.account.service;

import com.example.account.dto.User;
import org.springframework.stereotype.Service;

@Service
public class StudentService implements  CustomService {
    @Override
    public String invoke(User user) {
        return "StudentInfo";
    }
}
