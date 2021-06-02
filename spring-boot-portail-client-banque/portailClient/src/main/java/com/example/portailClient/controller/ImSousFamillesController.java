package com.example.portailClient.controller;


import com.example.portailClient.model.ImSousFamilles;
import com.example.portailClient.service.ImSousFamillesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;

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
