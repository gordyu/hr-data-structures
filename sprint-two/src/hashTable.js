var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  /* HR peusdocode:
  retrieve a bucket
  if the bucket does not exist, create an empty one (make it not undefined)
  Iterate over bucket
  Does key exist?
    If yes,update it
    If no, insert a new tuple */
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  var found = false;
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
      break;
    }
  }
  if (!found) { 
    bucket.push([k, v]); 
    this._count++;
    if (this._count > this._limit * 0.75) {
      this._resize(this._limit * 2);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;  
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1); //generally don't modify an array while iterating EXCEPT when immediately exiting after removing
      this._count--;
      if (this._count < this._limit * 0.25) {
        this._resize(this._limit / 2); 
      }
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage; //backup data before modifying hash table
  this._limit = newLimit;
  this._storage = makeLimitedArray(newLimit);
  this._count = 0;

  oldStorage.each(function(bucket) {
    if (!bucket) {
      return;
    }
    // cram those tuples back in there!
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */