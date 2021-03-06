package com.spring.boot.mongo.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration
@ComponentScan(basePackages = { "repository", "controller" })
public class Application {

	
	public static void main(String[] args) throws Exception{
		SpringApplication.run(Application.class, args);
	}

}