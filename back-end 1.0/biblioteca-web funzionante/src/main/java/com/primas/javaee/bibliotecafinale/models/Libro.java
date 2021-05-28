package com.primas.javaee.bibliotecafinale.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Entity
@Table(name="libri" ,
uniqueConstraints = { 
		@UniqueConstraint(columnNames = "ID_libro") 
	})
public class Libro {
	
	@NotBlank
	@Size(min=5, max=7, message="campo obbligatorio di 5 o 7 caratteri")
	@Column(name="id_libro")
	private String codice;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(min=1, message="campo obbligatorio")
	@Column(name="titolo")
	private String titolo;

	@NotBlank
	@Size(min=1, message="campo obbligatorio")
	@Column(name="autore")
	private String autore;
	
	@Column(name="num_copie")
	private int numeroCopie;
	
	@OneToMany(fetch = FetchType.LAZY,
			mappedBy = "libroAssociato")
//	@JoinTable(	name = "libri_copie", 
//				joinColumns = @JoinColumn(name = "libro_id"), 
//				inverseJoinColumns = @JoinColumn(name = "copia_id"))
	private Set<Copia> copie = new HashSet<>();
	

	public Libro () {
		
	}
	
	
	public Libro(String cod, String tit, String aut){
		assert cod != null && !cod.isEmpty():"Il codice del libro deve esistere!";
		assert cod.length() == 5:"Il codice libro deve essere lungo 5 caratteri";
		assert cod.matches("[a-zA-Z]{5}"):"Il codice libro deve essere alfabetico";
		assert tit != null && !tit.isEmpty():"Il titolo del libro deve esistere!";
		assert aut != null && !aut.isEmpty():"L'autore del libro deve esistere!";
		codice = cod;
		titolo = tit;
		autore = aut;
		assert codice == cod:"Il codice deve essere assegnato!";
		assert titolo == tit:"Il titolo deve essere assegnato!";
		assert autore == aut:"L'autore deve essere assegnato!";
		//assert numeroCopie == 0:"Il numero delle copie deve essere inizialmente zero";
	}

	


	public String getCodice() {
		return codice;
	}


	public void setCodice(String codice) {
		this.codice = codice;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
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


	public String toString(){
		return "Codice: " + codice +  ", Titolo:" + titolo + 
				", Autore: " + autore + ", num copie: " + numeroCopie;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((autore == null) ? 0 : autore.hashCode());
		result = prime * result + ((codice == null) ? 0 : codice.hashCode());
		result = prime * result + ((titolo == null) ? 0 : titolo.hashCode());
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
		Libro other = (Libro) obj;
		if (autore == null) {
			if (other.autore != null)
				return false;
		} else if (!autore.equals(other.autore))
			return false;
		if (codice == null) {
			if (other.codice != null)
				return false;
		} else if (!codice.equals(other.codice))
			return false;
		if (titolo == null) {
			if (other.titolo != null)
				return false;
		} else if (!titolo.equals(other.titolo))
			return false;
		return true;
	}
}



