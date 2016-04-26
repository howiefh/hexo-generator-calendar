'use strict';

module.exports = function(locals) {
  var config = this.config.calendar;
  var single = config.single;
  var root = config.root;

  function generateKey(date) {
    var year = date.year();
    var month = date.month() + 1; // month is started from 0
    return year + '-' + month;
  }

  var posts = locals.posts.sort('date').filter(function(post) {
    return post.published;
  }).map(function(post) {
    return {
      title: post.title,
      date: post.date,
      permalink: post.permalink
    };
  }).reduce(function(prev, cur, index, array) {
    var key = generateKey(cur.date);

    if (prev === null) {
      prev = {};
      prev[key] = {
        posts: [],
        prev: null,
        next: null
      };
    } else if (!prev.hasOwnProperty(key)) {
      var prevKey = generateKey(array[index - 1].date);

      prev[key] = {
        posts: [],
        prev: prevKey,
        next: null
      };
      prev[prevKey].next = key;
    }

    prev[key].posts.push(cur);
    return prev;
  }, null);

  if (!single) {
    if (root[root.length - 1] !== '/') {
      root += '/';
    }

    var keys = Object.keys(posts);
    var calendars = keys.map(function(key) {
      return {
        path: root + key + '.json',
        data: JSON.stringify(posts[key])
      };
    });

    return calendars;
  }

  return {
    path: 'calendar.json',
    data: JSON.stringify(posts)
  };
};
