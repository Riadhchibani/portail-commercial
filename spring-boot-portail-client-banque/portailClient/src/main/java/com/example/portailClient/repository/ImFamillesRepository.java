package com.example.portailClient.repository;

import com.example.portailClient.model.ImFamilles;
import com.example.portailClient.model.ObjectResponseData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImFamillesRepository extends JpaRepository<ImFamilles,Long> {

    @Query("SELECT new com.example.portailClient.model.ObjectResponseData(a) FROM ImArticle a, ImSousFamilles sf, ImFamilles f WHERE sf.imSousFamillesId = a.imSousFamillesId and f.imFamillesId =  sf.imSousFamillesId order by sf.imSousFamillesId")
    public List<ObjectResponseData> getData();
}
