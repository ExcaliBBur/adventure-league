package com.university.account.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.university.account.dto.UserInfo;
import com.university.account.dto.UserResponse;
import com.university.account.repository.UserInfoRepository;
import com.university.securityutils.access.entity.User;
import com.university.securityutils.jwt.JwtUtils;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class InfoService {

    private final Map<String, CustomService> serviceMap;
    private final JwtUtils jwtUtils;
    private final UserInfoRepository userInfoRepository;
    private final ObjectMapper objectMapper;
    public InfoService(@Autowired JwtUtils jwtUtils, @Autowired UserInfoRepository userInfoRepository) {
        this.serviceMap = new HashMap<>();
        this.jwtUtils = jwtUtils;
        this.userInfoRepository = userInfoRepository;
        this.objectMapper = new ObjectMapper();
        fillServiceMap();
    }

    public UserResponse getInformation(HttpServletRequest request) {
        Collection<? extends GrantedAuthority> authorities = SecurityContextHolder.getContext().getAuthentication().getAuthorities();
        for (GrantedAuthority authority : authorities) {
            if (!serviceMap.containsKey(authority.toString())) { // TODO: 17.10.2023 FIX ROLES ("USER", "USER_READ")???
                continue;
            }
            String userEmail = getUserEmail(request);
            return serviceMap.get(authority.toString()).invoke(userEmail);
        }
        return null;
    }

    private String getUserEmail(HttpServletRequest request) {
        final String authHeader = request.getHeader("Authorization");
        final String jwt = authHeader.substring(7);
        return jwtUtils.extractUsername(jwt);
    }

    private void fillServiceMap() {
//        this.serviceMap.put("CURATOR", new CuratorService());
        this.serviceMap.put("USER", new StudentService(userInfoRepository, objectMapper));
//        this.serviceMap.put("TEACHER", new TeacherService());
    }
}
