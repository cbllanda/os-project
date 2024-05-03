import { Code } from "@nextui-org/code";
import { cn } from "@nextui-org/system";

import { fontMono } from "@/config/fonts";

interface ThroughputProps {
  numberOfProcesses: number;
  totalTime: number;
}

function Throughput({ numberOfProcesses, totalTime }: ThroughputProps) {
  const throughput = numberOfProcesses / totalTime;

  return (
    <div className="my-[0.8rem]">
      <label className="font-semibold">Throughput: </label>
      <Code className={cn("tracking-wide text-primary block w-fit mt-1 sm:inline-block sm:mt-0", fontMono.className)} size="md">
        {numberOfProcesses} / {totalTime} = {throughput.toFixed(2)}
      </Code>
    </div>
  );
}

export default Throughput;
