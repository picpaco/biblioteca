package com.primas.bibliotecaprogettofinale.javaEE.config;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import com.primas.bibliotecaprogettofinale.javaEE.entity.Utente;
import com.primas.bibliotecaprogettofinale.javaEE.rest.UtenteDto;
//import com.primas.bibliotecaprogettofinale.javaEE.service.UtenteRegistrazioneService;

@Controller
public class BibliotecaController {
	
	
	 @Autowired
	   private  PasswordEncoder passwordEncoder;
	 
	 @Autowired
	 private SessionFactory sessionFactory;
	
	@GetMapping("/")
	public String showLanding() {
	return "landing";
	}
	
	@GetMapping("/pagina-principale")
	public String showHome() {
	return "home";
	}
	
	@GetMapping("/registrazione")
	public String registra() {
	return "registrazione";
	}
	
	@GetMapping("/accesso")
	public String login() {
	return "plain-login";
	}
	
	
	@GetMapping("/access-denied")
	public String accessDenied() {
	return "access-denied";
	}
	
	
	
	
	 @PostMapping("/register")
	 @Transactional
	    public String doRegister(@ModelAttribute UtenteDto userDto) {
	        String encodedPassword  = passwordEncoder.encode(userDto.getPassword());

	        Utente user = new Utente();
	        //user.setEnabled(Boolean.TRUE);
	        user.setPassword(encodedPassword);
	        user.setEmail(userDto.getEmail());
	        user.setNome(userDto.getNome());
	        user.setCognome(userDto.getCognome());
	        Session session = sessionFactory.getCurrentSession();
	        session.save(user);
	        /*UserAuthority boardAuthority = new UserAuthority();
	        boardAuthority.setAuthority("BOARD");
	        boardAuthority.setUser(user); 
	        user.getAuthorities().add(boardAuthority);
	        userRepository.save(user); */

	        return "landing";
	    }
	
	

} 

