package com.example.portailClient.model;

public class Produit {
    private Long id_Product;
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
