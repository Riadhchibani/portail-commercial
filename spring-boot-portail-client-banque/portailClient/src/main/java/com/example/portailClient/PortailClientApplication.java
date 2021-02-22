package com.example.portailClient;

import com.example.portailClient.controller.UtilisateurController;
import org.apache.coyote.http11.AbstractHttp11Protocol;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatConnectorCustomizer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PortailClientApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortailClientApplication.class, args);
    }

    @Bean
    TomcatConnectorCustomizer headerRejectionCustomizer() {
        return (connector) ->
                ((AbstractHttp11Protocol<UtilisateurController>) connector.getProtocolHandler()).setRejectIllegalHeader(false);
    }



}
