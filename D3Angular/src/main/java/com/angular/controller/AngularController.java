package com.angular.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AngularController {
	
	@RequestMapping(value = "/angular")
	public String landingPage(){
		return "angular";
	}
}
