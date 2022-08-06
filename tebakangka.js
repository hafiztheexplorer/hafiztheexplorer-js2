//prompt untuk memasukkan difficulty quiz, dengan kesempatan mencoba yang berbeda
alert("MULAI");
//pengulangan untuk pemilihan jawaban
for (let q = 1; q > 0; q--) {
  var pL = prompt("choose your difficulty! \n- Easy -: 5 Life \n- Normal -: 3 Life \n- Hard -: 1 Life");
  if (pL == "Easy") {
    pL = 5;
  } else if (pL == "Normal") {
    pL = 3;
  } else if (pL == "Hard") {
    pL = 1;
  } else {
    //untuk pengulangan jika jawaban difficultynya salah ketik maka harus diulang maka diulang terus
    q = q + 1;
    alert("choose wisely!");
  }
}

//untuk mengenerate nomor random, ditambahi floor untuk menjadikannya bilangan tanpa desimal, lalu dikali 11 untuk pembulatan dari 0 - 10
var compNumber = Math.floor(Math.random() * 11);
console.log("this is compNumber " + compNumber);

// result untuk var kosong yang nanti diisi hasil tebakan
var result = "";
// pengulangan pertanyaan tebakan angka banyaknya tergantung difficulty (i = pL)
for (let i = pL; i > 0; i--) {
  var playerNumber = prompt("pilih angka dari 1 sampai 10 \n you have " + pL + " chances");
  //pengulangan pertanyaan benyaknya akan terus berkurang
  pL = pL - 1;
  //kalau jawaban benar
  if (playerNumber == compNumber) {
    result = "OK";
    //kalau jawaban salah
  } else if (playerNumber != compNumber) {
    //kalau jawaban salah dan nomor tebakannya di bawah
    if (playerNumber < compNumber) {
      result = "NOK";
      var resultsel = "";
      //kalau jawaban salah dan nomor tebakannya di bawah tapi dekat tebakannya
      if (compNumber - playerNumber <= 3) {
        resultsel = "sel1";
        alert("Dikit lagi di atas");
        //kalau jawaban salah dan nomor tebakannya di bawah tapi lumayan tebakannya
      } else if (compNumber - playerNumber > 3 && compNumber - playerNumber <= 6) {
        resultsel = "sel2";
        alert("Masi Selisih di atas");
        //kalau jawaban salah dan nomor tebakannya di bawah tapi jauh tebakannya
      } else if (compNumber - playerNumber > 6 && compNumber - playerNumber < 15) {
        resultsel = "sel3";
        alert("Jauh Sekali di atas");
      }
      console.log(resultsel);
      //kalau jawaban salah dan nomor tebakannya di atas
    } else if (playerNumber > compNumber) {
      result = "NOK";
      var resultsel = "";
      //kalau jawaban salah dan nomor tebakannya di atas tapi dekat tebakannya
      if (playerNumber - compNumber <= 3) {
        resultsel = "sel1";
        alert("Dikit lagi di bawah");
        //kalau jawaban salah dan nomor tebakannya di atas tapi lumayan tebakannya
      } else if (playerNumber - compNumber > 3 && playerNumber - compNumber <= 6) {
        resultsel = "sel2";
        alert("Masi Selisih di bawah");
        //kalau jawaban salah dan nomor tebakannya di atas tapi jauh tebakannya
      } else if (playerNumber - compNumber > 6 && playerNumber - compNumber < 15) {
        resultsel = "sel3";
        alert("Jauh Sekali  di bawah");
      }
      console.log(resultsel);
    }
  }
}
//result kalau salah
if (result == "NOK") {
  alert("you're dead man! the number is " + compNumber);
  //result kalau benar
} else if (result == "OK") {
  alert("YOU WON! the number is " + compNumber);
}
console.log(result);
