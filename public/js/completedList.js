let completedList = []

function completedItem() {
    const locationID = document.querySelector(".checkbox_btn");

    locationID.addEventListener('change', e => {
        if(e.target.checked === true) {
            // console.log("Checkbox is checked - boolean value: ", e.target.checked);

            completedList.push(locationID.value);
        }

        if(e.target.checked === false) {
            // console.log("Checkbox is not checked - boolean value: ", e.target.checked);

            completedList.pop(locationID.value);
        }
    });
    console.log(completedList);
}