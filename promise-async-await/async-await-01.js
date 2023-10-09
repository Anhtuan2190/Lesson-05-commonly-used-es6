async function display(text) {
  console.log(text);
}

async function saySomething() {
  return "Hello C07";
}

saySomething().then(
  function (value) {
    display(value);
  },
  function (error) {
    display(error);
  }
);
