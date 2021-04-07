package com.example.portailClient.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(
        name = "Commande"
)
public class Commande {

    @Id
    private Long id_commande;

    @Column(
            name = "date"
    )
    private Date date;

    @Column(
           name = "description"
    )
    private String description;

    @OneToOne
    private Facture facture;

    @OneToOne
    private Produit produit;

    @OneToOne
    private Utilisateur utilisateur;

    public Commande(){

    }

    public Commande(Date date, String description, Facture facture) {
        this.id_commande = id_commande;
        this.date = date;
        this.description = description;
        this.facture = facture;
    }

    public Long getId() {
        return id_commande;
    }

    public void setId(Long id) {
        this.id_commande = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
