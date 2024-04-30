import { Users } from "lucide-react";

import { Button } from "@nextui-org/button";

interface MembersButtonProps {
  onOpen: () => void;
}

function MembersButton({ onOpen }: MembersButtonProps) {
  
  return (
    <Button isIconOnly onPress={onOpen} className="bg-transparent">
      <Users className="text-default-500 dark:text-default-600" />
    </Button>
  );
}

export default MembersButton;
