function fibonacci(n) {
    let m = 0;
    let k = 1;
    for (let i = 0; i <= n; i++) {
      end = m + k;
      m = k;
      k = end;
      console.log(m);
    }
  }
  fibonacci(5);
  