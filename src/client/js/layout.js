import { elt } from "./ulti.js";
let body = document.querySelector("body");

function header() {
  return elt(
    "header",
    undefined,
    elt(
      "div",
      { className: "desktop" },
      elt(
        "div",
        {
          className:
            "header-box d-flex justify-content-between w-80 align-items-center",
        },
        elt(
          "div",
          { className: "header-box__left" },
          elt(
            "i",
            { className: "fa-solid fa-clover me-4" },
            elt("span", undefined, " Clover Phone")
          )
        ),
        elt(
          "nav",
          { className: "header-box__bottom" },
          elt(
            "ul",
            { className: "d-flex" },
            elt(
              "li",
              undefined,
              elt("a", { className: "active" }, "Trang chủ")
            ),
            elt("li", undefined, elt("a", undefined, "Giới Thiệu")),
            elt("li", undefined, elt("a", undefined, "Sản Phẩm")),
            elt("li", undefined, elt("a", undefined, "Blog")),
            elt("li", undefined, elt("a", undefined, "Liên Hệ"))
          )
        ),
        elt(
          "div",
          { className: "header-box__right d-flex" },
          elt(
            "div",
            { className: "header-box-item" },
            elt("i", { className: "fa-regular fa-user" })
          ),
          elt(
            "div",
            { className: "header-box-item" },
            elt("i", { className: "fa-regular fa-heart" })
          ),
          elt(
            "div",
            { className: "header-box-item" },
            elt("i", {
              className: "fa-solid fa-cart-shopping",
              onclick: () => {
                const headerCart = document.querySelector(".header-cart");
                headerCart.classList.remove("isActive");
                body.addEventListener("click", (e) => {
                  if (e.target.matches(".header-cart")) {
                    headerCart.classList.add("isActive");
                  }
                });
              },
            }),
            elt("div", { className: "num-Cart" }, 0)
          )
        )
      ),
      elt(
        "div",
        { className: "header-cart isActive" },
        elt(
          "div",
          { className: "cart-bg" },
          elt(
            "div",
            { className: "cart-top" },
            elt("h3", undefined, "Giỏ hàng của bạn"),
            elt("div", { id: "cart-top" })
          )
        )
      )
    ),
    // mobile
    elt(
      "div",
      { className: "mobile" },
      elt(
        "div",
        {
          className:
            "header-box d-flex justify-content-between w-80 align-items-center",
        },
        elt(
          "i",

          {
            className: "fa fa-bars",
            id: "bars",
            onclick: () => {
              const headerBox = document.querySelector(
                ".mobile .header-box__left"
              );

              headerBox.classList.remove("isOn");

              body.addEventListener("click", (e) => {
                if (e.target.matches(".mobile .header-box__left")) {
                  headerBox.classList.add("isOn");
                }
              });
              document
                .querySelector(".close")
                .addEventListener("click", (e) => {
                  if (
                    e.target.parentNode.parentNode.matches(
                      ".mobile .header-box__left"
                    )
                  ) {
                    e.target.parentNode.parentNode.classList.add("isOn");
                  }
                });
            },
          }
        ),
        elt(
          "nav",
          { className: "header-box__left isOn" },
          elt(
            "div",
            { className: "header-bg" },
            elt(
              "div",
              { className: "close" },
              elt("i", {
                className: "fa-solid fa-xmark",
                onclick: (e) => {
                  const headerLeft =
                    document.querySelector(".header-box__left");
                  headerLeft.classList.add("isOn");
                },
              })
            ),
            elt(
              "form",
              undefined,
              elt("label", undefined, "Bạn đang tìm kiếm"),
              elt(
                "div",
                { className: "group-label" },
                elt("input", {
                  type: "text",
                  placeholder: "Mời bạn tìm kiếm",
                }),
                elt(
                  "button",
                  undefined,
                  elt("i", { className: "fa-solid fa-magnifying-glass" })
                )
              )
            ),
            elt(
              "ul",
              undefined,
              elt(
                "li",
                undefined,
                elt(
                  "a",
                  { className: "active", href: "./client.html" },
                  "Trang chủ"
                )
              ),
              elt("li", undefined, elt("a", undefined, "Giới Thiệu")),
              elt("li", undefined, elt("a", undefined, "Sản Phẩm")),
              elt("li", undefined, elt("a", undefined, "Blog")),
              elt("li", undefined, elt("a", undefined, "Liên Hệ"))
            )
          )
        ),
        elt(
          "div",
          { className: "header-box__bottom" },
          elt("p", undefined, "Phone Shop")
        ),
        elt(
          "div",
          { className: "header-box__right d-flex" },
          elt(
            "a",
            { className: "header-box-item", href: "./giohang.html" },
            elt("i", {
              className: "fa-solid fa-cart-shopping",
            }),
            elt("div", { className: "num-CartMB" }, 0)
          )
        )
      )
    ),
    elt(
      "div",
      { className: "header-cart isActive" },
      elt(
        "div",
        { className: "cart-bg" },
        elt("div", { className: "cart-top" })
      )
    )
  );
}

