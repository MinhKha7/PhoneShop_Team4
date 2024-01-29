import { elt } from "./ulti.js";
import { header,footer,renderProduct,carTT,tongTotal,numCart} from "./layout.js";
 let body = document.querySelector("body");
body.append(header());
body.append(layout());
body.append(footer());  





async function productList() {
  const response = await fetch(
  `https://65abdb4cfcd1c9dcffc726b1.mockapi.io/phone`
  );
  const products = await response.json();
  let indexProducts=products.filter((sp,index)=>(index<12))
  renderProduct(indexProducts);
}
productList();



function layout() {
  return elt(
    "main",
    undefined,
    elt(
      "div",
      { className: "banner w-100" },
      elt("img", {
        src: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/01/banner/1920x450--1---1--1920x450.jpg",
      })
    ),
    elt(
      "div",
      { id: "sanpham" },
      elt(
        "div",
        { className: "w-80" },
        elt(
          "div",
          { className: "title" },
          elt("p", undefined, "Những sản phẩm bạn có thể thích"),
          elt(
            "form",
            undefined,
            elt(
              "select",
              { id: "select", onchange: select },
              elt("option", { value: "tat ca" }, "Tất cả"),
              elt("option", { value: "Oppo" }, "Opppo"),
              elt("option", { value: "Iphone" }, "Iphone")
            )
          )
        ),
        elt("div", { className: "list-product" })
      )
    )
  );
}
carTT();


async function select(e) {
  const response = await fetch(
    "https://65abdb4cfcd1c9dcffc726b1.mockapi.io/phone"
  );
  const products = await response.json();
  console.log(e.target.value);
  let spArray = [];
  products.filter((sp) => {
    if (e.target.value === sp.loaiSP) {
      spArray.push(sp);
    }
  });
  renderProduct(spArray);
}

numCart();


tongTotal();






