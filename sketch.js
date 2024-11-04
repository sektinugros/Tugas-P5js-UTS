function setup() {
  createCanvas(600, 500);
  noLoop();
}

function draw() {
  background(135, 206, 235); 

  // Matahari
  fill(255, 223, 0);
  noStroke();
  ellipse(300, 100, 80, 80);

 
  // Gunung-gunung
  gunung(250, 100, 500);
  gunung(500, 150, 400);

  
  // Awan
  awan(50, 100);
  awan(250, 70);
  awan(450, 150);
  
    //Memanggil fungsi untuk menggambar persegi panjang
  gambarSegiPanjang(0, 400, 600, 100, color(100, 155, 30)); 
 
  //gambar jalan
  gambarSegitiga(20, 400, 200, 500, 400, 500);
  
}

// Fungsi untuk menggambar gunung
function gunung(x, y, size) {
  fill(100, 200, 100); // 
  rect(100, 100, 100)
  
  }

// Fungsi untuk menggambar lahan hijau
function gambarSegiPanjang(x, y, lebar, tinggi, warna) {
  fill(warna); 
  noStroke();  
  rect(x, y, lebar, tinggi); 
}

// Fungsi untuk menggambar gunung
function gunung(x, y, size) {
  fill(100, 155, 100); 
  triangle(x, y, x - size / 2, height, x + size / 2, height);  
  }

// Fungsi untuk menggambar awan
function awan(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y, 50, 50);
  ellipse(x + 30, y, 50, 50);
  ellipse(x + 15, y - 20, 50, 50);
}

function gambarSegitiga(x1, y1, x2, y2, x3, y3) {
  fill(94, 94, 93); // Warna segitiga
  noStroke();  // Menghilangkan garis tepi
  triangle(x1, y1, x2, y2, x3, y3); 
}
