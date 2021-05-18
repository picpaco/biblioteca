package com.primas.bibliotecaprogettofinale.javaEE.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.primas.bibliotecaprogettofinale.javaEE.dao.IDAODatabaseBiblioteca;
import com.primas.bibliotecaprogettofinale.javaEE.entity.Copia;
import com.primas.bibliotecaprogettofinale.javaEE.entity.Libro;

@Service
public class BibliotecaServiceImpl implements BibliotecaService {
	
	@Autowired
	private IDAODatabaseBiblioteca bibliotecaDAO;

	@Override
	@Transactional
	public HashMap<Libro, ArrayList<Copia>> getLibri() {
		// TODO Auto-generated method stub
		return bibliotecaDAO.getLibri();
	}

	@Override
	@Transactional
	public int getNumeroCopieInBiblioteca() {
		// TODO Auto-generated method stub
		return bibliotecaDAO.getNumeroCopieInBiblioteca();
	}

	@Override
	@Transactional
	public int getNumeroCopieLibro(Libro lib) {
		// TODO Auto-generated method stub
		return  bibliotecaDAO.getNumeroCopieLibro(lib);
	}

	@Override
	public Set<Libro> visualizzaLibri() {
		// TODO Auto-generated method stub
		return bibliotecaDAO.visualizzaLibri();
	}

	@Override
	@Transactional
	public int getNumeroCopieLibroInPrestito(Libro lib) {
		// TODO Auto-generated method stub
		return bibliotecaDAO.getNumeroCopieLibroInPrestito(lib);
	}

	@Override
	@Transactional
	public Copia getCopia(String codiceCopia) {
		// TODO Auto-generated method stub
		return bibliotecaDAO.getCopia(codiceCopia);
	}

	@Override
	@Transactional
	public void aggiungiCopiaLibro(Libro lib) {
		// TODO Auto- method stub		
		bibliotecaDAO.aggiungiCopiaLibro(lib);
		
	}

	@Override
	@Transactional
	public void rimuoviCopia(String codiceCopia) {
		// TODO Auto-generated method stub
		bibliotecaDAO.rimuoviCopia(codiceCopia);
		
	}

	@Override
	@Transactional
	public boolean esisteCopia(String codiceCopia) {
		// TODO Auto-generated method stub
		return bibliotecaDAO.esisteCopia(codiceCopia);
	}

	@Override
	@Transactional
	public boolean prestaCopia(String codiceCopia) {
		// TODO Auto-generated method stub
		return bibliotecaDAO.prestaCopia(codiceCopia);
	}

	@Override
	@Transactional
	public boolean restituisciCopia(String codiceCopia) {
		// TODO Auto-generated method stub
		return bibliotecaDAO.restituisciCopia(codiceCopia);
	}

	@Override
	@Transactional
	public void stampaNumeroCopieInPrestitoInBiblioteca() {
		// TODO Auto-generated method stub
		bibliotecaDAO.stampaNumeroCopieInPrestitoInBiblioteca();
		
	}

	@Override
	@Transactional
	public void stampaNumeroCopieLibroInPrestito(Libro lib) {
		// TODO Auto-generated method stub
		bibliotecaDAO.stampaNumeroCopieLibroInPrestito(lib);
		
	}

	@Override
	@Transactional
	public void svuota() {
		// TODO Auto-generated method stub
		bibliotecaDAO.svuota();
		
	}

}
