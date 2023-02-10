package com.godwin.employeeManagementSystem.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Employees_Table")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer employeeId;
   private   String name;
   private String email;
    private String gender;
    @Builder.Default
   private boolean hasTask = false;
   @OneToMany(cascade = CascadeType.ALL, mappedBy = "employee")
//   @JsonManagedReference
   private List<EmployeeTask> employeeTasks;

    public void assignTask(EmployeeTask task) {
        this.employeeTasks.add(task);
        this.hasTask = true;
    }
}
