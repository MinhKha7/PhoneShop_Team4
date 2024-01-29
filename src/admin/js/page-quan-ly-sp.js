export function PageQuanLySP() {
  // Danh sách sản phẩm
  this.listSP = [];
  // ==================

  // Reset errors
  this.resetErrors = function () {
    var listErrors = document.querySelectorAll(".form-message");
    listErrors.forEach(function (ele) {
      ele.innerHTML = "";
    });
    // for (const key in errors) {
    //   delete errors[key];
    // }
  };
  // ==========================================
}
