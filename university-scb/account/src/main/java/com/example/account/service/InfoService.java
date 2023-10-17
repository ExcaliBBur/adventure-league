package com.example.account.service;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class InfoService {

    private final Map<String, CustomService> serviceMap;

    public InfoService() {
        this.serviceMap = new HashMap<>();
        fillServiceMap();
    }

    public String getInformation(HttpServletRequest request) {
        return null;
    }

    private void fillServiceMap() {
        this.serviceMap.put("CURATOR", new CuratorService());
        this.serviceMap.put("STUDENT", new StudentService());
        this.serviceMap.put("TEACHER", new TeacherService());
    }
}
