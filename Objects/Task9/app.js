function intersection(person1, person2) {
    let result = {};
  
 
    for (let key in person1) {
      if (person2.hasOwnProperty(key)) {
        if (JSON.stringify(person1[key]) === JSON.stringify(person2[key])) {
          result[key] = person1[key]; 
        }
      }
    }
  
    return result;
  }
  
  const person1 = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
      phone: "112",
      email: "email@domain.com"
    },
    address: "Moldova"
  };
  
  const person2 = {
    name: "Person",
    age: 123,
    salary: 2000.00,
    contacts: {
      phone: "112",
      email: "email@domain.com"
    },
    address: "Romania" 
  };
  
  console.log(intersection(person1, person2));
  