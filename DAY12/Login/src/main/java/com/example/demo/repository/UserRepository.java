package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Model;



public interface UserRepository extends JpaRepository<Model, Integer> {

}







