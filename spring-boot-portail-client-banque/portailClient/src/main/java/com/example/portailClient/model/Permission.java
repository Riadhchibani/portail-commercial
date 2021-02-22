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
    private String id_permission;
    @Column(
            name = "permission"
    )
    private String permission;

    public Permission(String id_permission, String permission) {
        this.id_permission = id_permission;
        this.permission = permission;
    }

    public Permission() {

    }

    public String getId_permission() {
        return id_permission;
    }

    public void setId_permission(String id_permission) {
        this.id_permission = id_permission;
    }

    public String getPermission() {
        return permission;
    }

    public void setPermission(String permission) {
        this.permission = permission;
    }
}
