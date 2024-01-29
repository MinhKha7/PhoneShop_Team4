import { elt } from "./ulti.js";

import {header,footer,tangSL,giamSL,xoaAllCart,pageRenderCart,tongPageTotal} from "./layout.js";
let body = document.querySelector("body");
body.append(header());
body.append(cart());
body.append(footer());

function cart() {
  return elt(
    "main",
    undefined,
    elt(
      "div",
      { className: "cart" },
      elt(
        "div",
        { className: "row w-80 cart-list" },
        elt(
          "div",
          { className: "col-lg-8 col-sm-12 cart-left" },
          elt(
            "div",
            { className: "cart-list"},
            elt(
              "div",
              { className: "cart-list__header" },
              elt("div", undefined, "Sản phẩm"),
              elt("div", undefined, "Số Lượng"),
              elt("div", undefined, "Thành Tiền"),
              elt("div", undefined, "Chỉnh sửa")
            ),
           elt("div",{
            id:"cart-list"
           },)
           
            ),
            elt('div',{className:'cart-list__footer'},
            elt('a',{href:""},'Tiếp tục mua hàng'),
            elt('a',{href:""},'Xoá tất cả')
          )
        ),
        elt('div',{className:"col-lg-4 col-sm-12 cart-right"},
                elt('div',{className:"cart-right__box p-3"},
               
                )
        )
      )
    )
  );
}
const pagecarTT = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    pageRenderCart(cart);
  };
  pagecarTT();
  tongPageTotal();