//Takes care of the annoying document errors
/*eslint-env browser*/


/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

Made by: Peter Eriksson
******************************************/
 
/*
GRADE I AM AIMING FOR: "exceeds" requirement but do not mind if I pass with a Meets Expectations grade.
*/

//Create the array that will contain the quote objects

function init () { 

var quotes = [];

 
//Add five quote objects
var quoteObject1 = {
    quote:"The main thing is to make history, not to write it.", 
    source:"Otto Von Bismarck",
    tags: "History"

    //https://www.brainyquote.com/
};

var quoteObject2 = {
    quote:"Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.", 
    source:"Winston Churchill",
    year: "1942",
    tags: "War"

    //https://www.brainyquote.com/
};

var quoteObject3 = {
    quote:"Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.", 
    source:"Barack Obama",
    citation: "Super Tuesday speech in Chicago",
    year: "2008",
    tags: "Politics"


    //https://www.brainyquote.com/
};

var quoteObject4 = {
    quote:"Education begins the gentleman, but reading, good company and reflection must finish him.", 
    source:"John Locke",
    tags: "Education"

    //https://www.brainyquote.com/
};

var quoteObject5 = {
    quote:"Government exists to protect us from each other. Where government has gone beyond its limits is in deciding to protect us from ourselves", 
    source:"Ronald Reagan",
    tags: "Philosophy"

    //https://www.brainyquote.com/
};
var object6 = {
    quote: "You are either with us or against us",
    source: "George W Bush",
    citation: "Antiterrorism summit in Warsaw via satellite phone",
    tags: "Philosopfy"
    
    //http://edition.cnn.com/2001/US/11/06/gen.attack.on.terror/

};


//push quoteObjects into the quotes array
quotes.push(quoteObject1, quoteObject2, quoteObject3, quoteObject4, quoteObject5, object6);

//console.log(quotes);



function getRandomQuote() {
    //randomise a number between 0-4(length of quotes), store it in a var.
   var randomNumber = Math.floor(Math.random() * quotes.length);
    //return the quote of the pos that has been randomized.
    return quotes[randomNumber];
}

//console.log(getRandomQuote());


 
function printQuote () {
    var res = getRandomQuote();
    
    //declare an empty stringHTML
    var stringHTML = " ";
            
            //Now lets assign the stringHTML variable to something.
            //if the quoteObject contains BOTH citation and year property apart form quote plus source plus tags. 
            if (res.citation !== undefined && res.year !== undefined){
            stringHTML = "<p class='quote'>" + res.quote + "</p>" +
            "<p class='source'>" + res.source 
                + "<span class='tags'>" + ", "  + res.tags + "</span>" +
            "<span class='citation'>" + res.citation + "</span>"
            + "<span class='year'>" + res.year + "</span>"
            + "</p>";   }
    
            //if the quoteObject contains citation property apart form quote plus source plus tags. 
            else if (res.citation !== undefined) {
            stringHTML = "<p class='quote'>" + res.quote + "</p>" +
            "<p class='source'>" + res.source 
                + "<span class='tags'>" +", " + res.tags + "</span>"+
            "<span class='citation'>" + res.citation + "</span>"
            + "</p>";   }
            
            //if the quoteObject contains year property apart form quote plus source plus tags. 
            else if (res.year !== undefined) {
            stringHTML = "<p class='quote'>" + res.quote + "</p>" +
            "<p class='source'>" + res.source +
                "<span class='tags'>"+", " + res.tags + "</span>"+
            "<span class='year'>" + res.year + "</span>"
            + "</p>";   }
    

            //if the quoteObject ONLY contains quote plus source plus tags property
            else {
                stringHTML = "<p class='quote'>" + res.quote + "</p>" +
                "<p class='source'>" + res.source + ", " +
                 "<span class='tags'>" + res.tags + "</span>"
                 + "</p>" 
            }
    

    
    document.getElementById('quote-box').innerHTML = stringHTML;
    
    
    //Random background color
    //When the quote changes, randomly change the background color of the page.
    //Create colors array and fill it with some colors.
    var colors = ["red", "blue", "yellow", "purple", "orange", "green", "pink", "brown"];
    
    document.body.style.backgroundColor = colors [Math.floor(Math.random()*colors.length)];

}



document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//When we load the page -> display a quoteObject
printQuote();


//Auto-refresh the quote
//new quote every 10 seconds
setInterval(function(){ printQuote(); }, 10000);



}

//lets run the program
init();