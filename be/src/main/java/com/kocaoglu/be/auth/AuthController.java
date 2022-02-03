package com.kocaoglu.be.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.kocaoglu.be.admin.Admin;
import com.kocaoglu.be.admin.AdminRepository;
import com.kocaoglu.be.shared.CurrentAdmin;
import com.kocaoglu.be.shared.Views;   

@RestController
public class AuthController {
	
	@Autowired
	AdminRepository adminRepository;
	
	@PostMapping("/api/1.0/auth")
	@JsonView(Views.Base.class)
	ResponseEntity<?> handleAuthentication(@CurrentAdmin Admin admin) {
		return ResponseEntity.ok(admin);
	}
	

}