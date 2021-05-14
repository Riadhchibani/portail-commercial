package com.example.portailClient.repository;


import com.example.portailClient.model.ImArticle;
import com.example.portailClient.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Article extends JpaRepository<ImArticle, String> {

}
