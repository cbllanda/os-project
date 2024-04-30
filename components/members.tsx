import { User } from "lucide-react";

import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Tooltip } from "@nextui-org/tooltip";

function Members() {
  return (
    <AvatarGroup isBordered className="mt-2 z-50" max={10}>
      <Tooltip
        content="Alec Jeremy Javier"
        delay={50}
        closeDelay={80}
        classNames={{
          base: "!w-[10rem] font-medium text-lg",
        }}
        color="primary"
      >
        <Avatar
          src="/e804d900-5bb2-4cf1-a925-6c0fa38eb5c6.png"
          name="Alec Jeremy Javier"
          fallback={<User className="text-default-500" />}
          className="!w-[3.2rem] !h-[3.2rem]"
        />
      </Tooltip>
      <Tooltip
        content="Andrei Unciano"
        delay={50}
        closeDelay={80}
        classNames={{
          base: "!w-[10rem] font-medium text-lg",
        }}
        color="primary"
      >
        <Avatar
          name="Andrei Unciano"
          fallback={<User className="text-default-500" />}
          showFallback
          className="!w-[3.2rem] !h-[3.2rem]"
        />
      </Tooltip>
      <Tooltip
        content="Bryan Barrientos"
        delay={50}
        closeDelay={80}
        classNames={{
          base: "!w-[10rem] font-medium text-lg",
        }}
        color="primary"
      >
        <Avatar
          name="Bryan Barrientos"
          fallback={<User className="text-default-500" />}
          showFallback
          className="!w-[3.2rem] !h-[3.2rem]"
        />
      </Tooltip>
      <Tooltip
        content={
          <div className="flex flex-col text-center">
            <div>Carl Jerrick Llanda</div>
            <div className="text-xs font-normal">Programmer</div>
          </div>
        }
        radius="full"
        delay={50}
        closeDelay={80}
        classNames={{
          base: "!w-[10rem] font-medium text-lg",
        }}
        color="primary"
      >
        <Avatar
          src="/ec228b5b-a98b-47fd-8a1c-e73670797d65.png"
          name="Carl Jerrick Llanda"
          fallback={<User className="text-default-500" />}
          className="!w-[3.2rem] !h-[3.2rem]"
        />
      </Tooltip>
      <Tooltip
        content="Darren Sales"
        delay={50}
        closeDelay={80}
        classNames={{
          base: "!w-[10rem] font-medium text-lg",
        }}
        color="primary"
      >
        <Avatar
          src="/b19bee98-ced0-4687-9689-4f61bdc7f3e0.png"
          name="Darren Sales"
          fallback={<User className="text-default-500" />}
          className="!w-[3.2rem] !h-[3.2rem]"
        />
      </Tooltip>
      <Tooltip
        content="Jericho Borillo"
        delay={50}
        closeDelay={80}
        classNames={{
          base: "!w-[10rem] font-medium text-lg",
        }}
        color="primary"
      >
        <Avatar
          src="/30205957-dbe5-49b8-9357-ed0c55875f84.png"
          name="Jericho Borillo"
          fallback={<User className="text-default-500" />}
          className="!w-[3.2rem] !h-[3.2rem]"
        />
      </Tooltip>
      <Tooltip
        content="Maricar Ranae Baño"
        delay={50}
        closeDelay={80}
        classNames={{
          base: "!w-[10rem] font-medium text-lg",
        }}
        color="primary"
      >
        <Avatar
          src="/9b7cbb82-1b80-447f-b5e5-7bc0ac745b49.png"
          name="Maricar Ranae Baño"
          fallback={<User className="text-default-500" />}
          className="!w-[3.2rem] !h-[3.2rem]"
        />
      </Tooltip>
      <Tooltip
        content="Shiela May Rodriguez"
        delay={50}
        closeDelay={80}
        classNames={{
          base: "!w-[10rem] font-medium text-lg",
        }}
        color="primary"
      >
        <Avatar
          src="/436837290_1165611047951774_861918876324043287_n.jpg"
          name="Shiela May Rodriguez"
          fallback={<User className="text-default-500" />}
          className="!w-[3.2rem] !h-[3.2rem]"
        />
      </Tooltip>
    </AvatarGroup>
  );
}

export default Members;
