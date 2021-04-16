package com.example.portailClient.service;


import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.repository.UtilisateurRepository;
import com.fasterxml.classmate.util.ConcurrentTypeCache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.stream.Collector;

@Service
public class UtilisateurService {


    private UtilisateurRepository utilisateurRepository;

    @Autowired
    public UtilisateurService(UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;

    }

    public List<Utilisateur> getAllUsers() {
        List<Utilisateur> users = new ArrayList<Utilisateur>();
        utilisateurRepository.findAll().forEach(user -> users.add(user));
        return users;
    }


    public void save(Utilisateur utilisateur) {
        utilisateurRepository.save(utilisateur);
    }


    public Utilisateur findbyNamepwd(String username, String password) {
        List<Utilisateur> listOfUser = getAllUsers();
        Utilisateur user = listOfUser.stream()
                .filter(userName -> userName.getUsername().equals(username) && userName.getPassword().equals(password))
                .findAny()
                .get();
        return user;
    }

    public void dropUserById(Long id) {
        this.utilisateurRepository.deleteById(id);
    }

    public Utilisateur getUserByUsername(String username) {
        List<Utilisateur> listOfUser = getAllUsers();
        Utilisateur user = listOfUser.stream()
                .filter(userName -> userName.getUsername().equals(username))
                .findAny()
                .get();
        return user;
    }

    public Utilisateur updateUser(Utilisateur utilisateur) {
        return this.utilisateurRepository.save(utilisateur);
    }

    public Utilisateur getUserById(Long id) {
        List<Utilisateur> listOfUser = getAllUsers();
        Utilisateur user = listOfUser.stream()
                .filter(userName -> userName.getId().equals(id))
                .findAny()
                .get();
        return user;
    }

    public Utilisateur updateState(Long id, boolean stateUser) {
        Utilisateur user = this.utilisateurRepository.getOne(id);
        user.setEtat(stateUser);
        return this.utilisateurRepository.save(user);
    }

}
