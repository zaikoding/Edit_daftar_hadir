// Mendefinisikan fungsi untuk menyimpan nama formulir
function saveFormName() {
  // Mendapatkan nilai dari input nama formulir
  var formName = document.getElementById("formName").value;
  
  // Memperbarui elemen untuk menampilkan nama formulir
  var formTitle = document.getElementById("formTitle");
  formTitle.innerHTML = "<h2>Nama Formulir: " + formName + "</h2>";
}
