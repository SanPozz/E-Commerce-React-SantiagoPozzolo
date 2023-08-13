import { useState, useContext } from 'react'
import { getFirestore, collection, writeBatch, addDoc, Timestamp, doc} from 'firebase/firestore'
import { Cart } from './Context/cartContext'
import { Link } from 'react-router-dom'
import { Loader } from './Loader';

import Swal from 'sweetalert2';

const Checkout = () => {

    const [orderId, setOrderId] = useState('')
    const [creatingOrder, setCreatingOrder] = useState(false)
    const [formData, setFormData] = useState({
        name:"", email:"", emailConfirm:"", phone:""
    })
    const { cart, totalCart, clearCart } = useContext(Cart)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value   
        })
    }

    const createOrder = (e) => {
        e.preventDefault();
        setCreatingOrder(true)
        delete formData.emailConfirm
        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = totalCart()

        order.products = cart.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.title
            const price = cartItem.price
            const qty= cartItem.qty
            const totalPrice = cartItem.price * cartItem.qty
            return {id, name, price, qty, totalPrice}
        })

        const db = getFirestore()
        addDoc(collection(db, 'orders'), order)
        .then(resp => {
            setOrderId(resp.id)
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-right',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                }
            });
            Toast.fire({
                icon: 'success',
                title: `Se generó la compra con ID: ${resp.id}`
            });
        })
        .catch(err => console.log(err))
        .finally(() => { 
            setCreatingOrder(false)
            updateStock()
            clearCart()
            setFormData({
                name:"", email:"", emailConfirm:"", phone:""
            })
        })

        function updateStock() {
            const batch = writeBatch(db)

            order.products.map(el => {
                let updateDoc = doc(db, 'products', el.id)
                let currentStock = cart.find(item => item.id === el.id).stock

                batch.update( updateDoc, {
                    stock: currentStock - el.qty
                })
            })

            batch.commit()
        }
    }

    return (
<> 
            {creatingOrder
            ?
                <>
                    <Loader/>
                </>
            :
            orderId
            ? 
                <div className="container">
                    <div className="py-5 text-center mt-5">
                        <h4 className="my-5 cart-title">La compra se ha realizado exitosamente.</h4>
                        <Link className="add-to-cart-button-detail" to={`/`}>
                            <strong>Volver al inicio</strong>
                        </Link>
                    </div>
                </div>
            :
                <div className="form-container">
                    <div className="form-wrapper">
                        <div className="form-content">
                            <div className="form-header">
                                <form className="checkout-form"
                                    onSubmit={createOrder}
                                    onChange={handleChange}
                                >
                                    <div className="form-group">
                                        <label className="form-label">Nombre</label>
                                        <input type="name" className="form-input" name="name" placeholder="Tu Nombre" defaultValue={formData.name} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Teléfono</label>
                                        <input type="number" className="form-input" name="phone" placeholder="Tu Numero Telefonico" defaultValue={formData.phone} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-input" name="email" placeholder="Tu Mail" defaultValue={formData.email} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Confirmar Email</label>
                                        <input type="email" className="form-input" name="emailConfirm" placeholder="Tu Mail Denuevo" defaultValue={formData.emailConfirm} required />
                                    </div>
                                    <button className="form-button" 
                                        disabled={!formData.name || !formData.phone || !formData.email || formData.email !== formData.emailConfirm || cart.length === 0}>
                                        Comprar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Checkout