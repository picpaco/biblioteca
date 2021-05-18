package com.primas.bibliotecaprogettofinale.javaEE.service;


import org.springframework.transaction.annotation.Transactional;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.primas.bibliotecaprogettofinale.javaEE.dao.IDAODatabaseCredenziali;
import com.primas.bibliotecaprogettofinale.javaEE.entity.Utente;
import com.primas.bibliotecaprogettofinale.javaEE.rest.UtenteDto;
import com.primas.bibliotecaprogettofinale.javaEE.rest.UtenteNotFoundException;

@Service
public class UtenteRegistrazioneService implements UtenteRegistrazione {	

	
	@Autowired
	private IDAODatabaseCredenziali daoCredenziali;
	
	

	@Transactional
	@Override
	public Utente registerNewUserAccount(UtenteDto accountDto) throws UtenteNotFoundException {
		Utente u = new Utente (accountDto.getNome(), accountDto.getCognome(), accountDto.getEmail(), accountDto.getPassword());
		daoCredenziali.inserisciUtente(u);
	    return u;
	}

}
