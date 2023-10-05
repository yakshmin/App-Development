package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Login;
import com.example.demo.service.userService;



@CrossOrigin
@RestController
public class LoginController {
	@Autowired
	userService service;
	@GetMapping(value="/fetchLogin")
	public List<Login> getAllLogin()
	{
		return service.getAllLogin();
	}
	@PostMapping("/Logincheck")
	public String validateUser(@RequestBody Login loginDataMap)
	{
		String username = loginDataMap.getUsername();
		String password = loginDataMap.getPassword();
		String result = service.validateUser(username, password);
		return result;
	}
//	@GetMapping(value="/fetchShops")
//	public List<SignInEmall> getAllShops()
//	{
//		/*List<SignInEmall>userList=service.getAllShops();*/
//		return service.getAllShops();
//	}
	@PostMapping(value="/saveUser")
	public boolean ab(@RequestBody Login s) {
		return service.savesign(s);
	}
	
}
