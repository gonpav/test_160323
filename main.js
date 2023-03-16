//import React from 'react';

const logger = require('./logger');

function testArrayMethods() {
  const arr = [
    { id: 2, name: 'name 2', memberId: '' },
    { id: 1, name: 'some sd',memberId: null },
    { id: 4, name: 'some 3d' },
    { id: 5, name: 'some 55 ', memberId: '789' },
    { id: 3, name: 'some 3', memberId: '' }
  ];
  
  let memberId = '789';
  let transformedItems = arr//.map(obj => ({ ...obj, memberId: obj.memberId || memberId }));
  //.filter(obj => !obj.memberId)
  .map(obj => ({ ...obj/*, memberId: memberId */}));
  
  console.log(transformedItems.length);
  transformedItems.forEach(item => {
    console.log(item);
  });
  
  console.log("Let`s find first object, perferably with memberId assigned:");
  console.log(arr.find(obj => obj.memberId) || arr[0]);

  let ids = arr.map(obj => (obj.memberId ));
  console.log(ids);
}

function testJSClasses(){
  function makePerson(first, last) {
    return {
      first: first,
      last: last,
      fullName: function() {
        return this.first + ' ' + this.last;
      },
      fullNameReversed: function() {
        return this.last + ', ' + this.first;
      }
    };
  }

  var s = makePerson('Simon', 'Willison');
  logger.log(s.first); // "Simon Willison"
  logger.log(s.fullNameReversed()); // "Willison, Simon"

  var fullName = s.fullName;
  logger.log(fullName());

  class Rectangle {
    #height = 0;        // private fields
    #width;             // private fields
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
  }

  let r = new Rectangle(200,700);
  //logger.log(r.#height); // Error
}

function testAsyncAwait(){
  function fetchData(param) {
    console.log(param);
    return new Promise((resolve,reject) => {
      setTimeout(() => {
  
        //throw new Error('Some err');
        reject (new Error('Some error inside of Promise have happened'));
        //resolve('Data fetched successfully!');
      }, 5000);
    });
  
    
  }
  
  async function displayData() {
    console.log('Fetching data...');
    try {
      let param = null;//"Param not-null";
      const data = await fetchData( param || new Error("Param was null, this string generated") );
      console.log(data);
    }
    catch (error){
      console.log("We received an Error here: ");
      console.log(error);
    }
  }
  
  displayData();
}

function testLogger(){
  function sayHello(msg , val){
      console.log('Hello ' + msg + ' ' + val);
  }

  //sayHello('Maria', 2);
  //console.log(module);
  logger.log('Mariana');
  logger.log(parseInt('10.2abc'));
  logger.log(+'10.2abc');
  logger.log('10.2abc'.length);

  var name = 'kittens';
  if (name === 'puppies') {
    name += ' woof';
  } else if (name === 'kittens') {
    name += ' meow';
  } else {
    name += '!';
  }
  logger.log(name === 'kittens meow');

  let logger1;// = require('./logger');
  let o = logger1 && logger1.log('executed');
  logger.log(o);

  var userPhone = {}; 
  var phoneType = 'phoneType';

  userPhone = {[phoneType]: 12345}; // instead of writing userPhone['phoneType'] = '+12345';
  logger.log(userPhone.phoneType);
  // window.console.log('sss'); // works on client side (browser), but not in Node run-time

}

function testArrowFunctions(){
  const myFuncZero = param1 => param1 * 2;

  logger.log(myFuncZero(5))
  
}

function testPasswordGenerator(){

  function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  
  console.log(generatePassword(8));
  console.log(generatePassword(12));
  console.log(generatePassword(16));
}

function testFullNameSplitter(){
  function splitName(fullName){
    let result = {
      firstName: null, 
      lastName: null
    };

    if(!fullName){
      return result;
    }

    /*if (fullName.length > 0) {
      var nameTokens = fullName.match(/[A-ZÁ-ÚÑÜ][a-zá-úñü]+|([aeodlsz]+\s+)+[A-ZÁ-ÚÑÜ][a-zá-úñü]+/g) || [];

      if (nameTokens.length > 3) {
          result.firstName = nameTokens.slice(0, 2).join(' ');
      } else {
          result.firstName = nameTokens.slice(0, 1).join(' ');
      }

      if (nameTokens.length > 2) {
          result.lastName = nameTokens.slice(-2, -1).join(' ');
          result.secondLastName = nameTokens.slice(-1).join(' ');
      } else {
          result.lastName = nameTokens.slice(-1).join(' ');
          result.secondLastName = "";
      }
  }*/

    result.firstName = fullName.split(' ').slice(0, -1).join(' ');
    result.lastName = fullName.split(' ').slice(-1).join(' ');
    return result;
  }

  console.log(splitName(null));
  console.log(splitName(""));
  console.log(splitName(undefined));
  console.log(splitName("Jack"));
  console.log(splitName("Jack Petterson"));
  console.log(splitName("Jack Jordan Petterson"));
  console.log(splitName("Павло Гончаренко"));
}  

