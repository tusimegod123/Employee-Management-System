package com.godwin.employeeManagementSystem.repository;

import com.godwin.employeeManagementSystem.model.EmployeeTask;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<EmployeeTask, Integer> {
}
