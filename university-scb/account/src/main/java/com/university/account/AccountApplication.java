package com.university.account;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.university.securityutils", "com.university.account"})
@EnableJpaRepositories(basePackages = {"com.university.securityutils", "com.university.account"})
@EntityScan(basePackages = {"com.university.securityutils", "com.university.account"})
public class AccountApplication {

    public static void main(String[] args) {
        SpringApplication.run(AccountApplication.class, args);
    }

}
