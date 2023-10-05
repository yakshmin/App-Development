package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Gainers;

public interface GainersRepository extends JpaRepository<Gainers, Integer> {

	/*@Query(value = "insert into program (id,name,telecasttime,endtime,duration,trp) values(?,?,?,?,?,?)", nativeQuery = true)
	void insert(int id, String duration, String endtime, String name, String telecasttime, String trp);*/
	
	@Query(value = "insert into addlistings (id,title,descript,pickuptime,listfordays) values(?,?,?,?,?,?)", nativeQuery = true)
	void insert(int id, String title, String descript, String pickuptime, String listfordays);
}