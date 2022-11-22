(function () {
    const app = {
        initConst() {
            this.daysTag = document.querySelector(".days");
            this.currentDate = document.querySelector(".current-date");
            this.previousNextIcon = document.querySelectorAll(".icons span");

            this.date = new Date();
            this.currYear = this.date.getFullYear();
            this.currMonth = this.date.getMonth();

            this.months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        },
        addEventListener() {
            this.previousNextIcon.forEach(icon => {
                icon.addEventListener("click", () => {
                    this.currMonth = icon.id === "previous" ? this.currMonth - 1 : this.currMonth + 1;
                    if(this.currMonth < 0 || this.currMonth > 11) {
                        this.date = new Date(this.currYear, this.currMonth);
                        this.currYear = this.date.getFullYear();
                        this.currMonth = this.date.getMonth();
                    } else {
                        this.date = new Date();
                    }
                    this.renderCalendar();
                });
            });
        },
        renderCalendar() {
            this.firstDayofMonth = new Date(this.currYear, this.currMonth, 1).getDay();
            this.lastDateofMonth = new Date(this.currYear, this.currMonth + 1, 0).getDate();
            this.lastDayofMonth = new Date(this.currYear, this.currMonth, this.lastDateofMonth).getDay();
            this.lastDateofLastMonth = new Date(this.currYear, this.currMonth, 0).getDate();
            this.liTag = "";

            for (let i = this.firstDayofMonth; i > 0; i--) {
                this.liTag += `<li class="inactive">${this.lastDateofLastMonth - i + 1}</li>`;
            }
            for (let i = 1; i <= this.lastDateofMonth; i++) {
                let isToday = i === this.date.getDate() && this.currMonth === new Date().getMonth()
                && this.currYear === new Date().getFullYear() ? "active" : "";
                this.liTag += `<li class="${isToday}">${i}</li>`;
            }
            for (let i = this.lastDayofMonth; i < 6; i++) {
                this.liTag += `<li class="inactive">${i - this.lastDayofMonth + 1}</li>`
            }

            this.currentDate.innerText = `${this.months[this.currMonth]} ${this.currYear}`;
            this.daysTag.innerHTML = this.liTag;
        },
        init() {
            this.initConst();
            this.renderCalendar();
            this.addEventListener();
            document.documentElement.add.classList('js-enabled');
        }
    }
    app.init();
}) ();