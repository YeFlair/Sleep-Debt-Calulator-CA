const getSleepHours = (day) => { 
    switch (day){
      case "Monday":
        return 6
        break;
      case "Tuesday":
        return 7
        break; 
      case "Wednesday":
        return 7
        break; 
      case "Thursday":
        return 8
        break;
      case "Friday":
        return 7
        break;
      case "Saturday":
        return 7
        break; 
      case "Sunday":
        return 8
        break;
    }
  }
  
  
  const getActualSleepHours = () =>{
    m = getSleepHours("Monday")
    t = getSleepHours("Tuesday")
    w = getSleepHours("Wednesday")
    th = getSleepHours("Thursday")
    f = getSleepHours("Friday")
    s = getSleepHours("Saturday")
    sun = getSleepHours("Sunday")
    total = m + t + w + th + f + s + sun
    return total
  }
  
  const getIdealSleepHours = () => {
    idealHours = 7 
    return idealHours * 7 
  }
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours()
    idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours){
      return "You recieved the perfect amount of sleep"
    } else if (actualSleepHours > idealSleepHours){
      return "You got more sleep than needed"
    } else if (actualSleepHours < idealSleepHours) {
      return "Your should get some rest"
    }
  }
  
  console.log(calculateSleepDebt())