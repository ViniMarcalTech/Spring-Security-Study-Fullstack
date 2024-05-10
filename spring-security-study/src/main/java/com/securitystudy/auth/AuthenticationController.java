package com.securitystudy.auth;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
@RequiredArgsConstructor
@Tag(name = "Authentication endpoints ", description = "User authentication, registration, and activation endpoints")
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @Operation(summary = "User registration")
    public ResponseEntity<?> register(@RequestBody @Valid RegistrationRequest request)
            throws MessagingException {

        service.register(request);
        return ResponseEntity.accepted().build();
    }

    @PostMapping("/authenticate")
    @Operation(summary = "Login Service")
    public ResponseEntity<AuthenticationResponse> atuhenticate(@RequestBody @Valid AuthenticationRequest request) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/activate-account")
    @Operation(summary = "User activation via token sent through email")
    public void confirm(@RequestParam String token) throws MessagingException {
        service.activateAccount(token);
    }

}
