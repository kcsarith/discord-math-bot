// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  let messageString =message.toString();
  let messageStringWords = messageString.split(' ');

  function multiplyAndReduceFractions(arr1, arr2){
    let productOfArrays=getMultipliedFractions(arr1, arr2);
    let largestCommonDenominator= [getLargestCommonDenominator(productOfArrays[0],productOfArrays[1])];
    let result = productOfArrays.map(function(ele){
      return ele/largestCommonDenominator;
    });
    return `Multiplying ${arr1[0]}/${arr1[1]} by ${arr2[0]}/${arr2[1]}...The highest common denominator is ${largestCommonDenominator}. The original product was ${productOfArrays[0]}/${productOfArrays[1]}. Reduced answer is ${result[0]}/${result[1]}`;
  }

  if (message.content.includes('ASDFmultiply')) {
  let fractionsArray = getFractions(messageStringWords);
    // send back "Pong." to the channel the message was sent in

    if (fractionsArray.length<2){
      message.channel.send(`Could not find enough fractions: ${[...fractionsArray]}`);
    } else if (fractionsArray.length===2){
      message.channel.send(multiplyAndReduceFractions(fractionsArray[0],fractionsArray[1]));
    } else {
      message.channel.send(`error on line 35`);
    }
  }
  else if (message.content.includes('.fork')) {
    message.channel.send(`You typed a bad word`);
  }
});

function getFractions(messageStringWords){
  let newArray=[];
  for (let i=0; i<messageStringWords.length; i++){
    let word = messageStringWords[i];
    if (word.includes('/')){
      numbers = word.split ('/');
      newArray.push([numbers[0], numbers[1]]);
    }
  }
  return newArray;
}

// login to Discord with your app's token
client.login('NzAzNTg2MDgxMjk5NDk2OTYx.XtV0fA.539c7Ye9GXVYU0fibOQPuwJb0k4');

//_________________________________________________________
function getMultipliedFractions(arr1, arr2){
  while(arr1.length<arr2.length){
    arr1.push(1);
  }
  while(arr2.length<arr1.length){
    arr2.push(1);
  }
  let productOfArrays=arr1.map(function (ele, idx){
    return ele*=arr2[idx];
  });
  return productOfArrays;
}

function getLargestCommonDenominator(num1, num2){
  let largerNum;
  let smallerNum;
  if(num1<num2){
    largerNum= num2;
    smallerNum= num1;
  } else{
    largerNum= num1;
    smallerNum= num2;
  }

  let i=smallerNum;
  while(i>0){
      if(smallerNum%i===0&&largerNum%i===0)
      {
          return i;
      }
      i--;
  }

  return null;
}


//_______________________________________________
