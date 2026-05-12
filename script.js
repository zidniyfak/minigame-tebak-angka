function play(userChoice) {
  let comp = Math.floor(Math.random() * 5) + 1;
  comp = comp.toString();

  let hasil = "";
  let icon = "";

  if (userChoice == comp) {
    hasil = "SERI";
    icon = "info";
  } else if (userChoice == "5") {
    hasil = "MENANG!";
    icon = "success";
  } else {
    if (parseInt(userChoice) > parseInt(comp)) {
      hasil = "MENANG!";
      icon = "success";
    } else {
      hasil = "KALAH!";
      icon = "error";
    }
  }

  if (hasil === "MENANG!") {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  // Mempercepat animasi modal dengan animate__faster
  Swal.fire({
    title: hasil,
    html: `Komputer memilih <b>${comp}</b><br>Kamu memilih <b>${userChoice}</b>`,
    icon: icon,
    confirmButtonText: "Coba Lagi",
    confirmButtonColor: "#4e54c8",
    showClass: {
      popup: "animate__animated animate__fadeInUp animate__faster",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutDown animate__faster",
    },
  });
}
