package com.example.portailClient.service;


import com.example.portailClient.model.Commande;
import com.example.portailClient.repository.CommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommandeService {

    private CommandeRepository commandeRepository;

    @Autowired
    public CommandeService(CommandeRepository commandeRepository) {
        this.commandeRepository = commandeRepository;
    }

    public List<Commande> getAllCommandes() {
        List<Commande> commandes = new ArrayList<Commande>();
        this.commandeRepository.findAll().forEach(
                commande -> {
                    commandes.add(commande);
                }
        );
        return commandes;
    }

    public void addCommande(Commande commande) {
        this.commandeRepository.save(commande);
    }

}
