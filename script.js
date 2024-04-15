// create an array that will store your motivational quotes 
const motivationalQuotes = [
    "Give someone a program; you frustrate them for a day; teach them how to program, and you frustrate them for a lifetime – David Leinweber",
    "Don’t comment bad code – rewrite it – Brian Kernighan",
    "No one in the brief history of computing has ever written a piece of perfect software. It’s unlikely that you’ll be the first – Andy Hunt",
    "Everybody in this country should learn to program a computer because it teaches you how to think – Steve Jobs",
    "Your most unhappy customers are your greatest source of learning – Bill Gates"
];
// create an array full of images 
const fiveImg = [
    "https://wallpapers.com/images/hd/peaceful-background-ia029sdh1de3pwu9.jpg",
    "https://images.hdqwalls.com/wallpapers/peaceful-lake-minimal-4k-n6.jpg",
    "https://cdn.pixabay.com/photo/2016/05/01/17/58/dock-1365387_640.jpg",
    "https://w0.peakpx.com/wallpaper/650/50/HD-wallpaper-2-people-riding-on-kayak-on-lake-during-daytime.jpg",
    "https://c4.wallpaperflare.com/wallpaper/739/241/134/5bd2ae2e1a965-wallpaper-preview.jpg"
]; 

// create a function to add a paragraph in the div

const div = document.getElementById("motivateBox");
// create a paragraph Element 
const pEl = document.createElement("p");
// get the photos id via html 
const imgSrc = document.querySelector("img");

// create a function and start working on the html page  
let pageCount = 0;
let photoCount = 0;
function motivateMe() {
    div.appendChild(pEl);
    pEl.innerHTML = motivationalQuotes[pageCount];
    pageCount++;
    if ( pageCount === motivationalQuotes.length) {
        pageCount = 0;
    }
    // now change the photos within this box 
    imgSrc.src = fiveImg[photoCount];
    photoCount++;
    if (photoCount === fiveImg.length) {
        photoCount = 0;
    }
}

