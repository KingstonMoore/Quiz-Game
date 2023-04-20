
var score = 0 

function preload(){
  bg = loadImage("Quizbg.png")
  greetingImg = loadImage("gPic.jpeg")
  q1Img = loadImage("Q1pic.png")
  q2Img = loadImage("q2pic.png")
  q3Img = loadImage("q3pic.png")
  badImg = loadImage("badPic.jpeg")
  almostImg = loadImage("almostPic.png")
  congratsImg = loadImage("congratsPic.webp")
  wrong = loadSound("wrong-buzzer.mp3")
  correct = loadSound("correct-buzzer.mp3")
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  background(bg)
  push()
  textSize(100)
  fill("red")
  textStyle(BOLD)
  text("Animal Trivia Quiz", 280, 150)
  pop()
  fill("white")
  textSize(25)
  text("Enter Your Name: ", 400, 400)
  login = createInput("")
  login.style("color", "black")
  login.position(600, 383)

  button = createButton("Submit")
  button.style("background-color", "red")
  button.style("font-size", "25px")
  button.style("color", "white")
  button.position(600, 450)
  button.mousePressed(()=>{
    name1 = login.value()
    if(name1==""){
      alert("Please Enter Your Name")
    }
    else{
      button.mousePressed(greeting)
    }
  })
}

function greeting(){
  background(greetingImg)
  login.hide()
  button.hide()
  user = login.value()
  greeting = createElement('h1')
  greeting.html("Hello "+ user)
  greeting.style("font-size", "50px")
  greeting.style("color", "green")
  greeting.position(575, 100)
  button1 = createButton("Start Quiz")
  button1.style("background-color", "red")
  button1.style("font-size", "50px")
  button1.style("color", "white")
  button1.position(525, 450)
  button1.mousePressed(question1)
}

function question1(){
  greeting.hide()
  button1.hide()
  background(q1Img)
  q1 = createElement('h1')
  q1.html("Question 1: What mammal has the most powerful bite?")
  q1.style("background-color", "white")
  q1.position(300, 150)

  q1a1 = createButton("Lion")
  q1a1.style("background-color", "white")
  q1a1.style("font-size", "25px")
  q1a1.style("font-style", "italic")
  q1a1.style("color", "black")
  q1a1.position(370, 250)
  q1a1.mousePressed(q1op1)

  q1a2 = createButton("Hippopotamus")
  q1a2.style("background-color", "white")
  q1a2.style("font-size", "25px")
  q1a2.style("font-style", "italic")
  q1a2.style("color", "black")
  q1a2.position(370, 320)
  q1a2.mousePressed(q1op2)

  q1a3 = createButton("Gorilla")
  q1a3.style("background-color", "white")
  q1a3.style("font-size", "25px")
  q1a3.style("font-style", "italic")
  q1a3.style("color", "black")
  q1a3.position(370, 390)
  q1a3.mousePressed(q1op3)

  q1a4 = createButton("Wolf")
  q1a4.style("background-color", "white")
  q1a4.style("font-size", "25px")
  q1a4.style("font-style", "italic")
  q1a4.style("color", "black")
  q1a4.position(370, 460)
  q1a4.mousePressed(q1op4)

  button3 = createButton("Submit")
  button3.style("background-color", "red")
  button3.style("font-size", "25px")
  button3.style("color", "white")
  button3.position(1150, 575)
  button3.mousePressed(question2)
}

function q1op1(){
  q1a1.style("background-color", "red")
  q1a2.style("background-color", "green")
  wrong.play()
  textSize(50)
  fill('red')
  textStyle(BOLD)
  stroke("black")
  strokeWeight(4)
  text('Wrong Answer', 850, 375)  
  q1a1.attribute('disabled', '')
  q1a2.attribute('disabled', '')
  q1a3.attribute('disabled', '')
  q1a4.attribute('disabled', '')
}

function q1op2(){
  q1a2.style("background-color", "green")
  correct.play()
  textSize(50)
  fill('green')
  textStyle(BOLD)
  stroke("black")
  strokeWeight(4)
  text('Right Answer', 850, 375)  
  q1a1.attribute('disabled', '')
  q1a2.attribute('disabled', '')
  q1a3.attribute('disabled', '')
  q1a4.attribute('disabled', '')
  score += 1
}

