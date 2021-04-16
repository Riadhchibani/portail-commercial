package com.example.portailClient.service;

import com.example.portailClient.model.Publication;
import com.example.portailClient.repository.PublicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PublicationService {

    private PublicationRepository publicationRepository;

    @Autowired
    public PublicationService(PublicationRepository publicationRepository) {
        this.publicationRepository = publicationRepository;
    }

    public List<Publication> getAllPub() {
        List<Publication> listOfPub = new ArrayList<Publication>();
        this.publicationRepository.findAll().forEach(
                publication -> {
                    listOfPub.add(publication);
                }
        );
        return listOfPub;
    }

    public void addPub(Publication publication) {
        this.publicationRepository.save(publication);
    }

    public Publication updatePub(Publication publication) {
        return this.publicationRepository.save(publication);
    }

    public void dropPub(Long id) {
        this.publicationRepository.deleteById(id);
    }
}
