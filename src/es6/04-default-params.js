function newUser(name, age, country) {
  const userName = name || 'undifined';
  const userAge = age || 'undifined';
  const userCountry = country || 'undifined';

  console.log(
    `Name: ${userName}
Age: ${userAge}
Country: ${userCountry}
`,
  );
}

newUser();
newUser('Milton Valencia', 30, 'Colombia');

function newAdmin(
  name = 'undefined',
  age = 'undefined',
  country = 'undefined',
) {
  console.log(name, age, country);
}

newAdmin();
newAdmin('Milton Valencia', 30, 'Colombia');