function q1op3(){
  q1a3.style("background-color", "red")
  q1a2.style("background-color", "green")
  wrong.play()
  textSize(50)
  fill('red')
  textStyle(BOLD)
  stroke("black")
  strokeWeight(4)
  text('Wrong Answer', 850, 375)  
  q1a1.attribute('disabled', '')
  q1a2.attribute('disabled', '')
  q1a3.attribute('disabled', '')
  q1a4.attribute('disabled', '')
}

function q1op4(){
  q1a4.style("background-color", "red")
  q1a2.style("background-color", "green")
  wrong.play()
  textSize(50)
  fill('red')
  textStyle(BOLD)
  stroke("black")
  strokeWeight(4)
  text('Wrong Answer', 850, 375)  
  q1a1.attribute('disabled', '')
  q1a2.attribute('disabled', '')
  q1a3.attribute('disabled', '')
  q1a4.attribute('disabled', '')
}

function question2(){
  button3.hide()
  q1.hide()
  q1a1.hide()
  q1a2.hide()
  q1a3.hide()
  q1a4.hide()
  background(q2Img)
  q2 = createElement('h1')
  q2.html("Question 2: What male sea creature gives birth to its young?")
  q2.style("background-color", "white")
  q2.position(300, 150)

  q2a1 = createButton("Clownfish")
  q2a1.style("background-color", "white")
  q2a1.style("font-size", "25px")
  q2a1.style("font-style", "italic")
  q2a1.style("color", "black")
  q2a1.position(370, 250)
  q2a1.mousePressed(q2op1)

  q2a2 = createButton("Whale")
  q2a2.style("background-color", "white")
  q2a2.style("font-size", "25px")
  q2a2.style("font-style", "italic")
  q2a2.style("color", "black")
  q2a2.position(370, 320)
  q2a2.mousePressed(q2op2)

  q2a3 = createButton("Sea Horse")
  q2a3.style("background-color", "white")
  q2a3.style("font-size", "25px")
  q2a3.style("font-style", "italic")
  q2a3.style("color", "black")
  q2a3.position(370, 390)
  q2a3.mousePressed(q2op3)

  q2a4 = createButton("Crab")
  q2a4.style("background-color", "white")
  q2a4.style("font-size", "25px")
  q2a4.style("font-style", "italic")
  q2a4.style("color", "black")
  q2a4.position(370, 460)
  q2a4.mousePressed(q2op4)

  button3 = createButton("Submit")
  button3.style("background-color", "red")
  button3.style("font-size", "25px")
  button3.style("color", "white")
  button3.position(1150, 575)
  button3.mousePressed(question3)
}

function q2op1(){
  q2a1.style("background-color", "red")
  q2a3.style("background-color", "green")
  wrong.play()
  textSize(50)
  fill('red')
  textStyle(BOLD)
  stroke("black")
  strokeWeight(4)
  text('Wrong Answer', 850, 375)  
  q2a1.attribute('disabled', '')
  q2a2.attribute('disabled', '')
  q2a3.attribute('disabled', '')
  q2a4.attribute('disabled', '')
}

function q2op2(){
  q2a2.style("background-color", "red")
  q2a3.style("background-color", "green")
  wrong.play()
  textSize(50)
  fill('red')
  textStyle(BOLD)
  stroke("black")
  strokeWeight(4)
  text('Wrong Answer', 850, 375)  
  q2a1.attribute('disabled', '')
  q2a2.attribute('disabled', '')
  q2a3.attribute('disabled', '')
  q2a4.attribute('disabled', '')
}

function q2op3(){
  q2a3.style("background-color", "green")
  correct.play()
  textSize(50)
  fill('green')
  textStyle(BOLD)
  stroke("black")
  strokeWeight(4)
  text('Right Answer', 850, 375)  
  q2a1.attribute('disabled', '')
  q2a2.attribute('disabled', '')
  q2a3.attribute('disabled', '')
  q2a4.attribute('disabled', '')
  score += 1
}

