function print(n, kiemTraDieuKien) {
    for (let i = 1; i <= n; i++) {
      if (kiemTraDieuKien(i)) {
        console.log(i);
      }
    }
  }
  
  function laSoChan(x) {
    return x % 2 === 0;
  }
  
  function laSoLe(x) {
    return x % 2 !== 0;
  }
  
  function laSoChinhPhuong(x) {
    const canBacHai = Math.sqrt(x);
    return canBacHai === Math.floor(canBacHai);
  }
  
  function laSoChia9Du8(x) {
    return x % 9 === 8;
  }
  
  function laSoChia7Du3(x) {
    return x % 7 === 3;
  }
  
  // Sử dụng hàm inSoChan với các hàm kiemTraDieuKien tương ứng
  console.log("Số chẳn:");
  print(100, laSoChan);
  
  console.log("\nSố lẻ:");
  print(100, laSoLe);
  
  console.log("\nSố chính phương:");
  print(100, laSoChinhPhuong);
  
  console.log("\nSố chia 9 dư 8:");
  print(100, laSoChia9Du8);
  
  console.log("\nSố chia 7 dư 3:");
  print(100, laSoChia7Du3);
  