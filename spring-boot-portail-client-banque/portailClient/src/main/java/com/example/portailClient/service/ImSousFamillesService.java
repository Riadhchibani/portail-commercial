package com.example.portailClient.service;


import com.example.portailClient.model.ImFamilles;
import com.example.portailClient.model.ImSousFamilles;
import com.example.portailClient.repository.ImSousFamillesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImSousFamillesService {

    private ImSousFamillesRepository imSousFamillesRepository;

    @Autowired
    public ImSousFamillesService(ImSousFamillesRepository imSousFamillesRepository) {
        this.imSousFamillesRepository = imSousFamillesRepository;
    }

    public List<ImSousFamilles> getAllSousFamille() {
        return this.imSousFamillesRepository.findAll();
    }
}
