package com.example.account.dto;

import com.example.account.converter.HashMapConverter;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Type;

import java.util.Map;

@Entity
@Data
@Table(name = "_user_information")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    private String firstName;

    private String lastName;

    private String middleName;

    @Column(columnDefinition = "json")
    @Convert(converter = HashMapConverter.class)
    private Map<String, Object> info;
}
