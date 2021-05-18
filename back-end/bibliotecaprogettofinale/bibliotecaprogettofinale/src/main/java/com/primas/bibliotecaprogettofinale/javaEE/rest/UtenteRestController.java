package com.primas.bibliotecaprogettofinale.javaEE.rest;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.primas.bibliotecaprogettofinale.javaEE.entity.Utente;
import com.primas.bibliotecaprogettofinale.javaEE.service.UtenteService;
@RestController
@RequestMapping("/pagina-principale")
public class UtenteRestController {
	
	@Autowired
	private UtenteService utenteService;
	
	
	@GetMapping("/utenti")
	public Set<Utente> getUtenti() {
		
		return utenteService.listaUtenti();
		
	}
	
	
	@GetMapping("/utenti/{idUtente}")
	public Utente getUtente(@PathVariable int idUtente) {
		
		Utente utente = utenteService.getUtente(idUtente);
		
		if (utente == null) {
			throw new UtenteNotFoundException("Utente id not found - " + idUtente);
		}
		
		return utente;
	} 
	

}
