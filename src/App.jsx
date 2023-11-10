import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";


export default function App() {

  const productData = {
    name: 'Bose Noise Cancelling Headphones 700',
    precio: '$350.000',
    SKU: 'AB3-17F',
    descripcion: ' Audífonos con diseño over-ear. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.  El paquete de auriculares Ultra de QUIETCOMFORT incluye: auriculares QuietComfort Ultra | Cable de audio | Cable USB-A a USB-C | Estuche de transporte | Energizer Ultimate QE10011PQ 10000mAh Power Bank',
    marca: 'Bose',
    img: 'https://m.media-amazon.com/images/I/61YHjrD+TzL._AC_UF894,1000_QL80_.jpg',
    stock: 5,
  }

  return (
    <div>
          <Nav />
          <Main {...productData}/>
          <Footer /> 
    </div>
  )
}


