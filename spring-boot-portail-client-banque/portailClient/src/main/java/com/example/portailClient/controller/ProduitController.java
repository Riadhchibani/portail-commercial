package com.example.portailClient.controller;


import com.example.portailClient.model.Produit;
import com.example.portailClient.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ProduitController {

    @Autowired
    private ProduitService produitService;

    @GetMapping("/allProducts")
    public List<Produit> getProducts(){
        return this.produitService.getAllProducts();
    }



}
