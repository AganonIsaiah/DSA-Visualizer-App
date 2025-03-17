package com.example.dsabackend.controllers;

import com.example.dsabackend.services.QueueService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/queue")
public class QueueController {
    private final QueueService queueService;

    public QueueController(QueueService queueService) {
        this.queueService = queueService;
    }

    @PostMapping("/offer")
    public List<String> offer(@RequestBody String request){
        return queueService.offer(request);
    }

    @PostMapping("/poll")
    public List<String> poll(){
        return queueService.poll();
    }

    @GetMapping("/peek")
    public String peek(){
        return queueService.peek();
    }

    @GetMapping("/isEmpty")
    public boolean isEmpty(){
        return queueService.isEmpty();
    }

    @PostMapping("/empty")
    public List<String> empty() {
        return queueService.empty();
    }
}
