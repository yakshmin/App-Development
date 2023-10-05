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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Gainers;
import com.example.demo.service.GainersService;

@CrossOrigin
@RestController
public class GainerController {

	@Autowired
	GainersService service;
	
	@GetMapping("/getGainers")
	public List<Gainers> getGainers(){
		return service.readGainers();
	}
	
	@GetMapping("/getGainers/{id}")
		public Optional<Gainers> getGainersById(@PathVariable int id) {
			return service.readGainersById(id);
	}
	
	@PostMapping("/postGainers")
	public void savePost(@RequestBody Gainers gainers) {
		
		 service.saveGainers(gainers);
		
	}

	@PutMapping("/putGainers/{id}")
	public boolean putdata(@RequestBody Gainers me,@PathVariable int id)
	{
	return service.Putdetails(me,id);
	}
	
	@DeleteMapping("/deleteGainers/{id}")
	public Boolean delete(@PathVariable int id) {
	return service.deleteGainersById(id);
	}
	

}