import { elt } from "./ulti.js";

let body = document.querySelector("body");
body.append(header());
body.append(layout());
body.append(footer());

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
          elt("p", undefined, "PhoneShop")
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
            elt("i", { className: "fa-solid fa-cart-shopping",
            onclick:()=>{
              const headerCart=document.querySelector('.header-cart');
              headerCart.classList.remove('isActive');
             body.addEventListener('click',(e)=>{
              if(e.target.matches('.header-cart')){
                headerCart.classList.add('isActive');
              }
             })
            }
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
            elt(
              "div",
              { className: "cart-item" },
              elt(
                "div",
                { className: "cart-item__img" },
                elt("img", {
                  src: "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-purple-1.jpg",
                })
              ),
              elt(
                "div",
                { className: "cart-item__title" },
                elt("h4", undefined, "lorem asdasdasdasdasdasd"),
                elt(
                  "div",
                  { className: "d-flex" },
                  elt(
                    "div",
                    { className: "minus" },
                    elt("i", { className: "fa-solid fa-minus" })
                  ),
                  elt("div", { className: "num" }, 1),
                  elt(
                    "div",
                    { className: "plus" },
                    elt("i", { className: "fa-solid fa-plus" })
                  )
                ),
                elt("p", undefined, "3.000.000đ")
              )
            )
          ),
          elt(
            "div",
            { className: "cart-bottom" },
            elt("p", undefined, elt("span", undefined, "Số lượng:"), 3),
            elt("p", undefined, elt("span", undefined, "Tổng:"), 3),
            elt(
              "div",
              { className: "cart-buttons" },
              elt("button", { className: "btn btn-primary" }, "Xem Giỏ Hàng"),
              elt("button", { className: "btn btn-primary" }, "Thanh Toán")
            )
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
          
          { className: "fa fa-bars", id: "bars",onclick:()=>{
            const headerBox=document.querySelector('.mobile .header-box__left');
            console.log(headerBox);
            headerBox.classList.remove('isOn');

           body.addEventListener('click',(e)=>{
          
               if(e.target.matches('.mobile .header-box__left')){
              headerBox.classList.add('isOn')
            }
           })
           document.querySelector('.close').addEventListener('click',(e)=>{
            if(e.target.parentNode.parentNode.matches('.mobile .header-box__left')){
              e.target.parentNode.parentNode.classList.add('isOn')
            }
           
          })
         
          }


        },
    
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
              elt("i", { className: "fa-solid fa-xmark" })
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
            elt('ul',undefined,    elt(
              "li",
              undefined,
              elt("a", { className: "active" }, "Trang chủ")
            ),
            elt("li", undefined, elt("a", undefined, "Giới Thiệu")),
            elt("li", undefined, elt("a", undefined, "Sản Phẩm")),
            elt("li", undefined, elt("a", undefined, "Blog")),
            elt("li", undefined, elt("a", undefined, "Liên Hệ")))
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
            "div",
            { className: "header-box-item" },
            elt("i", { className: "fa-solid fa-cart-shopping" })
          )
        )
      )
    )
  );
}
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
              undefined,
              elt("option", undefined, "Tất cả"),
              elt("option", undefined, "Opppo"),
              elt("option", undefined, "Iphone")
            )
          )
        ),
        elt(
          "div",
          { className: "list-product" },
          elt(
            "div",
            { className: "list-product__item" },
            elt(
              "div",
              { className: "product-item__img" },
              elt("img", {
                src: "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-purple-1.jpg",
              })
            ),
            elt(
              "div",
              { className: "product-item__bottom" },
              elt("h3", undefined, "loremasdasdasdasd"),
              elt("p", undefined, "3.000.000d"),
              elt("button", { className: "btn btn-primary" }, "Mua ngay")
            )
          )
        )
      )
    )
  );
}
// console.log(header());

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
          elt("h4", undefined, "Phone Shop"),
          elt(
            "p",
            undefined,
            elt("span", undefined, "Địa chỉ:"),
            "lorem is asdasd"
          ),

          elt(
            "p",
            undefined,
            elt("span", undefined, "Địa chỉ:"),
            "lorem is asdasd"
          ),
          elt(
            "p",
            undefined,
            elt("span", undefined, "Địa chỉ:"),
            "lorem is asdasd"
          ),
          elt(
            "p",
            undefined,
            elt("span", undefined, "Địa chỉ:"),
            "lorem is asdasd"
          )
        ),
        elt(
          "div",
          { className: "footer-box__item" },
          elt("h5", undefined, "Liên quan về chúng tôi"),
          elt("p", undefined, elt("span", undefined, "Hệ thống cửa hàng")),
          elt("p", undefined, elt("span", undefined, "Hệ thống cửa hàng")),
          elt("p", undefined, elt("span", undefined, "Hệ thống cửa hàng")),
          elt("p", undefined, elt("span", undefined, "Hệ thống cửa hàng"))
        ),
        elt(
          "div",
          { className: "footer-box__item" },
          elt("h5", undefined, "Liên quan về chúng tôi"),
          elt("p", undefined, elt("span", undefined, "Hệ thống cửa hàng")),
          elt("p", undefined, elt("span", undefined, "Hệ thống cửa hàng")),
          elt("p", undefined, elt("span", undefined, "Hệ thống cửa hàng")),
          elt("p", undefined, elt("span", undefined, "Hệ thống cửa hàng"))
        ),
        elt(
          "div",
          { className: "footer-box__item" },
          elt("h5", undefined, "Liên quan về chúng tôi"),
          elt("p", undefined, elt("span", undefined, "Hệ thống cửa hàng")),
          elt("p", undefined, elt("span", undefined, "Hệ thống cửa hàng")),
          elt("p", undefined, elt("span", undefined, "Hệ thống cửa hàng")),
          elt("p", undefined, elt("span", undefined, "Hệ thống cửa hàng"))
        )
      )
    )
  );
}
