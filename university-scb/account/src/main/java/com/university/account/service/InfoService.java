package com.university.account.service;

import com.university.account.dto.UserInfo;
import com.university.account.dto.UserRequest;
import com.university.account.dto.UserResponse;
import com.university.account.repository.UserInfoRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class InfoService {

    private final Map<String, CustomService> serviceMap;
    private final UserInfoRepository userInfoRepository;
    private final UtilityService utilityService;

    @Autowired
    public InfoService(UserInfoRepository userInfoRepository, UtilityService utilityService) {
        this.utilityService = utilityService;
        this.serviceMap = new HashMap<>();
        this.userInfoRepository = userInfoRepository;
        fillServiceMap();
    }

    public UserResponse getInformation(HttpServletRequest request) {
        Collection<? extends GrantedAuthority> authorities = SecurityContextHolder.getContext().getAuthentication().getAuthorities();
        for (GrantedAuthority authority : authorities) {
            if (!serviceMap.containsKey(authority.toString())) { // TODO: 17.10.2023 FIX ROLES ("USER", "USER_READ")???
                continue;
            }
            String userEmail = utilityService.getUserEmail(request);
            return serviceMap.get(authority.toString()).getInformation(userEmail);
        }
        return null;
    }

    public UserResponse updateInformation(HttpServletRequest request, UserRequest userRequest) {
        Collection<? extends GrantedAuthority> authorities = SecurityContextHolder.getContext().getAuthentication().getAuthorities();
        for (GrantedAuthority authority : authorities) {
            if (!serviceMap.containsKey(authority.toString())) { // TODO: 17.10.2023 FIX ROLES ("USER", "USER_READ")???
                continue;
            }
            String userEmail = utilityService.getUserEmail(request);
            return serviceMap.get(authority.toString()).updateInformation(userEmail, userRequest);
        }
        return null;
    }

    public UserResponse entranceInformation(HttpServletRequest request, UserRequest userRequest) {
        userInfoRepository.save(UserInfo.builder()
                        .firstName(userRequest.getFirstName())
                        .lastName(userRequest.getLastName())
                        .email(utilityService.getUserEmail(request))
                        .informationAbout(userRequest.getInformationAbout())
                .build());

        return UserResponse.builder()
                .firstName(userRequest.getFirstName())
                .lastName(userRequest.getLastName())
                .informationAbout(userRequest.getInformationAbout())
                .build();
    }

    private void fillServiceMap() {
//        this.serviceMap.put("CURATOR", new CuratorService());
        this.serviceMap.put("USER", new StudentService(userInfoRepository, utilityService));
//        this.serviceMap.put("TEACHER", new TeacherService());
    }
}
