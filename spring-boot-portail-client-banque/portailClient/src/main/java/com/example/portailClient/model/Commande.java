package com.example.portailClient.model;

import javax.persistence.*;
import java.util.Date;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table(
        name = "commande"
)
public class Commande {

    @Id
    @SequenceGenerator(
            name = "commande_sequence",
            sequenceName = "commande_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "commande_sequence"
    )
    @Column(
            name = "id_commande",
            updatable = false
    )
    private Long id_commande;

    @Column(
            name = "date",
            nullable = false
    )
    private Date date; //date de commande

    @Column(
           name = "description",
            nullable = false
    )
    private String description;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(
            name = "id_produit",
            referencedColumnName = "id_produit",
            nullable = false
    )
    private Produit produit;

    @Column(
            name = "accept",
            nullable = false
    )
    private boolean accept;

    @ManyToOne
    private Utilisateur utilisateur;


    public Commande(){

    }

    public Commande(Date date, String description, Produit produit, boolean accept) {
        this.date = date;
        this.description = description;
        this.produit = produit;
        this.accept = accept;
    }

    public Long getId_commande() {
        return id_commande;
    }

    public void setId_commande(Long id_commande) {
        this.id_commande = id_commande;
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

    public Produit getProduit() {
        return produit;
    }

    public void setProduit(Produit produit) {
        this.produit = produit;
    }

    public boolean isAccept() {
        return accept;
    }

    public void setAccept(boolean accept) {
        this.accept = accept;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }
}
