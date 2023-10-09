package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.AddList;
import com.app.service.AddService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AddController {
	
	@Autowired
	AddService addService;
		
	@GetMapping("/api/list/getList")
	public List<AddList> getList(){
		return addService.getAllList();
	}
	
	@PostMapping("/api/list/addList")
	public void addList(@RequestBody AddList add) {
		addService.addList(add);
	}
	
	@GetMapping("/api/list/getList/{id}")
	public ResponseEntity<AddList> getListById(@PathVariable Long id){
		AddList add= addService.getListById(id);
		return ResponseEntity.ok(add);


	}

	@DeleteMapping("/api/list/deleteList/{id}")
	public String deleteList(@PathVariable Long id) {
		return addService.deleteListById(id);
	}
	
	@PutMapping("/api/list/editList/{id}")
	public ResponseEntity<AddList> updateList(@PathVariable Long id , @RequestBody AddList add){
		add.setAddId(id);
		AddList updatedList = addService.updateList(add);
		return ResponseEntity.ok(updatedList);
	}
	
	
	
}
