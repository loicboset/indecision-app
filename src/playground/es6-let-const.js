// TERMINAL COMMAND TO LAUNCH BABEL
// babel src/app.jsx --out-file=public/scripts/app.js --presets=env,react --watch
// TERMINAL COMMAND TO LAUNCH LIVE SERVER
// live-server
// CREATE APP OBJECT

// Block Scoping
console.log("App.js is running");

const fullName = 'Loic Boset';
let firstName

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName)
}
