class Movie{   
    constructor(title, year, gender, director, duration){
        this.title = title
        this.year = year
        this.gender = gender
        this.director = director
        this.actors = []
        this.duration = duration
    }

    Play(){
        console.log('Playing...')
    }

    Stop(){
        console.log('Stop...')
    }
    Advance(){
        console.log('Advancing...')
    }
    Close(){
        console.log('Close...')
    }

    Datas(){
        console.log('Title: ' + this.title)
        console.log('Year: ' + this.year)
        console.log('Gender: ' + this.gender)
        console.log('Director: ' + this.director)
        console.log('Duration: ' + this.duration)
    }
}

let avengers = new Movie('Avengers 2',2014,'Action','Dont Know','2h')

avengers.Datas()
