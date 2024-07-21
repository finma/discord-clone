import { Hash } from "lucide-react";

import { UserAvatar } from "@/components/user-avatar";
import { MobileToggle } from "@/components/mobile-toggle";
import { SocketIndicator } from "@/components/socket-indicator";

interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}

export const ChatHeader = ({
  serverId,
  name,
  type,
  imageUrl,
}: ChatHeaderProps) => {
  return (
    <div className="flex items-center text-base font-semibold px-3 h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <Hash className="size-5 text-zinc-500 dark:text-zinc-400 mr-2" />
      )}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="size-8 md:size-8 mr-2" />
      )}
      <p className="text-base font-semibold text-black dark:text-white">
        {name}
      </p>
      <div className="ml-auto flex items-center">
        <SocketIndicator />
      </div>
    </div>
  );
};
