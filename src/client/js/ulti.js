export function elt(tagName, properties, ...children) {
    // Tạo element
    const ele = document.createElement(tagName);
  
    // Gắn thuộc tính lên trên element
    if (properties) {
      for (const prop of Object.entries(properties)) {
        const [key, value] = prop;
        // Object.assign(ele,{[key]:value})
        if(key in ele){
 ele[key] = value;
        }else {
          ele.setAttribute(key,value);
        }
        // kiểm tra thuộc tính có tồn tại trong element
       

      }
    }
  
    // append chỉ chấp nhận là một element
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