package com.example.dsabackend.controllers;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/stack")
public class StackController {

    private List<String> stack = new ArrayList<>();

    @PostMapping("/push")
    public List<String> push(@RequestBody String request) {
        stack.add(request.substring(0, request.length() - 1)); // Removes the "=" sign at the end
        return stack;
    }

    @PostMapping("/pop")
    public List<String> pop() {
        if (!stack.isEmpty()) {
            stack.remove(stack.size() - 1);
        }
        return stack;
    }

    @GetMapping("/peek")
    public String peek() {
        if (!stack.isEmpty()) {
            return stack.get(stack.size() - 1);
        }
        return "Stack is empty";
    }

    @GetMapping("/isEmpty")
    public boolean isEmpty() {
        return stack.isEmpty();
    }
}
