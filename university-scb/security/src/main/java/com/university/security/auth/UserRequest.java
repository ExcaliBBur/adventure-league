package com.university.security.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRequest {

    @Email(message = "Невалидная почта")
    private String email;

    @Size(min = 8, max = 16, message = "Неправильный размер пароля")
    @NotBlank(message = "Пароль не должен быть пустым")
    private String password;

}
