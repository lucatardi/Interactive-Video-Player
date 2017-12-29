$("video, audio").mediaelementplayer({
  defaultVideoWidth: "100%",
  defaultVideoHeight: "100%"
});

const video = document.getElementsByTagName("VIDEO")[0];
const spamList = document.getElementsByTagName("SPAM");

const startTimes = [
  "00:00:00,240",
  "00:00:04,130",
  "00:00:07,535",
  "00:00:11,270",
  "00:00:13,960",
  "00:00:17,940",
  "00:00:22,370",
  "00:00:26,880",
  "00:00:32,100",
  "00:00:34,730",
  "00:00:39,430",
  "00:00:42,350",
  "00:00:46,300",
  "00:00:49,270",
  "00:00:53,760",
  "00:00:57,780"   ];

const finishTimes = [
  "00:00:04,130",
  "00:00:07,535",
  "00:00:11,270",
  "00:00:13,960",
  "00:00:17,940",
  "00:00:22,370",
  "00:00:26,880",
  "00:00:30,920",
  "00:00:34,730",
  "00:00:39,430",
  "00:00:41,190",
  "00:00:46,300",
  "00:00:49,270",
  "00:00:53,760",
  "00:00:57,780",
  "00:01:00,150"   ];

function () {
  video.addEventListener
}

function changeClass (tempoVideo) {
  for(let i=0, i < spamList.length; i++) {
    if (tempoVideo >= startTimes(i)__ && tempoVideo <= finishTimes(i) {
      spamList[i].classList.add("highlight");
    } else {
      spamList[i].classList.remove("highlight");
    }
  }
}
