export const StoryIncompleted = function(storiesList) {
  var story;
  for (var i = 0; i < storiesList.length; i++) {
    if (storiesList[i].completed === false) {
      story = storiesList[i];
    }
  }
  return story;
};

export const CardList = function(usersList) {
  var cardsList = [];
  for (var i = 0; i < usersList.length; i++) {
    cardsList.push(usersList[i].card);
  }
  return cardsList;
};

export const Moda = function(array) {
  var obj = {
    '0': 0,
    '1/2': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '5': 0,
    '8': 0,
    '13': 0,
    '20': 0,
    '40': 0,
    '100': 0,
    '?': 0,
    '∞': 0,
  };

  array.forEach(element => {
    obj[element] += 1;
  });

  var max = obj[0];
  var maxKey = [];

  for (let key in obj) {
    if (max < obj[key]) {
      max = obj[key];
      maxKey = [];
      maxKey.push(key);
    } else if (max == obj[key]) {
      maxKey.push(key);
    }
  }
  return maxKey;
};
