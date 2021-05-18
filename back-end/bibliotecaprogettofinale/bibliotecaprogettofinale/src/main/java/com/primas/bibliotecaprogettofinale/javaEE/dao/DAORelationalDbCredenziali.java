package com.primas.bibliotecaprogettofinale.javaEE.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Set;
import java.util.logging.Level;
import java.util.stream.Collectors;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.primas.bibliotecaprogettofinale.javaEE.entity.Libro;
import com.primas.bibliotecaprogettofinale.javaEE.entity.Utente;
import com.primas.bibliotecaprogettofinale.javaEE.rest.UtenteDto;


@Repository
public class DAORelationalDbCredenziali implements IDAODatabaseCredenziali {

	
	@Autowired
	private SessionFactory sessionFactory;
	
	/*@Autowired
	private  PasswordEncoder passwordEncoder;*/
	
	

	@Override
	@Transactional
	public void inserisciUtente(Utente utente) {
		Session currentSession = sessionFactory.getCurrentSession();				
		currentSession.saveOrUpdate(utente);

	}



	@Override
	@Transactional
	public Set<Utente> listaUtenti() {
	Session currentSession = sessionFactory.getCurrentSession();
		
		Query<Utente> theQuery = 
				currentSession.createQuery("from Utente", Utente.class);
		
		Set<Utente> listaUtenti = theQuery.getResultStream().collect(Collectors.toSet());
		
		
		return listaUtenti;
	}

	@Override
	@Transactional
	public Utente getUtente(int id) {
		// get the current hibernate session
				Session currentSession = sessionFactory.getCurrentSession();
				
				// now retrieve/read from database using the primary key
				Utente utente = currentSession.get(Utente.class, id);
				
				return utente;
	}



	/*@Override
	@Transactional
	
	public Utente registerNewUserAccount(UtenteDto accountDto) {
		    Utente utente = new Utente();
	    utente.setNome(accountDto.getNome());
	    utente.setCognome(accountDto.getCognome());
	    utente.setPassword(passwordEncoder.encode(accountDto.getPassword()));
	    
	    utente.setEmail(accountDto.getEmail());
	    //utente.setRole(new Role(Integer.valueOf(1), user));
	    
	    Session currentSession = sessionFactory.getCurrentSession();				
		currentSession.save(utente);
		return utente;
	}*/

	

}

