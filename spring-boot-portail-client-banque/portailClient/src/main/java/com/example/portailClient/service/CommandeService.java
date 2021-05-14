package com.example.portailClient.service;


import com.example.portailClient.model.Commande;
import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.repository.CommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public List<Commande> getAllCommandesByUsername(String username) {
        List<Commande> commandes = getAllCommandes();
        List<Commande> commandeList = commandes
                .stream()
                .filter(
                        commande -> commande.getUtilisateur_Client().getUsername().equals(username)
                )
                .collect(Collectors.toList());

        return commandeList;
    }

    public Commande setAcceptation(Long id, boolean accept) {
        Commande commande = this.commandeRepository.getOne(id);
        commande.setAcceptation(accept);
        return this.commandeRepository.save(commande);
    }

    public Commande getCommandeByDemandeId(Long id) {
        Commande commande = new Commande();
        commande = getAllCommandes()
                .stream()
                .filter(
                        commande1 -> commande1.getDemande().getId_demande() == id
                )
                .findAny()
                .get();
        return commande;
    }

    public void deleteCommandById(Long idCommand) {
        this.commandeRepository.deleteById(idCommand);
    }
}
