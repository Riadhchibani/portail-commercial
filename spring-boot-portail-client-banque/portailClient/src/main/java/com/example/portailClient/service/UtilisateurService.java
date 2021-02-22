package com.example.portailClient.service;


import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.repository.UtilisateurRepository;
import com.fasterxml.classmate.util.ConcurrentTypeCache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Service
public class UtilisateurService {


    private final UtilisateurRepository utilisateurRepository;

    @Autowired
    public UtilisateurService(UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;

    }

    public List<Utilisateur> getAllUsers() {
        List<Utilisateur> users = new ArrayList<Utilisateur>();
        utilisateurRepository.findAll().forEach(user -> users.add(user));
        return users;
    }

    public Utilisateur getUser(int id) {
        return utilisateurRepository.findById(id).get();
    }

    public void save(Utilisateur utilisateur) {
        utilisateurRepository.save(utilisateur);
    }


}
