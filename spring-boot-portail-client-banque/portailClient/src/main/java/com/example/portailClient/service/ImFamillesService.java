package com.example.portailClient.service;


import com.example.portailClient.model.ImFamilles;
import com.example.portailClient.model.ImSousFamilles;
import com.example.portailClient.model.ObjectResponseData;
import com.example.portailClient.repository.ImFamillesRepository;
import com.example.portailClient.repository.ImSousFamillesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ImFamillesService {

    private ImFamillesRepository imFamillesRepository;

    @Autowired
    public ImFamillesService(ImFamillesRepository imFamillesRepository){
        this.imFamillesRepository = imFamillesRepository;
    }

    public List<ObjectResponseData> getAllFamille(){
       return this.imFamillesRepository.getData();
    }
}
