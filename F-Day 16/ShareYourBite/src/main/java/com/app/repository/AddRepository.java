package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.AddList;

public interface AddRepository extends JpaRepository<AddList, Long> {

}
