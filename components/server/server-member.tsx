"use client";

import { useParams, useRouter } from "next/navigation";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { Member, MemberRole, Profile, Server } from "@prisma/client";

import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";

interface ServerMemberProps {
  server: Server;
  member: Member & { profile: Profile };
}

const roleIconMap = {
  [MemberRole.ADMIN]: <ShieldAlert className="size-4 mr-2 text-rose-500" />,
  [MemberRole.MODERATOR]: (
    <ShieldCheck className="size-4 mr-2 text-indigo-500" />
  ),
  [MemberRole.GUEST]: null,
};

export const ServerMember = ({ server, member }: ServerMemberProps) => {
  const router = useRouter();
  const params = useParams();

  const icon = roleIconMap[member.role];

  return (
    <button
      className={cn(
        "group p-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
        params?.memberId === member.id && "bg-zinc-700/20 dark:bg-zinc-700"
      )}
    >
      {icon}
      <UserAvatar src={member.profile.imageUrl} className="size-8 md:size-8" />
      <p
        className={cn(
          "line-clamp-1 text-start font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
          params?.channelId === member.id &&
            "text-primary dark:text-zinc-200 dark:group-hover:text-white"
        )}
      >
        {member.profile.name}
      </p>
    </button>
  );
};
