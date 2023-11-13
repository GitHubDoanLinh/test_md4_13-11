package com.test_cg_emp2.service.Impl;


import com.test_cg_emp2.model.Department;
import com.test_cg_emp2.repository.IDepartmentRepository;
import com.test_cg_emp2.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DepartmentService implements IDepartmentService {
    @Autowired
    IDepartmentRepository departmentRepository;
    @Override
    public List<Department> findAll() {
        return departmentRepository.findAll();
    }

    @Override
    public Department findById(Long id) {
        return departmentRepository.findById(id).get();
    }

    @Override
    public void save(Department department) {
        departmentRepository.save(department);
    }

    @Override
    public void deleteById(Long id) {
        departmentRepository.deleteById(id);
    }
}