function footer() {
  return elt(
    "footer",
    undefined,

    elt(
      "div",
      { className: "w-80" },
      elt(
        "div",
        { className: "footer-box" },

        elt(
          "div",
          { className: "footer-box__item" },
          elt("h4", undefined, "Clover Phone"),
          elt(
            "p",
            undefined,
            elt("span", undefined, "Địa chỉ:"),
            "lorem is asdasdasdasd"
          ),

          elt(
            "p",
            undefined,
            elt("span", undefined, "SĐT:"),
            "0334491121"
          ),
          elt(
            "p",
            undefined,
            elt("span", undefined, "SĐT2:"),
            "0334491191"
          ),
          elt(
            "p",
            undefined,
            elt("span", undefined, "email:"),
            "admin123@gmail.com"
          )
        ),
        elt(
          "div",
          { className: "footer-box__item" },
          elt("h5", undefined, "CHÍNH SÁCH"),
          elt("p", undefined, elt("span", undefined, "Chính sách bảo mật")),
          elt("p", undefined, elt("span", undefined, "Điều khoản sử dụng")),
          elt("p", undefined, elt("span", undefined, "Chính sách đổi trả")),
          elt("p", undefined, elt("span", undefined, "Phương thức vận chuyển"))
        ),
        elt(
          "div",
          { className: "footer-box__item" },
          elt("h5", undefined, "HỖ TRỢ KHÁCH HÀNG"),
          elt("p", undefined, elt("span", undefined, "Về chúng tôi")),
          elt("p", undefined, elt("span", undefined, "Liên hệ")),
          elt("p", undefined, elt("span", undefined, "Địa chỉ gần nhất")),
          elt("p", undefined, elt("span", undefined, "Đào tạo & Tuyển dụng"))
        ),
        elt(
          "div",
          { className: "footer-box__item" },
          elt("h5", undefined, "THÔNG TIN CỬA HÀNG"),
          elt("p", undefined, elt("span", undefined, "Giới thiệu")),
          elt("p", undefined, elt("span", undefined, "Sản phẩm")),
          elt("p", undefined, elt("span", undefined, "Blog")),
          elt("p", undefined, elt("span", undefined, "Liên Hệ"))
        )
      )
    )
  );
}

const tangSL = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let updateCart = cart.map((sp) => {
    if (id == sp.id) {
      sp.soLuong = sp.soLuong + 1;
    }
    console.log(sp);
    return sp;
  });
  localStorage.setItem("cart", JSON.stringify(updateCart));
  if (document.querySelector(".cart")) {
    pageRenderCart(updateCart);
    tongPageTotal();
  }
  renderCart(updateCart);
  tongTotal();
};
const giamSL = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.map((sp) => {
    if (id == sp.id) {
      sp.soLuong = sp.soLuong - 1;
    }

    return sp;
  });
  let updateCart = cart.filter((sp) => sp.soLuong > 0);
  localStorage.setItem("cart", JSON.stringify(updateCart));
  if (document.querySelector(".cart")) {
    pageRenderCart(updateCart);
    tongPageTotal();
  }
  renderCart(updateCart);
  tongTotal();
  numCart();
};
// function xoá tat ca cart

