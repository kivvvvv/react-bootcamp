const choice = array => array[Math.floor(Math.random() * array.length)];

const remove = (items, item) => {
  const itemIndex = items.findIndex(element => element === item);
  if (itemIndex > 0) return items.splice(itemIndex, 1)[0];
  else return undefined;
};

export { choice, remove };
