import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Perfil del Usuario",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Alumnos",
    icon: "fas fa-user-friends",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Profesores",
    icon: "fas fa-user-tie",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Grados",
    icon: "nc-icon nc-grid-45",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Asistencias",
    icon: "fas fa-hands-helping",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Tareas",
    icon: "fas fa-tasks",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Áreas",
    icon: "fas fa-book",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Semanas",
    icon: "fas fa-calendar-week",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Clases",
    icon: "nc-icon nc-ruler-pencil",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
