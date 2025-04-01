const weekDays = {
    "Mo": "Monday",
    "Tu": "Tuesday",
    "We": "Wednesday",
    "Th": "Thursday",
    "Fr": "Friday",
    "Sa": "Saturday",
    "Su": "Sunday",
  };

  function translate() {
    const russianNames = {
      "Monday": "Понедельник",
      "Tuesday": "Вторник",
      "Wednesday": "Среда",
      "Thursday": "Четверг",
      "Friday": "Пятница",
      "Saturday": "Суббота",
      "Sunday": "Воскресенье",
    };
    console.log (Object.keys(weekDays)); // ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
                        
    Object.keys(weekDays).forEach((key) => {
      let englishName = weekDays[key]; 
      weekDays[key] = russianNames[englishName]; 
    });
  }
  
  translate();
  
  console.log(weekDays);
  