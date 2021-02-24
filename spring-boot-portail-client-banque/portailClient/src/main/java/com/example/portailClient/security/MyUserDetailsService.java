package com.example.portailClient.security;

import com.example.portailClient.model.Utilisateur;
import com.example.portailClient.repository.UtilisateurRepository;
import com.example.portailClient.service.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    UtilisateurRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional< Utilisateur >user = userRepository.findByusername(username);
        user.orElseThrow(() -> new UsernameNotFoundException("not Found: " + username));
        return user.map(MyUserDetails::new).get();

    }
}