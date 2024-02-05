document.addEventListener('DOMContentLoaded', function () {
  // Mendapatkan nilai nama formulir dari penyimpanan lokal saat halaman dimuat
  var formName = localStorage.getItem('formName');

  // Menetapkan nilai formulir ke input jika ada
  if (formName) {
    document.getElementById('formName').value = formName;
  }
});

function saveFormName() {
  // Mendapatkan nilai nama formulir dari input
  var formName = document.getElementById('formName').value;

  // Menyimpan nilai nama formulir ke penyimpanan lokal
  localStorage.setItem('formName', formName);

  // Menampilkan nilai nama formulir di elemen dengan ID 'formTitle'
  var formTitleElement = document.getElementById('formTitle');
  if (formTitleElement) {
    formTitleElement.innerText = 'Nama formulir berhasil diubah menjadi: ' + formName;
  } else {
    console.error('Elemen dengan ID "formTitle" tidak ditemukan.');
  }
}