function q2op4(){
  q2a4.style("background-color", "red")
  q2a3.style("background-color", "green")
  wrong.play()
  textSize(50)
  fill('red')
  textStyle(BOLD)
  stroke("black")
  strokeWeight(4)
  text('Wrong Answer', 850, 375)  
  q2a1.attribute('disabled', '')
  q2a2.attribute('disabled', '')
  q2a3.attribute('disabled', '')
  q2a4.attribute('disabled', '')
}

function question3(){
  button3.hide()
  q2.hide()
  q2a1.hide()
  q2a2.hide()
  q2a3.hide()
  q2a4.hide()
  background(q3Img)
  q3 = createElement('h1')
  q3.html("Question 3: What do you call a group of crows?")
  q3.style("background-color", "white")
  q3.position(300, 150)

  q3a1 = createButton("A Gaggle")
  q3a1.style("background-color", "white")
  q3a1.style("font-size", "25px")
  q3a1.style("font-style", "italic")
  q3a1.style("color", "black")
  q3a1.position(370, 250)
  q3a1.mousePressed(q3op1)

  q3a2 = createButton("A Pack")
  q3a2.style("background-color", "white")
  q3a2.style("font-size", "25px")
  q3a2.style("font-style", "italic")
  q3a2.style("color", "black")
  q3a2.position(370, 320)
  q3a2.mousePressed(q3op2)

  q3a3 = createButton("A Flock")
  q3a3.style("background-color", "white")
  q3a3.style("font-size", "25px")
  q3a3.style("font-style", "italic")
  q3a3.style("color", "black")
  q3a3.position(370, 390)
  q3a3.mousePressed(q3op3)

  q3a4 = createButton("A Murder")
  q3a4.style("background-color", "white")
  q3a4.style("font-size", "25px")
  q3a4.style("font-style", "italic")
  q3a4.style("color", "black")
  q3a4.position(370, 460)
  q3a4.mousePressed(q3op4)

  button3 = createButton("Submit")
  button3.style("background-color", "red")
  button3.style("font-size", "25px")
  button3.style("color", "white")
  button3.position(1150, 575)
  button3.mousePressed(question4)
}

function q3op1(){
  q3a1.style("background-color", "red")
  q3a4.style("background-color", "green")
  wrong.play()
  textSize(50)
  fill('red')
  textStyle(BOLD)
  stroke("black")
  strokeWeight(4)
  text('Wrong Answer', 850, 375)  
  q3a1.attribute('disabled', '')
  q3a2.attribute('disabled', '')
  q3a3.attribute('disabled', '')
  q3a4.attribute('disabled', '')
}

function q3op2(){
  q3a2.style("background-color", "red")
  q3a4.style("background-color", "green")
  wrong.play()
  textSize(50)
  fill('red')
  textStyle(BOLD)
  stroke("black")
  strokeWeight(4)
  text('Wrong Answer', 850, 375)  
  q3a1.attribute('disabled', '')
  q3a2.attribute('disabled', '')
  q3a3.attribute('disabled', '')
  q3a4.attribute('disabled', '')
}

function q3op3(){
  q3a2.style("background-color", "red")
  q3a4.style("background-color", "green")
  wrong.play()
  textSize(50)
  fill('green')
  textStyle(BOLD)
  stroke("black")
  strokeWeight(4)
  text('Wrong Answer', 850, 375)  
  q3a1.attribute('disabled', '')
  q3a2.attribute('disabled', '')
  q3a3.attribute('disabled', '')
  q3a4.attribute('disabled', '')
}

function q3op4(){
  q3a4.style("background-color", "green")
  correct.play()
  textSize(50)
  fill('green')
  textStyle(BOLD)
  stroke("black")
  strokeWeight(4)
  text('Right Answer', 850, 375)  
  q3a1.attribute('disabled', '')
  q3a2.attribute('disabled', '')
  q3a3.attribute('disabled', '')
  q3a4.attribute('disabled', '')
  score += 1
}

