const userName = process.env.modulusUser
const password = process.env.modulusPassword
const projectName = process.env.projectName

exports.handler = (event, context, callback) => {
  restart(callback)
}

function restart(callback) {  
  var modulus = require("./modulus")

  var authenticate = modulus.commands.user.authenticate

  console.log("Authenticating " + userName + "...")
  authenticate(userName, password, null, null, function(err, data) {
    console.log("Authenticated", err, data)
    var restart = modulus.commands.project.restart
    console.log("Restarting " + projectName + "...")
    restart(projectName, function(err, data) {
      console.log("Restarted " + projectName, err, data)
      callback(null, "Restarted " + projectName)
    })
  })  
}

/*
restart(function(err,data){
  console.log(err,data)
})
*/
