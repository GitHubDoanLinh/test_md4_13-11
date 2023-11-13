package com.test_cg_emp2.service;
import com.test_cg_emp2.model.Employee;

import java.util.List;

public interface IEmployeeService extends IGenneralService<Employee> {
    List<Employee> findByNameContaining(String name);
}
