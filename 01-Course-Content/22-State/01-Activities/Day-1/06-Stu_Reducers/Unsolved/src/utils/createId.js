// Generate unique ID for each student
const createId = (students) => {
  let id;

  if (students.length) {
    const ids = students.map((s) => s.id);

    ids.sort((a, b) => a - b);

    id = ids[ids.length - 1] + 1;
  } else {
    id = 1;
  }

  return id;
};

export default createId;
