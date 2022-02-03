package com.kocaoglu.be.admin;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
	AdminRepository adminRepository;
	
	PasswordEncoder passwordEncoder;
	
	public AdminService(AdminRepository adminRepository) {
		this.adminRepository = adminRepository;
		this.passwordEncoder = new BCryptPasswordEncoder();
	}

	public void save(Admin admin) {
		admin.setPassword(this.passwordEncoder.encode(admin.getPassword()));
		adminRepository.save(admin);
	}
}
