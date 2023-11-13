package com.test_cg_emp2.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "department")
@Data
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
}
