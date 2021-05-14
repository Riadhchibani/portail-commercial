package com.example.portailClient.controller;


import com.example.portailClient.model.Reclamation;
import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.service.ReclamationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ReclamationController {

    @Autowired
    private ReclamationService reclamationService;

    @GetMapping("/allReclamations")
    public List<Reclamation> getAllReclamation() {
        return this.reclamationService.getAllReclamation();
    }

    @PostMapping("/addReclamation")
    public void addReclamations(@RequestBody Reclamation reclamation) {
        this.reclamationService.addReclamation(reclamation);
    }

    @DeleteMapping("/deleteReclamation/{id}")
    public void dropReclamation(@PathVariable("id") Long id) {
        this.reclamationService.deleteReclamation(id);
    }

    @GetMapping("/getReclamation/{username}")
    public List<Reclamation> getAllReclamationbyUsername(@PathVariable("username") String username) {
        return this.reclamationService.getAllReclamationByUsername(username);
    }

    @PutMapping("/addResponse/{idReclamation}/{response}")
    public void updateUserState(@PathVariable("idReclamation") Long idReclamation, @PathVariable("response") String response) {
        this.reclamationService.addResponse(idReclamation, response);
    }
}
