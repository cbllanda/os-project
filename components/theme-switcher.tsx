"use client";

import { useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

interface ThemeSwitcherProps {
  className?: string;
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const selectedKeys = useMemo(() => [theme] as string[], [theme]);

  return (
    <Dropdown isOpen={isOpen} onOpenChange={setIsOpen} placement="right-end">
      <DropdownTrigger>
        <Button isIconOnly className="bg-transparent">
          <Sun className="rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 text-default-500 dark:text-default-600" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-default-500 dark:text-default-600" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        selectionMode="single"
        selectedKeys={selectedKeys}
        disallowEmptySelection
      >
        <DropdownSection title="Change Theme">
          <DropdownItem
            key="light"
            onPress={() => setTheme("light")}
            startContent={<Sun className="w-5 h-5" />}
          >
            Light Mode
          </DropdownItem>
          <DropdownItem
            key="dark"
            onPress={() => setTheme("dark")}
            startContent={<Moon className="w-5 h-5" />}
          >
            Dark Mode
          </DropdownItem>
          <DropdownItem
            key="system"
            onPress={() => setTheme("system")}
            startContent={<Monitor className="w-5 h-5" />}
          >
            System
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ThemeSwitcher;
