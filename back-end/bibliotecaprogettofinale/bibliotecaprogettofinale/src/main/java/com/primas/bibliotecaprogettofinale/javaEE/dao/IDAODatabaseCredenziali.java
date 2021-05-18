package com.primas.bibliotecaprogettofinale.javaEE.dao;

import java.util.Set;

import com.primas.bibliotecaprogettofinale.javaEE.entity.Utente;
import com.primas.bibliotecaprogettofinale.javaEE.rest.UtenteDto;

public interface IDAODatabaseCredenziali {
		
	void inserisciUtente (Utente utente);
    
    Set <Utente> listaUtenti();
    
    Utente getUtente(int id);
    
    //Utente registerNewUserAccount(UtenteDto accountDto);
    
    
	

}
