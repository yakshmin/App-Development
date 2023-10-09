package com.app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Volunteer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long volunteerId;
    private String volunteerName;
    private Long volunteerAge;
    private Long volunteerMobile;
    private String volunteerEmail;
    private String volunteerLocation;

public Volunteer(){

}

    public Volunteer(Long volunteerId, String volunteerName, Long volunteerAge, Long volunteerMobile, String volunteerEmail, String volunteerLocation) {
        this.volunteerId = volunteerId;
        this.volunteerName = volunteerName;
        this.volunteerAge = volunteerAge;
        this.volunteerMobile = volunteerMobile;
        this.volunteerEmail = volunteerEmail;
        this.volunteerLocation = volunteerLocation;
    }

    public Long getVolunteerId() {
        return volunteerId;
    }

    public void setVolunteerId(Long volunteerId) {
        this.volunteerId = volunteerId;
    }

    public String getVolunteerName() {
        return volunteerName;
    }

    public void setVolunteerName(String volunteerName) {
        this.volunteerName = volunteerName;
    }

    public Long getVolunteerAge() {
        return volunteerAge;
    }

    public void setVolunteerAge(Long volunteerAge) {
        this.volunteerAge = volunteerAge;
    }

    public Long getVolunteerMobile() {
        return volunteerMobile;
    }

    public void setVolunteerMobile(Long volunteerMobile) {
        this.volunteerMobile = volunteerMobile;
    }

    public String getVolunteerEmail() {
        return volunteerEmail;
    }

    public void setVolunteerEmail(String volunteerEmail) {
        this.volunteerEmail = volunteerEmail;
    }

    public String getVolunteerLocation() {
        return volunteerLocation;
    }

    public void setVolunteerLocation(String volunteerLocation) {
        this.volunteerLocation = volunteerLocation;
    }
}
