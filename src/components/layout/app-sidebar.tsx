"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Command,
  GalleryVerticalEnd,
  Map,
  Settings2,
  School,
  Blocks,
  HandCoins,
  BookUser,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavUser } from "./nav-user";
import { NavProjects } from "./nav-projects";
import { NavMain } from "./nav-main";


const data = {
  user: {
    name: "profe",
    email: "profe@example.com",
    avatar: "/profe.jpg",
  },
  teams: [
    {
      name: "App de Profesor",
      logo: GalleryVerticalEnd,
      plan: "School",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Escuela",
      url: "/",
      icon: School,
      isActive: true,
      items: [
        {
          title: "Aulas",
          url: "/Aula",
        },
        {
          title: "Cine",
          url: "/Cine",
        },
        {
          title: "Historial",
          url: "#",
          submenu: true,
          itemss: [
            {
              titulo: "Profesores",
              urls: "#",
            },
            {
              titulo: "Alumnos",
              urls: "#",
            },
          ],
        },
      ],
    },
    {
      title: "Personal",
      url: "#",
      icon: BookUser,
      items: [
        {
          title: "Profesores",
          url: "#",
        },
        {
          title: "Limpieza",
          url: "#",
        },
        {
          title: "Otros Trabajadores",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Videos",
          url: "#",
        },
        {
          title: "Libros",
          url: "#",
        },
        {
          title: "Descargas",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Construccion",
      url: "#",
      icon: Blocks,
    },
    {
      name: "Dinero",
      url: "#",
      icon: HandCoins,
    },
    {
      name: "Viajes",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
     return (
       <Sidebar collapsible="icon" {...props}>
         <SidebarHeader>
           <TeamSwitcher teams={data.teams} />
         </SidebarHeader>
         <SidebarContent>
           <NavMain items={data.navMain} />
           <NavProjects projects={data.projects} />
         </SidebarContent>
         <SidebarFooter>
           <NavUser user={data.user} />
         </SidebarFooter>
         <SidebarRail />
       </Sidebar>
     );
}