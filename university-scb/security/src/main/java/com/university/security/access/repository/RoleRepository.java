package com.university.security.access.repository;

import com.university.security.access.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String role_user);
}