function question3(){
  button3.hide()
  q4.hide()
  q4a1.hide()
  q4a2.hide()
  q4a3.hide()
  q4a4.hide()
  background(q3Img)
  q4 = createElement('h1')
  q4.html("Question 3: What do you call a group of crows?")
  q4.style("background-color", "white")
  q4.position(300, 150)

  q4a1 = createButton("A Gaggle")
  q4a1.style("background-color", "white")
  q4a1.style("font-size", "25px")
  q4a1.style("font-style", "italic")
  q4a1.style("color", "black")
  q4a1.position(370, 250)
  q4a1.mousePressed(q3op1)

  q4a2 = createButton("A Pack")
  q4a2.style("background-color", "white")
  q4a2.style("font-size", "25px")
  q4a2.style("font-style", "italic")
  q4a2.style("color", "black")
  q4a2.position(370, 320)
  q4a2.mousePressed(q3op2)

  q4a3 = createButton("A Flock")
  q4a3.style("background-color", "white")
  q4a3.style("font-size", "25px")
  q4a3.style("font-style", "italic")
  q4a3.style("color", "black")
  q4a3.position(370, 390)
  q4a3.mousePressed(q3op3)

  q4a4 = createButton("A Murder")
  q4a4.style("background-color", "white")
  q4a4.style("font-size", "25px")
  q4a4.style("font-style", "italic")
  q4a4.style("color", "black")
  q4a4.position(370, 460)
  q4a4.mousePressed(q3op4)

  button3 = createButton("Submit")
  button3.style("background-color", "red")
  button3.style("font-size", "25px")
  button3.style("color", "white")
  button3.position(1150, 575)
  button3.mousePressed(Score)
}

function q3op1(){
    q4a1.style("background-color", "red")
    q4a4.style("background-color", "green")
    wrong.play()
    textSize(50)
    fill('red')
    textStyle(BOLD)
    stroke("black")
    strokeWeight(4)
    text('Wrong Answer', 850, 375)  
    q4a1.attribute('disabled', '')
    q4a2.attribute('disabled', '')
    q4a3.attribute('disabled', '')
    q4a4.attribute('disabled', '')
  }
  
  function q4op2(){
    q4a2.style("background-color", "red")
    q4a4.style("background-color", "green")
    wrong.play()
    textSize(50)
    fill('red')
    textStyle(BOLD)
    stroke("black")
    strokeWeight(4)
    text('Wrong Answer', 850, 375)  
    q4a1.attribute('disabled', '')
    q4a2.attribute('disabled', '')
    q4a3.attribute('disabled', '')
    q4a4.attribute('disabled', '')
  }
  
  function q4op3(){
    q4a2.style("background-color", "red")
    q4a4.style("background-color", "green")
    wrong.play()
    textSize(50)
    fill('green')
    textStyle(BOLD)
    stroke("black")
    strokeWeight(4)
    text('Wrong Answer', 850, 375)  
    q4a1.attribute('disabled', '')
    q4a2.attribute('disabled', '')
    q4a3.attribute('disabled', '')
    q4a4.attribute('disabled', '')
  }
  
  function q4op4(){
    q4a4.style("background-color", "green")
    correct.play()
    textSize(50)
    fill('green')
    textStyle(BOLD)
    stroke("black")
    strokeWeight(4)
    text('Right Answer', 850, 375)  
    q4a1.attribute('disabled', '')
    q4a2.attribute('disabled', '')
    q4a3.attribute('disabled', '')
    q4a4.attribute('disabled', '')
    score += 1
  }
  

function Score(){
  background('blue')
  button3.hide()
  q3.hide()
  q3a1.hide()
  q3a2.hide()
  q3a3.hide()
  q3a4.hide()

  text("Your Score Is: "+score, 500, 500)

  if (score == 1|| score == 2){
    background(badImg)

    text("Your Score Is: "+score, 500, 500)
  } 
  else if (score == 3){
    background(almostImg)

    text("Your Score Is: "+score, 500, 500)
  } 
  else{
    background(congratsImg)

    text("Your Score Is: "+score, 500, 500)
  }
  

}
