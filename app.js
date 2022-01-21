const first_price = document.querySelector("#intial-price");
const no_of_stocks = document.querySelector("#units");
const last_price = document.querySelector("#current-price");
const btn = document.querySelector("button");
const res_area = document.querySelector(".result");
const btn_reset = document.querySelector("#reset")

function testInputs() {

    console.log(first_price.value);
    console.log(no_of_stocks.value);
    console.log(last_price.value);

}

function showResult() {

    const first_inv = first_price.value * no_of_stocks.value;
    const cur_inv = last_price.value * no_of_stocks.value;
    const diff_inv = cur_inv - first_inv;
    // console.log("Diff = ", diff_inv);

    var percentage_pl = (diff_inv / first_inv) * 100;
    percentage_pl = percentage_pl.toFixed(2);
    if (percentage_pl > 0) {
        res_area.innerHTML = "you got a profit of +" + percentage_pl + "%...CONGRATS!!! 🥳";
    } else if (percentage_pl < 0) {
        res_area.innerHTML = "You got a loss of " + percentage_pl + "%...time to awake harshad mehta in you 😉";
    } else {
        res_area.innerHTML = "no GAIN...no PAIN...😪"
    }

}

function removeData() {

    first_price.value = "";
    no_of_stocks.value = "";
    last_price.value = "";
    res_area.innerHTML = "";
}

btn.addEventListener("click", showResult);
btn_reset.addEventListener("click", removeData);