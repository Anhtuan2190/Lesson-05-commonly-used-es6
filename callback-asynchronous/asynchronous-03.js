setInterval(function () {
  getDate();
}, 1000);

function getDate() {
  let currentDate = new Date();
  console.log(
    `${currentDate.getHours()}: ${currentDate.getMinutes()}: ${currentDate.getSeconds()}`
  );
}
