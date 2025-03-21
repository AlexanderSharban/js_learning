        const age = 25;  
        const start = 18;
        const end = 30;
        
        // !
        if ((!(age < start) && !(age > end))) {
            console.log(`Значение ${age} принадлежит [${start} ${end}]`);
        }
 
        //Без !
        if (age >= start || age <= end) {
            console.log(`Значение ${age} принадлежит [${start} ${end}]`);
        }