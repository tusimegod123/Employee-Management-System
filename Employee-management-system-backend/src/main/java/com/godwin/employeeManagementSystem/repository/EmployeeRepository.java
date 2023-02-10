package com.godwin.employeeManagementSystem.repository;

import com.godwin.employeeManagementSystem.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
//    @Query("SELECT e FROM Employee e LEFT JOIN e.employeeTasks t")
//           List<Employee> findAllWithTasks();
}
