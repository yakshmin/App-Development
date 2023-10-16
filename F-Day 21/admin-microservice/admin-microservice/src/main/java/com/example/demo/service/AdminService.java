package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Admin;
import com.example.demo.repository.AdminRepo;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class AdminService {
    
	@Autowired
	private AdminRepo adminrepo;
	

	// Get 
	public List<Admin> getData() {
		return adminrepo.findAll();
	}
	
	// Post
	public Admin addData(Admin data) {
		return adminrepo.save(data);
	}
	
	// Edit (modify if data exists and save, else don't save)
	public Admin editData(Admin data, Long id) {
		Admin edx = adminrepo.findById(id).orElse(data);
		if (edx != null) {
			edx.setCollegename(data.getCollegename());
			edx.setCollegelocation(data.getCollegelocation());
			edx.setCollegerating(data.getCollegerating());
			edx.setCollegecategory(data.getCollegecategory());
			edx.setCollegeimg(data.getCollegeimg());
			return adminrepo.saveAndFlush(edx);
		} else {
			return null;
		}
	}
	
	//Delete
	public String deleteData(Long id) {
		adminrepo.deleteById(id);
		return "Deleted Successfully";
		
	}
	
	//Find by ID
	public Optional<Admin> findbyID(Long id) {
		return adminrepo.findById(id);
	}
	
	
}
