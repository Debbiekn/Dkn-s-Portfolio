// country name array to be called randomly
const country = ['COSTA RICA','NORWAY','the SAHARA DESERT', 'PHILIPPINES'];
// weather description array - to be called randomly
const weather = ['SWEATY heat','FREEZING temperature','DRY heat', 'MONSOON that just happened.'];  
// repeated the above step again -  for the advice array - to be called randomly
const adviceGiven = ['wear LOOSE clothes','remember THERMALS','keep up the FLUIDS', 'am prepared for ANYTHING!!']; 


function destinationResult() {
const randomCountry = country[Math.floor(Math.random() * country.length)];

const randomWeather = weather[Math.floor(Math.random() * weather.length)];

const randomAdvice = adviceGiven[Math.floor(Math.random() * adviceGiven.length)];

const resultMessage = `I've decided to go to ${randomCountry}. I am aware of the ${randomWeather}. I am sure it will be great, as long as I ${randomAdvice}.`;

document.getElementById("messageResult").innerHTML = resultMessage;


    //document.getElementById("messageButton").innerHTML = `I've decided to go to ` + randomElement2 + `.` +` I am aware of the ` + randomElement3 + ` I am sure It will be great, as long as I ` + randomElement4 + `.`;
    //document.getElementById("messageResult").innerHTML = `I've decided to go to ` + randomElement2 + `.` +` I am aware of the ` + randomElement3 + ` I am sure it will be great, as long as I ` + randomElement4 + `.`;
    // re- retested each sentence out with each different string array 
    //console.log(`I've decided to go to ` + randomElement2 + `.` +` I am aware of the ` + randomElement3 + ` I am sure It will be great, as long as I ` + randomElement4 + `.`);
    
    //$('#messageResult').html(resultMessage);
}




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
