## HTML Requests:
- Movie Matchmaker(h1) and Search Bar(nav) share a container
- Filter tags get a dedicated container
- Movie List Items get a dedicated container
- A section between .actors and .more-details-button for more-details' items
    - (In order to keep the details between it and the 'actors' line)
- A copy of the more details button... for a less details button!
- A section labeled user-details that will contain the user details we want to add
    - Watched-It button
        - clicking it should prompt the user if they want to delete their notes 
            and score to start over or cancel
    - user-score: 1-5 stars
        - Pre Watched-It text: Anticipation Score(?)
        - Post Watched-It text: Opinion Score(?)
        - (Text might not even be necessary)
    - user-notes: text field for user notes, 3 lines min with line wrap
        - field title: Thoughts:
        - pre-filled pre-watch text: "I want to see this movie because..." 
        - pre-filled post-watch text: "So this is what I thought about it..."
- The following title font (which we can change anytime)
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet">