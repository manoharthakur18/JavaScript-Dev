let fileHandle;

async function openFile() {
  [fileHandle] = await window.showOpenFilePicker();
  //   console.log(fileHandle);
  let fileData = await fileHandle.getFile();
  //   console.log(fileData)
  let text = await fileData.text();
  console.log(text);
  printData.innerText = text;
}

async function saveFile() {
  let stream = await fileHandle.createWritable();
  await stream.write(printData.innerText);
  await stream.close();
}

async function saveAs() {
  fileHandle = await window.showSaveFilePicker();
  saveFile();
}



document.body.style.backgroundColor = "lightblue"