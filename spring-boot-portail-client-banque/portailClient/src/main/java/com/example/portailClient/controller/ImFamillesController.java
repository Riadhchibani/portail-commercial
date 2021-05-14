package com.example.portailClient.controller;


import com.example.portailClient.model.ImFamilles;
import com.example.portailClient.model.ObjectResponseData;
import com.example.portailClient.service.ImFamillesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ImFamillesController {

    @Autowired
    private ImFamillesService imFamillesService;

    @GetMapping("/allFamilleData")
    public List<ObjectResponseData> getAllDatatFamille(){
        return this.imFamillesService.getAllFamille();
    }
}
