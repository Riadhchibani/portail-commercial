package com.example.portailClient.repository;

import com.example.portailClient.model.ImArticle;
import com.example.portailClient.model.ImFamilles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImFamillesRepository extends JpaRepository<ImFamilles, Long> {
    @Query("FROM ImArticle a, ImSousFamilles sf WHERE (sf.imSousFamillesId = :id_Data and sf.imSousFamillesId = a.imSousFamillesId) and (a.codeArticle = :code_data or a.libelle LIKE %:libelle_data%)")
    List<ImArticle> getData(@Param("id_Data") Long id_Data, @Param("code_data") String code_data, @Param("libelle_data") String libelle_data);
}
