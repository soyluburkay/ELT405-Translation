var bgMusic = document.getElementById("bg-music");
bgMusic.volume = 0.03;

const story_database = {
  1: {
    video: "./content/videos/scene-01.mp4",
    audioEn: "./content/audios/audio-en-01.mp3",
    audioTr: "./content/audios/audio-tr-01.mp3",
    en: "Jim <span>lived</span> in a jungle.",
    tr: "Jim ormanda <span>yaşıyordu</span>.",
  },
  2: {
    video: "./content/videos/scene-02.mp4",
    audioEn: "./content/audios/audio-en-02.mp3",
    audioTr: "./content/audios/audio-tr-02.mp3",
    en: "Jim <span>was preparing</span> for a very important presentation.",
    tr: "Jim çok önemli bir sunum için <span>hazırlanıyordu</span>.",
  },
  3: {
    video: "./content/videos/scene-03.mp4",
    audioEn: "./content/audios/audio-en-03.mp3",
    audioTr: "./content/audios/audio-tr-03.mp3",
    en: "But there <span>was</span> a monkey who wanted to play games with Jim.",
    tr: "Ama orada Jim ile oyun oynamak isteyen bir maymun <span>vardı</span>.",
  },
  4: {
    video: "./content/videos/scene-04.mp4",
    audioEn: "./content/audios/audio-en-04.mp3",
    audioTr: "./content/audios/audio-tr-04.mp3",
    en: "Jim <span>was afraid</span> of the monkey because he never <span>saw</span> a monkey before. So he <span>ran away</span>.",
    tr: "Jim maymundan <span>korkuyordu</span> çünkü daha önce hiç maymun <span>görmemişti</span>. Bu yüzden <span>kaçtı</span>.",
  },
  5: {
    video: "./content/videos/scene-06.mp4",
    audioEn: "./content/audios/audio-en-05.mp3",
    audioTr: "./content/audios/audio-tr-05.mp3",
    en: "Monkey <span>mocked</span> him and <span>stole</span> his laptop to draw his attention to play with him.",
    tr: "Maymun onunla <span>alay etti</span> ve ilgisini çekip onunla oynaması için Jim’in dizüstü bilgisayarını <span>çaldı</span>.",
  },
  6: {
    video: "./content/videos/scene-07.mp4",
    audioEn: "./content/audios/audio-en-06.mp3",
    audioTr: "./content/audios/audio-tr-06.mp3",
    en: "Jim <span>needed</span> his laptop for his presentation.",
    tr: "Jim’in sunum için dizüstü bilgisayarına <span>ihtiyacı vardı</span>.",
  },
  7: {
    video: "./content/videos/scene-08.mp4",
    audioEn: "./content/audios/audio-en-30.mp3",
    audioTr: "./content/audios/audio-tr-07.mp3",
    en: "So, he <span>followed</span> the monkey into the zoo.",
    tr: "Bu yüzden, maymunu hayvanat bahçesine kadar <span>takip etti</span>.",
  },
  8: {
    video: "./content/videos/scene-09.mp4",
    audioEn: "./content/audios/audio-en-07.mp3",
    audioTr: "./content/audios/audio-tr-08.mp3",
    en: "But he <span>lost</span> the monkey when he <span>arrived</span> at the zoo.",
    tr: "Ama hayvanat bahçesine <span>vardığında</span> maymunu <span>kaybetmişti</span>.",
  },
  9: {
    video: "./content/videos/scene-10.mp4",
    audioEn: "./content/audios/audio-en-08.mp3",
    audioTr: "./content/audios/audio-tr-09.mp3",
    en: "While he searched for a monkey, he <span>met</span> an elephant.",
    tr: "Maymunu ararken, bir fil ile <span>karşılaştı</span>.",
  },
  10: {
    video: "./content/videos/scene-10.mp4",
    audioEn: "./content/audios/audio-en-09.mp3",
    audioTr: "./content/audios/audio-tr-10.mp3",
    en: "Hey, Mr. Elephant. <span>Did you see</span> a monkey with a laptop?",
    tr: "Hey, Bay Fil! Dizüstü bilgisayarı olan bir maymun <span>gördünüz mü</span>?",
  },
  11: {
    video: "./content/videos/scene-10.mp4",
    audioEn: "./content/audios/audio-en-10.mp3",
    audioTr: "./content/audios/audio-tr-11.mp3",
    en: "Yes, I <span>saw</span> it. I have a strong memory. It <span>went</span> towards zebra.",
    tr: "Evet, <span>gördüm</span>. Benim güçlü bir hafızam var. O, zebraya doğru <span>gitti</span>.",
  },
  12: {
    video: "./content/videos/scene-10.mp4",
    audioEn: "./content/audios/audio-en-11.mp3",
    audioTr: "./content/audios/audio-tr-12.mp3",
    en: '"Thank you Mr. Elephant." And Jim <span>visited</span> the zebra. He <span>met</span> the zebra.',
    tr: "Teşekkürler Bay Fil. Ve Jim Zebrayı <span>ziyaret etti</span>. Zebra ile <span>karşılaştı</span>.",
  },
  13: {
    video: "./content/videos/scene-12.mp4",
    audioEn: "./content/audios/audio-en-12.mp3",
    audioTr: "./content/audios/audio-tr-13.mp3",
    en: '"Hello, Mrs. Zebra! <span>Did you see</span> a monkey with a laptop? It <span>stole</span> my laptop!"',
    tr: "Merhaba, Bayan Zebra! Dizüstü bilgisayarı olan bir maymun <span>gördünüz mü</span>? Dizüstü bilgisayarımı <span>çaldı</span>!",
  },
  14: {
    video: "./content/videos/scene-12.mp4",
    audioEn: "./content/audios/audio-en-13.mp3",
    audioTr: "./content/audios/audio-tr-14.mp3",
    en: '"Oh, it\'s horrible! I <span>saw</span> it, because I <span>was eating</span> grass here all day. It <span>went</span> towards giraffe."',
    tr: "Ah, bu korkunç! Onu <span>gördüm</span>. Çünkü bütün gün burada ot <span>yiyordum</span>. Zürafanın yanına <span>gitti</span>.",
  },
  15: {
    video: "./content/videos/scene-12.mp4",
    audioEn: "./content/audios/audio-en-14.mp3",
    audioTr: "./content/audios/audio-tr-15.mp3",
    en: '"Thanks, Mrs. Zebra. See you!"',
    tr: "Teşekkürler Bayan Zebra. Görüşürüz!",
  },
  16: {
    video: "./content/videos/scene-11.mp4",
    audioEn: "./content/audios/audio-en-15.mp3",
    audioTr: "./content/audios/audio-tr-16.mp3",
    en: "Then, he <span>met</span> a giraffe.",
    tr: "Daha sonra, zürafa ile <span>karşılaştı</span>.",
  },
  17: {
    video: "./content/videos/scene-11.mp4",
    audioEn: "./content/audios/audio-en-16.mp3",
    audioTr: "./content/audios/audio-tr-17.mp3",
    en: '"Hey, Mr. Giraffe! <span>Did you see<span> a monkey with a laptop? I need to find it!"',
    tr: "Hey, Bay Zürafa! Dizüstü bilgisayarı olan bir maymun <span>gördünüz mü</span>? Onu bulmam gerekiyor!",
  },
  18: {
    video: "./content/videos/scene-11.mp4",
    audioEn: "./content/audios/audio-en-17.mp3",
    audioTr: "./content/audios/audio-tr-18.mp3",
    en: '"Yes, I <span>did</span>. I am tall and I can see everywhere. It <span>went</span> to the exit gate of the zoo."',
    tr: "Evet <span>gördüm</span>. Ben uzunum ve her yeri görebiliyorum. O hayvanat bahçesinin çıkış kapısına <span>gitti</span>.",
  },
  19: {
    video: "./content/videos/scene-11.mp4",
    audioEn: "./content/audios/audio-en-18.mp3",
    audioTr: "./content/audios/audio-tr-19.mp3",
    en: '"What?! Exit gate?! I need to be fast!"',
    tr: "Ne?! Çıkış kapısı mı?! Hızlı olmam gerekiyor!",
  },
  20: {
    video: "./content/videos/scene-11.mp4",
    audioEn: "./content/audios/audio-en-19.mp3",
    audioTr: "./content/audios/audio-tr-20.mp3",
    en: "Jim <span>waved</span> his hands to the giraffe with a big smile on his face and, he <span>ran</span> to the exit gate fast.",
    tr: "Jim yüzünde koca bir gülümsemeyle zürafaya <span>el salladı</span>. Ve hızlıca çıkış kapısına doğru <span>koştu</span>.",
  },
  21: {
    video: "./content/videos/scene-13.mp4",
    audioEn: "./content/audios/audio-en-20.mp3",
    audioTr: "./content/audios/audio-tr-21.mp3",
    en: "Jim finally <span>found</span> the monkey but he <span>was</span> still <span>scared</span> of it.",
    tr: "Jim nihayet maymunu <span>buldu</span> ama hala maymundan <span>korkuyordu</span>.",
  },
  22: {
    video: "./content/videos/scene-13.mp4",
    audioEn: "./content/audios/audio-en-21.mp3",
    audioTr: "./content/audios/audio-tr-22.mp3",
    en: "Hey Mr. Monkey, I need my computer. Please, give it back to me.",
    tr: "Hey Bay Maymun, bilgisayarıma ihtiyacım var. Lütfen, bana geri ver.",
  },
  23: {
    video: "./content/videos/scene-13.mp4",
    audioEn: "./content/audios/audio-en-22.mp3",
    audioTr: "./content/audios/audio-tr-23.mp3",
    en: "I can give it to you. But, you have to play with me.",
    tr: "Sana geri verebilirim. Ama benimle oyun oynaman gerekiyor.",
  },
  24: {
    video: "./content/videos/scene-13.mp4",
    audioEn: "./content/audios/audio-en-23.mp3",
    audioTr: "./content/audios/audio-tr-24.mp3",
    en: "What?! But I can’t do it. I fear you so much.",
    tr: "Ne?! Ama bunu yapamam. Senden korkuyorum.",
  },
  25: {
    video: "./content/videos/scene-13.mp4",
    audioEn: "./content/audios/audio-en-24.mp3",
    audioTr: "./content/audios/audio-tr-25.mp3",
    en: "Then that means I'm going to play with my new computer.",
    tr: "O zaman bu yeni bilgisayarımla oynayacağım anlamına geliyor.",
  },
  26: {
    video: "./content/videos/scene-13.mp4",
    audioEn: "./content/audios/audio-en-25.mp3",
    audioTr: "./content/audios/audio-tr-26.mp3",
    en: "Oh, no! I need the computer. In his mind, he <span>thought</span> that he had to be braver.",
    tr: "Ahh, ama hayır! Bilgisayara ihtiyacım var. Zihninde,  Jim, daha cesur olmak zorunda olduğunu <span>düşündü</span>.",
  },
  27: {
    video: "./content/videos/scene-13.mp4",
    audioEn: "./content/audios/audio-en-26.mp3",
    audioTr: "./content/audios/audio-tr-27.mp3",
    en: "Okay, I will play with you. Let’s have some fun!",
    tr: "Tamam, seninle oynayacağım. Hadi biraz eğlenelim!",
  },
  28: {
    video: "./content/videos/scene-14.mp4",
    audioEn: "./content/audios/audio-en-27.mp3",
    audioTr: "./content/audios/audio-tr-28.mp3",
    en: "Jim and the monkey <span>had a lot of fun</span> together and <span>became</span> friends. The monkey <span>gave</span> the computer back to Jim.",
    tr: "Jim ve maymun birlikte <span>çok eğlendiler</span> ve arkadaş <span>oldular</span>. Maymun, bilgisayarı Jim’e geri <span>verdi</span>.",
  },
  29: {
    video: "./content/videos/scene-14.mp4",
    audioEn: "./content/audios/audio-en-31.mp3",
    audioTr: "./content/audios/audio-tr-29.mp3",
    en: "Jim <span>had</span> his laptop back and he <span>had</span> a new friend. So, he <span>was very happy</span>.",
    tr: "Jim dizüstü bilgisayarını geri <span>almıştı</span> ve yeni bir arkadaşı <span>olmuştu</span>. Bu yüzden, <span>çok mutluydu</span>.",
  },
  30: {
    video: "./content/videos/scene-14.mp4",
    audioEn: "./content/audios/audio-en-32.mp3",
    audioTr: "./content/audios/audio-tr-30.mp3",
    en: "He <span>learned</span> that he should not be afraid of animals. He <span>said</span> goodbye to all the animals in the zoo and <span>went</span> home with the monkey.",
    tr: "Hayvanlardan korkmaması gerektiğini <span>öğrendi</span>. Hayvanat bahçesindeki bütün hayvanlara <span>veda etti</span> ve maymun ile eve <span>döndüler</span>.",
  },
  31: {
    video: "./content/videos/scene-15.mp4",
    audioEn: "./content/audios/audio-en-28.mp3",
    audioTr: "./content/audios/audio-tr-31.mp3",
    en: "He <span>practiced</span> his presentation with the monkey and <span>presented</span> it successfully. His friends <span>applauded</span> him and his teacher <span>said</span>, ‘’You <span>were excellent</span>!’’",
    tr: "Maymun ile sunumuna <span>hazırlandı</span> ve başarıyla <span>sundu</span>. Arkadaşları onu <span>alkışladı</span> ve öğretmeni ‘’<span>Mükemmeldin</span>!’’ <span>dedi</span>.",
  },
  32: {
    video: "./content/videos/scene-16.mp4",
    audioEn: "./content/audios/audio-en-29.mp3",
    audioTr: "./content/audios/audio-tr-32.mp3",
    en: "When he <span>returned</span> home, he <span>thanked</span> the monkey. And they <span>went out</span> to play together. Now they are close friends, and they always spend time together.",
    tr: "Eve <span>döndüğünde</span>, maymuna <span>teşekkür etti</span>. Ve birlikte oyun oynamaya <span>dışarı çıktılar</span>.  Şimdi ise onlar yakın arkadaş ve her zaman birlikte vakit geçiriyorlar.",
  },
};