function testArrayOfObjectsMethods() {

  let memberTrainings = []/*[
    {
      "videoTrainingId": "87ba5278-646a-41d3-9513-9cc54438ffaa", // order:2
      "_id": "8ec447c1-b0db-4d31-ac29-0f60a173eaa5",
      "_owner": "f826187f-a626-4bd7-bc39-e40dcb678893",
      "_createdDate": "2023-02-13T04:07:44.835Z",
      "_updatedDate": "2023-02-13T04:08:17.731Z",
      "memberId": "2c392cb6-3fed-4a55-b2e6-79755641e394",
      "startDate": "2023-02-16T04:00:00.000Z"
    },
    {
      "videoTrainingId": "f3e08238-00b5-47d7-9fcb-aa1e030eddda", // order:5
      "_id": "1ec447c1-b0db-4d31-ac29-0f60a173eaa1",
      "_owner": "f826187f-a626-4bd7-bc39-e40dcb678893",
      "_createdDate": "2023-02-13T04:07:44.835Z",
      "_updatedDate": "2023-02-13T04:08:17.731Z",
      "memberId": "2c392cb6-3fed-4a55-b2e6-79755641e394",
      "startDate": "2023-02-14T04:00:00.000Z"
    }    
  ]*/;
  let allTrainings = [
    {
      "url": "https://youtu.be/Bt289hq2T8k",
      "description": "Why Indonesia is building a new capital? Where it will be situated and why is this a greatest national project of all time?",
      "_id": "f3e08238-00b5-47d7-9fcb-aa1e030eddda",
      "_owner": "f826187f-a626-4bd7-bc39-e40dcb678893",
      "_createdDate": "2023-02-26T02:34:16.406Z",
      "_updatedDate": "2023-02-26T02:35:21.025Z",
      "order": 5,
      "title": "New capital of Indonesia"
    },
    {
      "url": "https://youtu.be/pTJpEAghLyE",
      "description": "Henry \nKissinger is a great american politician who influenced the outcomes of the cold war greatly!",
      "_id": "65b75dc2-a444-4296-a1d3-ac6710557db1",
      "_owner": "f826187f-a626-4bd7-bc39-e40dcb678893",
      "_createdDate": "2023-02-26T02:33:20.715Z",
      "_updatedDate": "2023-02-26T02:34:12.001Z",
      "order": 6,
      "title": "Lex Friedman about Henry Kissenger"
    },
    {
      "url": "https://youtu.be/aNxj5Id_UWk",
      "description": "Did you know anything about Iran and its history? Here is your chance!",
      "_id": "b25ee044-443d-468f-a22d-2fb2872ecb84",
      "_owner": "f826187f-a626-4bd7-bc39-e40dcb678893",
      "_createdDate": "2023-02-26T02:32:03.236Z",
      "_updatedDate": "2023-02-26T02:32:58.172Z",
      "order": 4,
      "title": "Iran. History briefly"
    },
    {
      "url": "https://youtu.be/BFYXFlpBC6s",
      "description": "Историческая сага об Ататюрке и младотурках",
      "_id": "3ef9e317-dfed-42a8-851e-7d26ac93e52b",
      "_owner": "f826187f-a626-4bd7-bc39-e40dcb678893",
      "_createdDate": "2023-02-26T02:30:53.162Z",
      "_updatedDate": "2023-02-26T02:31:34.234Z",
      "order": 3,
      "title": "Османская империя"
    },
    {
      "url": "https://www.youtube.com/watch?v=nXXpzMn3Aco",
      "description": "The link to YouTube video training",
      "_id": "87ba5278-646a-41d3-9513-9cc54438ffaa",
      "_owner": "f826187f-a626-4bd7-bc39-e40dcb678893",
      "_createdDate": "2023-02-13T04:01:59.665Z",
      "_updatedDate": "2023-02-13T04:02:32.551Z",
      "order": 2,
      "title": "Basketball Video Training"
    },
    {
      "url": "https://video.wixstatic.com/video/f82618_e3861515a5fe42e6a1fc27f9d11353bd/720p/mp4/file.mp4",
      "description": "The best training to start with",
      "_id": "28a5d36f-9101-4443-bea9-f85f6152e0c4",
      "_owner": "f826187f-a626-4bd7-bc39-e40dcb678893",
      "_createdDate": "2023-02-13T03:53:45.928Z",
      "_updatedDate": "2023-02-13T04:00:45.645Z",
      "order": 1,
      "title": "First Training"
    }
  ];

  function getTrainingOrder(array, trainingId){
    return array.find(x => x._id === trainingId).order;
  }

  console.log(allTrainings);
  console.log(memberTrainings);

  // 1. allTrainings sort by order
  allTrainings.sort(function(a, b) {
    var x = a["order"]; 
    var y = b["order"];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
  console.log(allTrainings);

  // 2. memberTrainings sort by a) videoTraining.order and b) startDate
  memberTrainings.sort(function(a, b) {
    var x = getTrainingOrder(allTrainings, a["videoTrainingId"]); 
    var y = getTrainingOrder(allTrainings, b["videoTrainingId"]);
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
  memberTrainings.sort(function(a, b) {
    var x = a["startDate"]; 
    var y = b["startDate"];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
  console.log(memberTrainings);

  const DEFAULT_TRAINING_ORDER = 0;
  function getLastMemberVideoTrainingData(){
    // start with default params for the first trainings  
    let trainingData = {
        order: DEFAULT_TRAINING_ORDER,
        startDate: new Date(0)
    };
    //memberTrainings = null;
    if(memberTrainings && memberTrainings.length > 0) {
        const lastTraining = memberTrainings[memberTrainings.length - 1];
        //console.log(lastTraining);
        const lastTrainigOrder = getTrainingOrder(allTrainings, lastTraining.videoTrainingId);
        trainingData = {
          order: lastTrainigOrder,
          startDate: new Date(lastTraining.startDate)
        };
    }
    return trainingData;
  }
  
  function getNextVideoTrainings(lastMemberVideoTrainingData, count, firstTrainingDate){
    let nextVideoTrainings = [];
    const TRAINING_WINDOW_HOURS = 48;
    let lastVideoTrainingData = lastMemberVideoTrainingData;
    for(i = 0; i < count; i++){
      // get next date for that user`s video training
      // Add 48 hours to lastVideoTrainingData.startDate value. 
      lastVideoTrainingData.startDate.setTime(lastVideoTrainingData.startDate.getTime() + (TRAINING_WINDOW_HOURS*60*60*1000));
      // If this value is less then 'firstTrainingDate' then assign 'firstTrainingDate' to startDate
      lastVideoTrainingData.startDate  = lastVideoTrainingData.startDate > firstTrainingDate ? lastVideoTrainingData.startDate : firstTrainingDate;

      //console.log(lastVideoTrainingData.startDate);

      // get next VideoTraining object to add
      let nextOrder = lastMemberVideoTrainingData.order + 1;
      let videoTraining =  allTrainings.find(x => x.order === nextOrder);
      // if we reached the end of allTrainings array, then assign first VideoTraining
      videoTraining = videoTraining ? videoTraining: allTrainings[0];
      lastMemberVideoTrainingData.order = videoTraining.order;

      nextVideoTrainings.push({
        order: videoTraining.order,
        startDate: new Date(lastVideoTrainingData.startDate),
        videoTrainingId: videoTraining._id
      });

      console.log(nextVideoTrainings[nextVideoTrainings.length - 1]);
    }
    return nextVideoTrainings;
  }

  const lastMemberVideoTrainingData = getLastMemberVideoTrainingData();
  console.log(lastMemberVideoTrainingData);
  const date = new Date();
  date.setTime(date.getTime() - (72*60*60*1000));
  console.log(`First date of trainings will be: ${date}`);
  console.log(getNextVideoTrainings(lastMemberVideoTrainingData, 4, date/*new Date()*/));
}

//testArrayOfObjectsMethods();
// testFullNameSplitter();
//testPasswordGenerator();
//testArrayMethods();
//testAsyncAwait();
//testJSClasses();
//testLogger();
//testArrowFunctions();
return;
