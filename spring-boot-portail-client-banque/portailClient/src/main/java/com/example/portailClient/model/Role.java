package com.example.portailClient.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

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
    private String id_role;
    @Column(
            name = "role"
    )
    private String role;

    public Role(String id_role, String role) {
        this.id_role = id_role;
        this.role = role;
    }
    public Role(){

    }

    public String getId_role() {
        return id_role;
    }

    public void setId_role(String id_role) {
        this.id_role = id_role;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}

