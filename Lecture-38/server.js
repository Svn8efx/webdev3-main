const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on("bell-rang" , () => {
    console.log("students should be in the class");
})

//emitter.on("bell-rang" , () => {
//  console.log("Teacher should be in the class");
// })
emitter.exit("bell-rang","9:10 AM")
emitter.exit("bell-rang","10:10 AM")
emitter.off("bell-rang",students)
emitter.exit("bell-rang","11:00 AM ")