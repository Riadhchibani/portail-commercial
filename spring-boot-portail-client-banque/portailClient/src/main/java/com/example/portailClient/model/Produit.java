package com.example.portailClient.model;

import javax.persistence.*;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity(
        name = "Produit"
)
@Table(
        name = "Prouduit"
)
public class Produit {
    @Id
    @Column(
            name = "id_produit",
            nullable = false
    )
    @GeneratedValue(
            strategy = SEQUENCE
    )
    private Long id_produit;
    @Column(
            name = "name",
            nullable = false
    )
    private String name;



    public Produit(Long id_produit, String name) {
        this.id_produit = id_produit;
        this.name = name;
    }

    public Produit() {}

    public Long getId_Product() {
        return id_produit;
    }

    public void setId_Product(Long id_Product) {
        this.id_produit = id_Product;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
