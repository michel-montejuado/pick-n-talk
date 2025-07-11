import { Outlet } from "react-router";
import { SidebarLayout } from "@/components/ui/sidebar-layout";
import { Sidebar } from "@/components/ui/sidebar";
import { Navbar } from "@/components/ui/navbar";

export default function Layout() {
  return (
    <SidebarLayout
      sidebar={<Sidebar>{/* Add sidebar content here */}</Sidebar>}
      navbar={<Navbar>{/* Add navbar content here */}</Navbar>}
    >
      <Outlet />
    </SidebarLayout>
  );
}
