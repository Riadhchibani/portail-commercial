package com.example.portailClient.model;


import javax.persistence.*;
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
    private String role;
    /*@ManyToOne
    @JoinColumn(
            name = "utilisateur"
    )
    private List<Utilisateur> utilisateur;
*/


    public Role(Long id_role, String role) {
        this.id_role = id_role;
        this.role = role;
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
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}

