package com.example.portailClient.controller;


import com.example.portailClient.model.ImArticle;
import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/getDataArticle")
    public List<ImArticle> getDataArticle() {
        return this.articleService.getAllArticle();
    }
}
