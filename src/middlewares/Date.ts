class DateClass {
  now: number
  year: number
  month: number
  date: number
  day: number

  constructor() {
    this.now = Date.now()
    const today = new Date()
    this.year = today.getFullYear()
    this.month = today.getMonth()
    this.date = today.getDate()
    this.day = today.getDay()
  }
}

export default DateClass
