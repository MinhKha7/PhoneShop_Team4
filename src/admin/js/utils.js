// Hàm tạo element bằng JS
export function elt(tagName, properties, ...children) {
  // Tạo element
  const ele = document.createElement(tagName);

  // Set properties cho element
  if (properties) {
    for (const prop of Object.entries(properties)) {
      const [key, value] = prop;

      // Kiểm tra thuộc tính có tồn tại trong element hay không
      if (key in ele) {
        ele[key] = value;
      } else {
        ele.setAttribute(key, value);
      }
    }
  }

  // Set children cho element
  if (Array.isArray(children)) {
    children.forEach((child) => {
      ele.append(child);
    });
  } else {
    if (children) {
      ele.append(children);
    }
  }

  return ele;
}
// ====================================
