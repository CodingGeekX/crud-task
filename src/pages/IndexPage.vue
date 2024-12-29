<template>
  <q-layout>
    <q-page-container>
      <q-page class="window-height window-width row justify-center items-center"
        style="background: linear-gradient(#02e2fb, #5A4A9F);">
        <div class="column q-pa-lg">
          <div class="row">
            <q-card square class="shadow-24" style="width:300px;height:485px;">
              <q-card-section class="bg-deep-purple-7">
                <h4 class="text-h5 text-white q-my-md">Registration</h4>
                <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
                  <q-btn fab icon="close" color="purple-4" />
                </div>
              </q-card-section>
              <q-card-section>
                <q-form @submit.prevent="submitForm" class="q-px-sm q-pt-xl q-pb-lg">
                  <!-- Name Input -->
                  <q-input square clearable v-model="newUser.name" type="text" label="Name">
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>

                  <!-- Date of Birth Input -->
                  <q-input square clearable v-model="newUser.dob" type="text" label="Date of birth" mask="date"
                    :rules="['date']">
                    <template v-slot:prepend>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-date v-model="newUser.dob" mask="YYYY-MM-DD" emit-value
                            @update:model-value="showDatePicker = false">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>

                  <!-- Email Input -->
                  <q-input square clearable v-model="newUser.email" type="email" label="Email">
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>

                  <!-- Password Input -->
                  <q-input square clearable v-model="newUser.password" type="password" label="Password">
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>

                  <!-- Submit Button -->
                  <q-card-actions class="q-pa-lg">
                    <q-btn type="submit" unelevated size="lg" color="purple-4" class="full-width text-white"
                      label="Get Started" />
                  </q-card-actions>
                </q-form>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from "../stores/UserStore";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const userStore = useUserStore();
    const newUser = ref({ name: "", email: "", dob: "", password: "" });
    const isEditMode = route.params.userId !== undefined; // Check if we're getting userID in params

    const formatDate = (date) => {
      if (!date) return "";
      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    // Fetch users on mount
    onMounted(() => {
      if (isEditMode) {
        newUser.value.name = userStore.currentUser.Name;
        newUser.value.dob = userStore.currentUser.DOB;
        newUser.value.email = userStore.currentUser.Email;
      }
    });

    // Try submitting the form
    const submitForm = async () => {
      try {
        if (isEditMode) {
          const formattedUser = {
            ...newUser.value,
            dob: formatDate(newUser.value.dob),
          };
          await userStore.updateUser(userStore.currentUser.User_ID, formattedUser); // Update user
        } else {
          const formattedUser = {
            ...newUser.value,
            dob: formatDate(newUser.value.dob),
          };
          await userStore.addUser(formattedUser); // Add new user
          newUser.value = { name: "", email: "", dob: "", password: "" };
        }
        router.push({ name: 'UserTable' }); // Redirect to the table after submission
      } catch (error) {
        console.error('Error saving user:', error);
      }
    };

    return {
      users: userStore.users,
      loading: userStore.loading,
      error: userStore.error,
      newUser,
      submitForm,
    };
  },
};
</script>

<style></style>