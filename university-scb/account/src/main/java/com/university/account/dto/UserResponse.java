package com.university.account.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {

    private String userEmail;

    private String firstName;

    private String middleName;

    private String lastName;

    private String info;
}
