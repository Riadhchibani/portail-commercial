package com.example.portailClient.controller;


import com.example.portailClient.model.DemandeProduit;
import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.service.DemandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class DemandeController {

    @Autowired
    private DemandeService demandeService;

    @GetMapping("/allDemand")
    public List<DemandeProduit> getAllDemands() {
        return this.demandeService.getAllDemand();
    }

    @PostMapping("/addDemand")
    public void addDemand(@RequestBody DemandeProduit demandeProduit) {
        this.demandeService.addDemand(demandeProduit);
    }

    @DeleteMapping("/deleteDemand/{id}")
    public void deleteDemand(@PathVariable("id") Long id) {
        this.demandeService.deleteDemand(id);
    }

    @PutMapping("/addAdmin/{id}")
    public void addAdmin(@PathVariable("id") Long id, @RequestBody Utilisateur utilisateur) {
        this.demandeService.setAdmin(id, utilisateur);
    }

    @GetMapping("/getDemandById/{id}")
    public List<DemandeProduit> getDemandsById(@PathVariable("id") Long id) {
        return this.demandeService.getDemandById(id);
    }

    @PutMapping("/updateUserDemand/{id}")
    public void updateUser(@PathVariable("id") Long id) {
        this.demandeService.setNull(id);
    }

    @GetMapping("/getDemandClient/{username}")
    public List<DemandeProduit> getAllDemandsClient(@PathVariable("username") String username) {
        return this.demandeService.getDemandsByUsername(username);
    }

}
