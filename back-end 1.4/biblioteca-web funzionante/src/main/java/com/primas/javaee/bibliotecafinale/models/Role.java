package com.primas.javaee.bibliotecafinale.models;


import javax.persistence.*;

@Entity
@Table(name = "ruoli")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private ERole nome;

	public Role() {

	}

	public Role(ERole name) {
		this.nome = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public ERole getName() {
		return nome;
	}

	public void setName(ERole name) {
		this.nome = name;
	}
}

