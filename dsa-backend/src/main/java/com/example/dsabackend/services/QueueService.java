package com.example.dsabackend.services;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.List;

@Service
public class QueueService {
    private final Queue<String> queue = new LinkedList<>();

    public List<String> offer(String element){
        queue.offer(element.substring(0,element.length()-1));
        return new ArrayList<>(queue);
    }

    public List<String> poll(){
        queue.poll();
        return new ArrayList<>(queue);
    }

    public String peek(){
        return queue.peek();
    }

    public boolean isEmpty(){
        return queue.isEmpty();
    }

    public List<String> empty(){
        queue.clear();
        return new ArrayList<>(queue);
    }

}
