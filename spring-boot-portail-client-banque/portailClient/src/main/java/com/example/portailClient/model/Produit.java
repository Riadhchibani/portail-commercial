package com.example.portailClient.model;

import javax.persistence.*;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table(
        name = "Prouduit"
)
public class Produit {
    @Id
    @Column(
            name = "id_Product",
            nullable = false
    )
    @GeneratedValue(
            strategy = SEQUENCE
    )
    private Long id_Product;
    @Column(
            name = "name",
            nullable = false,
            unique = true
    )
    private String name;



    public Produit(Long id_Product, String name) {
        this.id_Product = id_Product;
        this.name = name;
    }

    public Produit() {}

    public Long getId_Product() {
        return id_Product;
    }

    public void setId_Product(Long id_Product) {
        this.id_Product = id_Product;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
