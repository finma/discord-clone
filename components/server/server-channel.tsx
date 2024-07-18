"use client";

import { useParams, useRouter } from "next/navigation";
import { Edit, Hash, Lock, Mic, Trash, Video } from "lucide-react";
import { Channel, ChannelType, MemberRole, Server } from "@prisma/client";

import { cn } from "@/lib/utils";
import { useModal } from "@/hooks/use-modal-store";
import { ActionTooltip } from "@/components/action-tooltip";

interface ServerChannelProps {
  channel: Channel;
  server: Server;
  role?: MemberRole;
}

const iconMap = {
  [ChannelType.TEXT]: Hash,
  [ChannelType.AUDIO]: Mic,
  [ChannelType.VIDEO]: Video,
};

export const ServerChannel = ({
  server,
  channel,
  role,
}: ServerChannelProps) => {
  const router = useRouter();
  const params = useParams();
  const { onOpen } = useModal();

  const Icon = iconMap[channel.type];

  return (
    <button
      className={cn(
        "group p-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
        params?.channelId === channel.id && "bg-zinc-700/20 dark:bg-zinc-700"
      )}
    >
      <Icon className="flex-shrink-0 size-5 text-zinc-500 dark:text-zinc-400" />
      <p
        className={cn(
          "line-clamp-1 text-start font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
          params?.channelId === channel.id &&
            "text-primary dark:text-zinc-200 dark:group-hover:text-white"
        )}
      >
        {channel.name}
      </p>

      {channel.name !== "general" && role !== MemberRole.GUEST && (
        <div className="ml-auto flex items-center gap-x-2">
          <ActionTooltip label="Edit">
            <Edit
              onClick={() => onOpen("edit-channel", { server, channel })}
              className="hidden group-hover:block size-4 text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
            />
          </ActionTooltip>
          <ActionTooltip label="Delete">
            <Trash
              onClick={() => onOpen("delete-channel", { server, channel })}
              className="hidden group-hover:block size-4 text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
            />
          </ActionTooltip>
        </div>
      )}

      {channel.name === "general" && (
        <Lock className="size-4 ml-auto text-zinc-500 dark:text-zinc-400" />
      )}
    </button>
  );
};
