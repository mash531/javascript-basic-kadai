const thisYear = new Date();
const year = thisYear.getUTCFullYear();

const month = thisYear.getUTCMonth() + 1;
const date = thisYear.getUTCDate();
console.log(year + '年' + month + '月' + date + '日');