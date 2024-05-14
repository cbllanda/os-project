import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import { cn } from "@nextui-org/system";

import { title } from "@/components/primitives";
import Members from "@/components/members";
import { Meteors } from "@/components/ui/meteors";

interface MembersModalProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
}

function MembersModal({ isOpen, onOpenChange }: MembersModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={true}>
      <ModalContent className="overflow-hidden">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <span className={cn("z-50 !text-xl", title({ color: "violet" }))}>
                Group Members
              </span>
            </ModalHeader>
            <ModalBody className="mb-10">
              <Members />
            </ModalBody>
            <Meteors number={20} />
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default MembersModal;
