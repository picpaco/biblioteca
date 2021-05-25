package com.primas.javaee.bibliotecafinale.playload;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.primas.javaee.bibliotecafinale.models.Copia;

public class LibroRequest {
	
	@NotBlank
	@Size(min=5, max=7, message="campo obbligatorio di 5 o 7 caratteri")
	private String codice;
	
	@NotBlank
	@Size(min=1, message="campo obbligatorio")
	private String titolo;

	@NotBlank
	@Size(min=1, message="campo obbligatorio")
	private String autore;
	
	private int numeroCopie;
	
	private Set<Copia> copie = new HashSet<>();

	public String getCodice() {
		return codice;
	}

	public void setCodice(String codice) {
		this.codice = codice;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public String getAutore() {
		return autore;
	}

	public void setAutore(String autore) {
		this.autore = autore;
	}

	public int getNumeroCopie() {
		return numeroCopie;
	}

	public void setNumeroCopie(int numeroCopie) {
		this.numeroCopie = numeroCopie;
	}

	public Set<Copia> getCopie() {
		return copie;
	}

	public void setCopie(Set<Copia> copie) {
		this.copie = copie;
	}
	
	
}
