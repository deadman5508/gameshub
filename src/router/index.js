import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import GameListPage from "../pages/GameListPage.vue";
import GameSearch from "../pages/GameSearch.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/games", name: "GameList", component: GameListPage },
  { path: "/search", name: "GameSearch", component: GameSearch },
  {path: "/game/:id", name: "GameDetails", component: () => import("../pages/GameDetails.vue"), props:true}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
