"use client";

import React, {
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useTransition,
} from "react";
import toast from "react-hot-toast";

import { Input } from "@nextui-org/input";
import { Card, CardBody } from "@nextui-org/card";

import SelectAlgo, {
  OptionType,
  defaultOption,
} from "@/components/input/select-algo";
import InputButton from "@/components/input/input-button";

type InputProps = {
  selectedAlgo: OptionType;
  setSelectedAlgo: Dispatch<SetStateAction<OptionType>>;
  setArrivalTime: Dispatch<SetStateAction<number[]>>;
  setBurstTime: Dispatch<SetStateAction<number[]>>;
  setTimeQuantum: Dispatch<SetStateAction<number | undefined>>;
  setPriorities: Dispatch<SetStateAction<number[]>>;
};

function Inputs(props: InputProps) {
  const [selectedAlgo, setSelectedAlgo] = useState<OptionType>(defaultOption);
  const [arrivalTime, setArrivalTime] = useState("");
  const [burstTime, setBurstTime] = useState("");
  const [timeQuantum, setTimeQuantum] = useState("");
  const [priorities, setPriorities] = useState("");
  const arrivalTimeRef = useRef<HTMLInputElement>(null);
  const burstTimeRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (arrivalTimeRef.current && burstTimeRef.current) {
      arrivalTimeRef.current.value = "";
      burstTimeRef.current.value = "";
    }
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const arrivalTimeArr = arrivalTime
      .trim()
      .split(/\s+/)
      .map((at) => parseInt(at));
    const burstTimeArr = burstTime
      .trim()
      .split(/\s+/)
      .map((bt) => parseInt(bt));
    const timeQuantumInt = parseInt(timeQuantum);
    let prioritiesArr = priorities
      .trim()
      .split(/\s+/)
      .map((priority) => parseInt(priority));

    if (burstTimeArr.includes(0)) {
      toast("0 burst time is invalid", { icon: "❌" });
      return;
    } else if (arrivalTimeArr.length !== burstTimeArr.length) {
      toast("The number of arrival times and burst times must be equal", {
        icon: "❌",
      });
      return;
    } else if (
      arrivalTimeArr.some((t) => isNaN(t)) ||
      burstTimeArr.some((t) => isNaN(t)) ||
      (selectedAlgo.value === "RR" && isNaN(timeQuantumInt))
    ) {
      toast("Invalid input", { icon: "❌" });
      return;
    } else if (
      arrivalTimeArr.some((t) => t < 0) ||
      burstTimeArr.some((t) => t < 0)
    ) {
      toast("Negative integers are not allowed", { icon: "❌" });
      return;
    } else if (selectedAlgo.value === "RR" && timeQuantumInt < 0) {
      toast("Negative integers are not allowed", { icon: "❌" });
      return;
    }

    if (selectedAlgo.value === "NPP" || selectedAlgo.value === "PP") {
      if (priorities.trim() === "") {
        prioritiesArr = arrivalTimeArr.map(() => 0);
      } else if (
        prioritiesArr.length !== arrivalTimeArr.length ||
        prioritiesArr.length !== arrivalTimeArr.length
      ) {
        toast("The number of arrival times and priorities must be equal", {
          icon: "❌",
        });
        return;
      }
    }

    startTransition(async () => {
      await Promise.all([
        props.setSelectedAlgo(selectedAlgo),
        props.setArrivalTime(arrivalTimeArr),
        props.setBurstTime(burstTimeArr),
        props.setTimeQuantum(timeQuantumInt),
        props.setPriorities(prioritiesArr),
      ]).then(() => {
        toast.success("Input received", { icon: "✅" });
      });
    });
  }

  const handleArrivalTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalTime(e.target.value);
  };

  const handleBurstTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBurstTime(e.target.value);
  };

  const handleTimeQuantumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeQuantum(e.target.value);
  };

  const handlePrioritiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriorities(e.target.value);
  };

  return (
    <Card className="w-full px-4 py-5 lg:w-[22rem]">
      <CardBody>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-[1rem]">
            <SelectAlgo
              selectedAlgo={selectedAlgo}
              setSelectedAlgo={setSelectedAlgo}
              isDisabled={isPending}
            />
            <Input
              ref={burstTimeRef}
              label="Burst Times"
              labelPlacement="outside"
              placeholder="eg. 0 1 2 3 4 5"
              variant="bordered"
              color="primary"
              fullWidth
              classNames={{
                inputWrapper:
                  "h-[2.75rem] min-h-[2.75rem] lg:h-[2.5rem] lg:min-h-[2.5rem]",
              }}
              onChange={handleBurstTimeChange}
              isDisabled={isPending}
            />
            <Input
              ref={arrivalTimeRef}
              label="Arrival Times"
              labelPlacement="outside"
              placeholder="eg. 0 1 2 3 4 5"
              variant="bordered"
              color="primary"
              fullWidth
              classNames={{
                inputWrapper:
                  "h-[2.75rem] min-h-[2.75rem] lg:h-[2.5rem] lg:min-h-[2.5rem]",
              }}
              onChange={handleArrivalTimeChange}
              isDisabled={isPending}
            />
            {selectedAlgo.value === "RR" && (
              <Input
                defaultValue={timeQuantum}
                onChange={handleTimeQuantumChange}
                label="Time Quantom"
                labelPlacement="outside"
                placeholder="eg. 0"
                variant="bordered"
                color="primary"
                fullWidth
                classNames={{
                  inputWrapper:
                    "h-[2.75rem] min-h-[2.75rem] lg:h-[2.5rem] lg:min-h-[2.5rem]",
                }}
                min="1"
                step="1"
                isDisabled={isPending}
              />
            )}
            {(selectedAlgo.value === "NPP" || selectedAlgo.value === "PP") && (
              <Input
                defaultValue={priorities}
                onChange={handlePrioritiesChange}
                label="Priorities"
                labelPlacement="outside"
                placeholder="Lower number has higher priority"
                variant="bordered"
                color="primary"
                fullWidth
                classNames={{
                  inputWrapper:
                    "h-[2.75rem] min-h-[2.75rem] lg:h-[2.5rem] lg:min-h-[2.5rem]",
                }}
                isDisabled={isPending}
              />
            )}
            <InputButton isPending={isPending} />
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default Inputs;
