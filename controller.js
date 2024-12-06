function runtimer() {
    let timer = 50+Math.floor(Math.random() * 2);
    let max = timer;
    let interval = 100;
  
    let countdown = setInterval(() => {
    if(model.gameover == true){
      clearInterval(countdown);
      model.food.timer = timer;
      model.food.max = max;
      let progressBar = timer / max * 500;
      document.getElementById('foodProgressBar').style.width = (`${progressBar}px`);
      model.gameover = false;
      return;
    }
    else if(model.food.isBeingFeed == true){
      model.food.isBeingFeed = false;
      clearInterval(countdown);
      setTimeout(runtimer,400);
      model.food.timer = model.food.max;
      let progressBar = 500;
      document.getElementById('foodProgressBar').style.width = (`${progressBar}px`);
      return;
    }
    else if(timer == 0) {
      model.gameover = true;
      clearInterval(countdown);
      model.food.timer = timer;
      model.food.max = max;
      let progressBar = timer / max * 500;
      document.getElementById('foodProgressBar').style.width = (`${progressBar}px`);
      theGameOverView();
      catDied();
      return;
    }
    model.food.timer = timer;
    model.food.max = max;
    let progressBar = timer / max * 500;
    document.getElementById('foodProgressBar').style.width = (`${progressBar}px`);
    if (timer <= max*0.5) {
      model.food.progress1 = false;
      document.getElementById('catsDialogue').innerHTML = "Feed me!";
  
    }
    else {
      model.food.progress1 = true;
    }
    timer--;
    }, interval); 
  }
  function runtimerFun() {
    let timerFun = 60+Math.floor(Math.random() * 2);
    let maxFun = timerFun;
    let interval = 100;
    let countdown = setInterval(() => {
      if(model.gameover == true){
        clearInterval(countdown);
      }
    if(model.fun.fun == true){
      model.fun.fun = false;
      clearInterval(countdown);
      setTimeout(runtimerFun,400);
      model.fun.timer = model.fun.max;
      let progressBar = 500;
      document.getElementById('funProgressBar').style.width = (`${progressBar}px`);
      return;
         
    }
  
    else if(timerFun == 0) {
      model.gameover = true;
      clearInterval(countdown);
      model.fun.timer = timerFun;
      model.fun.max = maxFun;
      let progressBar = timerFun / maxFun * 500;
      document.getElementById('funProgressBar').style.width = (`${progressBar}px`);
      theGameOverView();
      catMovedOut();
      return;
      // game over skjerm her
    }
    model.fun.timer = timerFun;
    model.fun.max = maxFun;
    let progressBar = timerFun / maxFun * 500;
    document.getElementById('funProgressBar').style.width = (`${progressBar}px`);
    if (timerFun <= maxFun*0.5) {
      model.fun.progress1 = false;
      document.getElementById('catsDialogue').innerHTML = "Play with me!";
  
    }
    else {
      model.fun.progress1 = true;
    }
    timerFun--;
    }, interval); 
  }
  
  function runtimerClean() {
    let timerClean = 70+Math.floor(Math.random() * 2);
    let maxClean = timerClean;
    let interval = 100;
    let countdown = setInterval(() => {
      if(model.gameover == true){
        clearInterval(countdown);
      }
    if(model.cleanliness.cleanliness == true){
      model.cleanliness.cleanliness = false;
      clearInterval(countdown);
      setTimeout(runtimerClean,400);
      model.cleanliness.timer = model.cleanliness.max;
      let progressBar = 500;
      document.getElementById('cleanProgressBar').style.width = (`${progressBar}px`);
      return;
         
    }
  
    else if(timerClean == 0) {
      model.gameover = true;
      clearInterval(countdown);
      model.cleanliness.timer = timerClean;
      model.cleanliness.max = maxClean;
      let progressBar = timerClean / maxClean * 500;
      document.getElementById('cleanProgressBar').style.width = (`${progressBar}px`);
      theGameOverView();
      catGotSick();
      return;
      // game over skjerm her
    }
    model.cleanliness.timer = timerClean;
    model.cleanliness.max = maxClean;
    let progressBar = timerClean / maxClean * 500;
    document.getElementById('cleanProgressBar').style.width = (`${progressBar}px`);
    if (timerClean <= maxClean*0.5) {
      model.cleanliness.progress1 = false;
      document.getElementById('catsDialogue').innerHTML = "Clean me!";
  
    }
    else {
      model.cleanliness.progress1 = true;
    }
    timerClean--;
    }, interval); 
  }
  
  function runtimerPet() {
    let timerPet = 80+Math.floor(Math.random() * 2);
    let maxPet = timerPet;
    let interval = 100;
    let countdown = setInterval(() => {
      if(model.gameover == true){
        clearInterval(countdown);
      }
    if(model.pet.pet == true){
      model.pet.pet = false;
      clearInterval(countdown);
      setTimeout(runtimerPet,400);
      model.pet.timer = model.pet.max;
      let progressBar = 500;
      document.getElementById('petProgressBar').style.width = (`${progressBar}px`);
      return;
    } 
    else if(timerPet == 0) {
      model.gameover = true;
      clearInterval(countdown);
      model.pet.timer = timerPet;
      model.pet.max = maxPet;
      let progressBar = timerPet / maxPet * 500;
      document.getElementById('petProgressBar').style.width = (`${progressBar}px`);
      theGameOverView();
      catHasLackOfHuggies();
      return;
    }
    model.pet.timer = timerPet;
    model.pet.max = timerPet;
    let progressBar = timerPet / maxPet * 500;
    document.getElementById('petProgressBar').style.width = (`${progressBar}px`);
    if (timerPet <= maxPet*0.5) {
      model.pet.progress1 = false;
      document.getElementById('catsDialogue').innerHTML = "Pet me!";
    }
    else {
      model.pet.progress1 = true;
    }
    timerPet--;
    }, interval); 
  }
  
  function giveFood(){
    model.food.isBeingFeed = true;
  }
  
  function play(){
  model.fun.fun = true;
  }
  
  function cleanTheRoom(){
  model.cleanliness.cleanliness = true;
  }
  
  function pet(){
    model.pet.pet = true;
  }
  