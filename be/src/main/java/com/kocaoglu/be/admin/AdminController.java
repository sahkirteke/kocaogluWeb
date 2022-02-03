package com.kocaoglu.be.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kocaoglu.be.shared.GenericResponse;

@RestController
public class AdminController {
	
	
	@Autowired
	AdminService adminService;
	
	@PostMapping("/api/1.0/admins")
	public GenericResponse createUser(@RequestBody Admin admin) {
		adminService.save(admin);
		return new GenericResponse("user created");
	}

}
 
