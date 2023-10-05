package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Login;
import com.example.demo.repository.loginRepository;



@Service
public class userService {
	@Autowired 
	loginRepository login;

	public List<Login> getAllLogin() {
		return login.findAll();
	}
	public String validateUser(String username,String password)
	{
		Login l=login.findByUsername(username);
		if(l==null)
		{
			return "Invalid user";
		}
		else
		{
			if(l.getPassword().equals(password))
			{
				return "Login success";
			}
			else
			{
				return "Login failed";
			}
		}
	}
	
	public boolean savesign(Login s) {
		  login.save(s);
		return true;
	}

}
