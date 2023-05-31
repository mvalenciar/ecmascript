const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hola');
    } else {
      console.log('No funcionó');
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
