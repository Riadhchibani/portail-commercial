package com.example.portailClient.controller;

import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
@CrossOrigin(origins = "*")
@RestController
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping("/log")
    public String login(){
        return "login successfully";
    }

    @GetMapping("/allUsers")
    public List<Utilisateur> getAllUsers() {
        return utilisateurService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Utilisateur getUser(@PathVariable int id) {
        return utilisateurService.getUser(id);
    }

    @PostMapping
    public void saveUser(@RequestBody Utilisateur utilisateur) {
        utilisateurService.save(utilisateur);
    }

    @GetMapping("/{username}/{password}")
    public Utilisateur getbyusernamepwd(@PathVariable("username") String username ,@PathVariable("password") String password){
        return utilisateurService.findbyNamepwd(username, password);
    }

}
