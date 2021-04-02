package com.example.portailClient.model;

import java.util.Date;

public class Publication {
    private Long id_pub;
    private String publication;
    private String state;
    private Date first_date;
    private Date last_date;
    private String text;

    public Publication(Long id_pub, String publication, String state, Date first_date, Date last_date, String text) {
        this.id_pub = id_pub;
        this.publication = publication;
        this.state = state;
        this.first_date = first_date;
        this.last_date = last_date;
        this.text = text;
    }

    public Publication(){}

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
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
