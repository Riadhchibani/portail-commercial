package com.example.portailClient.service;


import com.example.portailClient.model.ObjectResponseData;
import com.example.portailClient.repository.Article;
import com.example.portailClient.repository.ImFamillesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class ImFamillesService {

    private ImFamillesRepository imFamillesRepository;
    private Article article;

    @Autowired
    public ImFamillesService(ImFamillesRepository imFamillesRepository, Article article) {
        this.imFamillesRepository = imFamillesRepository;
        this.article = article;
    }

    public List<ObjectResponseData> getAllFamille(String codeArticle) {
        List<ObjectResponseData> objectResponseData;
        objectResponseData = this.imFamillesRepository.getData();
        return objectResponseData
                .stream()
                .filter(
                        objectResponseData1 -> objectResponseData1.getImArticle().getCodeArticle().equals(codeArticle)
                ).collect(Collectors.toList());
    }
}
