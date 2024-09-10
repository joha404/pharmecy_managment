<template>
  <div class="the-header">
    <div>
      <input type="text" class="the-header__search" placeholder="Search...." />
    </div>
    <div class="avatar-wrapper">
      <div class="avatar" @click="showAvatar = !showAvatar">T</div>
      <div class="avatar__overflow" v-show="showAvatar">
        <div class="avatar__overflow-title">test@gmail.com</div>
        <router-link to="/dashboard/settings/account">
          <div
            class="avatar__overflow-link mt-2"
            @click="
              showAvatar = false;
              $router.push('/dashboard/settings');
            "
          >
            Settings
          </div>
        </router-link>
        <router-link to="#" @click="logout">
          <div class="avatar__overflow-link mb-2">Logout</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAvatar: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("accessToken");
      location.href = "/";
    },
  },
};
</script>

<style>
.the-header {
  padding: 9px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.the-header__search {
  width: 555px;
}
.the-header a {
  color: rgb(233, 168, 27);
}
.avatar-wrapper {
  position: relative;
}
.avatar {
  width: 33px;
  height: 33px;
  background-color: aqua;
  border-radius: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
}
.avatar__overflow {
  text-decoration: none;
  margin-top: 150px;
  background-color: #fefefefe;
}
.avatar__overflow-title {
  padding: 3px 9px;

  text-align: center;
}
.avatar__overflow-link {
  width: 100%;
  cursor: pointer;
  padding: 5px 15px;
  font-size: 16px;
  color: #393939;
}
.avatar__overflow-link:hover {
  background-color: rgb(241, 241, 241);
}
</style>
