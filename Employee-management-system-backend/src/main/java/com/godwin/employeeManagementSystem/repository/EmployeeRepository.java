package com.godwin.employeeManagementSystem.repository;

import com.godwin.employeeManagementSystem.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
