package com.example.portailClient.service;

import com.example.portailClient.model.Publication;
import com.example.portailClient.repository.PublicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.sql.Date;
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

    public List<Publication> getAllPubForClient() {
        List<Publication> listOfPub = new ArrayList<Publication>();
        this.publicationRepository.findAll().forEach(
                publication -> {
                    long millis = System.currentTimeMillis();
                    Date dateCur = new java.sql.Date(millis);

                    if (!publication.getFirst_date().after(dateCur) && !publication.getLast_date().before(dateCur) || publication.getFirst_date().after(dateCur) || publication.getLast_date().after(dateCur)) {
                        listOfPub.add(publication);
                    }
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
