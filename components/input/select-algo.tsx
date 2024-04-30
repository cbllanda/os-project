"use client";

import { Dispatch, SetStateAction, ChangeEvent } from "react";

import { Select, SelectSection, SelectItem } from "@nextui-org/react";

export type AlgoType = "FCFS" | "SJF" | "SRTF" | "RR" | "NPP" | "PP";
export type OptionType = {
  value: AlgoType;
  label: string;
};

export const defaultOption: OptionType = {
  value: "FCFS",
  label: "First Come First Serve, FCFS",
};

const options: OptionType[] = [
  defaultOption,
  {
    value: "SJF",
    label: "Shortest Job First, SJF (Non-Preemptive)",
  },
  {
    value: "SRTF",
    label: "Shortest Remaining Time First, SRTF",
  },
  {
    value: "RR",
    label: "Round-Robin, RR",
  },
  // {
  //   value: "NPP",
  //   label: "Non-Preemptive Priority, NPP",
  // },
  // {
  //   value: "PP",
  //   label: "Preemptive Priority, PP",
  // },
];

type SelectAlgoProps = {
  selectedAlgo: OptionType;
  setSelectedAlgo: Dispatch<SetStateAction<OptionType>>;
  isDisabled: boolean;
};

function SelectAlgo({
  selectedAlgo,
  setSelectedAlgo,
  isDisabled,
}: SelectAlgoProps) {
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value as AlgoType;
    setSelectedAlgo(
      options.find((option) => option.value === newValue) || defaultOption
    );
  };

  return (
    <Select
      label="Algorithm"
      labelPlacement="outside"
      placeholder="Select a algorithm"
      variant="bordered"
      color="primary"
      fullWidth
      classNames={{
        trigger: "h-[2.75rem] min-h-[2.75rem] lg:h-[2.5rem] lg:min-h-[2.5rem]",
      }}
      items={options}
      selectedKeys={[selectedAlgo.value]}
      onChange={onChange}
      isDisabled={isDisabled}
    >
      <SelectSection title="Algorithms">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectSection>
    </Select>
  );
}

export default SelectAlgo;
