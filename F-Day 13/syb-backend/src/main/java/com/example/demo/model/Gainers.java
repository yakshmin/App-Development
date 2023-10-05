package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "addlistings")
public class Gainers {

	@Id	
	
	/*private int id;
	@Column(name = "name")
	private String name;
	@Column(name = "telecasttime")
	private String telecasttime;
	@Column(name = "endtime")
	private String endtime;
	@Column(name = "duration")
	private String duration;
	@Column(name = "trp")
	private String trp;
	
	public Gainers() {
		super();
	}
	public Gainers(int id, String name, String telecasttime, String endtime, String duration, String trp) {
		super();
		this.id = id;
		this.name = name;
		this.telecasttime = telecasttime;
		this.endtime = endtime;
		this.duration = duration;
		this.trp = trp;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTelecasttime() {
		return telecasttime;
	}
	public void setTelecasttime(String telecasttime) {
		this.telecasttime = telecasttime;
	}
	public String getEndtime() {
		return endtime;
	}
	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getTrp() {
		return trp;
	}
	public void setTrp(String trp) {
		this.trp = trp;
	}
	@Override
	public String toString() {
		return "Gainers [id=" + id + ", name=" + name + ", telecasttime=" + telecasttime + ", endtime=" + endtime
				+ ", duration=" + duration + ", trp=" + trp + "]";
	}*/
	
	@Column(name = "id")
	private int id;
	@Column(name = "title")
	private String title;
	@Column(name = "descript")
	private String descript;
	@Column(name = "pickuptime")
	private String pickuptime;
	@Column(name = "listfordays")
	private String listfordays;
	
	public Gainers(int id, String title, String descript, String pickuptime, String listfordays) {
		super();
		this.id = id;
		this.title = title;
		this.descript = descript;
		this.pickuptime = pickuptime;
		this.listfordays = listfordays;
	}
	public Gainers() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescript() {
		return descript;
	}
	public void setDescript(String descript) {
		this.descript = descript;
	}
	public String getPickuptime() {
		return pickuptime;
	}
	public void setPickuptime(String pickuptime) {
		this.pickuptime = pickuptime;
	}
	public String getListfordays() {
		return listfordays;
	}
	public void setListfordays(String listfordays) {
		this.listfordays = listfordays;
	}
	@Override
	public String toString() {
		return "Gainers [id=" + id + ", title=" + title + ", descript=" + descript + ", pickuptime=" + pickuptime
				+ ", listfordays=" + listfordays + "]";
	}
}