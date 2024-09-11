package com.example.EmployeeManager.controller;

import com.example.EmployeeManager.modal.User;
import com.example.EmployeeManager.services.UserService;
import com.example.EmployeeManager.services.UserServiceImplement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {


    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public String addUser(@RequestBody User user){
       return userService.upsert(user);
    }

    @GetMapping("/getUserById/{id}")
    public User getUser(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers(){
        return userService.getAllUser();
    }

    @DeleteMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable Long id){
        return userService.deleteById(id);
    }

    @PutMapping("/editUser/{id}")
    public String editUser(@RequestBody User newUser, @PathVariable Long id){
        User fetchedUser =  userService.getUserById(id);
//        fetchedUser.setId(newUser.getId());
        fetchedUser.setName(newUser.getName());
        fetchedUser.setEmail(newUser.getEmail());
        fetchedUser.setUsername(newUser.getUsername());

        return userService.upsert(fetchedUser);

    }


}
