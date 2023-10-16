package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin("*")
public class SpringcloudApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringcloudApiGatewayApplication.class, args);
	}

}
