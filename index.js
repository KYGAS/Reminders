module.exports = function Reminders(mod) {

    const command = mod.command || mod.require.command;
    const config = require('./config.json');

    var enabled = config.enabled;
    var reminderDelay = 2000 + ( config.reminderDelay * 1000 );
    var assistantName = config.assistantName;
	var reminders = config.reminders;
    var myName = "x";

    mod.hook('S_LOGIN', '*', (event) =>{
        if (!enabled) return;
            myName = event.name;
            mod.setTimeout(() => {
                reminders.forEach(reminder =>  { if (reminder  != "0"){mod.send('S_WHISPER', '*', { gm : 1, name: assistantName, recipient: event.name, message : reminder }); }})
            }, reminderDelay); 
    });
}