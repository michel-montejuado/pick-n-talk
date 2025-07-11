import { Outlet } from "react-router";

import { Branding } from "@/components/app/branding/Brand";
import { StackedLayout } from "@/components/ui/stacked-layout";
import { Sidebar } from "@/components/ui/sidebar";
import { Navbar } from "@/components/ui/navbar";
import { Link } from "@/components/ui/link";

export default function Layout() {
  return (
    <StackedLayout
      sidebar={<Sidebar>{/* Add sidebar content here */}</Sidebar>}
      navbar={
        <Navbar>
          <Link href="/" aria-label="Home">
            <Branding />
          </Link>
        </Navbar>
      }
    >
      <Outlet />
    </StackedLayout>
  );
}
