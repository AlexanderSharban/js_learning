let person = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
      phone: ["112"],  
      email: "email@gmail.com"
    },
    address: "Moldova"
  };
  
  person.contacts.phone.push("+37312345678");
  person.contacts.phone.push("+88888888888");

  delete person.address;
  
  console.log(person);
  