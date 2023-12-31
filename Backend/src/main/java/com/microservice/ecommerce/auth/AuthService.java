package com.microservice.ecommerce.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.microservice.ecommerce.dto.UserDTO;
import com.microservice.ecommerce.jwt.JwtService;
import com.microservice.ecommerce.model.ERole;
import com.microservice.ecommerce.model.User;
import com.microservice.ecommerce.repository.UserRepository;

@Service
public class AuthService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private JwtService jwtService;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private AuthenticationManager authenticationManager;

	public AuthService(UserRepository userRepository, JwtService jwtService, PasswordEncoder passwordEncoder,
			AuthenticationManager authenticationManager) {
		this.userRepository = userRepository;
		this.jwtService = jwtService;
		this.passwordEncoder = passwordEncoder;
		this.authenticationManager = authenticationManager;
	}

	public UserDTO login(LoginRequest request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		User user = userRepository.findByUsername(request.getUsername()).orElseThrow();
		String token = jwtService.getToken(user);
		UserDTO userDTO = new UserDTO();
		userDTO.setToken(token);
		userDTO.setName(user.getName());
		userDTO.setLastName(user.getLastName());
		userDTO.setUsername(user.getUsername());
		return userDTO;

	}

	public UserDTO register(RegisterRequest request) { 
		 
		User user = new User();
		user.setName(request.getName());
		user.setLastName(request.getLastName());
		user.setUsername(request.getUsername());
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.setEmail(request.getEmail());
		user.setRole(ERole.USER);

		userRepository.save(user);
		UserDTO userDTO = new UserDTO();
		userDTO.setToken(jwtService.getToken(user));
		userDTO.setName(user.getName());
		userDTO.setLastName(user.getLastName());
		userDTO.setUsername(user.getUsername());
		return userDTO;
	}

}
