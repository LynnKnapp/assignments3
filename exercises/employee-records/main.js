const employees =[] 

function Employee(name, jobTitle, salary){
        this.name = name;
        this.jobTitle = jobTitle;
        this.salary = salary;
        this.status = 'part-time'

}

const randinoBandito = new Employee('RandinoBendito','WebDev','$200,000')
randinoBandito.status = 'full-time' 

const nathan = new Employee('Nathan', "Java the Ripper", '25,000')
nathan.status = 'on trigger'

const moroni = new Employee('Dot Son', 'CEO', '500,000')
moroni.status = 'full time'

employees.push(randinoBandito, nathan, moroni)

employees.forEach(items => items.printEmployeeForm())  