const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hola');
    } else {
      reject('No funcionó');
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() => console.log('Finally'));
