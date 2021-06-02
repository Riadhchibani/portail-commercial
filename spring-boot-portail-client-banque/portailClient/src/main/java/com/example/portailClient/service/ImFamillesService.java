package com.example.portailClient.service;


import com.example.portailClient.model.DataResponse;
import com.example.portailClient.model.ImArticle;
import com.example.portailClient.repository.Article;
import com.example.portailClient.repository.ImFamillesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ImFamillesService {

    private ImFamillesRepository imFamillesRepository;
    private Article article;

    @Autowired
    public ImFamillesService(ImFamillesRepository imFamillesRepository, Article article) {
        this.imFamillesRepository = imFamillesRepository;
        this.article = article;
    }

    public List<ImArticle> getProductCode(DataResponse dataResponse) {
        List<ImArticle> list = this.imFamillesRepository.getData(
                dataResponse.getId_data(),
                dataResponse.getCode_data());
        List<ImArticle> listLibelle = this.imFamillesRepository.getDataByLibelle(
                dataResponse.getId_data(),
                dataResponse.getLibelle_data());
        return (!dataResponse.getLibelle_data().isEmpty() && !dataResponse.getCode_data().isEmpty() ? list
                : (!dataResponse.getCode_data().isEmpty() ? list
                : !dataResponse.getLibelle_data().isEmpty() ? listLibelle
                : new ArrayList<>()));
    }

}
