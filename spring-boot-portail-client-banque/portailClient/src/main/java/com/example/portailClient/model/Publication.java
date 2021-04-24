package com.example.portailClient.model;

import javax.persistence.*;
import java.sql.Date;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity(name = "Publication")
@Table(
        name = "Publication"
)
public class Publication {
    @Id
    @SequenceGenerator(
            name = "publication_sequence",
            sequenceName = "publication_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "publication_sequence"
    )
    @Column(
            name = "id",
            updatable = false
    )
    private Long id_pub;
    @Column(
            name = "title_pub",
            nullable = false
    )
    private String title_pub;
    @Column(
            name = "state",
            nullable = false
    )
    private String state;
    @Column(
            name = "first_date",
            nullable = false
    )
    private Date first_date;
    @Column(
            name = "last_date",
            nullable = false
    )
    private Date last_date;
    @Column(
            name = "description",
            nullable = false
    )
    private String description;


    @OneToOne
    private Utilisateur utilisateur;

    @Column(
            name = "imageName",
            nullable = false
    )
    private String imageName;

    @Column(
            name = "testPub",
            nullable = false
    )
    private boolean testPub;


    public Publication(String title_pub, String state, Date first_date, Date last_date, String description, String imageName, boolean testPub) {
        this.title_pub = title_pub;
        this.state = state;
        this.first_date = first_date;
        this.last_date = last_date;
        this.description = description;
        this.imageName = imageName;
        this.testPub = testPub;
    }

    public Publication() {
    }

    public Long getId_pub() {
        return id_pub;
    }

    public void setId_pub(Long id_pub) {
        this.id_pub = id_pub;
    }

    public String getTitle_pub() {
        return title_pub;
    }

    public void setTitle_pub(String title_pub) {
        this.title_pub = title_pub;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Date getFirst_date() {
        return first_date;
    }

    public void setFirst_date(Date first_date) {
        this.first_date = first_date;
    }

    public Date getLast_date() {
        return last_date;
    }

    public void setLast_date(Date last_date) {
        this.last_date = last_date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public boolean isTestPub() {
        return testPub;
    }

    public void setTestPub(boolean testPub) {
        this.testPub = testPub;
    }
}
