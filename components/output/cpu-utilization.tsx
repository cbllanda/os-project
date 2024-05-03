import { Code } from "@nextui-org/code";
import { cn } from "@nextui-org/system";

import { fontMono } from "@/config/fonts";

interface CpuProps {
  totalCpuTime: number;
  totalElapsedTime: number;
}

function CpuUtilization({ totalCpuTime, totalElapsedTime }: CpuProps) {

  const cpuUtilization = totalCpuTime / totalElapsedTime * 100

  return (
    <div className="my-[0.8rem]">
      <label className="font-semibold">CPU Utilization: </label>
      <Code className={cn("tracking-wide text-primary block w-fit mt-1 sm:inline-block sm:mt-0", fontMono.className)} size="md">{totalCpuTime} / {totalElapsedTime} * 100 = {cpuUtilization.toFixed(2)}%</Code>
    </div>
  );
}

export default CpuUtilization;
