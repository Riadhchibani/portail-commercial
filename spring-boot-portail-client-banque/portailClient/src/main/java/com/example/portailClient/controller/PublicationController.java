package com.example.portailClient.controller;


import com.example.portailClient.model.Publication;
import com.example.portailClient.service.PublicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class PublicationController {

    @Autowired
    private PublicationService publicationService;

    @GetMapping("/allPublication")
    public List<Publication> getAllPublication() {
        return this.publicationService.getAllPub();
    }

    @GetMapping("/allPublicationForClient")
    public List<Publication> getAllPublicationForClient() {
        return this.publicationService.getAllPubForClient();
    }

    @PostMapping("/savePublication")
    public void savePub(@RequestBody Publication publication) {
        this.publicationService.addPub(publication);
    }

    @PutMapping("/updatePub")
    public ResponseEntity<Publication> updatePublication(@RequestBody Publication publication) {
        Publication publication1 = this.publicationService.updatePub(publication);
        return new ResponseEntity<>(publication1, HttpStatus.OK);
    }

    @DeleteMapping("/deletePub/{id}")
    public void deletePub(@PathVariable("id") Long id) {
        this.publicationService.dropPub(id);
    }


}
