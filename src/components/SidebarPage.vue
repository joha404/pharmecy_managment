<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <h3>Pharmecy Managment</h3>
    </div>
    <div class="sidebar__bottom">
      <div class="sidebar__nav pt-5">
        <router-link to="/dashboard/vendor">Vendors</router-link>
        <router-link to="/dashboard/overview">Overview</router-link>
        <router-link to="/dashboard/drugs">Drugs</router-link>
        <router-link to="/dashboard/sellingHistory"
          >Selling History</router-link
        >
        <router-link to="/dashboard/setting">Setting</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: rgb(88, 0, 62);
  color: #fff;
}
.sidebar__top {
  padding: 11px 22px;
  color: #c39f9f;
  text-shadow: 0 1px 0 #040404;
}
.sidebar__bottom {
  flex: 1;
  overflow-y: auto;
}
.sidebar__nav a,
.sidebar__nav a:visited {
  display: block;
  padding: 9px 22px;
  text-decoration: none;
  border-bottom: 1px solid red;
  color: #afafaf;
  border-left: 4px solid rgb(241, 12, 12);
  text-shadow: none;
}
</style>
