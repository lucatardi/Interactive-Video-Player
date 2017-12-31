//******************************************************************************
//*********************** "HIGHLIGHT TEXT" APPLICATION *************************
//********************************************************* Author Luca Tardito.

// ************************** Adapt the size of the video to the wrapper's size.
$("#mediaplayer").mediaelementplayer({
  defaultVideoWidth: "100%",
  defaultVideoHeight: "100%"
});

// ****************************************************************** Variables.
const video = document.getElementsByTagName("VIDEO")[0];
const spamList = document.getElementsByTagName("SPAM");
const spamPresent = document.getElementsByClassName("highlight")[0];

//********************************************************** Time table's array.
const timesTable = [    // [ start , finish ],
  [  0.240 ,  4.130 ],
  [  4.130 ,  7.535 ],
  [  7.535 , 11.270 ],
  [ 11.270 , 13.960 ],
  [ 13.960 , 17.940 ],
  [ 17.940 , 22.370 ],
  [ 22.370 , 26.880 ],
  [ 26.880 , 30.920 ],
  [ 32.100 , 34.730 ],
  [ 34.730 , 39.430 ],
  [ 39.430 , 41.190 ],
  [ 42.350 , 46.300 ],
  [ 46.300 , 49.270 ],
  [ 49.270 , 53.760 ],
  [ 53.760 , 57.780 ],
  [ 57.780 , 59.860 ]
];

// *********************************** Function to assign the class "highlight".
function changeClass (tempoVideo) {
  for(let i=0; i < spamList.length; i++) {

    if (tempoVideo >= timesTable[i][0] && tempoVideo < timesTable[i][1]) {
      spamList[i].classList.add("highlight");
    } else {
      spamList[i].classList.remove("highlight");
    }

// ************************** Event Listener to move the video cliking the text.
    spamList[i].addEventListener("click", () => {  // inside  this function to
      video.currentTime = timesTable[i][0];        // do only one loop.
     });
  }
}

//************************************** Event Listener to keep update the time.
video.addEventListener("timeupdate", () => {
  let currentTime = video.currentTime;
  changeClass(currentTime);
});
