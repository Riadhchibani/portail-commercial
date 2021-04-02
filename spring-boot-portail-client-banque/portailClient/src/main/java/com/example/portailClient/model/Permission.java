package com.example.portailClient.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity( name = "permission")
@Table( name = "permission")
public class Permission {
    @Id
    @Column(
            name = "id_permission",
            nullable = false
    )
    private Long id_permission;
    @Column(
            name = "permission"
    )
    private String permission;

    public Permission(Long id_permission, String permission) {
        this.id_permission = id_permission;
        this.permission = permission;
    }

    public Permission() {

    }

    public Long getId_permission() {
        return id_permission;
    }

    public void setId_permission(Long id_permission) {
        this.id_permission = id_permission;
    }

    public String getPermission() {
        return permission;
    }

    public void setPermission(String permission) {
        this.permission = permission;
    }
}
