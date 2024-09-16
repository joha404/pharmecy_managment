<template>
  <div>
    <div class="login-page">
      <div class="login-card">
        <h2 class="text-center">{{ projectName }}</h2>
        <div class="text-center">
          <img src="../assets/lock.png" class="login-card_icon" alt="" />
          <h2>User Login</h2>
        </div>
        <form @submit.prevent="handleSubmit">
          <label>username</label>
          <input
            type="text"
            v-model="FormData.username"
            placeholder="Enter username"
            ref="username"
          />
          <label class="block mt-3">Password</label>
          <input
            type="password"
            v-model="FormData.password"
            placeholder="Enter password"
            ref="password"
          />
          <!-- <p class="text-center mt-3" v-if="loggingIn">Logging in...</p> -->
          <!-- <button type="submit" class="w-100 mt-3" v-else>Log in</button> -->
          <TheButton :block="true" :loading="loggingIn" class="w-100 pt-2"
            >log in</TheButton
          >
          <div class="mt-3 d-flex jc-between">
            <div>
              <label> <input type="checkbox" /> Remember me </label>
            </div>
            <div><a href="#">Forgot password</a></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { myBus } from "../utils/eventBus";
import { setPrivateHeaders } from "../service/axiosInstance";
import { MyError, MySuccess } from "../utils/functions";
import TheButton from "../components/TheButton.vue";
import { infoStore } from "../data/info";

export default {
  components: { TheButton },
  data() {
    return {
      FormData: {
        username: "",
        password: "",
      },
      loggingIn: false,
      projectName: infoStore.projectName,
    };
  },
  methods: {
    handleSubmit() {
      // Validation checks
      if (!this.FormData.username) {
        MyError("Enter a valid username");
        this.$refs.username.focus();
        return;
      }

      if (!this.FormData.password || this.FormData.password.length < 6) {
        this.$refs.password.focus();
        MyError("Enter a valid password (at least 6 characters");
        return;
      }

      // Handle form submission here
      //myBus.emit("toast", {
      //   type: "Success",
      //   message: "Login successful!",
      // });
      this.loggingIn = true;
      axios
        .post(
          "https://api.rimoned.com/api/pharmacy-management/v1/login",
          this.FormData
        )
        .then((res) => {
          MySuccess(res);
          localStorage.setItem("accessToken", res.data.accessToken);
          setPrivateHeaders();
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          MyError(err);
        })
        .finally(() => {
          this.loggingIn = false;
        });
    },
  },
};
</script>

<style>
.login-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 235, 235);
}
.login-card {
  width: 400px;
  min-height: 193px;
  box-shadow: 0px 2px 9px 4px #dfdfdf;
  background-color: #fff;
  border-radius: 5px;
  padding: 44px 33px;
}
.login-card input[type="text"],
.login-card input[type="password"] {
  width: 100%;
}
.login-card_icon {
  max-height: 77px;
}
button {
  height: 34px;
}
</style>
