package com.example.portailClient.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ObjectResponseData {
    private Long im_familles_id;
    private String libelle;
    private Long im_sous_familles_id;
    private String sf_libelle;
    private Long sf_im_familles_id;
    private Boolean vendable;
    private Boolean classe_ngp_libre;
    private String abr;
    private ImArticle imArticle;
}
