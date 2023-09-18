# DOM Assignment

## Assignment 1

### 1.Task 1

![Task 1 ](task1Output.png)

Solution

 ``` js
 let menu=document.createElement("li");
menu.innerText="Hire Me";
menu.style.color="rgb(75,74,74)";
menu.style.fontWeight=500;
document.getElementsByTagName("ul")[0].append(menu);
 ```

### 1.Task 2

![Task 2](task2Output.png)

Solution

```js
let ph=document.getElementsByTagName("input");
ph.placeholder="Search My project";

```

### 1.Task 3

![Alt text](task3Output.png)

Solution

```js
let demo=document.querySelector('p');
demo.innerHTML="I am an aspiring <span>Full Stack Javascript Developer</span> <br> who is currently working as</span> an Employeee</span> for <br><span> iNeuron Intelligence Pvt Ltd.</span>"
```

### 1.Task 4

![Alt text](task4Output.png)

Solution

```js
let image=document.querySelector('img');
image.src="./photo.jpeg";

```

### 1.Task 5

![Alt text](task5Output.png)

Solution

```js
let btn=document.createElement('button');
var text=document.createTextNode('Support Me');
btn.appendChild(text);

let cl=document.querySelector('.hero-right-section-btns');
cl.appendChild(btn);
```

## Assignment 2

### 2.Task 1

![Alt text](task1Output-1.png)

solution:

```js
const nodeList = document.querySelectorAll(".accordian h3");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "#d8d8f4";
}
```

### 2.Task 2

![Alt text](task2Output-1.png)

solution:

```js
const nodeListp = document.querySelectorAll(".accordian p");
for (let i = 0; i < nodeList.length; i++) {
  nodeListp[i].style.backgroundColor = "#e3e3f7";
}
```

### Assignment 3

![Alt text](task1Output-2.png)

solution:

```js
const input = document.querySelector(".userName");
const log = document.querySelector(".enterName");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.value = e.target.value;
}

const useremail = document.querySelector(".userEmail");
const eneteremail = document.querySelector(".enterMail");

useremail.addEventListener("input", updateEmail);

function updateEmail(e) {
  eneteremail.value = e.target.value;
}

const usermsg = document.querySelector(".userMessage");
const entermsg = document.querySelector(".enterMessage");

usermsg.addEventListener("input", updateMessage);

function updateMessage(e) {
  entermsg.value = e.target.value;
}
```

### Assignment 4

![Alt text](<DOM P1 SS.png>)

Solution:

```js
const bar = document.querySelector('.clash-card__unit-stats--barbarian');
bar.style.backgroundColor = '#ec9b3b'; 

const ar = document.querySelector('.clash-card__unit-stats--archer');
ar.style.backgroundColor = '#ee5487';

const gi = document.querySelector('.clash-card__unit-stats--giant');
gi.style.backgroundColor = '#f6901a';

const gob = document.querySelector('.clash-card__unit-stats--goblin');
gob.style.backgroundColor = '#82bb30';

const wiz = document.querySelector('.clash-card__unit-stats--wizard');
wiz.style.backgroundColor = '#4facff';

const fc=document.querySelectorAll('.stat, .stat-value');
fc.forEach(element => {
    element.style.color = 'white';
});


```

### Assignment 5

Solution:


