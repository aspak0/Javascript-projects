async function insertion() {
  console.log("In insertion()");
  const element = document.querySelectorAll(".bar");
  //color
  element[0].getElementsByClassName.background = "red";
  for (let i = 1; i < element.length; i++) {
    console.log("In i Loop");
    let j = i - 1;
    let key = element[i].style.height;
    //color
    element[i].style.background = "yellow";

    await waitforme(delay);

    while (j >= 0 && parseInt(element[j].style.height) > parseInt(key)) {
      console.log("in while Loop");
      //color;
      element[j].style.background = "yellow";
      element[j + 1].style.height = element[j].style.height;
      j--;

      await waitforme(delay);
      //color;
      for (let k = i; k >= 0; k--) {
        element[k].style.background = "red";
      }
    }
    element[j + 1].style.height = key;
    //color;
    element[i].style.background = "red";
  }
}

const sortBtn = document.querySelector(".insertionSort");
sortBtn.addEventListener("click", async function () {
  disableSortBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await insertion();
  enableSortBtn();
  enaleSizeSlider();
  enableNewArrayBtn();
});
