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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50941610347";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_04_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcyLFxuICAgICAgICA5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDgzLFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWTNaS2ZzZlVTVDV5cldrRWxHVlB5RkFKdlN4SkptMU5pN09MRnN0NW9jST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRmFlTldmN3BSN21FeU1yQmhURE1SZ1wiLFxuICBcInBob25lSWRcIjogXCJkZGJmMzAwNi1mZmYwLTQ4ODktOTc4Yy05ODlkNDgzMzBmYTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxNTQsXG4gICAgICAzLFxuICAgICAgNTIsXG4gICAgICAxMTQsXG4gICAgICAxNjAsXG4gICAgICAxMyxcbiAgICAgIDIyMyxcbiAgICAgIDcsXG4gICAgICAxNyxcbiAgICAgIDExMSxcbiAgICAgIDQsXG4gICAgICAyMzMsXG4gICAgICA0NSxcbiAgICAgIDU5LFxuICAgICAgNDgsXG4gICAgICAxMjMsXG4gICAgICA4MSxcbiAgICAgIDI3LFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMTY3LFxuICAgICAgMTU5LFxuICAgICAgMTg4LFxuICAgICAgMTYzLFxuICAgICAgMjMyLFxuICAgICAgMTkzLFxuICAgICAgMTM0LFxuICAgICAgNTYsXG4gICAgICAxOTgsXG4gICAgICA3MSxcbiAgICAgIDc0LFxuICAgICAgOTQsXG4gICAgICA1LFxuICAgICAgMjIwLFxuICAgICAgMTI5LFxuICAgICAgMTczLFxuICAgICAgMTE3LFxuICAgICAgNjcsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkE3SFJOWUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQxNjEwMzQ3OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDIwMTMxNTI3NjQxMTE6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUERyc3NJQkVJL05rcnNHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6TENLWUxtWVYyMUhnV3puS3ZxcTdZRzhqQ050eVd2dlh0NzF3cHhkZENvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndKMkZub1JxSWM0Z2RqTVpZT2psLzF2UnBFcTRHcE1UYjk0RmlnVkMyblowVVdGRUUvVXlBYURGOVBIa0pyem9IRXEyVGd3Qk5KWEVFNFkzdnkwTUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImV0c3Zxa1hoQWQ5a1hFZ0c1bVVNUWdUaG4yN1owTy9rZzd5THdyT0VFVEZ4aDhCbzFzbGovMkxIeVo3dy8xdzIyeXJ6Sm0rUjZnNzU4bWhRS2dDZGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTQxNjEwMzQ3OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDY0OTQ5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU50alwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnRqLmpzb24iOiAie1wia2V5RGF0YVwiOlwib1R5bDF1WWQ4Y2xTSFhyTUVQNVdJbUpUcHNseHYwYk1NREdSbWpYcnV2TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MDc2ODA0OTYsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsOF19LFwidGltZXN0YW1wXCI6XCIxNzM0NDc1MTQzMDIyXCJ9Igp9"  // PUT your SESSION_ID 


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
