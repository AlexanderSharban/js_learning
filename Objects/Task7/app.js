let person = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
      phone: ["112", "+37312345678"],
      email: "email@gmail.com"
    },
    address: "Moldova",
  
    getName: function() {
      return this.name;
    },
    getAge: function() {
      return this.age;
    },
    getSalary: function() {
      return this.salary;
    },
    getContacts: function() {
      return this.contacts;
    },
    getAddress: function() {
      return this.address;
    }
  };
  
  console.log(person.getName());   
  console.log(person.getAge());     
  console.log(person.getSalary());   
  console.log(person.getContacts()); 
  console.log(person.getAddress());  
  