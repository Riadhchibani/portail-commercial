package com.example.portailClient.service;


import com.example.portailClient.model.EmailMessage;
import com.example.portailClient.model.Reclamation;
import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.repository.ReclamationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

@Service
public class ReclamationService {

    private ReclamationRepository reclamationRepository;

    @Value("${gmail.username}")
    private String username;
    @Value("${gmail.password}")
    private String password;

    @Autowired
    private UtilisateurService utilisateurService;

    @Autowired
    public ReclamationService(ReclamationRepository reclamationRepository) {
        this.reclamationRepository = reclamationRepository;
    }

    public List<Reclamation> getAllReclamation() {
        List<Reclamation> reclamations = new ArrayList<Reclamation>();
        this.reclamationRepository.findAll().forEach(
                reclamation -> {
                    reclamations.add(reclamation);
                }
        );
        return reclamations;
    }

    public void addReclamation(Reclamation reclamation) {
        List<String> listEmailAdminUser = this.utilisateurService.getEmailsAdmin();
        EmailMessage emailmessage = new EmailMessage();
        emailmessage.setSubject("Reclamation");
        emailmessage.setBody("Reclamation de client :" + reclamation.getUtilisateur().getUsername());
        emailmessage.setTo_address("riadhchibani144@gmail.com");

        try {
            sendmail(emailmessage);
        } catch (Exception e) {
            System.out.println(e.toString());
        }

        this.reclamationRepository.save(reclamation);
    }

    public void deleteReclamation(Long id) {
        this.reclamationRepository.deleteById(id);
    }

    public List<Reclamation> getAllReclamationByUsername(String username) {
        List<Reclamation> reclamations;
        List<Reclamation> reclamationList = getAllReclamation();
        reclamations = reclamationList
                .stream()
                .filter(
                        reclamation -> {
                            if (reclamation.getUtilisateur().getUsername().equals(username)) {
                                return true;
                            } else return false;
                        }
                ).collect(Collectors.toList());
        return reclamations;
    }

    public void addResponse(Long idReclamation, String response, String username) {
        Utilisateur utilisateur = this.utilisateurService.getUserByUsername(username);
        List<Reclamation> reclamationList = getAllReclamation();
        Reclamation reclamationWithResponse = reclamationList.stream()
                .filter(
                        reclamation -> {
                            if (reclamation.getId_reclamation() == idReclamation) {
                                reclamation.setUtilisateur_admin(utilisateur);
                                return true;
                            } else return false;
                        }
                )
                .findAny()
                .get();
        reclamationWithResponse.setReponse(response);
        this.reclamationRepository.save(reclamationWithResponse);
    }

    private void sendmail(EmailMessage emailmessage) throws MessagingException {

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, password);
                    }
                });

        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress(username, false));

        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailmessage.getTo_address()));
        msg.setSubject(emailmessage.getSubject());
        msg.setContent(emailmessage.getBody(), "text/html");
        msg.setSentDate(new Date());

        MimeBodyPart messageBodyPart = new MimeBodyPart();
        messageBodyPart.setContent(emailmessage.getBody(), "text/html");
        // sends the e-mail
        Transport.send(msg);

    }

}
