import { Code } from "@nextui-org/code";
import { cn } from "@nextui-org/system";

import { fontMono } from "@/config/fonts";

interface AverageWaitingTimeProps {
  totalWaitingTime: number;
  numberOfProcesses: number;
}

function AverageWaitingTime({
  totalWaitingTime,
  numberOfProcesses,
}: AverageWaitingTimeProps) {
  const averageWaitingTime = totalWaitingTime / numberOfProcesses;

  return (
    <div className="my-[0.8rem]">
      <label className="font-semibold">Average Waiting Time: </label>
      <Code className={cn("tracking-wide text-primary", fontMono.className)} size="md">
        {totalWaitingTime} / {numberOfProcesses} ={" "}
        {averageWaitingTime.toFixed(2)}ms
      </Code>
    </div>
  );
}

export default AverageWaitingTime;
