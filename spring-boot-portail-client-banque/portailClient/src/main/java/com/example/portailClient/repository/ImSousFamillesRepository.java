package com.example.portailClient.repository;


import com.example.portailClient.model.ImSousFamilles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImSousFamillesRepository extends JpaRepository<ImSousFamilles,Long> {
}
