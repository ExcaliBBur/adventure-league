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
        String userInfo = null;
        try {
            userInfo = objectMapper.writeValueAsString(info);
        } catch (final JsonProcessingException e) {
            // TODO: 17.10.2023 HANDLE EXCEPTION
        }
        return userInfo;
    }

    @Override
    public Map<String, Object> convertToEntityAttribute(String userInfo) {
        Map<String, Object> info = null;
        try {
            info = objectMapper.readValue(userInfo,
                    new TypeReference<HashMap<String, Object>>() {});
        } catch (final IOException e) {
            // TODO: 17.10.2023 HANDLE EXCEPTION
        }

        return info;
    }
}
