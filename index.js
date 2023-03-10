const logregBox = document.querySelector('.logreg-box');
const logregLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
})

logregLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
})








































// while loop

// const names =  ['williams', 'armstrong', 'grace', 'hope', 'faith'];
// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++
// }


// while( i < 5){
//     console.log(i)
//     i++
// }



// LOOP
// FOR LOOP

// for(let i = 0; i < 5; i++){
//     console.log('in loops', i)
// }
// console.log('loop finish')

// let names = ['williams', 'armstrong', 'grace', 'hope', 'faith'];
// for(let i = 0; i < names.length; i++){
//     console.log(name[i]);
// }

































// TYPE CONVERSION
// let score = '101'
 
// score = Number(score);
// console.log(score + 9) 


/*BOOLIANs*/

// let email = 'amjkjbjdbsbhdbhbdhb@gmail.com';
// let result = email.includes('@');
// console.log(result)
// let age = 30;

// /*loose comparison (different types can still be equal)*/ 

// console.log(age == 30);
// console.log(age == '30');
// console.log(age != 30);
// console.log(age != '30');

// /*strict comparison (different types can not be equal)*/ 

// console.log(age === 30);
// console.log(age === '30');
// console.log(age !== 30);
// console.log(age !== '30');


// console.log(age == 5);
// console.log(age <= 5);
// console.log(age != 5);
// console.log(age >= 5);
// console.log(age > 5);
// console.log(age < 5);

// /* Comparison Operators*/ 

// let names = 'williams';
// console.log(names > 'Williams')

/*ARRAYS*/ 

// let names = ['goodluck', 'chuks', 'williams', 'mike'];

// console.log(names);


/* ARRAY METHODS*/ 

// let results = names.join(',')
// let results = names.indexOf('mike')
// let results = names.concat(['armstrong', 'wisdom','ben','ken'])
// let results = names.push('ben') push will return the new length
// let results = names.pop() pop will return the new value
// console.log(results)




// Template string 
// const title = 'Best Read of 2022';
// const author = 'Williams'
// const likes = 30;

// // so now to concatenate the strings above this how to do it

// const result = 'the book called ' + title + ' by ' + author + ' got ' + likes + ' likes'
// console.log(result)

// /* OR*/

// const results = `The book called ${title} by ${author} got ${likes} likes`;
// console.log(results)



/***************NUMBERS**************/ 

// let radius = 10;

// let pi = 3.14;

// console.log(radius,pi)

// /*****maths Operators: +,-,*, **, %, /   *****/ 

// // ORDER OF OPERATION: B I D M A S

// let result = 8 * (8*5)**7;
// console.log(result)



// let likes = 10;
// // likes = likes + 1
 
// // OR
// // likes++;
// // likes += 12;

// // likes /= 12;
// // likes -= 12;
// // likes *= 12;
// console.log(likes)

// /*********NOT A NUMBER NAN***********/ 

// console.log(4/'come')

// let results = 'my post today got ' + likes + ' likes';
// console.log(results);



/********Strings**********/ 

// let email = 'amstronggoodluck@gmail.com';
// console.log(email);


// /*************concatenation*************/ 

// let firstName = 'goodluck';
// let lastName = 'amstrong';

// let fullName = firstName + ' ' +  lastName;
// console.log(fullName);


// /******************string extraction********************/ 

// console.log(fullName[0])

// /************************string length*************************/ 

// console.log(fullName.length)

/********************string method********************/ 
/* when ever you see a dot with any name note: it is a method*/ 

// console.log(fullName.toUpperCase())
// let result = fullName.toLowerCase();
// console.log(result)
// let index = email.indexOf('u');
// console.log(index);


/*********************string method*****************/ 

// let mail = 'igbokweyhukwuebukagoodluck@gmail.com'

// let results = mail.lastIndexOf('c');

// let results = mail.slice(18,26);

// let results = mail.replace('y','c');

// let results = mail.substring(5,9);


// console.log(results);







// change of the person we can use dou notation


// rule of variables
// 1  they should be meaningful 
// 2 they shouldn't be reserved keywords such if, else, const, etc
// 3 they shouldn't start with a number
// 4 there shouldn't be space of signs between any variables 
