/*   STEP 1   */
export const leagueID = "1220112885926088704"; // your league ID
export const leagueName = "Deebs Dynasty 2025"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
<p><strong>\uD83C\uDFB4 Welcome to the Deebs Dynasty League</strong></p> \
<p>Welcome to the official home of the <strong>Deebs Dynasty</strong> — where fantasy football isn’t just a season-long sprint, it’s a year-round obsession. Built for diehards who treat roster-building like an art and Sundays like sacred rituals, this is where legacies are built and dynasties are forged.</p> \
<p><strong>What We’re About</strong></p> \
<p>This isn’t your average Dynasty league. Here in the <strong>Deebs Dynasty</strong>, you’re not just managing a team — you’re building a franchise. Trades don’t just affect next week, they ripple into next year. Rookies matter. Depth matters. And making the right move in May can win you a trophy in December.</p> \
<p><strong>Key Features:</strong></p> \
<ul> \
  <li><strong>Year-Round Action</strong> – From rookie drafts to trade deadlines, there's always something going on.</li> \
  <li><strong>Custom League Rules</strong> – Unique scoring, deep benches, and settings tailored for the dynasty experience.</li> \
  <li><strong>League History & Stats</strong> – Track rivalries, epic trades, and champions over the years.</li> \
  <li><strong>Weekly Power Rankings & Recaps</strong> – Stay sharp. Brag better.</li> \
</ul> \
<p><strong>Meet the Owners</strong></p> \
<p>Each team is managed by a dedicated owner with their own strategy, style, and sense of humor. Some build through youth, some through savvy trades. Others just hoard draft picks and pray. Whatever the approach, it’s always competitive — and personal.</p> \
<p><strong>Think you’ve got what it takes to run a dynasty?</strong><br> \
You’re in the right place. Set your lineup, scout your rookies, and prepare for war — because in this league, the future is now.</p>"

`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
       {
    // 01 
         "managerID": "469508478403080192",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Bobbotron",
    //   "location": "Brooklyn", // (optional)
         "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Your fantasy team's philosophy", // (optional)
         "tradingScale": 10, // 1 - 10 (optional)
         "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
           
       {
    // 02 
         "managerID": "741038570088894464",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "SammySlayz",
    //   "location": "Brooklyn", // (optional)
         "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Your fantasy team's philosophy", // (optional)
         "tradingScale": 10, // 1 - 10 (optional)
         "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },

     {
    // 03 
         "managerID": "858768504868970496",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "deebs21",
    //   "location": "Brooklyn", // (optional)
         "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Your fantasy team's philosophy", // (optional)
         "tradingScale": 10, // 1 - 10 (optional)
         "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },

        {
    // 04 
         "managerID": "856337934406758400",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Chumps101",
    //   "location": "Brooklyn", // (optional)
         "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Your fantasy team's philosophy", // (optional)
         "tradingScale": 10, // 1 - 10 (optional)
         "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },

       {
    // 05 
         "managerID": "720424373617520640",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "BeeWEEZY10",
    //   "location": "Brooklyn", // (optional)
         "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 6820, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Your fantasy team's philosophy", // (optional)
         "tradingScale": 10, // 1 - 10 (optional)
         "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },

     {
    // 06 
         "managerID": "865007156980764672",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Cdubb22",
    //   "location": "Brooklyn", // (optional)
         "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Your fantasy team's philosophy", // (optional)
         "tradingScale": 10, // 1 - 10 (optional)
         "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },

      {
    // 07 
         "managerID": "862358521767915520",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "timprobst10",
    //   "location": "Brooklyn", // (optional)
         "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Your fantasy team's philosophy", // (optional)
         "tradingScale": 10, // 1 - 10 (optional)
         "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },

       {
    // 08 
         "managerID": "858904423475298304",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "GriesedieckGangster",
    //   "location": "Brooklyn", // (optional)
         "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Your fantasy team's philosophy", // (optional)
         "tradingScale": 10, // 1 - 10 (optional)
         "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },

       {
    // 09 
         "managerID": "76480998334152704",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "belushi",
    //   "location": "Brooklyn", // (optional)
         "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Your fantasy team's philosophy", // (optional)
         "tradingScale": 10, // 1 - 10 (optional)
         "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },

       {
    // 10 
         "managerID": "85231769196314624",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "pridecrushers",
    //   "location": "Brooklyn", // (optional)
         "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Your fantasy team's philosophy", // (optional)
         "tradingScale": 10, // 1 - 10 (optional)
         "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
