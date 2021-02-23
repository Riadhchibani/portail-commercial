package com.example.portailClient.model;

import javax.persistence.*;

import static javax.persistence.GenerationType.SEQUENCE;

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
    private int id;
    @Column(
            name = "nom",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String nom;
    @Column(
            name = "prenom",
            nullable = false
    )
    private String prenom;
    @Column(
            name = "email",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String email;
    @Column(
            name = "age",
            nullable = false
    )
    private int age;
    @Column(
            name = "date",
            columnDefinition = "TEXT"
    )
    private String date;
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
            nullable = false
    )
    private String username;

    public Utilisateur(
            int id,
            String nom,
            String prenom,
            String email,
            int age,
            String date,
            int tel,
            String username,
            String password
    ) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.age = age;
        this.date = date;
        this.tel = tel;
        this.username = username;
        this.password = password;
    }


    public Utilisateur() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
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
}
