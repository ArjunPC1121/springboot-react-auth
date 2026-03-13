package com.example.authapp.service;

import com.example.authapp.model.User;
import com.example.authapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;


    // =========================
    // Signup
    // =========================

    public User signup(User user) {

        User existingUser = userRepository.findByEmail(user.getEmail());

        if(existingUser != null){
            throw new RuntimeException("User already exists");
        }

        return userRepository.save(user);
    }


    // =========================
    // Login
    // =========================

    public User login(String email, String password){

        User user = userRepository.findByEmail(email);

        if(user == null || !user.getPassword().equals(password)){
            throw new RuntimeException("Invalid credentials");
        }

        return user;
    }


    // =========================
    // OTP Generator
    // =========================

    private String generateOtp(){

        Random random = new Random();

        int otp = 100000 + random.nextInt(900000);

        return String.valueOf(otp);
    }


    // =========================
    // Forgot Password
    // =========================

    public void forgotPassword(String email){

        User user = userRepository.findByEmail(email);

        if(user == null){
            throw new RuntimeException("User not found");
        }

        String otp = generateOtp();

        user.setResetOtp(otp);
        user.setOtpExpiry(LocalDateTime.now().plusMinutes(5));

        userRepository.save(user);
    }


    // =========================
    // Verify OTP
    // =========================

    public void verifyOtp(String email, String otp){

        User user = userRepository.findByEmail(email);

        if(user == null){
            throw new RuntimeException("User not found");
        }

        if(user.getResetOtp() == null){
            throw new RuntimeException("No OTP requested");
        }

        if(!user.getResetOtp().equals(otp)){
            throw new RuntimeException("Invalid OTP");
        }

        if(user.getOtpExpiry().isBefore(LocalDateTime.now())){
            throw new RuntimeException("OTP expired");
        }
    }


    // =========================
    // Reset Password
    // =========================

    public void resetPassword(String email, String newPassword){

        User user = userRepository.findByEmail(email);

        if(user == null){
            throw new RuntimeException("User not found");
        }

        user.setPassword(newPassword);

        // clear OTP after use
        user.setResetOtp(null);
        user.setOtpExpiry(null);

        userRepository.save(user);
    }

}