class DateView {
    #persianWeekdays = ["", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشبه", "پنجشنبه", "جمعه", "شنبه"];
    #formatterOptions = {month:"long", day:"2-digit", year:"numeric"};
    #date;
    #day;
    #month;
    #year;
    constructor(date = false) {
        this.#date = date ? new Date(date) : new Date();
        [this.#day, this.#month, this.#year] = new Intl.DateTimeFormat("fa-IR",this.#formatterOptions).format(this.#date).split(" ");
    }

    #getWeekday(){
        return this.#persianWeekdays[this.#date.getDay() + 1]
    }

    render(el1, el2){
        el1.textContent = `${this.#getWeekday()} ${this.#day} ${this.#month}, ${this.#year}`;
        el2.textContent = new Intl.DateTimeFormat("fa-IR").format(this.#date);
    }
}

new DateView().render(document.querySelector("#todaysDate"), document.querySelector("#todaysDateShort"));

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const inputValue = e.target.querySelector("input").value;
    new DateView(inputValue).render(document.querySelector("#userDate"), document.querySelector("#userDateShort"))
})