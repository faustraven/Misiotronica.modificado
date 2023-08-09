import { useState } from "react";
import Card from "./Card";
import TopBar from "./TopBar";

function Productos() {
  const allProducts = [
    {
      title:
        "GUSGU Cámara web QHD 2K con sensor Sony, cámara web G940 con micrófono",
      image:
        "https://m.media-amazon.com/images/I/71CkoWFu9gL._AC_UY327_FMwebp_QL65_.jpg",
      price: 199,
    },
    {
      title:
        "Razer Leviathan V2 X: barra de sonido para PC - Diseño compacto - Chroma RGB",
      image:
        "https://imgs.search.brave.com/DNm0j0h_hzVy5VfWvkL7NaMxViXXGNl2Tz3NT_88idM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nYW1lc3RvcC5j/b20vaS9nYW1lc3Rv/cC8xMTIwODQxNy9S/YXplci1MZXZpYXRo/YW4tVjItWC1QQy1H/YW1pbmctYW5kLU11/c2ljLVNvdW5kLUJh/ci1TcGVha2VyLS0t/QmxhY2s_JHBkcCQ",
      price: 250,
    },
    {
      title:
        "Teclado mecánico Razer BlackWidow V3: Teclas mecánicas - Táctil y sonoro - Iluminación RGB",
      image:
        "https://imgs.search.brave.com/WnZQC_djiIU3hpFf32Ub4C_B8buYQg1t9HCgSjNDfE8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29tcHV0ZXJzaG9w/cGluZy5jb20uYXIv/SW1hZ2VzL1Byb2R1/Y3Rvcy9SWjAzLTAz/NDkxMjAwLVIzMTFf/Rm90bzAuanBn",
      price: 99,
    },
    {
      title: "Luz Solar Exterior, [Nuevo Modelo 468 LED Luces Solares ]",
      image: "https://m.media-amazon.com/images/I/815GQvQQjmL._AC_SL1500_.jpg",
      price: 349,
    },
    {
      title: "Yonusa SIRENA 30W",
      image: "https://m.media-amazon.com/images/I/51gHxC6bMyL._AC_SL1500_.jpg",
      price: 300,
    },
    {
      title: "DURACELL - Pilas AAA recargables NiMH",
      image: "https://m.media-amazon.com/images/I/61o-1AHveKS._SL1500_.jpg",
      price: 389,
    },
    {
      title: "2M Cable USB C 2Pack",
      image: "https://m.media-amazon.com/images/I/71QwUqFBJQL._SL1500_.jpg",
      price: 149,
    },
    {
      title: "Repetidor/ Router Wi-Fi 6",
      image:
        "https://m.media-amazon.com/images/I/51Vg6VTEMDL.__AC_SX300_SY300_QL70_ML2_.jpg",
      price: 1280,
    },
  ];

  const [products, setProducts] = useState(allProducts);

  return (
    <>
      <TopBar products={products} setProducts={setProducts} />

      <div className="productos">
        {products.map((producto) => (
          <Card key={producto.title} producto={producto} />
        ))}
      </div>
    </>
  );
}

export default Productos;
