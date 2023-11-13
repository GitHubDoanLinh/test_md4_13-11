package com.test_cg_emp2.repository;


import com.test_cg_emp2.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDepartmentRepository extends JpaRepository<Department, Long> {

}
