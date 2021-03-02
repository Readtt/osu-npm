[![npm](https://img.shields.io/npm/v/osu-npm.svg)](https://www.npmjs.com/package/osu-npm)
[![npm](https://img.shields.io/npm/dt/osu-npm.svg?maxAge=3600)](https://www.npmjs.com/package/osu-npm)
[![install size](https://packagephobia.now.sh/badge?p=osu-npm)](https://www.npmjs.com/package/osu-npm)

![NPM](https://nodei.co/npm/osu-npm.png?downloads=true&downloadRank=true&stars=true)

# osu! NPM

## Installation
```
npm i osu-npm
```
Access osu! data without an API key.

## Argument Options

| Argument | Options | Definitions |
| -------- | ----------- | ----------- |
| `username` | `String`<br />`Number` | `String`: Username<br />`Number`: User ID |
| `type` | `text`<br />`html` | `text`: Returns data in text form (images don't show)<br />`html`: Returns data in html form|
| `gamemode` | `osu/standard`<br />`taiko`<br />`catch/fruits`<br />`mania` | `osu/standard`: Returns data from the standard version of osu!<br />`taiko`: Returns data from the taiko version of osu!<br />`catch/fruits`: Returns data from the catch version of osu!<br />`mania`: Returns data from the mania version of osu!|
|`url`|`String`|`String`: News page URL|
|`index`|`Number`|`Number`: Index of the 10 most recent news posts |
|`code`|`Number`|`Number`: Beatmap ID |
|`diff_code`|`Number`|`Number`: Difficulty ID |
|`leaderboardCode`|`Number`|`Number`: Choose a leaderboard type<br />```get_leaderboard_codes(callback)``` |
|`n`|`Number`|`Number`: The number of players you want to get (below 50) |
|`link`|`String`|`String`: The URL of a specific osu! post |
|`forumCode`|`Number`|`Number`: Choose a forum genre<br />```get_forums_codes(callback)``` |
|`post`|`String`|`String`: The post URL of a specific post |

### Stream Functions
---
| Function | Description |
| -------- | ----------- |
| `get_current_streams(callback)` | Gets the current osu! streams in progress |
| `return_streams_page(callback)` | Gets the osu! streams page in HTML |

### Player Functions
---
| Function | Description |
| -------- | ----------- |
| `get_player_about(username, type, callback)` | Gets the players about page |
| `get_player_misc(username, callback)` | Gets the players miscellaneous data |
| `get_player_scores(username, gamemode, callback)` | Gets the players score data |
| `get_player_stats(username, gamemode, callback)` | Gets the players stats data|

### News Functions
---

| Function | Description |
| -------- | ----------- |
| `return_specific_news_page(url, callback)` | Gets the HTML of a specific news page |
| `return_news_page(callback)` | Gets the HTML of the osu! news page |
| `get_news_at_index(index, callback)` | Get the news data at the specified index |
| `get_most_recent_news(callback)` | Get the data of the most recent news |
| `get_full_news_content(url, type, callback)` | Get the content of a specific news page |

### Map Functions
---

| Function | Description |
| -------- | ----------- |
| `return_specific_mapset_difficulty(code, diff_code, callback)` | Get the HTML of a specific beatmapset difficulty |
| `return_mapset_page(code, callback)` | Gets the HTML of a beatmap |
| `get_mapset_difficulty_codes(code, callback)` | Get the difficulty codes of every difficulty |
| `get_mapset_description(code, type, callback)` | Get the description of a beatmap |
| `get_difficulty_stats(code, diff_code, callback)` | Get the difficulty stats of a difficulty (only standard for now) |
| `get_beatmap_stats(code, callback)` | Get the beatmaps information |

### Leaderboard Functions
---

| Function | Description |
| -------- | ----------- |
| `return_leaderboards_page(leaderboardCode, callback)` | Get the HTML of a specific leaderboard |
| `get_n_leaderboard_spots(leaderboardCode, n, callback)` | Get the top `n` players |
| `get_leaderboard_codes(callback)` | Get which number is equal to which leaderboard type |

### Forums Functions 
---

| Function | Description |
| -------- | ----------- |
| `return_post_page(link, callback)` | Get the HTML of a specific post |
| `return_forums_page(forumCode, callback)` | Get the HTML of a specific forum |
| `get_post_question(post, type, callback)` | Get post question |
| `get_post_answers(post, callback)` | Coming soon... |
| `get_newest_post(forumCode, callback)` | Get the newest post on a forum |
| `get_forums_codes(callback)` | Get which number is equal to which forum genre |

### Contest Functions
---

| Function | Description |
| -------- | ----------- |
| `return_contests_page(callback)` | Get the HTML of the contests page |
| `get_contests_list(callback)` | Get an array of the newest contests |

## Examples

Await/Async example
```js
const api = require('osu-npm')

async function test() {
    await api.return_contests_list(res => console.log(res))
}
      
test();
```
returns: 
```js
[
  {
    url: 'https://osu.ppy.sh/community/contests/115',
    title: 'A Labour of Love',
    date: 'November 30, 2020 - March 1, 2021',       
    type: 'beatmap'
  },
  {
    url: 'https://osu.ppy.sh/community/contests/114',
    title: 'Winter Sports 2020 Fanart Contest',      
    date: 'Ended December 6, 2020',
    type: 'art'
  },
  {
    url: 'https://osu.ppy.sh/community/contests/113',
    title: 'Monthly Beatmapping Contests 2020: #10',
    date: 'Ended',
    type: 'beatmap'
  },
...
```

# NOTES

- These results are NOT static and are getting scraped realtime whenever a function is run
- This was based on [Osu-Free-Api](https://github.com/ZenT3600/Osu-Free-Api) which was made in python

# TODO

- get_player_first_place_plays
- get_player_socials
- get_player_most_played_map
- get_player_favorite_maps
- Add paging arguments
- Organize functions