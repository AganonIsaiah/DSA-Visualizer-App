package com.example.dsabackend.controllers;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/stack")
@CrossOrigin(origins = "http://localhost:5173")  // Allow requests from React app
public class StackController {

    private List<String> stack = new ArrayList<>();

    // Updated push endpoint to accept JSON
    @PostMapping("/push")
    public List<String> push(@RequestBody ElementRequest request) {
        stack.add(request.getElement());
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

    // Define a request body class to accept the element
    public static class ElementRequest {
        private String element;

        // Getter and setter for the element
        public String getElement() {
            return element;
        }

        public void setElement(String element) {
            this.element = element;
        }
    }
}
