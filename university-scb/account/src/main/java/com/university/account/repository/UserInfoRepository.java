package com.university.account.repository;

import com.university.account.dto.UserInfo;
import com.university.securityutils.access.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
    UserInfo findByEmail(String email);
}
