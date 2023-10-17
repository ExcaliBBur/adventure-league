package com.university.security;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.university.securityutils", "com.university.security"})
@EnableJpaRepositories(basePackages = {"com.university.securityutils", "com.university.security"})
@EntityScan(basePackages = {"com.university.securityutils", "com.university.security"})
public class SecurityApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecurityApplication.class, args);
	}

}
