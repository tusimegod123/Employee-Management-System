package com.godwin.employeeManagementSystem.service;

import com.godwin.employeeManagementSystem.model.EmployeeTask;
import com.godwin.employeeManagementSystem.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImplementation implements TaskService{
    private final TaskRepository taskRepository;

    public TaskServiceImplementation(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public EmployeeTask save(EmployeeTask employeeTask) {
        taskRepository.save(employeeTask);
        return employeeTask;
    }

    @Override
    public List<EmployeeTask> getAllTasks() {
        return  taskRepository.findAll();
    }
}
