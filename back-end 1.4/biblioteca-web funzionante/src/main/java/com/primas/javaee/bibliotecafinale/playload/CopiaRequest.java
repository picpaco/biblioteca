package com.primas.javaee.bibliotecafinale.playload;

import javax.validation.constraints.NotBlank;

import com.primas.javaee.bibliotecafinale.models.Libro;

public class CopiaRequest {

	private Libro libroAssociato;

	private boolean isInPrestito;

	@NotBlank
	private String codice;

	@NotBlank
	private String codiceLibro;

	public Libro getLibroAssociato() {
		return libroAssociato;
	}

	public void setLibroAssociato(Libro libroAssociato) {
		this.libroAssociato = libroAssociato;
	}

	public boolean isInPrestito() {
		return isInPrestito;
	}

	public void setInPrestito(boolean isInPrestito) {
		this.isInPrestito = isInPrestito;
	}

	public String getCodice() {
		return codice;
	}

	public void setCodice(String codice) {
		this.codice = codice;
	}

	public String getCodiceLibro() {
		return codiceLibro;
	}

	public void setCodiceLibro(String codiceLibro) {
		this.codiceLibro = codiceLibro;
	}
	
	

}
