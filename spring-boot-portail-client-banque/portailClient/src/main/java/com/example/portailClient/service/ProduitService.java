package com.example.portailClient.service;

import com.example.portailClient.model.Produit;
import com.example.portailClient.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    public ProduitService(ProduitRepository produitRepository) {
        this.produitRepository = produitRepository;
    }

    public List<Produit> getAllProducts(){
        List<Produit> produits = new ArrayList<Produit>();
        this.produitRepository.findAll().forEach(
                produit -> {
                    produits.add(produit);
                }
        );
        return produits;
    }
}
