package com.example.portailClient.controller;


import com.example.portailClient.model.ImSousFamilles;
import com.example.portailClient.service.ImSousFamillesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ImSousFamillesController {

    @Autowired
    private ImSousFamillesService imSousFamillesService;

    @GetMapping("/getDataSousFamille")
    public List<ImSousFamilles> getDataSousFamille() {
        return this.imSousFamillesService.getAllSousFamille();
    }
}
