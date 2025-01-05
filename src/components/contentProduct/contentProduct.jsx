import { useParams } from "react-router-dom"

export default function ContentProduct() {
  const { idProduct } = useParams();

  return (
    <div>
      <p>oi</p>
      <p style={{ color: 'black' }}>{idProduct.idProduct}</p>
    </div>
  )
}