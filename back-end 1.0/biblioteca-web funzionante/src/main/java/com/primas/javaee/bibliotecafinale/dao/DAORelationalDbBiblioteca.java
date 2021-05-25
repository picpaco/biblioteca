/*package com.primas.javaee.bibliotecafinale.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;
import java.util.stream.Collectors;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.primas.javaee.bibliotecafinale.models.Copia;
import com.primas.javaee.bibliotecafinale.models.Libro;



@Repository
public class DAORelationalDbBiblioteca implements IDAODatabaseBiblioteca {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	@Transactional
	public HashMap<Libro, ArrayList<Copia>> getLibri() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public int getNumeroCopieInBiblioteca() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	@Transactional
	public int getNumeroCopieLibro(Libro lib) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	@Transactional
	public Set<Libro> visualizzaLibri() {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Query<Libro> theQuery = 
				currentSession.createQuery("from Libro", Libro.class);
		
		Set<Libro> listaLibri = theQuery.getResultStream().collect(Collectors.toSet());
		
		
		return listaLibri;
	}

	@Override
	@Transactional
	public int getNumeroCopieLibroInPrestito(Libro lib) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	@Transactional
	public Copia getCopia(String codiceCopia) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Copia copia = currentSession.get(Copia.class, codiceCopia);
		// TODO Auto-generated method stub
		return copia;
	}

	@Override
	@Transactional
	public void aggiungiCopiaLibro(Libro lib) {
		
		Session currentSession = sessionFactory.getCurrentSession();				
		currentSession.saveOrUpdate(lib);


	}

	@Override
	@Transactional
	public void rimuoviCopia(String codiceCopia) {
		Session currentSession = sessionFactory.getCurrentSession();
		
//***** Aggiungere <?> e provare *************************//////////
 /*		Query theQuery = 
				currentSession.createQuery("delete from Copia where codice=: codicec");
		theQuery.setParameter("codicec", codiceCopia);
		
		theQuery.executeUpdate();	

	}

	@Override
	@Transactional
	public boolean esisteCopia(String codiceCopia) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public boolean prestaCopia(String codiceCopia) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public boolean restituisciCopia(String codiceCopia) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public void stampaNumeroCopieInPrestitoInBiblioteca() {
		// TODO Auto-generated method stub

	}

	@Override
	@Transactional
	public void stampaNumeroCopieLibroInPrestito(Libro lib) {
		// TODO Auto-generated method stub

	}

	@Override
	@Transactional
	public void svuota() {
		// TODO Auto-generated method stub

	}

}
*/
