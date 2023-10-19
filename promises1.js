function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 completed in promise");
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 completed in promise");
      resolve();
    }, 1500);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3 completed in promise");
      resolve();
    }, 800);
  });
}

function task4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 4 completed in promise");
      resolve();
    }, 800);
  });
}

async function performTasks() {
  await task1();
  await task2();
  await task3();
  await task4();
  console.log("All tasks completed in promise");
}

performTasks().catch((error) => {
  console.error("An error occurred in promise:", error);
});
