"use client";

import { Plus } from "lucide-react";

import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip label="Create a server" side="right" align="center">
        <button
          onClick={() => onOpen("create-server")}
          className="group flex items-center"
        >
          <div className="size-12 flex items-center justify-center rounded-[24px] bg-background overflow-hidden dark:bg-neutral-700 transition-all group-hover:rounded-[12px] group-hover:bg-emerald-500 ">
            <Plus
              size={25}
              className="group-hover:text-white transition text-emerald-500 "
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
