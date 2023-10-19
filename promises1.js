function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 completed");
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 completed");
      resolve();
    }, 1500);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3 completed");
      resolve();
    }, 800);
  });
}

async function performTasks() {
  await task1();
  await task2();
  await task3();
  console.log("All tasks completed");
}
