package com.example.portailClient.service;


import com.example.portailClient.model.Commande;
import com.example.portailClient.model.ImArticle;
import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.repository.Article;
import com.example.portailClient.repository.CommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleService {
    private Article articleRepository;

    @Autowired
    public ArticleService(Article articleRepository) {
        this.articleRepository = articleRepository;
    }

    public List<ImArticle> getAllArticle() {

        return this.articleRepository.findAll();
    }

}

