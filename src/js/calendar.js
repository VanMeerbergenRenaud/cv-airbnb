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
        }
    }
    app.init();
}) ();

/*
Court version :

(function() {
  const app = {
    init() {
      this.daysTag = document.querySelector('.days');
      this.currentDate = document.querySelector('.current-date');
      this.prevIcon = document.querySelector('#previous');
      this.nextIcon = document.querySelector('#next');
      this.date = new Date();
      this.year = this.date.getFullYear();
      this.month = this.date.getMonth();
      this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      this.prevIcon.addEventListener('click', () => this.update(-1));
      this.nextIcon.addEventListener('click', () => this.update(1));
      this.renderCalendar();
      document.documentElement.classList.add('js-enabled');
    },
    update(offset) {
      this.month += offset;
      if (this.month < 0 || this.month > 11) {
        this.year += Math.sign(offset);
        this.month = (this.month + 12) % 12;
      }
      this.date = new Date(this.year, this.month);
      this.renderCalendar();
    },
    renderCalendar() {
      const firstDay = new Date(this.year, this.month, 1).getDay();
      const lastDate = new Date(this.year, this.month + 1, 0).getDate();
      const lastDay = new Date(this.year, this.month, lastDate).getDay();
      const lastDateLastMonth = new Date(this.year, this.month, 0).getDate();
      let liTag = '';

      for (let i = firstDay; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateLastMonth - i + 1}</li>`;
      }
      for (let i = 1; i <= lastDate; i++) {
        const isToday = i === this.date.getDate() && this.month === new Date().getMonth()
          && this.year === new Date().getFullYear();
        liTag += `<li class="${isToday ? 'active' : ''}">${i}</li>`;
      }
      for (let i = lastDay; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDay + 1}</li>`
      }

      this.currentDate.innerText = `${this.months[this.month]} ${this.year}`;
      this.daysTag.innerHTML = liTag;
    },
  };
  app.init();
})();
*/