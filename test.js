let movieRent = (function(){
    const userDetail = []
    const movieRented = []

    const movies = { 
        movie : {
        title : "Wednesday",
        date_released : 20-10-2022
        },
        movie : {
        title : "Wakanda Forever",
        date_released : 10-09-2022
        },
        movie : {
        title : "Top Gun Maverick",
        date_released : 01-05-2022
        }
    }


    class User{
        constructor(name, phoneNumber){
            this.name = name
            this.phoneNumber = phoneNumber

        }
    }
  
// select movie option function
   let option = (function(){
        let choose = prompt("Select movie with index")
        if(choose === 1){
            // console index
            rentMovie()
            pay()
        }
        else if(choose === 2){
            // console index
            rentMovie()
            pay()
        }
        else if(choose === 3){
            // console index
            rentMovie()
            pay()
        }
        else{
            console.log("Wrong Input")
        }
    })
  
// logout function
      function logout(){
        let returnUser = movieRent()
        return returnUser
    }

  let rentMovie = (function(movie){
        let movieIndex = (Number(movie)-1)
        let movieTitle = movies[movie]
        movies.splice(movieIndex,1)
        movieRented.push(movieTitle)
    })

  
// pay function
    function pay(){
        console.log("\n1. Pay\n", "\n2. Logout\n")
        do{
        let pay = prompt("Select your option")
        let watch = true
        if(pay === 1){
            console.log("Enjoy your movie")
            rentMovie()
        }
        else if(pay === 2){
            logout()
        }
        else{
            console.log("Invalid Entry")
            watch = false
            return pay
        }}
        while(watch)
    }
    console.log("\nWelcome to the movie renting API\n", "\n Please fill in your details\n")
    this.name = prompt("Please fill in your name")
    this.phoneNumber = prompt("Please fill in your phone number")
    console.log(`Welcome ${this.name}`)
    const user = new User(this.name, this.phoneNumber)
    userDetail.push(user)
    if(user === true){
        console.log(movies);
        option()

    }
    else{
        console.log("Please fill in your details")
    }
  
})
console.log(movieRent())