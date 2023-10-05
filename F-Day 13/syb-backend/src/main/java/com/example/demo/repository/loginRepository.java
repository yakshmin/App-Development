package com.example.demo.repository;



import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.model.Login;


public interface loginRepository extends JpaRepository<Login, Integer> {
	Login  findByUsername(String username);
	
}


