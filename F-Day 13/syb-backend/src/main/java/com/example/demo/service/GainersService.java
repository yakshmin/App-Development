package com.example.demo.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Gainers;
import com.example.demo.repository.GainersRepository;


@Service
public class GainersService {
	@Autowired GainersRepository rep;
	
	public boolean addGainers(Gainers gainers) {
		rep.save(gainers);
		return true;
		}
	
	
	public boolean saveGainers(Gainers gainers)
	{
		rep.save(gainers);
		return true;
	}
	public List<Gainers> readGainers() {
		return rep.findAll();
	}
	
	public Optional<Gainers> readGainersById(int id) {
		return rep.findById(id);
	}
	
	public boolean Putdetails(Gainers me,int id) {
		Optional<Gainers> gain = rep.findById(id);
		if(gain.isPresent()) {
			Gainers g = gain.get();
			if(me.getTitle()!=null)
			g.setTitle(me.getTitle());
			
			if(me.getDescript()!=null)
			g.setDescript(me.getDescript());
			
			if(me.getPickuptime()!=null)
			g.setPickuptime(me.getPickuptime());
			
			if(me.getListfordays()!=null)
			g.setListfordays(me.getListfordays());
			
			
			rep.save(g);
			return true;
		}
		return false;
	}
	
	public Boolean deleteGainersById(int id) {
		rep.deleteById(id);
		return true;
	}

	

}
