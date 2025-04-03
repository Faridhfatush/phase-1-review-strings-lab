// Write your code in this file!
const currentUser = 'Fatuma'
//const welcomeMessage = currentUser + "Welcome to Flatbook,! "
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`
//const excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + currentUser.toUpperCase()
const excitedWelcomeMessage = welcomeMessage.toUpperCase()
//const shortGreeting = `Welcome, ${currentUser[0]}` // it uses bracket notation to get the first letter of current user variable
// const shortGreeting = `Welcome, ${currentUser.charAt(0)}`// uses charat method
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`