import { html, render, createRouter, Router } from "@ezbug/slash";
import { Home } from "./pages/Home";
import { Tasks } from "./pages/Tasks";
import { TaskEdit } from "./pages/TaskEdit";
import { TaskNew } from "./pages/TaskNew";
import { NotFound } from "./pages/NotFound";

if (__DEV__) {
  console.log("[DEV] Task Manager iniciando em modo desenvolvimento");
  console.log("[DEV] Ambiente:", process.env.NODE_ENV);
}

// Create router with routes
const router = createRouter({
  routes: [
    { path: "/", component: () => Home() },
    { path: "/tasks", component: () => Tasks() },
    { path: "/tasks/new", component: () => TaskNew() },
    { path: "/tasks/:id", component: (state) => TaskEdit({ id: state.params.id }) },
    { path: "/404", component: () => NotFound() },
  ],
  mode: "history",
  fallback: "/404",
});

function App() {
  return html`<${Router} router=${router} />`;
}

render(html`<${App} />`, document.getElementById("app")!);

