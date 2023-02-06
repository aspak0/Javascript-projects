async function bubbleSort() {
    console.log('In bubbleSort()');
    const element = document.querySelectorAll(".bar");
    for(let i = 0; i < element.length -1; i++) {
        console.log('In i Loop');
        for(let j =0; j < element.length -i -1; j++) {
            console.log('In j Loop');
            element[j].style.backgound = 'blue';
            element[j + 1].style.backgound = 'blue';
            if(parseInt(element[j].style.height) > parseInt(element[j + 1].style.height)) {
                console.log('In if condition');
                await  waitforme(delay);
                swap(element[j], element[j + 1]);
            }
            element[j].style.backgound = 'aquamarine';
            element[j + 1].style.backgound = 'aquamarine';
        }
        element[element -1 -i].style.backgound = 'green';
    }
    element[0].style.backgound = 'green';
}

const bubbleSortBtn = document.querySelector(".bubbleSort");
bubbleSortBtn.addEventListener('click', async function(){
    disableSortBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})