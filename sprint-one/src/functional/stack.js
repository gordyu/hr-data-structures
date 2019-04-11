var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index;
  if (Object.keys(storage).length < 1) index = 0;
  else index = Object.keys(storage).length - 1;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value; // {0: a}
    index++;
  };

  someInstance.pop = function() {
    index--;
    var temp = storage[index];
    delete storage[index];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
