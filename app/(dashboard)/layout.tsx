// import { Sidebar } from "@/layouts/Sidebar";
// import { Topbar } from "@/layouts/Topbar";

import { Sidebar } from "./layouts/Sidebar";
import { Topbar } from "./layouts/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
