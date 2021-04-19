package com.example.portailClient.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;


import java.sql.Date;
import java.util.List;


import static javax.persistence.GenerationType.*;

@Entity(name = "Utilisateur")
@Table(
        name = "utilisateur",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "email",
                        columnNames = "email"
                )
        }
)
public class Utilisateur {

    @Id
    @SequenceGenerator(
            name = "utilisateur_sequence",
            sequenceName = "utilisateur_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "utilisateur_sequence"
    )
    @Column(
            name = "id",
            updatable = false
    )
    private Long id;
    @Column(
            name = "nom",
            nullable = false
    )
    private String nom;
    @Column(
            name = "prenom",
            nullable = false
    )
    private String prenom;
    @Column(
            name = "email",
            nullable = false
    )
    private String email;

    @Column(
            name = "date_de_naissance"
    )
    private Date date_de_naissance;
    @Column(
            name = "age"
    )
    private int age;
    @Column(
            name = "tel"
    )
    private int tel;
    @Column(
            name = "password",
            nullable = false
    )
    private String password;

    @Column(
            name = "username",
            nullable = false,
            unique = true
    )
    private String username;

    @Column(
            name = "etat",
            nullable = false
    )
    private boolean etat;

    @Column(
            name = "code",
            //nullable = false,
            unique = true
    )
    private String code;

    @ManyToOne
    private Role role;


    public Utilisateur(
            String nom,
            String prenom,
            String email,
            Date date_de_naissance,
            int tel,
            String username,
            String password,
            boolean etat,
            String code
    ) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.date_de_naissance = date_de_naissance;
        this.tel = tel;
        this.username = username;
        this.password = password;
        this.etat = etat;
        this.code = code;
    }


    public Utilisateur() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Date getDate() {
        return date_de_naissance;
    }

    public void setDate(Date date_de_naissance) {
        this.date_de_naissance = date_de_naissance;
    }

    public int getTel() {
        return tel;
    }

    public void setTel(int tel) {
        this.tel = tel;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public Date getDate_de_naissance() {
        return date_de_naissance;
    }

    public void setDate_de_naissance(Date date_de_naissance) {
        this.date_de_naissance = date_de_naissance;
    }

    public boolean isEtat() {
        return etat;
    }

    public void setEtat(boolean etat) {
        this.etat = etat;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
