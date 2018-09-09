class CurrentDate {
    constructor(element) {
        this.element = element;
        console.log(this.element);
        this.date = new Date(Date.now());
        console.log(this.date);
        this.months = [
            'JANUARY',
            'FEBRUARY',
            'MARCH',
            'APRIL',
            'MAY',
            'JUNE',
            'JULY',
            'AUGUST',
            'SEPTEMBER',
            'OCTOBER',
            'NOVEMBER',
            'DECEMBER'
        ];
        this.element.innerText = `${this.months[this.date.getMonth()]} ${this.date.getDate()}, ${this.date.getFullYear()}`;
    }
}

const date = new CurrentDate(document.querySelector('.date'));