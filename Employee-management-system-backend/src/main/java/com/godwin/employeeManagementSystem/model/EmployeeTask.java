package com.godwin.employeeManagementSystem.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalDate;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Employee_Tasks")
public class EmployeeTask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer taskId;
    private String taskName;
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private LocalDate taskStartDate;
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private LocalDate taskEndDate;
    @Builder.Default
    private boolean taskCompleted = false;
    private String taskProgress;
    @Column(insertable=false, updatable=false)
    private Integer employeeId;
    @ManyToOne
    @JoinColumn(name = "employeeId")
    @JsonIgnore
    private  Employee employee;

    public EmployeeTask(String taskName, LocalDate taskStartDate, LocalDate taskEndDate, boolean taskCompleted, String taskProgress) {
        this.taskName = taskName;
        this.taskStartDate = taskStartDate;
        this.taskEndDate = taskEndDate;
        this.taskCompleted = taskCompleted;
        this.taskProgress = taskProgress;
    }
}
