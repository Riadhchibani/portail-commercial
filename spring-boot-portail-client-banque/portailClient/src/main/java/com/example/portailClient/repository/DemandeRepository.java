package com.example.portailClient.repository;

import com.example.portailClient.model.DemandeProduit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DemandeRepository extends JpaRepository<DemandeProduit,Long> {
}
