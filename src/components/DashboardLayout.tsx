import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Global header with trigger - always visible */}
          <div className="lg:hidden bg-surface-white border-b p-2">
            <SidebarTrigger />
          </div>
          
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;