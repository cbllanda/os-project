interface ganttChartInfoType {
  job: string;
  start: number;
  stop: number;
}

export const rr = (
  arrivalTime: number[],
  burstTime: number[],
  timeQuantum: number
) => {
  const processesInfo = arrivalTime
    .map((item, index) => ({
      job: `P${index + 1}`,
      at: item,
      bt: burstTime[index],
    }))
    .sort((obj1, obj2) => obj1.at - obj2.at); // Sort by arrival time

  const solvedProcessesInfo = [];
  const ganttChartInfo: ganttChartInfoType[] = [];

  const readyQueue: { job: string; at: number; bt: number }[] = [];
  let currentTime = processesInfo[0].at;
  const unfinishedJobs = [...processesInfo];

  const remainingTime: { [job: string]: number } = processesInfo.reduce(
    (acc: { [job: string]: number }, process: { job: string; bt: number }) => {
      acc[process.job] = process.bt;
      return acc;
    },
    {}
  );

  readyQueue.push(unfinishedJobs[0]);
  while (
    Object.values(remainingTime).reduce(
      (acc: number, cur: number) => acc + cur,
      0
    ) &&
    unfinishedJobs.length > 0
  ) {
    if (readyQueue.length === 0 && unfinishedJobs.length > 0) {
      // Previously idle
      readyQueue.push(unfinishedJobs[0]);
      currentTime = readyQueue[0].at;
    }

    const processToExecute = readyQueue[0];

    const executionTime = Math.min(
      remainingTime[processToExecute.job],
      timeQuantum
    );
    const prevCurrentTime = currentTime;
    currentTime += executionTime;

    ganttChartInfo.push({
      job: processToExecute.job,
      start: prevCurrentTime,
      stop: currentTime,
    });

    remainingTime[processToExecute.job] -= executionTime;

    const processToArriveInThisCycle = processesInfo.filter(
      (p) =>
        p.at <= currentTime &&
        p !== processToExecute &&
        !readyQueue.includes(p) &&
        unfinishedJobs.includes(p)
    );

    readyQueue.push(...processToArriveInThisCycle);

    // Requeueing (move head/first item to tail/last)
    const firstItem = readyQueue.shift();
    if (firstItem) {
      readyQueue.push(firstItem);
    }

    // When the process finished executing
    if (remainingTime[processToExecute.job] === 0) {
      const indexToRemoveUJ = unfinishedJobs.indexOf(processToExecute);
      if (indexToRemoveUJ > -1) {
        unfinishedJobs.splice(indexToRemoveUJ, 1);
      }
      const indexToRemoveRQ = readyQueue.indexOf(processToExecute);
      if (indexToRemoveRQ > -1) {
        readyQueue.splice(indexToRemoveRQ, 1);
      }

      solvedProcessesInfo.push({
        ...processToExecute,
        ft: currentTime,
        tat: currentTime - processToExecute.at,
        wat: currentTime - processToExecute.at - processToExecute.bt,
      });
    }
  }

  // Sort the processes arrival time and then by job name
  solvedProcessesInfo.sort((a, b) =>
    a.at !== b.at ? a.at - b.at : a.job.localeCompare(b.job)
  );

  return { solvedProcessesInfo, ganttChartInfo };
};
