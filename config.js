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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_40_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMSxcbiAgICAgICAgNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3LFxuICAgICAgICA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMCxcbiAgICAgICAgNyxcbiAgICAgICAgODgsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICA4MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgyLFxuICAgICAgICA2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQxLFxuICAgICAgICA5MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNixcbiAgICAgICAgMjM5LFxuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMixcbiAgICAgICAgODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg0LFxuICAgICAgICA1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkMFRuY0YxL28wSjRJMXZnNk90UGxKMStSS3FFMXJDSDQzcC9wNG1ZK0tRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY4MjY5ODUxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTk0QUNBNThBN0M0ODYwNTRENEM1RUQyQTBERTY2NjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MDA5NjE2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNIVFFSZG9FVG5la2hDUk9KR2hSU2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTQxY2Y3ZWMtZTEyNS00NTYwLTlkMjktMGMzMjUzMmJlZTE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMTcsXG4gICAgICAxMDAsXG4gICAgICAyMzUsXG4gICAgICAyMTAsXG4gICAgICA1NCxcbiAgICAgIDEyNSxcbiAgICAgIDE1MixcbiAgICAgIDI0OSxcbiAgICAgIDEyOCxcbiAgICAgIDEwMCxcbiAgICAgIDk0LFxuICAgICAgMjI1LFxuICAgICAgMTQ1LFxuICAgICAgMjIzLFxuICAgICAgMTg4LFxuICAgICAgMjEsXG4gICAgICAyMixcbiAgICAgIDI1NCxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDE0MixcbiAgICAgIDE1MSxcbiAgICAgIDE5OSxcbiAgICAgIDE3MixcbiAgICAgIDI0NSxcbiAgICAgIDE5NixcbiAgICAgIDc5LFxuICAgICAgMjA1LFxuICAgICAgNDksXG4gICAgICAxOSxcbiAgICAgIDE1MixcbiAgICAgIDEyNSxcbiAgICAgIDE4OSxcbiAgICAgIDE4MixcbiAgICAgIDEyMyxcbiAgICAgIDEzMSxcbiAgICAgIDIxNSxcbiAgICAgIDM5LFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBNVERTUzROXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2ODI2OTg1MTc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5ldyBtaW5kIHNldFwiLFxuICAgIFwibGlkXCI6IFwiMTA5MDU3ODU5OTY1MTM1OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZmdWJFRkVNbUMyTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuZ3dUSUExTnRWL3hmYS96RnB6NGlHS2tRVklwdXlIVTc5eGxvVlpBYVcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInczSU9JSm9TcWxaYmxiMGhoc0lBTThwS0x6RWpGRDlYN2E5ZXh0ZHFuc1hMRTFpYTFWQlR3QTdyQmhrbzl4bThTWDJCN3A1cWhueElUbW5GTDd1SUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktlTHJNbEFacURPR1V3blNNT3hqMFMzTkdybndWa3d6ZkhFSmZ2NUV6cVkrcUJUVllnRFdaYWczaGl1YUJWak1yRnNqZC92RmpBamlKcmYrS3cxY2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY4MjY5ODUxNzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTAwOTYxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtxRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3FFLmpzb24iOiAie1wia2V5RGF0YVwiOlwid3cxWUtXanE2alVmNnhRWnVtaUlwdDMxVXc0VDdxVFgrS3F3TXVDYXl6OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDQ1ODc1NjQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwMDk2MTYxMTlcIn0iCn0="  // PUT your SESSION_ID 


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
