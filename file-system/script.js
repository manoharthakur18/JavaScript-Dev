let fileHandle;

async function openFile() {
  [fileHandle] = await window.showOpenFilePicker({
    types: [
      {
        description: "Not javascript",
        accept: {
          "image/*": ['.py'],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  });
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
