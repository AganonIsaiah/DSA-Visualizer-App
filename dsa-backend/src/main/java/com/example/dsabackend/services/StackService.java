package com.example.dsabackend.services;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class StackService {
    private final List<String> stack = new ArrayList<>();

    public List<String> push(String element) {
        stack.add(element.substring(0,element.length()-1)); // Removes the "=" character at the end
        return stack;
    }

    public List<String> pop() {
        if (!stack.isEmpty()) {
            stack.remove(stack.size() - 1);
        }
        return stack;
    }

    public String peek() {
        if (!stack.isEmpty()) {
            return stack.get(stack.size() - 1);
        }
        return "Stack is empty";
    }

    public boolean isEmpty() {
        return stack.isEmpty();
    }

    public List<String> empty(){
        stack.clear();
        return stack;
    }
}
