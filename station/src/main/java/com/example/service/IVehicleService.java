package com.example.service;

import com.example.model.Vehicle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IVehicleService {
    Page<Vehicle> findAll(Pageable pageable);
    List<Vehicle> findAll();
    void deleteById(@Param("idDelete") int id);
    void add(String type,String name,String fromPoint,String endPoint,String email,String phone,String startTime,String endTime);
    void update(String type,String name,String fromPoint,String endPoint,String email,String phone,String startTime,String endTime, int id);
    Vehicle findById(int id);

}
