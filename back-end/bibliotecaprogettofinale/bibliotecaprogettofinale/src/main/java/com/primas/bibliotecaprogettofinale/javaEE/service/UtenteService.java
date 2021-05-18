package com.primas.bibliotecaprogettofinale.javaEE.service;

import java.util.Set;

import com.primas.bibliotecaprogettofinale.javaEE.entity.Utente;

public interface UtenteService {
	
	
	void inserisciUtente (Utente utente);
    
    Set <Utente> listaUtenti();
    
    Utente getUtente(int id);

}
