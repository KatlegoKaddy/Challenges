let d = new Date();

let time = ["12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am",
 
 "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm",
 
 "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm", "10 pm",
  "11 pm",
 "12 pm"
];


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday",
 "Saturday"
];


console.log("Today is " + days[d.getDay()] + ". " + " Current time is : " +
 
 time[d.getHours()] + " : " + d.getMinutes() + " : " +
  d.getSeconds());