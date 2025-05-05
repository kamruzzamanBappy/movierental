const data = [
    {
        "id": crypto.randomUUID() ,
        "cover":"once-in-ho.jpg",
        "title": "Once Upon a Time... in Hollywood",
        "description":"A fadded televession actor and stunt double strive to acheive fame",
        "genre":"Commedy/Drama",
        "rating":5,
        "price": 140
    },
    {
        "id": crypto.randomUUID() ,
        "cover":"marriage-strory.jpg",
        "title": "Marriage Story",
        "description":"A fadded televession actor and stunt double strive to acheive fame",
        "genre":"Commedy/Drama",
        "rating":3,
        "price": 140
    },
    {
        "id": crypto.randomUUID() ,
        "cover":"pain-and-gain.jpg",
        "title": "Pain & Gain",
        "description":"A fadded televession actor and stunt double strive to acheive fame",
        "genre":"Action/Commedy/Drama",
      
        "rating":4,
        "price": 140
    },
    {
        "id": crypto.randomUUID() ,
        "cover":"avatar.png",
        "title": "Avatar",
     "description":"A fadded televession actor and stunt double strive to acheive fame",
        "genre":"Action/Commedy/Drama",
        "rating":5,
        "price": 140
    },
    {
        "id": crypto.randomUUID() ,
        "cover":"parasite.jpg",
        "title": "Love",
      "description":"A fadded televession actor and stunt double strive to acheive fame",
        "genre":"Action/Commedy/Drama",
        "rating":5,
        "price": 140
    }
]

function getAllMovies(){
    return data;
}

export { getAllMovies };

