package com.example.portailClient.model;

public class State {
    private Long id_state;
    private String stateUser;

    public State(Long id_state, String stateUser) {
        this.id_state = id_state;
        this.stateUser = stateUser;
    }
    public State(){}

    public Long getId_state() {
        return id_state;
    }

    public void setId_state(Long id_state) {
        this.id_state = id_state;
    }

    public String getStateUser() {
        return stateUser;
    }

    public void setStateUser(String stateUser) {
        this.stateUser = stateUser;
    }
}
