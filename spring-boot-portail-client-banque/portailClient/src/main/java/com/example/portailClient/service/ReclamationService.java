package com.example.portailClient.service;


import com.example.portailClient.model.Reclamation;
import com.example.portailClient.repository.ReclamationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReclamationService {

    private ReclamationRepository reclamationRepository;

    @Autowired
    public ReclamationService(ReclamationRepository reclamationRepository){
        this.reclamationRepository = reclamationRepository;
    }

    public List<Reclamation> getAllReclamation(){
        List<Reclamation> reclamations = new ArrayList<Reclamation>();
        this.reclamationRepository.findAll().forEach(
                reclamation -> {
                    reclamations.add(reclamation);
                }
        );
        return reclamations;
    }

    public void addReclamation(Reclamation reclamation){
        this.reclamationRepository.save(reclamation);
    }

    public void deleteReclamation(Long id){
        this.reclamationRepository.deleteById(id);
    }
}
