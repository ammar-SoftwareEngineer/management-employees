
let dataPro = JSON.parse(localStorage.getItem("emp"));
let urlParams = new URLSearchParams(window.location.search);
let getId = urlParams.get("id");
let data = [];


function showId() {
  let data = dataPro.filter((item) => item.id == getId);

  data.forEach((element) => {
    element = `

  <div class="row gy-4">
    <div class="col-lg-12">
      <div
        class="images  mb-4 mt-3  d-flex justify-content-center"
      >
      <label class="image bg-white rounded-circle shadow-lg   justify-content-center align-items-center z-3   " for="img"
      ><i class="fas fa-edit text-warning"></i></label>
      <input id="img" class="d-none" type="file" />
      <img  class="rounded-circle" id="image-preview" width="150" height="150"  src="${element.imagePreview}" />
     
      </div>
    </div>

    <div class="col-lg-6">
      <div class="ar-name d-flex align-items-center  gap-2">
        <label for="ar-name"
          >الاسم باللغة العربية</label
        >
        <input
          id="ar-name"
          class="form-control rounded-3 mt-2"
          type="text"
          aria-label="default input example"
          value="${element.arName}"
          disabled
        />
      </div>
    </div>
    <div class="col-lg-6">
      <div class="en-name  d-flex align-items-center gap-2">
        <label for="en-name"
          >الاسم  باللغة الانجليزية</label
        >
        <input
          id="en-name"
          class="form-control rounded-3 mt-2"
          type="text"
          aria-label="default input example"
          value="${element.enName}"
          disabled
        />
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="number-work  d-flex align-items-center  gap-2">
        <label for="number-work"
          >الرقم الوظيفي
        </label>
        <input
          id="number-work"
          class="form-control rounded-3 mt-2"
          type="text"
          aria-label="default input example"
          value="${element.workNumber}"
          disabled
        />
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="number  d-flex align-items-center  gap-2">
        <label for="number">رقم الهوية/الاقامة</label>
        <input
          id="number"
          class="form-control rounded-3 mt-2"
          type="text"
          aria-label="default input example"
          value="${element.number}"
          disabled
        />
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="nationality  d-flex align-items-center  gap-2">
        <label for="nationality">الجنسية</label>
        <input
        id="nationality"
        class="form-control rounded-3 mt-2"
        type="text"
        aria-label="default input example"
        value="${element.nationality}"
        disabled
      />
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="email  d-flex align-items-center  gap-2">
        <label for="email" class="form-label"
          >البريد الالكتروني</label
        >
        <input
          type="email"
          class="form-control"
          id="email"
          value="${element.email}"
          disabled
        />
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="phone  d-flex align-items-center  gap-2">
        <label for="phone" class="form-label"
          >رقم الهاتف</label
        >
        <input
          type="text"
          class="form-control"
          id="phone"
          value="${element.phone}"
          disabled
        />
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <div class="date  d-flex align-items-center  gap-2">
        <label for="date">تاريخ الانضمام</label>
        <input
          id="date"
          class="form-control rounded-3 mt-2"
          type="text"
          aria-label="default input example"
          value="${element.date}"
          disabled
        />
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="work  d-flex align-items-center  gap-2">
        <label for="work">العمل</label>
        <input
          id="work"
          class="form-control rounded-3 mt-2"
          type="text"
          aria-label="default input example"
          value="${element.work}"
          disabled
        />
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="dapart  d-flex align-items-center  gap-2">
        <label for="dapart">القسم</label>
        <input
          id="dapart"
          class="form-control rounded-3 mt-2"
          type="text"
          aria-label="default input example"
          value="${element.dapart}"
          disabled
        />
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="salary  d-flex align-items-center  gap-2">
        <label for="salary">الراتب</label>
        <input
          id="salary"
          class="form-control rounded-3 mt-2"
          type="number"
          aria-label="default input example"
          value="${element.salary}"
          disabled
        />
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="status  d-flex align-items-center  gap-2">
        <label for="status">الحالة</label>
        <input
          id="status"
          class="form-control rounded-3 mt-2"
          type="text"
          aria-label="default input example"
          value="${element.status}"
          disabled
        />
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="gender  d-flex align-items-center  gap-2">
        <label for="gender">الجنس</label>
        <input
        id="gender"
        class="form-control rounded-3 mt-2"
        type="text"
        aria-label="default input example"
        value="${element.gender}"
        disabled
      />
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="marital-status  d-flex align-items-center  gap-2">
        <label for="marital-status"
          >الحالة الاجتماعية</label
        >
        <input
        id="marital-status"
        class="form-control rounded-3 mt-2"
        type="text"
        aria-label="default input example"
        value="${element.maritalStatus}"
        disabled
      />
    </div>
      </div>
    </div>
  </div>
  <div class="btns d-flex justify-content-center gap-5 mt-3">
  <button class="btn btn-warning update mt-4 px-5 py-2" onclick="getUpdate()">تعديل</button>
  </div>
    `;
    document.getElementById("details").innerHTML = element;
  });
}
showId();


function getUpdate() {
  let update = document.querySelector(".details .btn");
  let editData = dataPro.filter((e) => e.id == getId);
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
  let images = document.getElementById("img");
  let imagePreview = document.getElementById("image-preview");
  let image = document.querySelector(".image");
  let inputElements = document.querySelectorAll(".row input");
  inputElements.forEach((input) => {
    input.removeAttribute("disabled");
  });
  let selectElements = document.querySelectorAll(".row select");
  selectElements.forEach((select) => {
    select.removeAttribute("disabled");
  });

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
        "display:block; width:150px; border-radius: 10px";
      image.style.display = "none";
    }
  });

  update.addEventListener("click", function () {
    if (editData.length > 0) {
      editData.map((item) => {
        item.arName = arName.value || "";
        item.enName = enName.value || "";
        item.workNumber = workNumber.value || "";
        item.number = number.value || "";
        item.nationality = nationality.value || "";
        item.email = email.value || "";
        item.phone = phone.value || "";
        item.date = date.value || "";
        item.work = work.value || "";
        item.dapart = dapart.value || "";
        item.salary = salary.value || "";
        item.status = status.value || "";
        item.gender = gender.value || "";
        item.maritalStatus = maritalStatus.value || "";
        item.imagePreview = imagePreview.src || "";
      });
      localStorage.setItem("emp", JSON.stringify(dataPro));
      window.location.reload();
    }
  });

  update.className = "btn btn-success mt-4";
  update.innerHTML = "حفظ";
  image.style.display = "flex";
}

function back() {
  location.href = "index.html";
}
