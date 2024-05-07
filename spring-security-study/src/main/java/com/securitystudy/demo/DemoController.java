package com.securitystudy.demo;

import com.securitystudy.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("demo")
@RequiredArgsConstructor
public class DemoController {


    private final JwtService jwtService;

    @GetMapping
    public ResponseEntity<Demo> helloWorld() {


        Demo message = new Demo("Hello you are authenticated");
        return ResponseEntity.ok().body(message);
    }

}
