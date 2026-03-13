package com.example.authapp.controller;

import com.example.authapp.model.User;
import com.example.authapp.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;


    // =========================
    // Signup API
    // =========================

    @PostMapping("/signup")
    public User signup(@RequestBody User user){
        return authService.signup(user);
    }


    // =========================
    // Login API
    // =========================

    @PostMapping("/login")
    public User login(@RequestBody User user){
        return authService.login(user.getEmail(), user.getPassword());
    }


    // =========================
    // Forgot Password API
    // =========================

    @PostMapping("/forgot-password")
    public String forgotPassword(@RequestBody Map<String,String> request){

        authService.forgotPassword(request.get("email"));

        return "OTP generated. Check database.";
    }


    // =========================
    // Verify OTP API
    // =========================

    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestBody Map<String,String> request){

        authService.verifyOtp(
                request.get("email"),
                request.get("otp")
        );

        return "OTP verified";
    }


    // =========================
    // Reset Password API
    // =========================

    @PostMapping("/reset-password")
    public String resetPassword(@RequestBody Map<String,String> request){

        authService.resetPassword(
                request.get("email"),
                request.get("newPassword")
        );

        return "Password reset successful";
    }

}