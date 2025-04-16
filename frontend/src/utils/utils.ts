export const DAYS: string[] = [];
for (let day = 1; day <= 31; day += 1) {
  DAYS.push(String(day).length < 2 ? `0${day}` : String(day));
};

export const YEARS: number[] = [
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
  2022,
  2023,
  2024,
  2025
];
