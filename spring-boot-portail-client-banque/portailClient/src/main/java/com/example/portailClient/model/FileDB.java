package com.example.portailClient.model;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

import java.util.Date;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "files")
public class FileDB {
    @Id
    @SequenceGenerator(
            name = "file_sequence",
            sequenceName = "file_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "file_sequence"
    )
    @Column(
            name = "id",
            updatable = false,
            unique = true
    )
    private Long id;

    private String name;


    public FileDB() {
    }

    public FileDB(String name) {
        this.name = name;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}