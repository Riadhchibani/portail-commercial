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

    @OneToMany
    private List<Permission> permission = new ArrayList<Permission>();



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

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }
}

