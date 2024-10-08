import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ServerSidebar } from "@/components/server/server-sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

export const MobileToggle = ({ serverId }: { serverId: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex p-0 gap-0">
        {/* Navigation Sidebar */}
        <div className="w-[72px]">
          <NavigationSidebar />
        </div>

        {/* Server Sidebar */}
        <ServerSidebar serverId={serverId} />
      </SheetContent>
    </Sheet>
  );
};
