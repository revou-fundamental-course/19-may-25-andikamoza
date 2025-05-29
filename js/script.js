// Ambil elemen DOM
const formSuhu = document.getElementById("temperatureForm");
const inputSuhu = document.getElementById("temperatureInput");
const hasilKonversi = document.getElementById("conversionResult");
const penjelasanKonversi = document.getElementById("conversionExplanation");
const tombolReset = document.getElementById("resetButton");
const tombolReverse = document.getElementById("reverseButton");

// Fungsi konversi suhu
function hitungKonversiSuhu(event) {
  event.preventDefault();

  const suhu = parseFloat(inputSuhu.value);
  const jenisKonversi = document.querySelector('input[name="conversionType"]:checked').value;

  // Validasi input
  if (isNaN(suhu)) {
    hasilKonversi.textContent = "Masukkan angka suhu yang valid!";
    penjelasanKonversi.textContent = "Silakan hanya masukkan angka, misalnya 30 atau 100.";
    return;
  }

  let hasil, penjelasan;

  if (jenisKonversi === "toFahrenheit") {
    hasil = (suhu * 9) / 5 + 32;
    penjelasan = `Rumus: (C × 9/5) + 32. 
    Artinya: suhu ${suhu}°C dikalikan 9 dibagi 5 lalu ditambah 32 menjadi ${hasil.toFixed(2)}°F.`;
  } else {
    hasil = ((suhu - 32) * 5) / 9;
    penjelasan = `Rumus: (F − 32) × 5/9. 
    Artinya: suhu ${suhu}°F dikurangi 32 dikali 5 dibagi 9 menjadi ${hasil.toFixed(2)}°C.`;
  }

  hasilKonversi.textContent = `Hasil: ${hasil.toFixed(2)}`;
  penjelasanKonversi.textContent = penjelasan;

  // Tambahkan animasi ulang
  hasilKonversi.classList.remove("fade");
  penjelasanKonversi.classList.remove("fade");

  void hasilKonversi.offsetWidth; // Reset animasi
  void penjelasanKonversi.offsetWidth;

  hasilKonversi.classList.add("fade");
  penjelasanKonversi.classList.add("fade");
}

// Fungsi reset
function resetFormDanHasil() {
  formSuhu.reset();
  hasilKonversi.textContent = "Belum ada hasil yang ditampilkan.";
  penjelasanKonversi.textContent = "Di bagian ini akan dijelaskan rumus yang digunakan untuk mengubah suhu, baik dari Celsius ke Fahrenheit maupun sebaliknya.";
}

// Fungsi reverse
function reverseKonversi() {
  const radioCtoF = document.querySelector('input[value="toFahrenheit"]');
  const radioFtoC = document.querySelector('input[value="toCelsius"]');

  if (radioCtoF.checked) {
    radioFtoC.checked = true;
  } else {
    radioCtoF.checked = true;
  }

  if (inputSuhu.value !== "") {
    hitungKonversiSuhu(new Event("submit"));
  }
}

// Event listeners
formSuhu.addEventListener("submit", hitungKonversiSuhu);
tombolReset.addEventListener("click", resetFormDanHasil);
tombolReverse.addEventListener("click", reverseKonversi);
