package com.example.authapp.service;

import com.example.authapp.model.User;
import com.example.authapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    // Signup logic
    public User signup(User user) {

        User existingUser = userRepository.findByEmail(user.getEmail());

        if(existingUser != null){
            throw new RuntimeException("User already exists");
        }

        return userRepository.save(user);
    }

    // Login logic
    public User login(String email, String password){

        User user = userRepository.findByEmail(email);

        if(user == null || !user.getPassword().equals(password)){
            throw new RuntimeException("Invalid credentials");
        }

        return user;
    }
}