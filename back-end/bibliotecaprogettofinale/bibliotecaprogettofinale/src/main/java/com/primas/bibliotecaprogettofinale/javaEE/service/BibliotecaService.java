package com.primas.bibliotecaprogettofinale.javaEE.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;

import com.primas.bibliotecaprogettofinale.javaEE.entity.Copia;
import com.primas.bibliotecaprogettofinale.javaEE.entity.Libro;

public interface BibliotecaService {
	
	public HashMap<Libro, ArrayList<Copia>> getLibri();

	public int getNumeroCopieInBiblioteca();

	public int getNumeroCopieLibro(Libro lib);

	public Set<Libro> visualizzaLibri();

	public int getNumeroCopieLibroInPrestito(Libro lib);

	public Copia getCopia(String codiceCopia);

	public void aggiungiCopiaLibro(Libro lib);

	public void rimuoviCopia(String codiceCopia);

	public boolean esisteCopia(String codiceCopia);

	public boolean prestaCopia(String codiceCopia) ;

	public boolean restituisciCopia(String codiceCopia) ;

	public void stampaNumeroCopieInPrestitoInBiblioteca();

	public void stampaNumeroCopieLibroInPrestito(Libro lib);

	public void svuota();

}
