package com.example.portailClient.model;

import javax.persistence.*;

import java.sql.Date;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity(
        name = "DemandeProduct"
)
@Table(
        name = "DemandeProduct"
)
public class DemandeProduit {
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
    private Long id_demande;
    @Column(
            name = "demand_date",
            updatable = false
    )
    private Date demand_date; //date de demande
    @Column(
            name = "edit_date",
            updatable = false
    )
    private Date edit_date;  //date de modification
    @Column(
            name = "etat",
            updatable = false
    )
    private String etat;

    @Column(
            name = "description",
            nullable = false
    )
    private String description;

    @Column(
            name = "produit",
            nullable = false
    )
    private String produitName;

    @OneToOne
    private Utilisateur utilisateurClient;

    @OneToOne
    private Utilisateur utilisateurAdmin;


    public DemandeProduit() {

    }

    public DemandeProduit(Date demand_date, Date edit_date, String etat, String produitName) {
        this.demand_date = demand_date;
        this.edit_date = edit_date;
        this.etat = etat;
        this.produitName = produitName;
    }

    public Long getId_demande() {
        return id_demande;
    }

    public void setId_demande(Long id_demande) {
        this.id_demande = id_demande;
    }

    public Date getDemand_date() {
        return demand_date;
    }

    public void setDemand_date(Date demand_date) {
        this.demand_date = demand_date;
    }

    public Date getEdit_date() {
        return edit_date;
    }

    public void setEdit_date(Date edit_date) {
        this.edit_date = edit_date;
    }

    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getProduitName() {
        return produitName;
    }

    public void setProduitName(String produitName) {
        this.produitName = produitName;
    }

    public Utilisateur getUtilisateurClient() {
        return utilisateurClient;
    }

    public void setUtilisateurClient(Utilisateur utilisateurClient) {
        this.utilisateurClient = utilisateurClient;
    }

    public Utilisateur getUtilisateurAdmin() {
        return utilisateurAdmin;
    }

    public void setUtilisateurAdmin(Utilisateur utilisateurAdmin) {
        this.utilisateurAdmin = utilisateurAdmin;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}





