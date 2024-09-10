import { createRouter, createWebHistory } from "vue-router";

const vendor = () => import("../views/dashboard/VendorsPage.vue");
import dashboard from "../views/DashboardPage.vue";
import login from "../views/LoginPage.vue";

const drugs = () => import("../views/dashboard/DrugsPage.vue");
const overview = () => import("../views/dashboard/OverviewPage.vue");
const setting = () => import("../views/dashboard/SettingPage.vue");
const sellingHistory = () => import("../views/dashboard/SellingHistory.vue");

const routes = [
  {
    path: "/",
    component: login,
  },
  {
    path: "/dashboard",
    component: dashboard,
    children: [
      { path: "/dashboard", redirect: "/dashboard/overview" },
      { path: "vendor", component: vendor }, // Corrected to relative path
      { path: "drugs", component: drugs },
      { path: "overview", component: overview },
      { path: "setting", component: setting },
      { path: "sellingHistory", component: sellingHistory },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  console.log(to);
  console.log(from);
});

export default router;
