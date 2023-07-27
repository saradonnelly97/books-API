# Project Books-API

Books-API is a place where really great books I think you should read belong. You may even want me to read a book; so why not give me a suggestion yourself?

## Key Features: 

**Add A Book:** Tell me about a book you want me to read; I'm sharing all sorts of good books, now it's your turn!  


| Method | Path | Purpose |
| --- | --- | --- |
| GET | / | Home Page |
| GET | /books | Books Index Page |
| POST | /books | Create New Book |
| GET | /places/new | Form Page for Creating New Book | 
| GET | /palces/:id | Details about a particular book |
| PUT | /places/:id | Update a particular book | 
| GET | /places/:id/edit | Form page for editing an existing book | 
| DELETE | /places/:id | Delete a particular book | 
| GET | * | 404 page (matches any route that is not defined above) |

## Planned Data: 

| PLANNED DATA: | x | x | x | x | x |
| --- | --- | --- | --- | --- | --- |
| **Books** | title | book cover image | author | description | genre |
