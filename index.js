const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters');
const binarySearch=`let iterativeFunction = function (arr, x) {
  
    let start=0, end=arr.length-1;
         
    // Iterate while start not meets end
    while (start<=end){
 
        // Find the mid index
        let mid=Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===x) return true;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}
`

const bot = new Telegraf('6194215577:AAEQELVH7uCTV-7sfvDi1xopvKvxSl5NiZg')
// t.me/BBSCodingbot
bot.start((ctx) => ctx.reply('Welcome to coding bot from Suman Bhandari'))
bot.command('binarysearchjs', (ctx) => { ctx.reply(binarySearch) })

bot.on(message('sticker'),(ctx)=>ctx.reply('❤️'))
bot.launch()