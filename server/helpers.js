var ALLOWED_DISTANCE = 0.01; // in lat/long degrees

//assume position is always a 2-tuple: [latitude, longitude]

// Will be replaced by db tables
var users = [];
var visits = [];

// Will be replaced by ORM schemas
var User = function() {
  this.currVisit = null;
  this.lastPos = null;
  this.currPos = null;
};
User.prototype.updatePosition = function(newPos) {
  this.lastPos = this.currPos;
  this.currPos = newPos;
};
// Called right after updating position to update curr visit
User.prototype.updateCurrentVisit = function() {
  //distance between current position and 5 minutes ago
  var dist = Math.sqrt(
    Math.pow(user.currPos[0] - user.lastPos[0], 2) +
    Math.pow(user.currPos[1] - user.lastPos[1], 2)
  );

  if (dist < ALLOWED_DISTANCE) {
    if (user.currVisit) {
      this.currVisit.endTime = Date.now();
    } else {
    // create a new visit with data from 5 minutes ago
    var newVisit = Visit();
    newVisit.pos = user.lastPos;
    newVisit.startTime = Date.now(); // TODO: subtract five minutes
    
    user.currVisit = newVisit;
    visits.push(visit);    
  } else {
    if (this.currVisit) {
      this.currVisit = null;
    }
  }
};

var Visit = function(pos, startTime, endTime) {
  this.pos = pos || null;
  this.startTime = startTime || null;
  this.endTime = endTime || null;
};

var getPositionsForTag = function(tag) {
  // return results of database query:
    // SELECT tags.latitude, tags.longitude
    // FROM tags JOIN tags_visits JOIN visits
    // ON tags.id = tags_visits.tag_id AND
    //    visits.id = tags_visits.visit_id
    // WHERE tags.name = tag
};

var getTagsForPosition = function(position) {
  var minLat = position[0] - ALLOWED_DISTANCE;
  var maxLat = position[0] + ALLOWED_DISTANCE;
  var minLong = position[1] - ALLOWED_DISTANCE;
  var maxLong = position[1] + ALLOWED_DISTANCE;

  // return results of database query:
    // SELECT tags.name
    // FROM tags JOIN tags_visits JOIN visits
    // ON tags.id = tags_visits.tag_id AND
    //    visits.id = tags_visits.visit_id
    // WHERE visits.latitude > minLat AND
    //       visits.latitude < maxLat AND
    //       visits.longitude > minLong AND
    //       visits.longitude < maxLong
};

var getWeekStatsForPositionAndTag = function(position, tag) {
  //TO DO
};