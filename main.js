

// Переменные
const naMe = "artem";
const age =36;
const message ="Hello my name Artem";



// Конкастинация строк
const stRing = "Hello my name Artem" + "I live in Ukraine , Kyiv";
let myAdress = "I live in Ukraine , Kyiv";
myAdress = "Yess"

console.log(message , myAdress);
console.log(naMe , age);
console.log( "Hello my name Artem" + "Ukraine , Kyiv");


console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"
const num = 1 + 1; 
console.log(num); 


// Шаблонніе строки
const sttReng = `Hi ${stRing},and ${myAdress}`;
console.log(sttReng);


// Условные операторы ветвление
let arteMe;
let dewLop;

if (arteMe === dewLop){
arteMe = "ZP 10000$";
}

console.log(arteMe); 



//Масивы
const clients = ["rusia", "anton", "ksenia", "sasha"];
const cliEnts = ["Ananas", "Bojarka"];

//Переопределение
clients[0] = "sonya";
clients[1] = "roma";
console.log(clients);

//Методы масива  

//                    # Split И join #
const mar = "Mango";
console.log(mar.split("")); // ["M", "a", "n", "g", "o"]

const messsage = "JavaScript это интересно";
console.log(messsage.split(" ")); // ["JavaScript", "это", "интересно"]




//                   # Concat #
const clientMix = cliEnts.concat(clients);
console.log(clientMix); //['Ananas', 'Bojarka', 'sonya', 'roma', 'ksenia', 'sasha']

//                  # Splice удаление #
const scores = [1, 2, 3, 4, 5];
const deletedScores = scores.splice(0, 3);
console.log(scores); // [4, 5]
console.log(deletedScores); // [1, 2, 3]


//                 # Splice замена # 
const languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1, 1, "Python");

console.log(languages); // ["C", "Python", "Java", "JavaScript"]
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]






//                 # Функции  #

function testFunktion() {
        const x = 10;
        const y = 15;
        console.log(x + y);
}
testFunktion();



function hello() {
    console.log(`Hello!!!`);
}
hello();


function front(a , b) {
    console.log(a + b)
}
front(100,100);
front(50,50);
front(24,44);