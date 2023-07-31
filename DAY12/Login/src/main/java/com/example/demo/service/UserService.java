package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Model;
import com.example.demo.repository.UserRepository;



@Service
public class UserService {
	
	@Autowired
	UserRepository erepo;
	
	public Model saveDetails(Model e)
	{
		
	return erepo.save(e);
	}
    public List<Model> getDetails()
    {
    	return erepo.findAll();
    }
    public Model updateDetails(Model s)
    {
    	return erepo.saveAndFlush(s);
    }
    public void deleteDetails(int id)
    {
    	erepo.deleteById(id);
    }
}