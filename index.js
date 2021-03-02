/**
 * STREAMS
 */

const { get_current_streams } = require('./functions/streams/get_current_streams')
const { return_streams_page } = require('./functions/streams/return_streams_page')

function get_current_streams_e(callback) {
    get_current_streams(callback)
}

function return_streams_page_e(callback) {
    return_streams_page(callback)
}

/**
 * PLAYERS
 */

const { get_player_about } = require('./functions/players/get_player_about')
const { get_player_misc } = require('./functions/players/get_player_misc')
const { get_player_scores } = require('./functions/players/get_player_scores')
const { get_player_stats } = require('./functions/players/get_player_stats')

function get_player_about_e(username, type, callback) {
    get_player_about(username, type, callback)
}

function get_player_misc_e(username, callback) {
    get_player_misc(username, callback)
}

function get_player_scores_e(username, gamemode, callback) {
    get_player_scores(username, gamemode, callback)
}

function get_player_stats_e(username, gamemode, callback) {
    get_player_stats(username, gamemode, callback)
}

/**
 * NEWS
 */

const { return_specific_news_page } = require('./functions/news/return_specific_news_page')
const { return_news_page } = require('./functions/news/return_news_page')
const { get_news_at_index } = require('./functions/news/get_news_at_index')
const { get_most_recent_news } = require('./functions/news/get_most_recent_news')
const { get_full_news_content } = require('./functions/news/get_full_news_content')

function return_specific_news_page_e(url, callback) {
    return_specific_news_page(url, callback)
}

function return_news_page_e(callback) {
    return_news_page(callback)
}

function get_news_at_index_e(index, callback) {
    get_news_at_index(index, callback)
}

function get_most_recent_news_e(callback) {
    get_most_recent_news(callback)
}

function get_full_news_content_e(url, type, callback) {
    get_full_news_content(url, type, callback)
}

/**
 * MAPS
 */

const { return_specific_mapset_difficulty } = require('./functions/maps/return_specific_mapset_difficulty')
const { return_mapset_page } = require('./functions/maps/return_mapset_page')
const { get_mapset_difficulty_codes } = require('./functions/maps/get_mapset_difficulty_codes')
const { get_mapset_description } = require('./functions/maps/get_mapset_description')
const { get_difficulty_stats } = require('./functions/maps/get_difficulty_stats')
const { get_beatmap_stats } = require('./functions/maps/get_beatmap_stats')

function return_specific_mapset_difficulty_e(code, diff_code, callback) {
    return_specific_mapset_difficulty(code, diff_code, callback)
}

function return_mapset_page_e(code, callback) {
    return_mapset_page(code, callback)
}

function get_mapset_difficulty_codes_e(code, callback) {
    get_mapset_difficulty_codes(code, callback)
}

function get_mapset_description_e(code, type, callback) {
    get_mapset_description(code, type, callback)
}

function get_difficulty_stats_e(code, diff_code, callback) {
    get_difficulty_stats(code, diff_code, callback)
}

function get_beatmap_stats_e(code, callback) {
    get_beatmap_stats(code, callback)
}

/**
 * LEADERBOARDS
 */

const { return_leaderboards_page } = require('./functions/leaderboards/return_leaderboards_page')
const { get_n_leaderboard_spots } = require('./functions/leaderboards/get_n_leaderboard_spots')
const { get_leaderboard_codes } = require('./functions/leaderboards/get_leaderboard_codes')

function return_leaderboards_page_e(leaderboardCode, callback) {
    return_leaderboards_page(leaderboardCode, callback)
}

function get_n_leaderboard_spots_e(leaderboardCode, n, callback) {
    get_n_leaderboard_spots(leaderboardCode, n, callback)
}

function get_leaderboard_codes_e(callback) {
    get_leaderboard_codes(callback)
}

/**
 * FORUMS
 */

const { return_post_page } = require('./functions/forums/return_post_page')
const { return_forums_page } = require('./functions/forums/return_forums_page')
const { get_post_question } = require('./functions/forums/get_post_question')
const { get_post_answers } = require('./functions/forums/get_post_answers')
const { get_newest_post } = require('./functions/forums/get_newest_post')
const { get_forums_codes } = require('./functions/forums/get_forums_codes')

function return_post_page_e(link, callback) {
    return_post_page(link, callback)
}

function return_forums_page_e(forumCode, callback) {
    return_forums_page(forumCode, callback)
}

function get_post_question_e(post, type, callback) {
    get_post_question(post, type, callback)
}

function get_post_answers_e(post, callback) {
    get_post_answers(post, callback)
}

function get_newest_post_e(forumCode, callback) {
    get_newest_post(forumCode, callback)
}

function get_forums_codes_e(callback) {
    get_forums_codes(callback)
}

/**
 * CONTESTS
 */

const { return_contests_page } = require('./functions/contests/return_contests_page')
const { get_contests_list } = require('./functions/contests/get_contests_list')

function return_contests_page_e(callback) {
    return_contests_page(callback)
}

function get_contests_list_e(callback) {
    get_contests_list(callback)
}

/**
 * 
 * EXPORTS
 * 
 */

/**
 * STREAM EXPORTS
 */

module.exports.get_current_streams = get_current_streams_e;
module.exports.return_streams_page = return_streams_page_e;

/**
 * PLAYERS EXPORTS
 */

module.exports.get_player_about = get_player_about_e;
module.exports.get_player_misc = get_player_misc_e;
module.exports.get_player_scores = get_player_scores_e;
module.exports.get_player_stats = get_player_stats_e;

/**
 * NEWS EXPORTS
 */

module.exports.return_specific_news_page = return_specific_news_page_e;
module.exports.return_news_page = return_news_page_e;
module.exports.get_news_at_index = get_news_at_index_e;
module.exports.get_most_recent_news = get_most_recent_news_e;
module.exports.get_full_news_content = get_full_news_content_e;

/**
 * MAPS EXPORTS
 */

module.exports.return_specific_mapset_difficulty = return_specific_mapset_difficulty_e;
module.exports.return_mapset_page = return_mapset_page_e;
module.exports.get_mapset_difficulty_codes = get_mapset_difficulty_codes_e;
module.exports.get_mapset_description = get_mapset_description_e;
module.exports.get_difficulty_stats = get_difficulty_stats_e;
module.exports.get_beatmap_stats = get_beatmap_stats_e;

/**
 * LEADERBOARDS EXPORTS
 */

module.exports.return_leaderboards_page = return_leaderboards_page_e;
module.exports.get_n_leaderboard_spots = get_n_leaderboard_spots_e;
module.exports.get_leaderboard_codes = get_leaderboard_codes_e;

/**
 * FORUMS EXPORTS
 */

module.exports.return_post_page = return_post_page_e;
module.exports.return_forums_page = return_forums_page_e;
module.exports.get_post_question = get_post_question_e;
module.exports.get_post_answers = get_post_answers_e;
module.exports.get_newest_post = get_newest_post_e;
module.exports.get_forums_codes = get_forums_codes_e;

/**
 * CONTESTS EXPORTS
 */

module.exports.return_contests_page = return_contests_page_e
module.exports.get_contests_list = get_contests_list_e

/**
 * 
 * END
 * 
 */