
import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("UserStore", {
    state: () => ({
        users: [], // Array to hold users
        loading: false, // For tracking API status
        error: null, // For error messages
        currentUser: null, // For the user being edited
    }),

    actions: {
        // get the list of all users
        async fetchUsers() {
            this.loading = true;
            try {
                const response = await axios.get("http://crud.42web.io/Backend/api/users");
                this.users = response.data;
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },

        // Add user
        async addUser(newUser) {
            this.loading = true;
            try {
                const response = await axios.post("http://crud.42web.io/Backend/api/user", newUser);
                this.users.push(response.data);
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },

        // Edit/Update user
        async updateUser(userId, updatedData) {
            this.loading = true;
            try {
                const response = await axios.put(`http://crud.42web.io/Backend/api/user/${userId}`, updatedData);
                const index = this.users.findIndex((user) => user.id === userId);
                if (index !== -1) {
                    this.users[index] = response.data;
                }
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },

        // Delete the user
        async deleteUser(userId) {
            this.loading = true;
            try {
                await axios.delete(`http://crud.42web.io/Backend/api/user/${userId}`);
                this.users = this.users.filter((user) => user.id !== userId);
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },

        // Set the current user being edited
        setCurrentUser(user) {
            // console.log('recvd in store', user);
            this.currentUser = user;
        },
    },
});
