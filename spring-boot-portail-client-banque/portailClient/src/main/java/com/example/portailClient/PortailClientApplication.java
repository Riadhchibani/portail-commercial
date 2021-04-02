package com.example.portailClient;

import com.example.portailClient.controller.UtilisateurController;
import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.repository.UtilisateurRepository;
import com.example.portailClient.service.UtilisateurService;
import org.apache.coyote.http11.AbstractHttp11Protocol;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatConnectorCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Arrays;
import java.util.Collections;


@SpringBootApplication
//@EnableJpaRepositories(basePackageClasses = UtilisateurRepository.class)
public class PortailClientApplication  {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(PortailClientApplication.class);
        app.setDefaultProperties(Collections
                .singletonMap("server.port", "8083"));
        app.run(args);
    }



}
/**

 implements CommandLineRunner
 @Override
 public void run(String... args) throws Exception {
 Utilisateur u = new Utilisateur(
 4L,
 "len",
 "ben f",
 "sdsdsd@qsd.qsd",
 19,
 "8/8/2000",
 65848,
 "uer1",
 "14568",
 "admin"
 );
 UtilisateurService utilisateurController = new UtilisateurService();
 utilisateurController.save(u);
 }

 /------------------------------------
 @Bean
 CommandLineRunner commandLineRunner(UtilisateurRepository utilisateurRepository){
 return args -> {
 Utilisateur utilisateur = new Utilisateur(
 "len",
 "ben f",
 "sdsdsd@qsd.qsd",
 19,
 "8/8/2000",
 65848,
 "uer1",
 "14568",
 "admin"
 );
 utilisateurRepository.save(utilisateur);
 };
 }
 */