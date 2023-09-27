package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.model.Model;

@Repository
public interface ServiceInt {
 
public List<Model> getDatas();
}
