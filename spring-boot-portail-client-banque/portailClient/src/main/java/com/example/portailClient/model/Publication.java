package com.example.portailClient.model;

import javax.persistence.*;
import java.util.Date;

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
            name = "publication",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String publication;
    @Column(
            name = "state",
            nullable = false,
            columnDefinition = "TEXT"
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

    @ManyToOne
    private Utilisateur utilisateur;

    public Publication(Long id_pub, String publication, String state, Date first_date, Date last_date, String description) {
        this.id_pub = id_pub;
        this.publication = publication;
        this.state = state;
        this.first_date = first_date;
        this.last_date = last_date;
        this.description = description;
    }
    public Publication(String publication, String state, Date first_date, Date last_date, String description) {
        this.publication = publication;
        this.state = state;
        this.first_date = first_date;
        this.last_date = last_date;
        this.description = description;
    }

    public Publication() {
    }

    public Long getId_pub() {
        return id_pub;
    }

    public void setId_pub(Long id_pub) {
        this.id_pub = id_pub;
    }

    public String getPublication() {
        return publication;
    }

    public void setPublication(String publication) {
        this.publication = publication;
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

    public String getText() {
        return description;
    }

    public void setText(String description) {
        this.description = description;
    }
}
