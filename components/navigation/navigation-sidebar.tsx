import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import { currentProfile } from "@/lib/current-profile";
import { ScrollArea } from "@/components/ui/scroll-area";

import { NavigationItem } from "./navigation-item";
import { NavigationAction } from "./navigation-action";

export const NavigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="flex flex-col size-full items-center space-y-4 text-primary py-3 dark:bg-[#1E1F22] ">
      {/* Create Server */}
      <NavigationAction />

      <Separator className="h-[2px] w-10 mx-auto rounded-md bg-zinc-300 dark:bg-zinc-700 " />

      {/* Servers */}
      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>

      <div className="mt-auto flex items-center flex-col gap-y-4 pb-3">
        <ModeToggle />
        <UserButton
          appearance={{
            elements: {
              avatarBox: "size-12",
            },
          }}
        />
      </div>
    </div>
  );
};
