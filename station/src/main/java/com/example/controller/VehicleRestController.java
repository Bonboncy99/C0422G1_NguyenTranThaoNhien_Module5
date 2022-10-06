package com.example.controller;

import com.example.model.Vehicle;
import com.example.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/vehicles")
public class VehicleRestController {
    @Autowired
    private IVehicleService iVehicleService;

    @GetMapping("")
    public ResponseEntity<Page<Vehicle>> findAll(@PageableDefault(5) Pageable pageable) {
        Page<Vehicle> vehiclePage = this.iVehicleService.findAll(pageable);
        if (vehiclePage.hasContent()) {
            return new ResponseEntity<>(vehiclePage, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> findById(@PathVariable int id) {
        Vehicle vehicle = this.iVehicleService.findById(id);
        if (vehicle == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND v b);
        }
        return new ResponseEntity<>(vehicle, HttpStatus.OK);
    }

//    @GetMapping("")
//    public ResponseEntity<List<Vehicle>> findAll() {
//        List<Vehicle> vehicleList = this.iVehicleService.findAll();
//        if (vehicleList.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(vehicleList, HttpStatus.OK);
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable int id) {
        this.iVehicleService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Void> add(@RequestBody Vehicle vehicle) {
        this.iVehicleService.add(vehicle.getVehicleType(), vehicle.getName(), vehicle.getFromPoint(), vehicle.getEndPoint(), vehicle.getEmail(), vehicle.getPhone(), vehicle.getStartTime(), vehicle.getEndTime());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable int id, @RequestBody Vehicle vehicle) {
        this.iVehicleService.update(vehicle.getVehicleType(), vehicle.getName(), vehicle.getFromPoint(), vehicle.getEndPoint(), vehicle.getEmail(), vehicle.getPhone(), vehicle.getStartTime(), vehicle.getEndTime(), id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
//    @PatchMapping("")
//    public ResponseEntity<Void> update(@RequestBody Vehicle vehicle){
//        this.iVehicleService.update(vehicle.getVehicleType(), vehicle.getName(), vehicle.getFromPoint(), vehicle.getEndPoint(), vehicle.getEmail(), vehicle.getPhone(), vehicle.getStartTime(), vehicle.getEndTime(), vehicle.getId());
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}
