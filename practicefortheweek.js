for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('Counting completed!');

for (let i = 5; i > 0; i--) {
    console.log(i);
}
console.log('Countdown finish');

let text =" ";
let i = 1;
while (i <= 5) {
console.log(i);
i++;
}
console.log('countdown finish');

// new
let u = 2018;
while (u <= 2022) {
  console.log(u);
  u++;
}

for (let i = 1; i <= 10; i++) {
  if (i === 1){
    console.log('Gold medal')
  } else if (i === 2) {
    console.log('Silver medal')
  } else if (i === 3) {
    console.log('Bronze medal')
  } else {
    console.log(i);
  }
} 

function letterFinder(word, match) {
  for (let i =0; i < word.length; i++){
    if(word[i]===match) {
        console.log('Found the', match, 'at', i);
    } else{
            console.log('No match found at', i);
        }
    }
  }

  letterFinder("test", "t");
