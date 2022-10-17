export function generateItemPath(item, file) {
  let text = "";
  let folder = "";
  let element = "";
  element = randomValue(item);
  if (file) {
    folder = randomValue(file);
    text = folder() + element();
    return text;
  } else {
    text = element();
    return text;
  }
}

/**
 * Before display pictures
 * To verificate and return Array without twin item and right length
 * @param {Array} tab
 * @param {Number} num
 * @param {String} item
 * @param {String} path
 * @returns {Array}
 */
export function cancelTwin(tab, num, item, path) {
  tab.sort();
  for (let i = 0; i < num; i++) {
    if (tab[i] === tab[i + 1]) {
      tab.splice(i, 1);
    }
  }

  if (tab.length < num) {
    let newItem = generateItemPath(item, path);
    tab.push(newItem);
    tab.sort();
  }


  for (let i = 0; i < num; i++) {
    if (tab[i] !== tab[i + 1]) {
      return tab;
    } else {
      cancelTwin(tab, num, item, path);
    }
  }

    
  
}

export function randomValue(tab) {
  let copy = tab.slice(0);

  return function () {
    if (copy.length < 1) {
      copy = tab.slice(0);
    }
    let index = Math.floor(Math.random() * copy.length);
    let element = copy[index];
    copy.splice(index, 1);
    return element;
  };
}
