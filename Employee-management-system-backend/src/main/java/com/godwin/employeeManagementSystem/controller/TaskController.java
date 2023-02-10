package com.godwin.employeeManagementSystem.controller;

import com.godwin.employeeManagementSystem.model.Employee;
import com.godwin.employeeManagementSystem.model.EmployeeTask;
import com.godwin.employeeManagementSystem.repository.EmployeeRepository;
import com.godwin.employeeManagementSystem.service.TaskService;
import com.godwin.employeeManagementSystem.service.TaskServiceImplementation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/tasks")
public class TaskController {

    private final TaskServiceImplementation taskService;
    private  final EmployeeRepository employeeRepository;

    public TaskController(TaskServiceImplementation taskService, EmployeeRepository employeeRepository) {
        this.taskService = taskService;
        this.employeeRepository = employeeRepository;
    }
    @PostMapping
    public ResponseEntity<EmployeeTask> saveTask(@RequestBody EmployeeTask taskDto){
        Map<String, Object> map = new LinkedHashMap<>();
        EmployeeTask task = new EmployeeTask(
                taskDto.getTaskName(),
                taskDto.getTaskStartDate(),
                taskDto.getTaskEndDate(),
                taskDto.isTaskCompleted(),
                taskDto.getTaskProgress()
        );
        Integer employeeId = taskDto.getEmployeeId();
        Employee employee = employeeRepository.findById(employeeId).get();
        employee.assignTask(task);
        task.setEmployee(employee);
        task.setEmployeeId(employeeId);
        EmployeeTask savedTask = taskService.save(task);
        map.put("status", 1);
        map.put("message", "Record is Saved Successfully!");
        return  ResponseEntity.status(HttpStatus.CREATED).body(savedTask);
    }

    @GetMapping
    public ResponseEntity<?> getUser() {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<EmployeeTask> employeeTaskList = taskService.getAllTasks();
        if (!employeeTaskList.isEmpty()) {
            map.put("status", 1);
            map.put("data", employeeTaskList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

    }
}

