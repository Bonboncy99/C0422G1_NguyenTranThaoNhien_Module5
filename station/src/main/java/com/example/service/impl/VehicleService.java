package com.example.service.impl;

import com.example.model.Vehicle;
import com.example.repository.IVehicleRepository;
import com.example.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class VehicleService implements IVehicleService {
    @Autowired
    private IVehicleRepository iVehicleRepository;


    @Override
    public Page<Vehicle> findAll(Pageable pageable) {
        return this.iVehicleRepository.findAll(pageable);
    }

    @Override
    public List<Vehicle> findAll() {
        return this.iVehicleRepository.findAll();
    }



    @Override
    public void add(String type, String name, String fromPoint, String endPoint, String email, String phone, String startTime, String endTime) {
         this.iVehicleRepository.add(type,name, fromPoint,endPoint,email,phone,startTime,endTime);
    }

    @Override
    public void update(String type, String name, String fromPoint, String endPoint, String email, String phone, String startTime, String endTime, int id) {
        this.iVehicleRepository.update(type,name,fromPoint,endPoint,email,phone,startTime,endTime, id);
    }

    @Override
    public Vehicle findById(int id) {
        return this.iVehicleRepository.findById(id);
    }

    @Override
    public void deleteById(int id) {
        this.iVehicleRepository.deleteById(id);
    }
}
