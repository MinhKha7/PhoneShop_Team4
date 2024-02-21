import { BASE_URL } from "./const.js";
import { elt } from "./utils.js";
import { PageQuanLySP } from "./page-quan-ly-sp.js";
import { Validator } from "./validator.js";

var pageQuanLySP = new PageQuanLySP();

// Render table khi vào trang
function renderProduct() {
  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((products) => {
      renderTable(products);
    });
}

renderProduct();
// ===========================

// Thêm mới sản phẩm
document.querySelector("#btnThem").onclick = () => {
  // Set trạng thái thêm mới cho form
  const modal = document.getElementById("myModal");
  modal.removeAttribute("data-type");
  modal.removeAttribute("data-product-id");
  document.querySelector("form.form-san-pham").reset();
  pageQuanLySP.resetErrors();

  // Render title
  const title = document.querySelector("#myModalLabel");
  title.innerHTML = "Thêm mới sản phẩm";

  // Render button
  const btn = document.querySelector("#btnThem_CapNhat");
  btn.innerHTML = "Thêm mới";
  btn.classList.add("btn-success");
  btn.classList.remove("btn-primary");
};
// ===================================================

// Render table trong body
function renderTable(products) {
  const tbody = document.getElementById("tableDanhSach");

  tbody.innerHTML = "";

  products.forEach((product) => {
    const tr = elt(
      "tr",
      undefined,
      elt("td", { className: "text-start" }, product.tenSP),
      elt("td", undefined, product.loaiSP),
      elt("td", undefined, Number(product.giaSP).toLocaleString("vi")),
      elt("td", undefined, product.kichThuocSP),
      elt("td", undefined, product.dungLuongSP),
      elt("td", undefined, elt("img", { src: product.hinhSP })),
      elt("td", undefined, product.moTaSP),
      elt(
        "td",
        { className: "text-center" },
        elt(
          "button",
          {
            className: "btn btn-warning me-2",
            "data-bs-toggle": "modal",
            "data-bs-target": "#myModal",
            onclick: () => {
              // Set trạng thái update cho form
              const modal = document.getElementById("myModal");
              modal.setAttribute("data-type", "update");
              modal.setAttribute("data-product-id", product.id);
              pageQuanLySP.resetErrors();
              for (const key in errors) {
                delete errors[key];
              }
              // Render title
              const title = document.querySelector("#myModalLabel");
              title.innerHTML = "Cập nhật sản phẩm";
              // Render button
              const btn = document.querySelector("#btnThem_CapNhat");
              btn.innerHTML = "Cập nhật";
              btn.classList.add("btn-primary");
              btn.classList.remove("btn-success");

              // Render dữ liệu cũ
              document.getElementById("tenSP").value = product.tenSP;
              document.getElementById("loaiSP").value = product.loaiSP;
              document.getElementById("giaSP").value = Number(
                product.giaSP
              ).toLocaleString("vi");
              document.getElementById("kichThuocSP").value =
                product.kichThuocSP;
              document.getElementById("dungLuongSP").value =
                product.dungLuongSP;
              document.getElementById("hinhSP").value = product.hinhSP;
              document.getElementById("moTaSP").value = product.moTaSP;
            },
          },
          elt("i", { className: "fa-solid fa-pen-to-square" })
        ),
        elt(
          "button",
          {
            className: "btn btn-danger",
            onclick: () => {
              fetch(`${BASE_URL}/${product.id}`, { method: "DELETE" })
                .then((res) => res.json())
                .then(() => {
                  renderProduct();
                })
                .catch(() => {
                  alert("fail");
                });
            },
          },
          elt("i", { className: "fa-regular fa-trash-can" })
        )
      )
    );
    tbody.append(tr);
  });
}

// Thêm mới
document.querySelector(".modal-footer").append(
  elt(
    "button",
    {
      className: "btn btn-success",
      id: "btnThem_CapNhat",
      onclick: () => {
        const tenSP = document.getElementById("tenSP").value;
        const loaiSP = document.getElementById("loaiSP").value;
        const giaSP = document.getElementById("giaSP").value;
        const kichThuocSP = document.getElementById("kichThuocSP").value;
        const dungLuongSP = document.getElementById("dungLuongSP").value;
        const hinhSP = document.getElementById("hinhSP").value;
        const moTaSP = document.getElementById("moTaSP").value;

        const modal = document.getElementById("myModal");

        if (modal.getAttribute("data-type") === "update") {
          const id = modal.dataset.productId;

          if (isValidForUpdate() === false) {
            renderErrors();
            return;
          }

          fetch(`${BASE_URL}/${id}`, {
            headers: { "content-type": "application/json" },
            method: "PUT",
            body: JSON.stringify({
              tenSP,
              loaiSP,
              giaSP,
              kichThuocSP,
              dungLuongSP,
              hinhSP,
              moTaSP,
            }),
          })
            .then((res) => res.json())
            .then(() => {
              alert("success");
              renderProduct();
            })
            .catch(() => {
              alert("fail");
            })
            .finally(() => {
              modal.querySelector(".btn-close").click();
            });
        } else {
          if (isValid() === false) {
            renderErrors();
            return;
          }
          fetch(`${BASE_URL}`, {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({
              tenSP,
              loaiSP,
              giaSP,
              kichThuocSP,
              dungLuongSP,
              hinhSP,
              moTaSP,
            }),
          })
            .then((res) => res.json())
            .then(() => {
              alert("success");
              renderProduct();
            })
            .catch(() => {
              alert("fail");
            })
            .finally(() => {
              modal.querySelector(".btn-close").click();
            });
        }
      },
    },
    "Thêm mới"
  )
);
// ==================================================

