package com.university.account.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.university.account.repository.UserInfoRepository;
import com.university.securityutils.access.entity.User;
import com.university.securityutils.access.repository.UserRepository;
import com.university.securityutils.jwt.JwtUtils;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Data
public class UtilityService {

    private final JwtUtils jwtUtils;
    private final ObjectMapper objectMapper;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public String getUserEmail(HttpServletRequest request) {
        final String authHeader = request.getHeader("Authorization");
        final String jwt = authHeader.substring(7);
        return jwtUtils.extractUsername(jwt);
    }

    public void updateUserEmailAndPasswordAndSave(String oldUserEmail, String newUserEmail, String newPassword) {
        Optional<User> user = userRepository.findByEmail(oldUserEmail);

        if (user.isPresent()) {
            User userPresent = user.get();
            userPresent = User.builder()
                    .id(userPresent.getId())
                    .email(newUserEmail)
                    .password(passwordEncoder.encode(newPassword))
                    .build();
            userRepository.save(userPresent);
            System.out.println("Edit email and password: " + userPresent);
        } else {
            throw new NoSuchElementException();
        }
    }
}
