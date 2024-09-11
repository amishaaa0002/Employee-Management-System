package com.example.EmployeeManager.services;

import com.example.EmployeeManager.modal.User;
import com.example.EmployeeManager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplement implements UserService {


    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {

        Optional<User> user = userRepository.findById(id);

        if (user.isPresent()) {
            return user.get();
        }
        return null;
    }

    @Override
    public String upsert(User user) {
        userRepository.save(user);
        return "Sucessfully added";
    }

    @Override
    public String deleteById(Long id) {


        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return "Deleted Sucessfully";
        } else {
            return "No Record found for the given id";
        }
    }
}
