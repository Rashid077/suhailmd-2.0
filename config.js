const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*0)  === 0 ?  "false" : "false" ;  // Make it "false" for disable WELCOME

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_11_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA1NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgwLFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDg5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1LFxuICAgICAgICAxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidHduRGFWeFovdzJzL0lobEJoWXpSZnVjR2R2YW5ZWDR4aDA3MXhJdjFJYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicF84UDVXWXhSRkdIRjdwZnVBc0ZUZ1wiLFxuICBcInBob25lSWRcIjogXCJlMDViODBkOS05YjBmLTQxNjUtYTQxMC01NWI0NmM4ODY1ZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMzIsXG4gICAgICAxNjksXG4gICAgICAyMDksXG4gICAgICAyMzEsXG4gICAgICAxMTAsXG4gICAgICAxOTQsXG4gICAgICAxNTgsXG4gICAgICAxMzAsXG4gICAgICAxNTgsXG4gICAgICAxNzEsXG4gICAgICA2NixcbiAgICAgIDc5LFxuICAgICAgNCxcbiAgICAgIDgxLFxuICAgICAgMTkwLFxuICAgICAgNjYsXG4gICAgICAxMTMsXG4gICAgICA0MyxcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDcxLFxuICAgICAgNTMsXG4gICAgICAxNjksXG4gICAgICAxMTYsXG4gICAgICA5MixcbiAgICAgIDE4OCxcbiAgICAgIDExNSxcbiAgICAgIDMsXG4gICAgICAxMTUsXG4gICAgICAyMDYsXG4gICAgICAxODQsXG4gICAgICAxMTYsXG4gICAgICAxODksXG4gICAgICAxOTQsXG4gICAgICAxMDYsXG4gICAgICA5OCxcbiAgICAgIDU0LFxuICAgICAgMTUsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlFRNzZXOFNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE0MjA2Nzc5Njo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjI2MDM3NDUzNTgwNDI6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3JJaFkwQkVKMnp4YmtHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZYXJGU2tmcmJSTDdnNFlGQmUvWnk0ZFBJL3BUZ2YxVGxERjBPZ1FJYkJvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9FeFB1VVYrTE5PeUZIemJHOHE0d0VSOTY4VXpmcDlFOElDaVVoOUNCL2lsTGxveHlhdG8yNmxEYzFMRkhtVzNFaG8xc2cxVUxtMTJLQnVRbGRFY0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkR6K2dmRDRNOUNRRW02WE04ckNEa2hJWjh2Sld2bTZrVjhKOHArcjZKMWttT3dwMnJGS0ZuZ2dBZVZzeVltQ2ZDaVl2R1dISUZxek1FOGc1SEZsNGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE0MjA2Nzc5Njo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMjg3NDU2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
