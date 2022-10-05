const products = { 
  "hombre": [
      { id: 0, nombre: "BOTINES SUPERFLY 8 ELITE FG NIKE", precio: "$82999", imagen: "/imgs/botines.jpg" },
      { id: 1, nombre: "ZAPATILLAS HOVR SONIC 5 UNDER ARMOUR", precio: "$38499", imagen: "/imgs/zapatilla.jpg" },
      { id: 2, nombre: "ZAPATILLAS R850 TRICOLORE LE COQ SPORTIF", precio: "$19499", imagen: "/imgs/zapatilla2.jpg" },
      { id: 3, nombre: "CHINELAS ADILETTE SHOWER ADIDAS", precio: "$8999", imagen: "/imgs/chinelas.jpg" },
      { id: 4, nombre: "BOTINES COPA SENSE.4 FXG ADIDAS", precio: "$18999", imagen: "/imgs/botines2.jpg" },
      { id: 5, nombre: "BOTINES TACTO II FG/AG PUMA", precio: "$14999", imagen: "/imgs/botines3.jpg" },
  ],
  "mujer": [
      { id: 6, nombre: "SANDALIAS BROOKLYN MID WEDGE CROCS", precio: "$13299", imagen: "/imgs/sandalias.jpg" },
      { id: 7, nombre: "ZAPATILLAS AXILUS ACE FILA", precio: "$26989", imagen: "/imgs/zapatillas6.jpg" },
      { id: 8, nombre: "BOTAS CHUCK TAYLOR ALL START HI CONVERSE", precio: "$16999", imagen: "/imgs/botas.jpg" },
      { id: 9, nombre: "ZAPATILLAS WIND IV TOPPER", precio: "$13399", imagen: "/imgs/zapatillas7.jpg" },
      { id: 10, nombre: "ZAPATILLAS DISPERSE XT 2 PUMA", precio: "$17999", imagen: "/imgs/zapatillas8.jpg" },
      { id: 11, nombre: "OJOTAS SLIM ORGANIC HAVAIANAS", precio: "$4899", imagen: "/imgs/ojotas.jpg" },
  ],
  "niños": [
      { id: 12, nombre: "BOTINES FUTURE 3.3 TT JR PUMA", precio: "$19999", imagen: "/imgs/botines4.jpg" },
      { id: 13, nombre: "BOTINES ICONIC TF KAPPA", precio: "$9399", imagen: "/imgs/botines5.jpg" },
      { id: 14, nombre: "BOTINES FUTURE Z 4.4 PUMA", precio: "$15999", imagen: "/imgs/botines6.jpg" },
      { id: 15, nombre: "ZAPATILLAS GANGES ADDNICE", precio: "$9499", imagen: "/imgs/zapatillas3.jpg" },
      { id: 16, nombre: "ZAPATILLAS OLDI KIDS TOPPER", precio: "$12699", imagen: "/imgs/zapatillas4.jpg" },
      { id: 17, nombre: "ZAPATILLAS VULCAN METALLIC II ADDNICE", precio: "$9499", imagen: "/imgs/zapatillas5.jpg" },
  ],
};

export function getProductsByCategoryPromise(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (categoryId !== undefined) {
          resolve(products[categoryId]);
        } else {
          resolve(Object.values(products).flat());
        }        
    }, 1000);
  });
};

export function getProductByIdPromise(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Object.values(products).flat()[productId]);     
    }, 1000);
  });
}