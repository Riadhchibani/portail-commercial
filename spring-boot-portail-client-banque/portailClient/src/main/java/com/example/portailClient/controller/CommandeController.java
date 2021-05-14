package com.example.portailClient.controller;


import com.example.portailClient.model.Commande;
import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class CommandeController {

    @Autowired
    private CommandeService commandeService;

    @GetMapping("/allCommandes")
    public List<Commande> getComandes() {
        return this.commandeService.getAllCommandes();
    }

    @PostMapping("/addCommande")
    public Commande addComandes(@RequestBody Commande commande) {
        this.commandeService.addCommande(commande);
        return commande;
    }

    @GetMapping("/getCommandes/{username}")
    public List<Commande> getAllCommandeByUsername(@PathVariable("username") String username) {
        return this.commandeService.getAllCommandesByUsername(username);
    }

    @PutMapping("/setAcceptation/{id}/{accept}")
    public Commande setAccelaration(
            @PathVariable("id") Long id,
            @PathVariable("accept") boolean accept
    ) {
        Commande commande = this.commandeService.setAcceptation(id, accept);
        return commande;
    }

    @GetMapping("/getCommandeByDemandeId/{id}")
    public Commande getCommande(@PathVariable("id") Long id) {
        return this.commandeService.getCommandeByDemandeId(id);
    }

    @DeleteMapping("deleteCommand/{idCommand}")
    public void deleteCommand(@PathVariable("idCommand") Long idCommand) {
        this.commandeService.deleteCommandById(idCommand);
    }
}
