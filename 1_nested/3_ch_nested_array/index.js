const data = [
  { id: 1, parent: 0 },
  { id: 2, parent: 0 },
  { id: 3, parent: 1 },
  { id: 4, parent: 1 },
  { id: 5, parent: 1 },
  { id: 6, parent: 2 },
  { id: 7, parent: 2 },
  { id: 8, parent: 2 },
  { id: 9, parent: 3 },
  { id: 10, parent: 3 },
  { id: 11, parent: 3 },
  { id: 12, parent: 3 },
  { id: 13, parent: 3 },
  { id: 14, parent: 3 },
  { id: 15, parent: 3 },
];

// Restructure the data array into a nested array
function restructureArray(data) {
  const map = {};
  const result = [];

  data.forEach(item => {
    map[item.id] = { ...item, children: [] };
  });

  data.forEach(item => {
    if (item.parent > 0) {
      map[item.parent].children.push(map[item.id]);
    } else {
      result.push(map[item.id]);
    }
  });
}
