package com.test_cg_emp2.controller;

import com.test_cg_emp2.model.Department;
import com.test_cg_emp2.model.Employee;
import com.test_cg_emp2.service.IDepartmentService;
import com.test_cg_emp2.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    IEmployeeService employeeService;
    @Autowired
    IDepartmentService departmentService;

    @GetMapping("/findAll")
    public ResponseEntity<List<Employee>> findAll(){
        return new ResponseEntity<>(employeeService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/addNewEmployee")
    public ResponseEntity<String> addNewStudent(@RequestBody Employee employee){
        employeeService.save(employee);
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }

    @GetMapping("/findAllDepartment")
    public ResponseEntity<List<Department>> findAllDepartment(){
        return new ResponseEntity<>(departmentService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/deleteEmployee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
        Employee employee = employeeService.findById(id);
        if(employee != null){
            employeeService.deleteById(id);
            return new ResponseEntity<>("OK", HttpStatus.OK);
        }
        return new ResponseEntity<>("NO", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Employee> findById(@PathVariable Long id){
        Employee employee = employeeService.findById(id);
        if(employee != null){
            return new ResponseEntity<>(employee, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/searchByName/{name}")
    public ResponseEntity<List<Employee>> searchByName(@PathVariable String name){
        List<Employee> employees = employeeService.findByNameContaining(name);
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }


}
