package com.university.account.converter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;
import lombok.AllArgsConstructor;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@AllArgsConstructor
public class HashMapConverter implements AttributeConverter<Map<String, Object>, String> {

    private final ObjectMapper objectMapper;
    @Override
    public String convertToDatabaseColumn(Map<String, Object> info) {
        try {
            return objectMapper.writeValueAsString(info);
        } catch (final JsonProcessingException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    @Override
    public Map<String, Object> convertToEntityAttribute(String userInfo) {
        try {
            return objectMapper.readValue(userInfo,
                    new TypeReference<HashMap<String, Object>>() {});
        } catch (final IOException e) {
            System.out.println(e.getMessage());
        }

        return null;
    }
}
