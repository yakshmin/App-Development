package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.AddList;
import com.app.repository.AddRepository;

@Service
public class AddService {
	@Autowired
	AddRepository AddRepo;
	
	public  List<AddList> getAllList()
	{
		return AddRepo.findAll();
	}
	
	public void addList(AddList add) {
		AddRepo.save(add);
	}
	
	public String deleteListById(Long id) {
		if(AddRepo.findById(id).isEmpty())
			return "No item Found with the Id:"+id;
		else {
		AddRepo.deleteById(id);
		return "Delete Successfull";
		}
		
	}

	public AddList getListById(Long id) {
		return AddRepo.findById(id).orElse(null);
	}
	
	public AddList updateList(AddList add) {
		return AddRepo.save(add);
	}
	
}
