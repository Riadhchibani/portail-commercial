package com.example.portailClient.controller;


import com.example.portailClient.model.DataResponse;
import com.example.portailClient.model.ImArticle;
import com.example.portailClient.model.ImFamilles;
import com.example.portailClient.model.ObjectResponseData;
import com.example.portailClient.service.ImFamillesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ImFamillesController {

    @Autowired
    private ImFamillesService imFamillesService;

    @PostMapping("/getProduct")
    public List<ImArticle> getproductByCode(@RequestBody DataResponse article) {
        return this.imFamillesService.getProductCode(article);
    }


}
