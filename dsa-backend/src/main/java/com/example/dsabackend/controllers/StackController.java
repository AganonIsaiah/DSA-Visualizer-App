package com.example.dsabackend.controllers;

import com.example.dsabackend.services.StackService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stack")
public class StackController {

    private final StackService stackService;

    public StackController(StackService stackService) {
        this.stackService = stackService;
    }

    @PostMapping("/push")
    public List<String> push(@RequestBody String request) {
        return stackService.push(request);
    }

    @PostMapping("/pop")
    public List<String> pop() {
        return stackService.pop();
    }

    @GetMapping("/peek")
    public String peek() {
        return stackService.peek();
    }

    @GetMapping("/isEmpty")
    public boolean isEmpty() {
        return stackService.isEmpty();
    }

    @PostMapping("/empty")
    public List<String> empty() {
        return stackService.empty();
    }
}
