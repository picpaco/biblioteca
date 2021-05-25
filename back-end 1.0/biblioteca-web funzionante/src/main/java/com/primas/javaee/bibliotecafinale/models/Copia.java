package com.primas.javaee.bibliotecafinale.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="copie",
uniqueConstraints = { 
		@UniqueConstraint(columnNames = "Id_copia") 
	})
public class Copia {
	
	@Transient
   private Libro libroAssociato;
	
   @Column(name="in_prestito")
	private boolean isInPrestito;
	
   @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
   
   @NotBlank
	@Column(name="Id_copia")
	private String codice;
	
   @NotBlank
   @Column(name="Id_libro")
	private String codiceLibro;
	
	public boolean isInPrestito() {
		return isInPrestito;
	}

	public void setInPrestito(boolean inPrestito) {
		this.isInPrestito = inPrestito;
		assert this.isInPrestito == inPrestito:"Lo stato di prestito deve essere settato correttamente!";
	}

	public Libro getLibroAssociato() {
		return libroAssociato;
	}
	
	public Copia () {
		
	}
	
	
	public Copia(String codice, Libro lib){
		assert lib!= null:"Il libro associato a questa copia deve esistere!";
		assert codice.matches("[a-zA-Z]{5}[0-9]{2}"):"Il codice copia deve essere alfabetico per le prime 5 cifre e numerico per le successive 2 cifre";
		libroAssociato = lib;
		this.codice = codice;
		this.codiceLibro = libroAssociato.getCodice();;
		assert lib == libroAssociato:"Il libro associato deve essere settato!";
		assert this.codice == codice:"Il codice copia deve essere settato!";
	}
	
	public String toString(){
		String statoPrestito = isInPrestito()?" ":" non ";
		return "La copia " + codice + " del libro: " + libroAssociato + statoPrestito + "e' in prestito"; 
	}
	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCodiceLibro() {
		return codiceLibro;
	}

	public void setCodiceLibro(String codiceLibro) {
		this.codiceLibro = codiceLibro;
	}

	public void setLibroAssociato(Libro libroAssociato) {
		this.libroAssociato = libroAssociato;
	}

	public void setCodice(String codice) {
		this.codice = codice;
	}

	public String getCodice() {
		return codice;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((codice == null) ? 0 : codice.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Copia other = (Copia) obj;
		if (codice == null) {
			if (other.codice != null)
				return false;
		} else if (!codice.equals(other.codice))
			return false;
		return true;
	}

}
