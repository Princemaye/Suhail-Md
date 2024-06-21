const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_09_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc2LFxuICAgICAgICA4MixcbiAgICAgICAgOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICA0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgODAsXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDgwLFxuICAgICAgICA3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDMxLFxuICAgICAgICA3NixcbiAgICAgICAgODcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY4LFxuICAgICAgICA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDk1LFxuICAgICAgICA1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDczLFxuICAgICAgICA2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxLFxuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOEFFeGpqT1lyVVBSSlliTE1rS3BGYWIwKzRQRUZ1UGNrWnVhMk1wZXhkVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYXRXbDdKMEdST0dUbGd6TjVhZTRmUVwiLFxuICBcInBob25lSWRcIjogXCI3OWVkMzlmZS04NzZmLTQ3YTgtYWY4NS0zNzJkYmVlNTFlODhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAzLFxuICAgICAgNDgsXG4gICAgICA3NSxcbiAgICAgIDExOCxcbiAgICAgIDExMyxcbiAgICAgIDEzMSxcbiAgICAgIDgzLFxuICAgICAgMjQ5LFxuICAgICAgOTMsXG4gICAgICAyNCxcbiAgICAgIDE1MSxcbiAgICAgIDE4NSxcbiAgICAgIDYsXG4gICAgICA4MSxcbiAgICAgIDIzMixcbiAgICAgIDIyNSxcbiAgICAgIDksXG4gICAgICA4OCxcbiAgICAgIDEyNSxcbiAgICAgIDI1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICA2NixcbiAgICAgIDk0LFxuICAgICAgNzYsXG4gICAgICAyNDQsXG4gICAgICA5OSxcbiAgICAgIDYsXG4gICAgICA0MixcbiAgICAgIDIxMSxcbiAgICAgIDIyNCxcbiAgICAgIDI3LFxuICAgICAgNyxcbiAgICAgIDg5LFxuICAgICAgMTY5LFxuICAgICAgMjA3LFxuICAgICAgMTQ0LFxuICAgICAgNzcsXG4gICAgICAxODcsXG4gICAgICAyMDUsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE2SDlRU1JOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2ODI2OTg1MTc6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5ldyBtaW5kIHNldFwiLFxuICAgIFwibGlkXCI6IFwiMTA5MDU3ODU5OTY1MTM1OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDJmdWJFRkVKZjAxN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuZ3dUSUExTnRWL3hmYS96RnB6NGlHS2tRVklwdXlIVTc5eGxvVlpBYVcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlAxcnlkRlVJa2JkU1hra1pRMnNRQTVNeHN5ZGV6bnFzZngyUG81UEx2S1lSWGhKdllVK1UwbTIxdkc0SnBBNGY1d2FuWWYxUmZlVGRpdlBWaTdFSEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImgwRWxMODlMbzdzbGVCNHh3bjNRNVF0NERXTm9NNnd3ZW9RRTlwamNjTEIrZnRzQ2FaZE80TzJmRjc5NTl3NnBNK2FXVUtXL3ZjdTJ5bEwrSDl4UmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY4MjY5ODUxNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTAwNzc3NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtxQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3FDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM28ya3FHSXdKblM5RFJkZDU1SE1YTHpxdXRDaXFodHBIaFRUVkNGM2Vjdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDQ1ODc1NjQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwMDc3NzQ4MTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
