package com.example.portailClient.repository;

import com.example.portailClient.model.ImFamilles;
import com.example.portailClient.model.ObjectResponseData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImFamillesRepository extends JpaRepository<ImFamilles,Long> {

    @Query("")
    public List<ObjectResponseData> getData();
}
