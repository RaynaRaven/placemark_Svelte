// @ts-nocheck
import axios from "axios";
import { user } from "../stores.js";

export const placemarkService = {
    baseUrl: "http://localhost:4000",

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token
                });
                localStorage.placemark = JSON.stringify({email: email, token: response.data.token })
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    async logout() {
        user.set({
            email: "",
            token: "",
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("placemark");
    },

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            return false;
        }
    },

    async getUserId() {
        try{
            const email = localStorage.placemark.email;
            console.log(email);
            const response = await axios.get(this.baseUrl + "/api/users/", email);
            if (response.data.success) {
                return response.data._id
            }
        } catch (error) {
            return "false";
        }
    },

    async addLocation(location) {
        try {
            const response = await axios.post(this.baseUrl + "/api/categories/" + location.categoryId + "/locations", location);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    },

    async getCategories() {
        try {
            const response = await axios.get(this.baseUrl + "/api/categories");
            return response.data;
        } catch (error) {
            return false;
        }
    },

    async getCandidates() {
        try {
            const response = await axios.get(this.baseUrl + "/api/candidates");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async addCategory(category) {
        try {
            const response = await axios.post(this.baseUrl + "/api/categories", category)
            return response.status == 200;
        } catch (error){
            return false;
        }
    },


    async getLocations() {
        try {
            const response = await axios.get(this.baseUrl + "/api/locations");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    reload() {
        const placemarkCredentials = localStorage.placemark;
        if (placemarkCredentials) {
            const savedUser = JSON.parse(placemarkCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    }
};