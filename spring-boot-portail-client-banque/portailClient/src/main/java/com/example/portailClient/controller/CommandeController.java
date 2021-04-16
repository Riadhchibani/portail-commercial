package com.example.portailClient.controller;


import com.example.portailClient.model.Commande;
import com.example.portailClient.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class CommandeController {

    @Autowired
    private CommandeService commandeService;

    @GetMapping("/allCommandes")
    public List<Commande> getComandes(){
        return this.commandeService.getAllCommandes();
    }
}