let scene = 1;
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
const btnPause = document.querySelector("#pause");
const textEn = document.querySelector(".en");
const textTr = document.querySelector(".tr");
const video = document.querySelector("#video");

function pauseAudio() {
  if (bgMusic.paused) {
    bgMusic.play();
    // btnPause.innerHTML = "🔇";
    btnPause.classList.add("playing");
    btnPause.classList.remove("paused");
  } else {
    // btnPause.innerHTML = "🔊";
    bgMusic.pause();
    btnPause.classList.add("paused");
    btnPause.classList.remove("playing");
  }
}
btnPause.addEventListener("click", pauseAudio);

textEn.src = story_database[scene].audioEn;
textTr.src = story_database[scene].audioTr;

function playEn() {
  new Audio(textEn.src).play();
}
function playTr() {
  new Audio(textTr.src).play();
}

function nextStory() {
  if (scene < 1 || scene >= Object.keys(story_database).length) {
    return;
  } else {
    scene++;
    if (story_database[scene].video !== story_database[scene - 1].video) {
      video.src = story_database[scene].video;
    }
    textEn.innerHTML = story_database[scene].en;
    textTr.innerHTML = story_database[scene].tr;
    textEn.src = story_database[scene].audioEn;
    textTr.src = story_database[scene].audioTr;
    if (scene > 1) {
      btnPrev.classList.remove("disabled");
    }
    if (scene === Object.keys(story_database).length) {
      btnNext.classList.add("disabled");
    }
  }
}

function prevStory() {
  if (scene <= 1 || scene > Object.keys(story_database).length) {
    return;
  } else {
    scene--;
    if (story_database[scene].video !== story_database[scene + 1].video) {
      video.src = story_database[scene].video;
    }
    textEn.innerHTML = story_database[scene].en;
    textTr.innerHTML = story_database[scene].tr;
    textEn.src = story_database[scene].audioEn;
    textTr.src = story_database[scene].audioTr;
    if (scene === 1) {
      btnPrev.classList.add("disabled");
    }
    if (scene < Object.keys(story_database).length) {
      btnNext.classList.remove("disabled");
    }
  }
}

function keyPress(e) {
  if (e.keyCode == "37") {
    prevStory();
  } else if (e.keyCode == "39") {
    nextStory();
  }
}

textEn.addEventListener("click", playEn);
textTr.addEventListener("click", playTr);
document.addEventListener("keydown", keyPress);
btnNext.addEventListener("click", nextStory);
btnPrev.addEventListener("click", prevStory);
