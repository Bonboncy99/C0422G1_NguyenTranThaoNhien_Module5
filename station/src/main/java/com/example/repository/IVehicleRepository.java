package com.example.repository;

import com.example.model.Vehicle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IVehicleRepository extends JpaRepository<Vehicle,Integer> {
    @Query(value = "SELECT \n" +
            "    *\n" +
            "FROM\n" +
            "    vehicle", nativeQuery = true, countQuery = "SELECT count(*) FROM vehicle")
    Page<Vehicle> findAll(Pageable pageable);


    @Query(value = "SELECT \n" +
            "    *\n" +
            "FROM\n" +
            "    vehicle\n" +
            "WHERE\n" +
            "    id = :id", nativeQuery = true)
    Vehicle findById(@Param("id") int id);

    @Query(value = "SELECT \n" +
            "    *\n" +
            "FROM\n" +
            "    vehicle", nativeQuery = true, countQuery = "SELECT count(*) FROM vehicle")
    Page<Vehicle> findAllList(Pageable pageable);


    @Transactional
    @Modifying
    @Query(value = "DELETE FROM vehicle \n" +
            "WHERE\n" +
            "    id = :idDelete",nativeQuery = true)
    void deleteById(@Param("idDelete") int id);



    @Transactional
    @Modifying
    @Query(value = "INSERT INTO `station_management`.`vehicle` (`vehicle_type`, `name`, `from_point`, `end_point`, `email`, `phone`, `start_time`, `end_time`) VALUES (?1,?2,?3,?4,?5,?6,?7,?8)",nativeQuery = true)
    void add(String type,String name,String fromPoint,String endPoint,String email,String phone,String startTime,String endTime);

    @Transactional
    @Modifying
    @Query(value = "UPDATE vehicle v\n" +
            "SET v.vehicle_type = ?1,\n" +
            " v.name = ?2,\n" +
            " v.from_point = ?3,\n" +
            " v.end_point = ?4,\n" +
            " v.email = ?5,\n" +
            " v.phone = ?6,\n" +
            " v.start_time = ?7,\n" +
            " v.end_time = ?8\n" +
            "WHERE v.id = ?9", nativeQuery = true)
    void update(String type,String name,String fromPoint,String endPoint,String email,String phone,String startTime,String endTime, int id);

}
