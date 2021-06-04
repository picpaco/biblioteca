package com.primas.javaee.bibliotecafinale.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/biblioteca-web")
public class TestController {
	
	@GetMapping("/")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/pagina-principale")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public String userAccess() {
		return "Pagina Principale.";
	}

	@GetMapping("/utenti")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Admin Lista Utenti.";
	}
	
	@GetMapping("/utenti/**")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public String dettagliAccess() {
		return "User Dettagli Profilo.";
	}

}
