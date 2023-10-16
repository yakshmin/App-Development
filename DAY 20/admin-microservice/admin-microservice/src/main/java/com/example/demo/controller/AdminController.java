package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Admin;
import com.example.demo.service.AdminService;


@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class AdminController {

	@Autowired
	private AdminService service;

	@GetMapping("/list")
	private List<Admin> getProduct(){
		return service.getData();
	}
	
	@GetMapping("/list/{id}")
	private Optional<Admin> viewGame(@PathVariable Long id) {
		return service.findbyID(id);
	}
	
	
	@PostMapping("/add")
	private Admin addProduct(@RequestBody Admin data) {
		return service.addData(data);
	}
	
	
	@PutMapping("/edit/{id}")
	private Admin editProduct(@PathVariable Long id, @RequestBody Admin data) {
		return service.editData(data, id);
	}
	
	
	@DeleteMapping("/delete/{id}")
	private String deleteProduct(@PathVariable Long id) {
		return service.deleteData(id);
	}
}
