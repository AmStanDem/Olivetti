


const historyAnchor = document.querySelector("#history");

historyAnchor.scrollIntoView({behavior:"smooth"});















// definisco i paragrafi e le sezioni.
const sectionCamilloOlivetti = document.querySelector("#camilloOlivetti");
const sectionAdrianoOlivetti = document.querySelector("#adrianoOlivetti");
const sectionOggi = document.querySelector("#oggi");
const sectionArduino = document.querySelector("#arduino");
const paragraphCamilloOlivetti = document.querySelector("#paragraphCamilloOlivetti");
const paragraphAdrianoOlivetti = document.querySelector("#paragraphAdrianoOlivetti");
const paragraphOggi = document.querySelector("#paragraphOggi");
const paragraphArduino = document.querySelector("#paragraphArduino");
let count2;
let count3;
let count4;
let count1 = count2 = count3 = count4 = 0;


const objOptions =
    { // optioni dell'observer
    root: null,
    threshold: 0.35,
    rootMargin: "0px 0px -60%",
};

const objOptionsCamilloOlivetti = {
    root: null,
    threshold: 0.30,
    rootMargin: "0px 0px -50%",
};

const sectionObserverCamilloOlivetti = new IntersectionObserver(callBackFunctionCamilloOlivetti, objOptionsCamilloOlivetti);
sectionObserverCamilloOlivetti.observe(sectionCamilloOlivetti);

function callBackFunctionCamilloOlivetti(entries) {
    const [entry] = entries;
    if (entry.isIntersecting === true)
    {
        paragraphCamilloOlivetti.classList.remove("hidden");
        if (count1 === 0)

        {
            animateText(paragraphCamilloOlivetti);
            count1++;
        }
    }
    else
    {
        paragraphCamilloOlivetti.classList.add("hidden");
    }
}

const sectionObserverAdrianoOlivetti = new IntersectionObserver(callBackFunctionAdrianoOlivetti , objOptions);
sectionObserverAdrianoOlivetti.observe(sectionAdrianoOlivetti);

function callBackFunctionAdrianoOlivetti(entries) {
    const [entry] = entries;
    if (entry.isIntersecting)
    {
        paragraphAdrianoOlivetti.classList.remove("hidden");
        if (count2 === 0)

        {
            animateText(paragraphAdrianoOlivetti);
            count2++;
        }
    } else
    {
        paragraphAdrianoOlivetti.classList.add("hidden");
    }
}


const sectionObserverOggi = new IntersectionObserver(callBackFunctionOggi , objOptions);
sectionObserverOggi.observe(sectionOggi);


function callBackFunctionOggi(entries)
{
    const [entry] = entries;
    if (entry.isIntersecting)
    {
        paragraphOggi.classList.remove("hidden");
        if (count3 === 0)

        {
            animateText(paragraphOggi);
            count3++;
        }
    } else
    {
        paragraphOggi.classList.add("hidden");
    }
}



const sectionObserverArduino = new IntersectionObserver(callBackFunctionArduino , objOptions);

sectionObserverArduino.observe(sectionArduino);

function callBackFunctionArduino(entries) {

    const [entry] = entries;
    if (entry.isIntersecting)
    {
        paragraphArduino.classList.remove("hidden");
        if (count4 === 0)

        {
            animateText(paragraphArduino);
            count4++;
        }
    } else
    {
        paragraphArduino.classList.add("hidden");
    }
}



function animateText(paragraph)
{
    let text = paragraph.innerText;
    let to = text.length, from = 0;

    animate({
        duration: 5000,
        timing: bounce,
        draw: function(progress) {
            let result = (to - from) * progress + from;
            paragraph.innerText = text.slice(0, Math.ceil(result))
        }
    });
}


function bounce(timeFraction)
{
    for (let a = 0, b = 1; 1; a += b, b /= 2)
    {
        if (timeFraction >= (7 - 4 * a) / 11)
        {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}
