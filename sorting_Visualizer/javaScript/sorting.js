const swap = (element1, element2) => {
  console.log("In swap()");

  let temp = element1.style.height;
  element1.style.height = element2.style.height;
  element2.style.height = temp;
};

const disableSortBtn = () => {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
};

const enableSortBtn = () => {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".insetionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
};

const disableSizeSlider = () => {
  document.querySelector("#arr_size").disabled = true;
};

const enaleSizeSlider = () => {
  document.querySelector("#arr_size").disabled = false;
};

const disableNewArrayBtn = () => {
  document.querySelector(".newArray").disabled = true;
};

const enableNewArrayBtn = () => {
  document.querySelector(".newArray").disabled = false;
};

const waitforme = (milisec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
};

let arraySize = document.querySelector("#arr_size");

arraySize.addEventListener("input", () => {
  console.log(arraySize.value, typeof arraySize.value);
  createNewArray(parseInt(arraySize.value));
});

let delay = 260;

let delayElement = document.querySelector("#speed_input");

delayElement.addEventListener("input", () => {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 320 - parseInt(delayElement.value);
});

let array = [];

createNewArray();

const createNewArray = (noOfBars = 60) => {
  deleteChild();

  array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
  }
  console.log(array);

  const bars = document.querySelector("#bars");

  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
};

const deleteChild = () => {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
};

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", () => {
  console.log("From newArray" + arraySize.value);
  console.log("From newArray" + delay);
  enableSortBtn();
  enaleSizeSlider();
  createNewArray(arraySize.value);
});
