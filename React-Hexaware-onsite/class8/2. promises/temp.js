function who() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mark");
    }, 3000);
  });
}

function what() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" is playing");
    }, 6000);
  });
}

function where() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cricket");
    }, 1000);
  });
}

// function caller() {
//   who()
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));

//   what()
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));

//   where()
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// }


async function caller(){
    const a = await who()
    const b = await what()
    const c = await where()

    console.log(`${a} ${b} ${c}`)
}


caller()