const xoaAllCart = () => {
  let cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  if (document.querySelector(".cart")) {
    pageRenderCart(cart);
    tongPageTotal();
  }
  renderCart(cart);
  tongTotal();
  numCart();
};
// cart page
function pageRenderCart(products) {
  const cartTop = document.querySelector("#cart-list");
  cartTop.innerHTML = "";

  products.forEach((sp) => {
    const cartItem = elt(
      "div",
      { className: "cart-list__body" },
      elt(
        "div",
        { className: "cart-list__item" },
        elt(
          "div",
          { className: "cart-list__img" },
          elt("img", {
            src: sp.hinhSP,
          })
        ),
        elt(
          "div",
          { className: "cart-list__title" },
          elt("h3", undefined, sp.tenSP),
          elt("p", undefined, Number(sp.giaSP).toLocaleString("vi"))
        )
      ),
      elt(
        "div",
        { className: "d-flex justify-content-center align-items-center" },
        elt(
          "div",
          { className: "minus" },

          elt("i", {
            className: "fa-solid fa-minus",
            onclick: () => giamSL(sp.id),
          })
        ),
        elt("div", { className: "num" }, sp.soLuong),
        elt(
          "div",
          { className: "plus" },
          elt("i", {
            className: "fa-solid fa-plus",
            onclick: () => tangSL(sp.id),
          })
        )
      ),
      elt(
        "div",
        { className: "d-flex justify-content-center align-items-center" },
        elt("p", undefined, Number(sp.soLuong * sp.giaSP).toLocaleString("vi"))
      ),
      elt(
        "div",
        { className: "d-flex justify-content-center align-items-center" },

        elt("i", {
          className: "fa-solid fa-trash",
          onclick: () => xoaIcon(sp.id),
        })
      )
    );
    cartTop.append(cartItem);
  });
}
const tongPageTotal = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));

  let totalSL = 0;
  let totalTT = 0;

  cart.forEach((sp) => {
    totalSL = totalSL + sp.soLuong;
    totalTT = totalTT + sp.soLuong * sp.giaSP;
  });
  let cartBottom = document.querySelector(".cart-right-item");
  if (cartBottom) {
    cartBottom.remove();
  }
  let renderTotal = elt(
    "div",
    { className: "cart-right-item" },
    elt("h4", { className: "text-center" }, "Thông tin thanh toán"),
    elt("p", undefined, elt("span", undefined, "Số lượng:"), totalSL),
    elt(
      "p",
      undefined,
      elt("span", undefined, "Thành tiền:"),
      Number(totalTT).toLocaleString("vi")
    ),
    elt("hr", undefined),
    elt("p", undefined, elt("span", undefined, "Khuyến mãi:"), 0),
    elt("p", undefined, elt("span", undefined, "Tiền ship:"), 0),
    elt("hr", undefined),
    elt(
      "p",
      undefined,
      elt("span", undefined, "Tổng Tiền:"),
      Number(totalTT).toLocaleString("vi")
    ),
    elt(
      "div",
      { className: "button" },
      elt(
        "button",
        { className: "btn btn-primary", onclick: () => thanhToan() },
        "Mua ngay"
      )
    )
  );

  document.querySelector(".cart-right__box").append(renderTotal);
};

