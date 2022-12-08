//multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]。 这意味着可以重写 multiply 以调用自身而无需依赖循环。
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

等同

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
