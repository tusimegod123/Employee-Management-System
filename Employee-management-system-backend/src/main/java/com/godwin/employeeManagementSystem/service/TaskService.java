package com.godwin.employeeManagementSystem.service;

import com.godwin.employeeManagementSystem.model.EmployeeTask;

import java.util.List;


public interface TaskService {
    EmployeeTask save(EmployeeTask employeeTask);
    List<EmployeeTask> getAllTasks();
}
