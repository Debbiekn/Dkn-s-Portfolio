// Now specified only countrys array to be called randomly

const country = ['Costa Rica','Norway','Sahara Desert', 'Phillippines']; 

const randomElement2 = country[Math.floor(Math.random() * country.length)];


// repeated the above step for weather array - to be called randomly
const weather = ['sweaty heat','freezing temperature','dry heat', 'MONSOON that just happened.']; 

const randomElement3 = weather[Math.floor(Math.random() * weather.length)];


// repeated the above step again -  for the advice array - to be called randomly
const adviceGiven = ['wear loose clothes','remember thermals','keep up the fluids', 'am prepared for ANYTHING!!']; 

const randomElement4 = adviceGiven[Math.floor(Math.random() * adviceGiven.length)];



// re- retested each sentence out with each different string array 
console.log(`I've decided to go to ` + randomElement2 + `.` +` I am aware of the ` + randomElement3 + ` I am sure It will be great, as long as I ` + randomElement4 + `.`);





// What the real sentence should say - with correct advice, about the weather, for each country. Uncomment to see the correct sentence.

/*const destination1 = {
    country: 'Costa Rica',
    weather: 'sweaty heat',
    adviceGiven: 'wear loose clothes',
    myDecision() {
        return `I've decided to go to ${this.country} in the ${this.weather}, and will make sure I ${this.adviceGiven}.`
    }
};
console.log(destination1.myDecision());

const destination2 = {
    country: 'Norway',
    weather: 'freezing',
    adviceGiven: 'remember thermals',
    myDecision() {
        return `I've decided to go to ${this.country}. Even if it is ${this.weather}, I am sure It will be great, as long as I ${this.adviceGiven}.`
    }
};
console.log(destination2.myDecision());

const destination3 = {
    country: 'Sahara Desert',
    weather: 'dry heat',
    adviceGiven: 'keep up the fluids',
    myDecision() {
        return `I've decided to go to ${this.country}. Even if it is ${this.weather}, I am sure It will be great, as long as I ${this.adviceGiven}.`
    }
};
console.log(destination3.myDecision());

const destination4 = {
    country: 'Phillippines',
    weather: 'MONSOON',
    adviceGiven: 'Be prepared for ANYTHING!!',
    myDecision() {
        return `I've decided to not go to ${this.country}, especially if a ${this.weather} is due!!. I will another time when ${this.weather}, is over. BUT, I will  ${this.adviceGiven}`
    }
};
console.log(destination4.myDecision());*/