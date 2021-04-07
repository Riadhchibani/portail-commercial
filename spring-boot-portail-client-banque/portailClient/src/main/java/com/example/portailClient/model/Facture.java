package com.example.portailClient.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Facture {
    @Id
    private Long id_Facture;
    @Column(
            name = "description"
    )
    private String description;
    @OneToOne
    private Commande commande;

}
