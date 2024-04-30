import { Code } from "@nextui-org/react";

interface CpuProps {
  totalCpuTime: number;
  totalElapsedTime: number;
}

function CpuUtilization({ totalCpuTime, totalElapsedTime }: CpuProps) {

  const cpuUtilization = totalCpuTime / totalElapsedTime * 100

  return (
    <div className="my-[0.8rem]">
      <label className="font-semibold">CPU Utilization: </label>
      <Code className="tracking-wide" size="md">{totalCpuTime} / {totalElapsedTime} * 100 = {cpuUtilization.toFixed(2)}%</Code>
    </div>
  );
}

export default CpuUtilization;
