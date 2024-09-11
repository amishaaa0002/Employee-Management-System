package com.example.EmployeeManager.services;

import com.example.EmployeeManager.modal.User;

import java.util.List;

public interface UserService {

    public List<User> getAllUser();

    public User getUserById(Long id);

    public String upsert(User user);

    public String deleteById(Long id);


}
