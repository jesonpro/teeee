/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
N9EOTROX - TEENUHX API එකක් හරි උස්සලා තිබ්බොත් රෙපෝ එකටම Coppyright ගහනවා
*/

const Neotro = require('../events');
const Config = require('../hatzu');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let am = config.WORKTYPE == 'public' ? false : true
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"

Neotro.addCommand({pattern: 'glitch ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

 Neotro.addCommand({pattern: 'freefire ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikeyVI6j4t4wCbwoc6Deh5wgrJL2Kt1=&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'cfire ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})
  
      }));

Neotro.addCommand({pattern: 'light ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})
    
    }));

Neotro.addCommand({pattern: 'cslogo ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})
  
    }));

Neotro.addCommand({pattern: 's3d ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'nlogo ?(.*)', fromMe: am,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'blackpink ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'neonlight ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'pornhub ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'bld ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: '3dtext ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

   }));

Neotro.addCommand({pattern: 'nfire ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'ninjalogo ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'nglow ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'nleaves ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'nsky ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'buttonyt ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'bcwall ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'anony ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=2270813be0bf2e3fbf0415cc&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'vtext ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: config.BOT_NAME})

    }));

 Neotro.addCommand({pattern: 'ptext ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: config.BOT_NAME})

    }));

    Neotro.addCommand({pattern: 'colortext ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'emoji ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
    var uri = encodeURI(match[1])
    
    var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&emoji=' + uri, { responseType: 'arraybuffer' })
    
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));
//==========================ZENS API=====================================================================
//==========================TEXT PRO=====================================================================

Neotro.addCommand({pattern: 'transformer ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://z${Config.ZSITE}/api/textpro/transformer?text=${match[1]}&apikey=${Config.ZAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'christmas ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://z${Config.ZSITE}/api/textpro/christmas?text=${match[1]}&apikey=${Config.ZAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'blackpink ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://z${Config.ZSITE}/api/textpro/blackpink?text=${match[1]}&apikey=${Config.ZAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'dropwater ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://z${Config.ZSITE}/api/textpro/dropwater?text=${match[1]}&apikey=${Config.ZAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'thunder ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://z${Config.ZSITE}/api/textpro/thunder?text=${match[1]}&apikey=${Config.ZAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'magma ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://z${Config.ZSITE}/api/textpro/magma?text=${match[1]}&apikey=${Config.ZAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));
Neotro.addCommand({pattern: 'neonlight ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://z${Config.ZSITE}/api/textpro/neonlight?text=${match[1]}&apikey=${Config.ZAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'neondevil ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://z${Config.ZSITE}/api/textpro/neondevil?text=${match[1]}&apikey=${Config.ZAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'harrypotter ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://z${Config.ZSITE}/api/textpro/harrypotter?text=${match[1]}&apikey=${Config.ZAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'imglitch ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://z${Config.ZSITE}/api/textpro/impressiveglitch?text=${match[1]}&apikey=${Config.ZAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));
