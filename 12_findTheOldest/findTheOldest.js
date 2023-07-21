function findTheOldest(people) {
  const today = new Date().getFullYear();
  const oldestPerson = people.reduce((oldest, person) => {
    const currentAge = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : today - person.yearOfBirth;
    const oldestAge = oldest.yearOfDeath
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : today - oldest.yearOfBirth;
    return currentAge > oldestAge ? person : oldest;
  });

  return oldestPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
