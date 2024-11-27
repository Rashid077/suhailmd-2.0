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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_41_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDUwLFxuICAgICAgICA3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNixcbiAgICAgICAgMTEwLFxuICAgICAgICA2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk2LFxuICAgICAgICA5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODksXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDcwLFxuICAgICAgICA0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MixcbiAgICAgICAgODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1LFxuICAgICAgICA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg1LFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMCxcbiAgICAgICAgODQsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRpRGhuUVoyVkxNWEdIcDV5YVJ2N1d6VkdYTDhsUTB2dnRSTSt4akJzeVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTQyMDY3Nzk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRkY3NDI2RDk3NUI5MTY5NjY1QjlDQjEwMUUwQTA2NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI2Nzg5MTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUFVadnlGbG5UajJYbTdVRUplenlrQVwiLFxuICBcInBob25lSWRcIjogXCJhZDkxNzQ3MC03YzQ4LTQ1ZWItYjU1OS1kNTUwNjUwOTQ0NjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgOTIsXG4gICAgICAxMDksXG4gICAgICA4NSxcbiAgICAgIDE2OCxcbiAgICAgIDIyMyxcbiAgICAgIDE1LFxuICAgICAgOTksXG4gICAgICAyMjgsXG4gICAgICAyMzEsXG4gICAgICAyNDYsXG4gICAgICAxOTEsXG4gICAgICA2OCxcbiAgICAgIDE4MCxcbiAgICAgIDEsXG4gICAgICAxMDAsXG4gICAgICA0NSxcbiAgICAgIDIxOSxcbiAgICAgIDE4MCxcbiAgICAgIDE2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICA4OSxcbiAgICAgIDE0MCxcbiAgICAgIDIwNixcbiAgICAgIDI0OSxcbiAgICAgIDE4MixcbiAgICAgIDg4LFxuICAgICAgNDcsXG4gICAgICA3LFxuICAgICAgMzUsXG4gICAgICAxOTMsXG4gICAgICAxNTQsXG4gICAgICAxNjUsXG4gICAgICAyNDAsXG4gICAgICAxMDAsXG4gICAgICA2NCxcbiAgICAgIDMyLFxuICAgICAgMTMzLFxuICAgICAgMTA5LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxaVjI5S1dNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNDIwNjc3OTY6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYyNjAzNzQ1MzU4MDQyOjQ4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ096SWhZMEJFUEtwbXJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWWFyRlNrZnJiUkw3ZzRZRkJlL1p5NGRQSS9wVGdmMVRsREYwT2dRSWJCbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjcS9Qc0Y2S05vZlY5N2hJTzBCaDFkczVmamx5MlZ4d0Mwakg4ZEJJVGJZdTBubEtxOWpsNkxyak9SSVdleWJ1ZGlVZEFZVmlpTExiVXJUL1dBZE9BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDN1IzM0kvQjVlUG8waWZWQy9DeWRtVzIwamx4enBlRSsyOFRuSGpXRzlmcGtnSHdLVTFmYjRBeTRvZkl2UzRSTElwdktTWUNFdVNyNzhmSEdhdUhCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNDIwNjc3OTY6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjY3ODkwMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9hVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2FULmpzb24iOiAie1wia2V5RGF0YVwiOlwiUXVydXJSZGJZeTBibmVpbllyZklJSmRPQmlPWUlCOTh5ZnZ6YVpSOTZZZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTU3ODk2NzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjY3ODkwODUyNFwifSIKfQ=="  // PUT your SESSION_ID 


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
