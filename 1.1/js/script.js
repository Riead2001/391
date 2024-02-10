function generateQuote() {
    var quotes = ["Life is a box of chocolates", "", "Leave one wolf alive and the sheeps are never safe", "Marbo Ekhane Lash porbe Soshhane", " Bap ka ,Dada ka bhai ka , Sab ka badla lega tera Faizaaal", "Be yourself; everyone else is already taken.", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Everybody is ignorant, only on different subjects.", "Jhinkuuuuuuuuu",  "Which would be worst ?To live as a monster or die as a good man"];
    var length = quotes.length;
    var number = Math.floor(Math.random() * (length - 1 - 0 + 1)) + 0;
    document.getElementById('quote').innerText = quotes[number];
}

function changeStyle(box) {
    var quoteContainer = document.getElementById('quote-container');
    
    if (box === 'box1') {
        quoteContainer.style.color = 'red';
        quoteContainer.style.borderColor = 'red';
        quoteContainer.style.backgroundColor = 'greenyellow';
        quoteContainer.style.fontSize = '14px';
        quoteContainer.style.fontFamily = 'Serif';
        quoteContainer.style.fontWeight = 'bold'; // Bold the letters
    }
    else if (box === 'box2') {
        quoteContainer.style.color = 'black';
        quoteContainer.style.borderColor = 'black';
        quoteContainer.style.backgroundColor = 'orange';
        quoteContainer.style.fontSize = '16px';
        quoteContainer.style.fontFamily = 'Arial';
        quoteContainer.style.fontWeight = 'bold'; // Bold the letters
    }
    else if (box === 'box3') {
        quoteContainer.style.color = 'yellow';
        quoteContainer.style.borderColor = 'yellow';
        quoteContainer.style.backgroundColor = 'skyblue';
        quoteContainer.style.fontSize = '12px';
        quoteContainer.style.fontFamily = 'Lucida Sans';
        quoteContainer.style.fontWeight = 'bold'; // Bold the letters
    }
    else {
        quoteContainer.style.color = 'purple';
        quoteContainer.style.borderColor = 'purple';
        quoteContainer.style.backgroundColor = 'goldenrod';
        quoteContainer.style.fontSize = '18px';
        quoteContainer.style.fontFamily = 'Times New Romans';
        quoteContainer.style.fontWeight = 'bold'; // Bold the letters
    }
}
