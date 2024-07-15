"use client";

import { InviteModal } from "@/components/modals/invite-modal";
import { CreateServerModal } from "@/components/modals/create-server-modal";

export const ModalProvider = () => {
  return (
    <>
      <CreateServerModal />
      <InviteModal />
    </>
  );
};
