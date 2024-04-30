interface ganttChartInfoType {
  job: string;
  start: number;
  stop: number;
}

export const sjf = (arrivalTime: number[], burstTime: number[]) => {
  const processesInfo = arrivalTime
    .map((item, index) => {
      const job = `P${index + 1}`;

      return {
        job,
        at: item,
        bt: burstTime[index],
      };
    })
    .sort((obj1, obj2) => obj1.at - obj2.at); // Sort by arrival time

  let finishTime: number[] = [];
  let ganttChartInfo: ganttChartInfoType[] = [];
  const solvedProcessesInfo = [];

  let currentTime = 0;

  while (processesInfo.length > 0) {
    const availableProcesses = processesInfo.filter((p) => p.at <= currentTime);

    if (availableProcesses.length === 0) {
      currentTime = processesInfo[0].at;
      continue;
    }

    const shortestBurstTimeProcess = availableProcesses.reduce(
      (prev, current) => (prev.bt < current.bt ? prev : current)
    );

    const start = currentTime;
    const stop = start + shortestBurstTimeProcess.bt;
    currentTime = stop;

    const indexToRemove = processesInfo.findIndex(
      (p) => p.job === shortestBurstTimeProcess.job
    );
    if (indexToRemove > -1) {
      const processToRemove = processesInfo.splice(indexToRemove, 1)[0];
      solvedProcessesInfo.push({
        ...processToRemove,
        ft: stop,
        tat: stop - processToRemove.at,
        wat: stop - processToRemove.at - processToRemove.bt,
      });
      ganttChartInfo.push({ job: processToRemove.job, start, stop });
    }
  }

  // Sort the processes arrival time and then by job name
  solvedProcessesInfo.sort((a, b) =>
    a.at !== b.at ? a.at - b.at : a.job.localeCompare(b.job)
  );

  return { solvedProcessesInfo, ganttChartInfo };
};
