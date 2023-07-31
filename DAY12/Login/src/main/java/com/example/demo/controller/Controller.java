package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Model;
import com.example.demo.service.UserService;


@RestController
public class Controller {
	@Autowired(required=true)
	UserService service;
	@PostMapping("/add")
	
	public Model addDetails(@RequestBody  Model e1)
	{
		return service.saveDetails(e1);
	}
	
	@GetMapping("/showDetails")
	public List<Model> fetchDetails()
	{
		return service.getDetails();
	}
    @PutMapping("/updateDetails")
    public Model updateInfo(@RequestBody Model s1)
    {
    	return service.updateDetails(s1);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteInfo(@PathVariable("id") int id)
    {
    	service.deleteDetails(id);
    	return "Details Deleted Successfully";            
    }
}


