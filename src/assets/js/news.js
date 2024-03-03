var news = [
  "Basingstoke - Local man dies of ligma, after missing their CrossCountry train",
  "Reading - Local youth is caught fare dodging, and is charged £923123.20 by First Great Western",
  "Stratford - Local man dies of old age after no international trains stop at Stratford International",
];

document.getElementById("news-ticker").innerHTML =
  "<b>In the news: </b>" + news[Math.floor(Math.random() * news.length)];
