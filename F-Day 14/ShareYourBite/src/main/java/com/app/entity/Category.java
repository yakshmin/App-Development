package com.app.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	@OneToMany(mappedBy = "category")
	private List<AddList> products;

	// Constructors

	public Category() {
		// Default constructor
	}

	public Category(String name) {
		this.name = name;
	}

	// Getters and Setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<AddList> getProducts() {
		return products;
	}

	public void setProducts(List<AddList> products) {
		this.products = products;
	}

//    // Additional methods if needed
//
//    public void addProduct(Product product) {
//        products.add(product);
//        product.setCategory(this);
//    }
//
//    public void removeProduct(Product product) {
//        products.remove(product);
//        product.setCategory(null);
//    }

	// Overrides

	@Override
	public String toString() {
		return "Category{" +
				"id=" + id +
				", name='" + name + '\'' +
				'}';
	}
}
