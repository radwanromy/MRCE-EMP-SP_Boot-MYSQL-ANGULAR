package com.radwanromy.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.radwanromy.springboot.model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
