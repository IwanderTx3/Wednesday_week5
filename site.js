const API_KEY = "48de7243"
let movieList=$("#movieList")

fetch('http://www.omdbapi.com/?s=Star%20Wars&apikey=48de7243')
    .then(function(response){return response.json()})
    .then(function(json)
    {   
        json.Search.forEach(function(movie)
            {
                let movieTitle=movie.Title
                let movieRelease=movie.Year
                let movieId=movie.imdbID
                let li = $("<li>").addClass("displayList").attr("id","accordion");
                let itemTitle= $("<title>").addClass("textForm")
                itemTitle.html(movieTitle)
                let releaseDate =$("<h9>").addClass("h9")
                releaseDate.html(movieRelease)
                li.append(itemTitle)
                itemTitle.append(releaseDate)
                movieList.append(li)
                let movieUrl="http://www.omdbapi.com/?i="+movieId+"&apikey="+API_KEY
                fetch(movieUrl)
                .then(function(response){return response.json()})
                .then(function(filmList)
                    {
                        let details = $("<details>").addClass("info")
                        details.append("<summary><h5>More info</h5><h6>Less info</h6></summary>")
                        details.click(function(){
                            details.toggleClass(function(){
                                if(details.hasClass("info")){
                                    var boxState = "Less info"
                                    return "less";
                                }
                                else{
                                    var boxState = "More info"
                                    return "info"}    
                            });
                        })
                        let poster = filmList.Poster
                        let fullDetails =$("<ul>")
                        let box = $("<div>").addClass("box")
                        box.append("<img class='image' src ="+poster+" />")
                        details.append(box)
                        box.append(fullDetails)
                        let rated = filmList.Released
                        fullDetails.append("<li>Released: "+filmList.Released+"</li>")
                        fullDetails.append("<li> Directed by: "+filmList.Director+"</li>")
                        fullDetails.append("<li> Written by: "+filmList.Writer+"</li>")
                        fullDetails.append("<li> Starring "+filmList.Actors+"</li>")
                        fullDetails.append("<li> Released by: "+filmList.Production+"</li>")
                        fullDetails.append("<li> Rated: "+filmList.Rated+" </li>")
                        fullDetails.append("<li> <br>   </li>")
                        fullDetails.append("<li> Plot Summary: "+filmList.Plot+"</li>")
                        li.append(details)
                        })
            })


    })


 