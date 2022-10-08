const rangeInput = document.querySelectorAll(".ranger-input input");
const progress = document.querySelector(".slider-input .progress")
const rangerAge = document.querySelector(".rangerAge")
let ageGap = 5;
let minVal = 25,
    maxVal = 75;
rangerAge.innerHTML = `<span>${minVal} - ${maxVal}</span>`


rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < ageGap) {
            if (e.target.className === "ranger-min") {
                rangeInput[0].value = maxVal - ageGap;
            } else {
                rangeInput[1].value = minVal + ageGap;
            }
        } else {
            rangerAge.innerHTML = `<span>${minVal} - ${maxVal}</span>`
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }

    })
})