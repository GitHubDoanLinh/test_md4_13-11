package com.test_cg_emp2.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "employee")
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String employeecode;
    private String name;
    private String age;
    private String salary;
    @ManyToOne
    @JoinColumn(name = "id_department")
    private Department department;
}
