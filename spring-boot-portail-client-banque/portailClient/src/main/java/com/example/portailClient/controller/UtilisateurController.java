package com.example.portailClient.controller;

import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@CrossOrigin(origins = "*")
@RestController
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping("login/{username}/{password}")
    public Utilisateur login(@PathVariable("username") String username, @PathVariable("password") String password) {
        return this.utilisateurService.findbyNamepwd(username, password);
    }

    @GetMapping("/allUsers")
    public List<Utilisateur> getAllUsers() {
        return utilisateurService.getAllUsers();
    }


    @PostMapping("/saveUser")
    public void saveUser(@RequestBody Utilisateur utilisateur) {
        utilisateurService.save(utilisateur);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Utilisateur> deleteUser(@PathVariable("id") Long id) {
        this.utilisateurService.dropUserById(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    @GetMapping("/getUser/{username}")
    public Utilisateur getUserByUsername(@PathVariable("username") String username) {
        return this.utilisateurService.getUserByUsername(username);
    }

    @PutMapping("/updateUser")
    public ResponseEntity<Utilisateur> updateUser(@RequestBody Utilisateur utilisateur) {
        Utilisateur updateUser = this.utilisateurService.updateUser(utilisateur);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }

    @PutMapping("/updateStateOfUser/{id}/{stateUser}")
    public Utilisateur updateUserState(@PathVariable("id") Long id, @PathVariable("stateUser") boolean stateUser) {
        Utilisateur updateUser = this.utilisateurService.updateState(id, stateUser);
        return updateUser;
    }

    @GetMapping("/getUserByID/{id}")
    public Utilisateur getUserById(@PathVariable("id") Long id) {
        return this.utilisateurService.getUserById(id);
    }


}
