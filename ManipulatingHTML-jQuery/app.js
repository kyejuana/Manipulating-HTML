var colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
  
  //Step 1
  // let btn = $("<button>Click Me!</button>");
  
  $(document.body).append(
    $("<button>Click Me!</button>").click(function () {
      alert("Hello World");
    })
  );
  
  //Step 2
  
  // $("#alertBtn").click(function(){
  //     alert($("#textBox").val());
  // })
  
  let alertBtn = $("#alertBtn");
  let textBox = $("#textBox");
  
  alertBtn.click(function () {
    alert(textBox.val());
  });
  
  //Step 3
  
  let colorDiv = $("#colorDiv");
  
  colorDiv.css({
    height: "200px",
    width: "200px",
    border: "1px solid black",
  });
  
  colorDiv.mouseover(function () {
    colorDiv.css({
      "background-color": "red",
    });
  });
  
  colorDiv.mouseout(function () {
    colorDiv.css({
      "background-color": "white",
    });
  });
  
  //Step 4
  
  let ptag = $("<p>This is from the Javascript</p>");
  let lorem = $("#lorem");
  
  lorem.click(function () {
    let randomColor = Math.floor(Math.random() * colorArray.length);
  
    lorem.css("color", colorArray[randomColor]);
  });
  
  ptag.click(function () {
    let randomColor = Math.floor(Math.random() * colorArray.length);
  
    ptag.css("color", colorArray[randomColor]);
  });
  
  $(document.body).append(ptag);
  
  // Step 5
  
  let nameBtn = $("#nameBtn");
  
  let nameDiv = $("#nameDiv");
  
  nameBtn.click(function () {
    let myName = $("<span>KyeJuana</span><br>");
  
    myName.appendTo(nameDiv);
  });
  
  
  //step 6
  
  let friendBtn = $("#friendBtn");
  let friendList = $("#friendList");
  
  
  let friendArr = ['Tristan', "Chris", "Rosemary", 'Andrea', "Shea", "KeKe"];
  
  let counter = 0;
  
  friendBtn.click(function () {
  
  if (counter < friendArr.length) {
      let newFriend = $(`<li>${friendArr[counter]}</li>`);
      friendList.append(newFriend)
      counter++
  }
  })
  let num = 5
  
  let string = num + " lines of code in the file" + num + "lines of code";
  
  
  let string2 = `${num} lines of code in the file, ${num} lines of code`
  
  
  console.log(string);
  console.log(string2);