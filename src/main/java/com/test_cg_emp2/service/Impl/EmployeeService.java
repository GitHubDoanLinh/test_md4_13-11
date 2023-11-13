package com.test_cg_emp2.service.Impl;

import com.test_cg_emp2.model.Employee;
import com.test_cg_emp2.repository.IEmployeeRepository;
import com.test_cg_emp2.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService {
    @Autowired
    IEmployeeRepository employeeRepository;
    @Override
    public List<Employee> findByNameContaining(String name) {
        return employeeRepository.findByNameContaining(name);
    }

    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee findById(Long id) {
        return employeeRepository.findById(id).get();
    }

    @Override
    public void save(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public void deleteById(Long id) {
        employeeRepository.deleteById(id);
    }
}
