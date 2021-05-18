package com.primas.bibliotecaprogettofinale.javaEE.service;

import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.primas.bibliotecaprogettofinale.javaEE.dao.IDAODatabaseCredenziali;
import com.primas.bibliotecaprogettofinale.javaEE.entity.Utente;

@Service
public class UtenteServiceImpl implements UtenteService {
	
	@Autowired
	private IDAODatabaseCredenziali daoCredenziali;



	@Override
	@Transactional

	public void inserisciUtente(Utente utente) {
		// TODO Auto-generated method stub
		daoCredenziali.inserisciUtente(utente);
		
	}



	@Override
	@Transactional

	public Set<Utente> listaUtenti() {
		// TODO Auto-generated method stub
		return daoCredenziali.listaUtenti();
	}

	@Override
	public Utente getUtente(int id) {
		// TODO Auto-generated method stub
		return daoCredenziali.getUtente(id);
	}

}
