<template>
    <q-layout>
        <q-page-container>
            <q-page style="background: linear-gradient(#02e2fb, #5A4A9F);">
                <div class="q-pa-md">
                    <q-table :rows="rows" row-key="name" flat bordered>

                        <!-- Edit button scoped slot -->
                        <template v-slot:body-cell-Edit="props">
                            <q-td class="">
                                <q-btn color="blue" icon="edit" flat @click="editUser(props.row)" />
                            </q-td>
                        </template>

                        <!-- Delete button scoped slot -->
                        <template v-slot:body-cell-Delete="props">
                            <q-td class="">
                                <q-btn color="red" icon="delete" flat @click="deleteUser(props.row.User_ID)" />
                            </q-td>
                        </template>
                    </q-table>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
import { useUserStore } from "../stores/UserStore";

export default {
    setup() {
        const router = useRouter();
        const userStore = useUserStore();
        const rows = ref([]); // Define rows as a reactive reference

        // Fetch users on mount
        onMounted(async () => {
            await userStore.fetchUsers();
            rows.value = userStore.users.Data.map(user => ({
                User_ID: user.id,
                Name: user.name,
                Email: user.email,
                DOB: user.dob,
                Edit: '',
                Delete: ''
            }));
        });

        // Edit user
        const editUser = (userData) => {
            const userId = userData.User_ID;
            userStore.setCurrentUser(userData);
            router.push({ name: 'EditUser', params: { userId } });
        };

        // Delete user
        const deleteUser = async (userId) => {
            var confirmDelete = confirm(`Are you sure want to delete user ID: ${userId}`)
            if (confirmDelete) {
                try {
                    await userStore.deleteUser(userId); // Calling here delete API
                    rows.value = rows.value.filter(row => row.User_ID !== userId); // Update rows
                    console.log(`User ${userId} deleted successfully.`);
                } catch (error) {
                    console.error(`Failed to delete user ${userId}:`, error);
                }
            }
        };

        return { rows, editUser, deleteUser }
    }
}
</script>