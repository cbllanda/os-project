interface ganttChartInfoType {
  job: string;
  start: number;
  stop: number;
}

("The FCFS algorithm maps each process to its arrival time and burst time, sorts the processes based on their arrival time in ascending order, then sequentially schedules the processes according to their arrival order, calculating the finish time, turnaround time, and waiting time for each process, and finally generates Gantt chart information.");

export const fcfs = (arrivalTime: number[], burstTime: number[]) => {
  // Map arrival time and burst time to processes and sort by arrival time
  const processesInfo = arrivalTime
    .map((item, index) => ({
      job: `P${index + 1}`,
      at: item, // Arrival time of the process
      bt: burstTime[index], // Burst time of the process
    }))
    .sort((obj1, obj2) => obj1.at - obj2.at); // Sort by arrival time

  let finishTime: number[] = []; // Array to store finish time of each process
  let ganttChartInfo: ganttChartInfoType[] = []; // Array to store Gantt chart information

  return {
    // Solve the processes and calculate turnaround time and waiting time
    solvedProcessesInfo: processesInfo.map((process, index) => {
      // Calculate start time of the process
      const start =
        index === 0 ? process.at : Math.max(process.at, finishTime[index - 1]);
      // Calculate stop time of the process
      const stop = start + process.bt;
      finishTime[index] = stop; // Update finish time for the process
      ganttChartInfo.push({ job: process.job, start, stop }); // Store Gantt chart information

      return {
        ...process,
        ft: stop, // Finish time of the process
        tat: stop - process.at, // Turnaround time of the process
        wat: start - process.at, // Waiting time of the process
      };
    }),
    ganttChartInfo, // Return Gantt chart information
  };
};
