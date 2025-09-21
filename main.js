
const date = "20240801";      
const time_period = "m";      

const url = new URL("/NBUStatService/v1/statdirectory/budget", "https://bank.gov.ua/");

url.searchParams.append("date", date);
url.searchParams.append("period", time_period);
url.searchParams.append("json", ""); 

console.log(url.href);