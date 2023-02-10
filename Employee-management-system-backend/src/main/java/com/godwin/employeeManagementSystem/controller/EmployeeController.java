package com.godwin.employeeManagementSystem.controller;

import com.godwin.employeeManagementSystem.model.Employee;
import com.godwin.employeeManagementSystem.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3232")
@RestController
@RequestMapping("api/v1/employees")
public class EmployeeController {
    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping
    public void addEmployee(@RequestBody Employee employeeRecord){
        employeeRepository.save(employeeRecord);
    }
    @GetMapping
    public List<Employee> employees(){
        return employeeRepository.findAll();
    }

    @GetMapping("{id}")
    public Employee getEmployee(@PathVariable("id") Integer id){
        return employeeRepository.findById(id).get();

    }
    @PutMapping("{id}")
    public void updateCustomer(@PathVariable("id") Integer id, @RequestBody Employee employeeRecord){
        Employee employee = employeeRepository.findById(id).get();
        employee.setName(employeeRecord.getName());
        employee.setEmail(employeeRecord.getEmail());
        employee.setGender(employeeRecord.getGender());
//        employee.setEmployeeTasks(employee.setEmployeeTasks();
        employeeRepository.save(employee);

    }

    @DeleteMapping( "{id}")
    public void deleteCustomer(@PathVariable("id") Integer id){
        employeeRepository.deleteById(id);

    }
}
