package com.example.portailClient.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class DataResponse {
    private Long id_data;
    private String libelle_data;
    private String code_data;
}
