package com.app.entity;

import jakarta.persistence.*;

@Entity
public class AddList {
	@Id	
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long addId;
	private String addTitle;
	private String addDescription;
	private String addPick;
	private String addDays;


	public AddList(Long addId, String addTitle, String addDescription, String addPick, String addDays) {
		this.addId = addId;
		this.addTitle = addTitle;
		this.addDescription = addDescription;
		this.addPick = addPick;
		this.addDays = addDays;
	}




	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;

	@ManyToOne
	@JoinColumn(name = "subcategory_id")
	private Subcategory subcategory;


	public Long getAddId() {
		return addId;
	}

	public void setAddId(Long addId) {
		this.addId = addId;
	}

	public String getAddTitle() {
		return addTitle;
	}

	public void setAddTitle(String addTitle) {
		this.addTitle = addTitle;
	}

	public String getAddDescription() {
		return addDescription;
	}

	public void setAddDescription(String addDescription) {
		this.addDescription = addDescription;
	}

	public String getAddPick() {
		return addPick;
	}

	public void setAddPick(String addPick) {
		this.addPick = addPick;
	}

	public String getAddDays() {
		return addDays;
	}

	public void setAddDays(String addDays) {
		this.addDays = addDays;
	}

	public AddList() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