// Tìm kiếm sản phẩm
document.getElementById("btnTim").addEventListener("click", () => {
  const searchProduct = document.getElementById("searchProduct").value;

  fetch(`${BASE_URL}?tenSP=${searchProduct}`)
    .then((res) => res.json())
    .then((products) => {
      renderTable(products);
    });
});
// ===========================

// Sắp xếp theo giá sản phẩm
document.getElementById("giaTitle").addEventListener("click", () => {
  var sapXepTang = document.querySelector("#SapXepTang");
  const searchProduct = document.getElementById("searchProduct").value;

  if (searchProduct !== "") {
    fetch(`${BASE_URL}?tenSP=${searchProduct}`)
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        if (sapXepTang.style.display === "inline-block") {
          document.querySelector("#SapXepTang").style.display = "none";
          document.querySelector("#SapXepGiam").style.display = "inline-block";
          products.sort((a, b) => b.giaSP - a.giaSP);
          renderTable(products);
        } else {
          document.querySelector("#SapXepTang").style.display = "inline-block";
          document.querySelector("#SapXepGiam").style.display = "none";
          products.sort((a, b) => a.giaSP - b.giaSP);
          renderTable(products);
        }
      });
  } else {
    if (sapXepTang.style.display === "inline-block") {
      document.querySelector("#SapXepTang").style.display = "none";
      document.querySelector("#SapXepGiam").style.display = "inline-block";
      fetch(`${BASE_URL}?sortBy=giaSP&order=desc`)
        .then((res) => res.json())
        .then((products) => {
          renderTable(products);
        });
    } else {
      document.querySelector("#SapXepTang").style.display = "inline-block";
      document.querySelector("#SapXepGiam").style.display = "none";
      fetch(`${BASE_URL}?sortBy=giaSP`)
        .then((res) => res.json())
        .then((products) => {
          renderTable(products);
        });
    }
  }
});
// ===================================================

// ===================== Validate =====================

var listEle = document.querySelectorAll(".form-san-pham input");

var touches = {};
var errors = {};

// Set cho touches có giá trị để xử lý trường hợp chưa nhập đã submit
function setTouches(value) {
  listEle.forEach(function (ele) {
    touches[ele.id] = value;
  });
}
setTouches(false);
// ====================================================

// Kiểm tra dữ liệu nhập có lỗi hay không
function handleValidate(event) {
  var id = event.target.id;
  var value = event.target.value;

  switch (id) {
    case "tenSP": {
      errors[id] = new Validator(value).require().getMessage();
      break;
    }
    case "loaiSP": {
      errors[id] = new Validator(value).require().getMessage();
      break;
    }
    case "giaSP": {
      errors[id] = new Validator(value)
        .require()
        .number()
        .minNumber(0)
        .getMessage();
      break;
    }
    case "kichThuocSP": {
      errors[id] = new Validator(value)
        .require()
        .number()
        .minNumber(0)
        .getMessage();
      break;
    }
    case "dungLuongSP": {
      errors[id] = new Validator(value)
        .require()
        .number()
        .minNumber(0)
        .getMessage();
      break;
    }
    case "hinhSP": {
      errors[id] = new Validator(value).require().getMessage();
      break;
    }
    case "moTaSP": {
      errors[id] = new Validator(value).require().getMessage();
      break;
    }

    default:
  }
}
// ====================================================

// Render error message
function renderErrors() {
  listEle.forEach(function (ele) {
    var thuocTinh = ele.id;

    var isShow = errors[thuocTinh] != undefined && touches[thuocTinh];

    // Khi isShow là false thì ngừng render lỗi
    if (!isShow) {
      return;
    }
    // Khi isShow là true
    var nextEle = ele.nextElementSibling;

    var messageHTML = `
                        <span class="form-message">
                          ${errors[thuocTinh]}
                        </span>`;
    if (nextEle) {
      nextEle.innerHTML = messageHTML;
    } else {
      // Tạo mới element form-message
      ele.insertAdjacentHTML("afterend", messageHTML);
    }
  });
}
// =======================================

// Mỗi khi từ trong ô input đi ra thì kiểm tra và render lỗi ngay
function handleBlur(event) {
  // Tạo thuộc tính tương ứng với id đồng thời set giá trị true trong đối tượng touches
  touches[event.target.id] = true;

  handleValidate(event);

  renderErrors();
}

listEle.forEach(function (ele) {
  ele.onblur = handleBlur;
});
// ==========================================

// Kiểm tra form có hợp lệ để submit
function isValid() {
  //TH1: chưa nhập gì hết mà đã submit
  if (Object.values(errors).length !== listEle.length) {
    // Set tất cả touches[thuocTinh] == true thì mới renderErrors được
    setTouches(true);

    // Set để errors[thuocTinh] != undefined thì mới renderErrors được
    listEle.forEach(function (ele) {
      handleValidate({
        target: {
          id: ele.id,
          value: "",
        },
      });
    });
    return false;
  }

  // TH2: Đã nhập đầy đủ
  // Kiểm tra xem tất cả đều đã được đi qua và nhập đúng
  var isTouch = Object.values(touches).every(function (item) {
    return item;
  });

  var isTrue = Object.values(errors).every(function (item) {
    return item.length === 0;
  });

  return isTouch && isTrue;
}
// TH3: Xét lỗi lúc chỉnh sửa (đã nhập đầy đủ nên không xét kiểu TH1)
function isValidForUpdate() {
  var isTouch = Object.values(touches).every(function (item) {
    return item;
  });

  var isTrue = Object.values(errors).every(function (item) {
    return item.length === 0;
  });

  return isTouch && isTrue;
}
// ==================================================================
