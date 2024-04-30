import React, { useRef } from "react";

import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/react";

import { OptionType } from "@/components/input/select-algo";
import CpuUtilization from "@/components/output/cpu-utilization";
import Throughput from "@/components/output/throughput";
import OutputTable from "@/components/output/output-table";
import GanttChart from "@/components/output/gantt-chart";
import AverageTurnaroundTime from "@/components/output/average-turnaround-time";
import AverageWaitingTime from "@/components/output/average-waiting-time";
import { solve } from "@/components/algo/index";

interface OutputProps {
  selectedAlgo: OptionType;
  burstTime: number[];
  arrivalTime: number[];
  timeQuantum: number | undefined;
  priorities: number[];
  cardRef: any;
}

function Output({
  selectedAlgo,
  burstTime,
  arrivalTime,
  timeQuantum,
  priorities,
  cardRef,
}: OutputProps) {
  if (!arrivalTime.length || !burstTime.length) {
    return (
      <Card className="w-full px-4 py-5">
        <CardBody>
          <p className="text-center text-sm text-default-500 dark:text-default-600">
            Output will be displayed here.
          </p>
        </CardBody>
      </Card>
    );
  } else {
    const { solvedProcessesInfo, ganttChartInfo } = solve(
      selectedAlgo.value,
      burstTime,
      arrivalTime,
      timeQuantum,
      priorities
    ) || { solvedProcessesInfo: [], ganttChartInfo: [] };

    return (
      <Card className="w-full px-4 py-5" ref={cardRef}>
        <CardBody>
          <div className="flex flex-col relative">
            <Chip
              color="primary"
              className="flex mb-[0.75rem] self-center p-[0.8rem]"
            >
              {selectedAlgo.label}
            </Chip>

            {/* GANTT CHART */}
            <GanttChart ganttChartInfo={ganttChartInfo} />

            {/* TABLE OUTPUT */}
            <OutputTable solvedProcessesInfo={solvedProcessesInfo} />

            {/* CPU UTILIZATION */}
            <CpuUtilization
              totalCpuTime={solvedProcessesInfo.reduce(
                (acc, process) => acc + process.bt,
                0
              )}
              totalElapsedTime={ganttChartInfo[ganttChartInfo.length - 1].stop}
            />

            {/* THROUGHPUT */}
            <Throughput
              numberOfProcesses={solvedProcessesInfo.length}
              totalTime={solvedProcessesInfo.reduce(
                (acc, process) => acc + process.bt,
                0
              )}
            />

            {/* ATAT */}
            <AverageTurnaroundTime
              totalTurnaroundTime={solvedProcessesInfo.reduce(
                (acc, process) => acc + process.tat,
                0
              )}
              numberOfProcesses={solvedProcessesInfo.length}
            />

            {/* AWT */}
            <AverageWaitingTime
              totalWaitingTime={solvedProcessesInfo.reduce(
                (acc, process) => acc + process.wat,
                0
              )}
              numberOfProcesses={solvedProcessesInfo.length}
            />
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Output;
