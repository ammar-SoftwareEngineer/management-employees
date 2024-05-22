// search
// delete
// update
// clean data

let arName = document.getElementById("ar-name");
let enName = document.getElementById("en-name");
let workNumber = document.getElementById("number-work");
let number = document.getElementById("number");
let nationality = document.getElementById("nationality");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let date = document.getElementById("date");
let work = document.getElementById("work");
let dapart = document.getElementById("dapart");
let salary = document.getElementById("salary");
let status = document.getElementById("status");

let gender = document.getElementById("gender");
let maritalStatus = document.getElementById("marital-status");
let submit = document.getElementById("submit");
let images = document.getElementById("img");
let imagePreview = document.getElementById("image-preview");
let image = document.querySelector(".image");
let search = document.getElementById("search");

let dateJoin = new Date();

images.addEventListener("change", () => {
  let file = images.files[0];
  let reader = new FileReader();
  reader.onload = () => {
    imagePreview.src = reader.result;
  };
  reader.readAsDataURL(file);

  if (imagePreview.value == reader) {
    image.style.display = "block";
    imagePreview.style.display = "none";
  } else {
    imagePreview.style.cssText =
      "display:block; width:150px; height:150px; border-radius: 100px";
    image.style.display = "none";
  }
});

// create employee
let dataPro;
if (localStorage.getItem("emp") != null) {
  dataPro = JSON.parse(localStorage.getItem("emp"));
  showData();
} else {
  dataPro = [];
}

submit.onclick = function () {
  let id = dataPro.length + 1;
  let newPro = {
    id: id,
    imagePreview: imagePreview.src,
    arName: arName.value,
    enName: enName.value,
    workNumber: workNumber.value,
    number: number.value,
    nationality: nationality.value,
    email: email.value,
    phone: phone.value,
    date: dateJoin.toLocaleDateString(),
    work: work.value,
    dapart: dapart.value,
    salary: salary.value,
    status: status.value,
    gender: gender.value,
    maritalStatus: maritalStatus.value,
  };
  dataPro.push(newPro);
  // save local storge
  localStorage.setItem("emp", JSON.stringify(dataPro));
  window.location.reload();
  showData();
  clearData();
  searchData();
};
// clear input
function clearData() {
  arName.value = "";
  enName.value = "";
  workNumber.value = "";
  number.value = "";
  nationality.value = "";
  email.value = "";
  phone.value = "";
  work.value = "";
  dapart.value = "";
  salary.value = "";
  status.value = "";
  gender.value = "";
  maritalStatus.value = "";
}
// read
function showData() {
  let table = "";

  if (dataPro.length >= 0) {
    for (let i = 0; i < dataPro.length; i++) {
      dataPro.id = i + 1;
      let statusColor = dataPro[i].status === "نشط" ? "green" : "red";
      table += ` 
        <tr  >
        <td>${dataPro.id}</td>
        <td><img class="ms-2" src="${dataPro[i].imagePreview}" alt="">${
        dataPro[i].arName
      }</td>
        <td>${dataPro[i].date}</td>
        <td> ${dataPro[i].work}</td>
        <td> ${dataPro[i].dapart}</td>
        <td>${dataPro[i].salary}</td>
        <td><label style="background-color:${statusColor};" class="status" for="">${
        dataPro[i].status == "نشط" ? "نشط" : "غير نشط"
      }</label></td>
        <td>
        <div class="dropdown ">
        <button class="btn shadow-none border-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false" position-relative>
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <ul class="dropdown-menu position-absolute z-3 ">
          <li class="dropdown-item"><button class="btn btn-success  w-100 mb-2" onclick="getDetails(${
            dataPro.id
          })"> المزيد</button></li>
          <li class="dropdown-item"><button class="btn btn-danger  w-100 " onclick="deleteUser(${i})"> حذف</button></li>
        </ul>
      </div>
      </td>
    </tr>
    `;
    }

    document.getElementById("tbody").innerHTML = table;
  }

  document.getElementById("count").innerHTML = dataPro.length;
}
showData();

function getDetails(index) {
  let selectedData = dataPro.find((item) => item.id === index);
  location.href = `details.html?id=${selectedData.id}`;
}



function deleteUser(index) {
  dataPro.splice(index, 1);
  localStorage.setItem("emp", JSON.stringify(dataPro));
  showData();
}

function searchData() {
  let table = "";
  let term = search.value;
  for (let i = 0; i < dataPro.length; i++) {
    dataPro.id = i + 1;
    if (dataPro[i].arName.includes(term)) {
      table += ` 
  <tr  >
  <td>${dataPro.id}</td>
  <td><img class="ms-2" src="${dataPro[i].imagePreview}" alt="">${dataPro[i].arName}</td>
  <td>${dataPro[i].date}</td>
  <td> ${dataPro[i].work}</td>
  <td> ${dataPro[i].dapart}</td>
  <td>${dataPro[i].salary}</td>
  <td><label for="">${dataPro[i].status}</label></td>
  <td>
  <div class="dropdown ">
  <button class="btn shadow-none border-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false" position-relative>
  <i class="fa-solid fa-ellipsis-vertical"></i>
  </button>
  <ul class="dropdown-menu position-absolute z-3 ">
    <li class="dropdown-item"><button class="btn btn-success  w-100 mb-2" onclick="getDetails(${dataPro.id})"> المزيد</button></li>
    <li class="dropdown-item"><button class="btn btn-danger  w-100 " onclick="deleteUser(${i})"> حذف</button></li>
  </ul>
</div>
</td>
</tr>
`;
    }
  }
  document.getElementById("tbody").innerHTML = table;
}
