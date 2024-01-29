/**
 * @param {string} value giá trị người dùng nhập vào.
 */
export function Validator(value) {
  this.value = value;
  this.message = "";

  // Không được bỏ trống
  this.require = function (message) {
    if (this.message) return this;

    if (this.value.trim().length === 0) {
      this.message = message || "Không được bỏ trống.";
    }

    return this;
  };

  // Kiểm tra đúng định dạng số tự nhiên: nguyên + thực
  this.number = function (message) {
    if (this.message) return this;

    var regexNumber = /^-?\d*\.?\d+$/;

    if (!regexNumber.test(this.value.trim())) {
      this.message = message || "Giá trị nhập vào sai định dạng số.";
    }

    return this;
  };

  this.minNumber = function (valueMin, message) {
    if (this.message) return this;

    if (Number(this.value) < valueMin) {
      this.message =
        message ||
        "Không được nhỏ hơn số " + Intl.NumberFormat("vn-VN").format(valueMin);
    }

    return this;
  };

  this.maxNumber = function (valueMax, message) {
    if (this.message) return this;

    if (Number(this.value) > valueMax) {
      this.message =
        message ||
        "Không được lớn hơn số " + Intl.NumberFormat("vn-VN").format(valueMax);
    }

    return this;
  };

  // Toàn bộ là ký tự số
  this.stringNumber = function (message) {
    if (this.message) return this;

    var regexString = /^[0-9]+$/u;

    if (!regexString.test(this.value)) {
      this.message = message || "Yêu cầu toàn bộ là ký tự số";
    }

    return this;
  };

  this.minString = function (valueMin, message) {
    if (this.message) return this;

    if (this.value.trim().length < valueMin) {
      this.message = message || `Không được ít hơn ${valueMin} ký tự.`;
    }

    return this;
  };

  this.maxString = function (valueMax, message) {
    if (this.message) return this;

    if (this.value.trim().length > valueMax) {
      this.message = message || `Không được nhiều hơn ${valueMax} ký tự.`;
    }

    return this;
  };

  // method: getter
  this.getMessage = function () {
    return this.message;
  };
}
