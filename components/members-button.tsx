import { Users } from "lucide-react";

import { Button } from "@nextui-org/button";

interface MembersButtonProps {
  onOpen: () => void;
}

function MembersButton({ onOpen }: MembersButtonProps) {
  return (
    <Button
      isIconOnly
      onPress={onOpen}
      className="bg-transparent text-default-500 dark:text-default-600"
    >
      <Users />
    </Button>
  );
}

export default MembersButton;
