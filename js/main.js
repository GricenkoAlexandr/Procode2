function inputBox (width, height, deep, wbox=10, hbox=15, dbox=16) {
 
  if (width>wbox || height>hbox || deep>dbox) {
    console.log(false)
    return false;
  } else {
    console.log(true)
    return true;
  }
}

inputBox(12, 5, 9, 4, 8, 7);


const c= {name: 'Alex', surname: 'Griko', age: '43'};
console.log(c.age);



const d= {name: 'Alex', 
surname: 'Griko', 
task: [{do: 'doist'}, 
      {color: 'red'},
      {hair: 'platinum'}],
age: '43'};

console.log(d.task[2].hair)

d.forEach((val)=> {
  console.log('val-', val)
});

