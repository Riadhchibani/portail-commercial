package com.example.portailClient.service;

import com.example.portailClient.model.DemandeProduit;
import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.repository.DemandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DemandeService {


    public DemandeRepository demandeRepository;

    @Autowired
    public DemandeService(DemandeRepository demandeRepository) {
        this.demandeRepository = demandeRepository;
    }

    public List<DemandeProduit> getAllDemand() {
        List<DemandeProduit> demandeProduits = new ArrayList<DemandeProduit>();
        this.demandeRepository.findAll().forEach(
                demandeProduit -> {
                    demandeProduits.add(demandeProduit);
                }
        );
        return demandeProduits;
    }

    public void deleteDemand(Long id) {
        this.demandeRepository.deleteById(id);
    }

    public void addDemand(DemandeProduit demandeProduit) {
        this.demandeRepository.save(demandeProduit);
    }

    public DemandeProduit setAdmin(Long id, Utilisateur utilisateur) {
        DemandeProduit demandeProduit = this.demandeRepository.getOne(id);
        demandeProduit.setUtilisateurAdmin(utilisateur);
        return this.demandeRepository.save(demandeProduit);
    }

    public List<DemandeProduit> getDemandById(Long id) {
        List<DemandeProduit> demandeProduitByAdminId = new ArrayList<DemandeProduit>();
        List<DemandeProduit> demandeProduits = getAllDemand();
        demandeProduitByAdminId = demandeProduits
                .stream()
                .filter(
                        demandeProduit -> {
                            if (!(demandeProduit.getUtilisateurAdmin() == null) && demandeProduit.getUtilisateurAdmin().getId().equals(id)) {
                                return true;
                            }
                            return false;
                        }
                )
                .collect(Collectors.toList());
        return demandeProduitByAdminId;
    }

    public void setNull(Long id) {
        DemandeProduit demandeProduit = this.demandeRepository.getOne(id);
        demandeProduit.setUtilisateurAdmin(null);
        this.demandeRepository.save(demandeProduit);
    }

    public List<DemandeProduit> getDemandsByUsername(String username) {
        List<DemandeProduit> demandeProduits;
        List<DemandeProduit> demandeProduitList = getAllDemand();
        demandeProduits = demandeProduitList
                .stream()
                .filter(
                        demandeProduit -> demandeProduit.getUtilisateurClient().getUsername().equals(username)
                ).collect(Collectors.toList());
        return demandeProduits;
    }
}