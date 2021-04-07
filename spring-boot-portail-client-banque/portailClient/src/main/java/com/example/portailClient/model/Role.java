package com.example.portailClient.model;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity (name = "role")
@Table(
        name = "role"
)
public class Role {
    @Id
    @Column(
            name = "id_role",
            nullable = false
    )
    private Long id_role;
    @Column(
            name = "role"
    )
    private String roles;
    @OneToMany(
            mappedBy = "role"
    )
    private List<Utilisateur> utilisateur = new ArrayList<>();



    public Role(Long id_role, String role) {
        this.id_role = id_role;
        this.roles = role;
    }
    public Role(){

    }

    public Long getId_role() {
        return id_role;
    }

    public void setId_role(Long id_role) {
        this.id_role = id_role;
    }

    public String getRole() {
        return roles;
    }

    public void setRole(String role) {
        this.roles = role;
    }
}

