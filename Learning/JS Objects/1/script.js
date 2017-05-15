var movieList =
[
  {
    title: "Harry Potter",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Zielona Mila",
    rating: 4,
    hasWatched: false
  },
  {
    title: "Gwiezdne Wojny",
    rating: 1.5,
    hasWatched: false
  },
  {
    title: "Wyścig szczurów",
    rating: 3,
    hasWatched: true
  },
];
function printMovies()
{
  for (var i = 0; i < movieList.length; i++)
  {
    var result = "You have ";
    if(movieList[i].hasWatched)
    {
      result += "watched ";
    } else {
      result += "not seen ";
    }
    result += "\"" + movieList[i].title + "\" - ";
    result += movieList[i].rating + " stars.";
    console.log(result);
    //console.log("You have "+movieList[i].hasWatched+" "+movieList[i].title+" - "+movieList[i].rating);
  }
}
