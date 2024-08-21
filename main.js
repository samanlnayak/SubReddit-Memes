const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");
const memeSubreddit = document.querySelector(".meme-generator .meme-subreddit"); // New element

// Array of subreddits
const subreddits = [
  "IndianDankMemes",
  "wholesomememes",
  "memes",
  "funny",
  "dankmemes",
  "dank",
  "laugh",
  "comedy",
  "leetcodememes"
];

const updateDetails = (url, title, author, subreddit) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
  memeSubreddit.innerHTML = `Subreddit: ${subreddit}`; // Update subreddit name
};

const generateMeme = () => {
  const randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
  
  fetch(`https://meme-api.com/gimme/${randomSubreddit}`)
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author, randomSubreddit); // Pass subreddit name to updateDetails
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
