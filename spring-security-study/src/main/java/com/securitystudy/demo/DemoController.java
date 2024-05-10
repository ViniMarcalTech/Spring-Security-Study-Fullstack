package com.securitystudy.demo;

import com.securitystudy.security.JwtService;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("demo")
@RequiredArgsConstructor
@Tag(name = "Demo", description = "Access restricted to authenticated users only")
@SecurityScheme(
        name = "bearerAuth",
        type = SecuritySchemeType.HTTP,
        scheme = "bearer",
        bearerFormat = "JWT"
)
public class DemoController {


    private final JwtService jwtService;

    @GetMapping
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<Demo> helloWorld() {


        Demo message = new Demo("Hello you are authenticated");
        return ResponseEntity.ok().body(message);
    }

}
