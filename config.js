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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237682698517";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_50_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUzLFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTDNoSmltU1hPY3dtaEtCVXBTVHZLR2JiVFN0dlprSDF4K3VBMVdqUHl4ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2ODI2OTg1MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI4NkUzQUE4RTQ2MDg3RTdBRDBBRDI2RTQ2ODM5NDgwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQ3MTg0OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY4MjY5ODUxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzczNjg2QTFGNERCNjMwQ0JBMjY1OUQ1NjlFODJGNEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDcxODUwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInV6V3g3WmNNU0JlcnQ2VldpWUNxalFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGQwZWQ1ZDktNWY0Ni00N2IzLWEzOWYtZGFhYjhhMmMwYjFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDE1NyxcbiAgICAgIDIzMSxcbiAgICAgIDQxLFxuICAgICAgMTA5LFxuICAgICAgMTA0LFxuICAgICAgMTA5LFxuICAgICAgNzAsXG4gICAgICAxNDEsXG4gICAgICAxMzYsXG4gICAgICAxNixcbiAgICAgIDMwLFxuICAgICAgNzEsXG4gICAgICAyMjYsXG4gICAgICAxOTAsXG4gICAgICAxNjUsXG4gICAgICAxNjUsXG4gICAgICAxNDgsXG4gICAgICAxOTQsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgMTQ0LFxuICAgICAgNjAsXG4gICAgICAyMDMsXG4gICAgICA2MCxcbiAgICAgIDY5LFxuICAgICAgMjUxLFxuICAgICAgNTgsXG4gICAgICAxNjQsXG4gICAgICAxOSxcbiAgICAgIDE0NyxcbiAgICAgIDE4NyxcbiAgICAgIDEzNixcbiAgICAgIDIyNCxcbiAgICAgIDgsXG4gICAgICAxMjQsXG4gICAgICAxOCxcbiAgICAgIDIwMCxcbiAgICAgIDc3LFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA2TldYWlI0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2ODI2OTg1MTc6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwOTA1Nzg1OTk2NTEzNTozN0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCIuTkVXX01JTkRfU0VULlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mUXIrTUZFS0dpc2JRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwialZSS2JQV3FLWXZRWHdKaUxmdS9oUjRwdVNtYUJRSmVoLzY2RHJ3Wjdtaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwczFsOGxuQ2wrUUdCbXM2b0srS2tBSVJUNUFqbWpBOHRUZEQ2YVJNUEMzQVlRRDdNZy9RNE91RnZqVitxdjNoNGpzdFhYREpPV3ZNa0wwbzVGajdEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4NmlicGV5eGNRRkdDY0F4MGJWcGZPNW9xSXM0M0hvUHZ5aWs5NjBML1E4L3JoaWtXdlNRZEVOM0t5QzVtSFJRV09pZXdRN0tKREZTUURRQmkvbjNCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2ODI2OTg1MTc6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NzE4NDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOTUZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5NRi5qc29uIjogIntcImtleURhdGFcIjpcIlNPbzJEQjRQS1RFdHZvcXFiK3NVSFZ2Q3lJbzgxMGVPci9yTkg2a2tZcm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU1MDU3NTcxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE2NDg2MjkzN1wifSIKfQ=="  // PUT your SESSION_ID 


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
