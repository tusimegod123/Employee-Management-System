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

    record  EmployeeRecord(String name, String email, Integer age){
    }

    @PostMapping
    public void addCustomer(@RequestBody EmployeeRecord employeeRecord){
        Employee employee = new Employee();
        employee.setName(employeeRecord.name);
        employee.setEmail(employeeRecord.email);
        employee.setAge(employeeRecord.age);
        employeeRepository.save(employee);

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
    public void updateCustomer(@PathVariable("id") Integer id, @RequestBody EmployeeRecord employeeRecord){
        Employee employee = employeeRepository.findById(id).get();
        employee.setName(employeeRecord.name);
        employee.setEmail(employeeRecord.email);
        employee.setAge(employeeRecord.age);
        employeeRepository.save(employee);

    }

    @DeleteMapping( "{id}")
    public void deleteCustomer(@PathVariable("id") Integer id){
        employeeRepository.deleteById(id);

    }
}
