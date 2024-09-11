package com.example.EmployeeManager.repository;

import com.example.EmployeeManager.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {


}