//   render product
const carTT = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  renderCart(cart);
};
function renderProduct(products) {
  const tbody = document.querySelector(".list-product");

  // Reset lại tbody trước khi render product
  tbody.innerHTML = "";

  products.forEach((product) => {
    const tr = elt(
      "div",
      { className: "list-product__item" },
      elt(
        "div",
        { className: "product-item__img" },
        elt("img", {
          src: product.hinhSP,
        })
      ),
      elt(
        "div",
        { className: "product-item__bottom" },
        elt("h3", undefined, product.tenSP),
        elt("p", undefined, Number(product.giaSP).toLocaleString("vi")),
        elt(
          "button",
          {
            className: "btn btn-primary",
            onclick: async () => {
              const response = await fetch(
                `https://65abdb4cfcd1c9dcffc726b1.mockapi.io/phone/${product.id}`
              );
              const productInfo = await response.json();
              console.log(productInfo);

              if (productInfo == null) return 0;

              productInfo["soLuong"] = 1;
              console.log(productInfo["soLuong"]);
              let cart_local = localStorage.getItem("cart");
              let cart = cart_local == null ? [] : JSON.parse(cart_local);
              let index = cart.findIndex((sp) => sp.id == productInfo.id);
              if (index >= 0) cart[index]["soLuong"] += 1;
              else cart.push(productInfo);
              localStorage.setItem("cart", JSON.stringify(cart));
              carTT();
              numCart();
              tongTotal();
            },
          },
          "Mua ngay"
        )
      )
    );

    tbody.append(tr);
  });
}
// cart header
function renderCart(products) {
  const cartTop = document.querySelector("#cart-top");
  cartTop.innerHTML = "";

  products.forEach((sp) => {
    const cartItem = elt(
      "div",
      { className: "cart-item" },
      elt(
        "div",
        { className: "cart-item__img" },
        elt("img", {
          src: sp.hinhSP,
        })
      ),
      elt(
        "div",
        { className: "cart-item__title" },
        elt("h4", undefined, sp.tenSP),
        elt(
          "div",
          { className: "d-flex" },
          elt(
            "div",
            { className: "minus" },

            elt("i", {
              className: "fa-solid fa-minus",
              onclick: () => giamSL(sp.id),
            })
          ),
          elt("div", { className: "num" }, sp.soLuong),
          elt(
            "div",
            { className: "plus" },
            elt("i", {
              className: "fa-solid fa-plus",
              onclick: () => tangSL(sp.id),
            })
          )
        ),
        elt("p", undefined, Number(sp.giaSP).toLocaleString("vi"))
      )
    );
    cartTop.append(cartItem);
  });
}

const numCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let renderNum = `${cart == undefined ? 0 : cart.length}`;
  document.querySelector(".num-Cart").innerHTML = renderNum;
  document.querySelector(".num-CartMB").innerHTML = renderNum;
};
const tongTotal = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));

  let totalSL = 0;
  let totalTT = 0;

  cart.forEach((sp) => {
    totalSL = totalSL + sp.soLuong;
    totalTT = totalTT + sp.soLuong * sp.giaSP;
  });
  let cartBottom = document.querySelector(".cart-bottom");
  if (cartBottom) {
    cartBottom.remove();
  }
  let renderTotal = elt(
    "div",
    { className: "cart-bottom" },

    elt("p", undefined, elt("span", undefined, "Số lượng:"), totalSL),
    elt(
      "p",
      undefined,
      elt("span", undefined, "Tổng:"),
      Number(totalTT).toLocaleString("vi")
    ),
    elt(
      "div",
      { className: "cart-buttons" },
      elt(
        "button",
        { className: "btn btn-danger", onclick: () => thanhToan() },
        "Thanh Toán"
      ),
      elt(
        "button",
        { className: "btn btn-primary",onclick:()=>xoaAllCart()},
        "Xoá Tất Cả"
      ),

    )
  );

  document.querySelector(".cart-bg").append(renderTotal);
};
const xoaIcon = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let updateCart = cart.filter((sp) => !(sp.id == id));
  localStorage.setItem("cart", JSON.stringify(updateCart));

  if (document.querySelector(".cart")) {
    pageRenderCart(updateCart);
    tongPageTotal();
  }
};
// thanh toan
const renderModal = (trangThai) => {
  const renderModal = `<div class="popup ${trangThai}">
    <div class="popup-bg">
      <div class="popup-box">
        
        <div class="popup-header">
         <p>Trạng Thái Đặt Hàng</p>
        </div>
        <div class="popup-body">
         <p>Bạn đã đặt hàng thành công!</p>
         <p>Đơn hàng của bạn là:#3412</p>
         
        </div>
        <div class="popup-footer">
          <button class="btn btn-secondary w-25">Đóng</button>
          <button class="btn btn-primary w-25">Ok</button>
        </div>
      </div>
    </div>
    </div>`;
  document.querySelector("body").innerHTML += renderModal;
};
const thanhToan = () => {
  setTimeout(() => {
    renderModal("");
    setTimeout(() => {
      xoaAllCart();
      document.location = `client.html`;
    }, 2000);
  }, 1000);
};

export {
  header,
  footer,
  tangSL,
  giamSL,
  xoaAllCart,
  pageRenderCart,
  tongPageTotal,
  renderCart,
  tongTotal,
  numCart,
  renderProduct,
  carTT,
};
