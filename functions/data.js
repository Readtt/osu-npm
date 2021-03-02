function date() {
    return [
        "title",
        "preview",
        "author",
        "cover",
        "exactTime",
        "time",
        "link"
    ]
}

function diffStats() {
    return [
        "length",
        "bpm",
        "circleCount",
        "sliderCount",
        "circleSize",
        "hpDrain",
        "accuracy",
        "approachRate",
        "starDifficulty"
    ]
}

function labels() {
    return [
        "global ranking",
        "local ranking",
        "playtime",
        "medals",
        "pp",
    ]
}

function likes() {
    return [
        "plays",
        "likes"
    ]
}

function mapStats() {
    return [
        "title",
        "author",
        "mapper",
        "status",
        "exactSubmitted",
        "submitted",
        "playCount",
        "favourites",
        "cover",
        "download",
        "genre",
        "language",
        "tags"
    ]
}

function post() {
    return [
        "title",
        "author",
        "replies",
        "views",
        "timeago",
        "link"
    ]
}

function scores() {
    return [
        "rankedScore",
        "totalScore",
        "SSX",
        "SS",
        "SX",
        "S",
        "A"
    ]
}

function forums() {
    return {
        "development": 2,
        "gameplay": 13,
        "tournaments": 55,
        "skinning": 15,
        "help": 5,
        "mapping discussion": 56,
        "modding queues": 60,
        "beatmap projects": 53,
        "ranked beatmaps": 14,
        "general": 7,
        "offtopic": 52,
        "introductions": 8,
        "music hall": 91,
        "otaku culture": 75,
        "videogames": 17,
        "art": 103
    }
}

function leaderboards() {
    return {
        0: "performance",
        1: "score",
        2: "country"
    }
}

function playerStats() {
    return [
        "username", 
        "hitAccuracy",
        "playCount", 
        "totalHits", 
        "maximumCombo", 
        "level",
        "progressToNextLevel", 
        "country", 
        "globalRank", 
        "countryRank", 
        "playTime", 
        "medals"
    ]
}

function playerMisc() {
    return [
        "username",
        "replaysWatchedByOthers",
        "friends",
        "joined",
        "exactJoined",
        "lastSeen",
        "exactLastSeen",
        "forumPosts",
        "comments",
        "playsWith"
    ]
}

module.exports.date = date;
module.exports.diffStats = diffStats;
module.exports.labels = labels;
module.exports.likes = likes;
module.exports.mapStats = mapStats;
module.exports.post = post;
module.exports.scores = scores;
module.exports.forums = forums;
module.exports.leaderboards = leaderboards;
module.exports.playerStats = playerStats;
module.exports.playerMisc = playerMisc;