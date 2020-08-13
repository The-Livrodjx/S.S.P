import React from 'react';
import {FaShoppingCart, FaTrash, FaMinus, FaPlus, FaTruck} from 'react-icons/fa'
import imgExample from '../../assets/linha-gamer.jpg'
import './styles.css'

function Cart() {
    return(
        <div className="cart-page">
            <div className="cart-shop">

                <h1><span><FaShoppingCart /></span>Carrinho de compras</h1>
            </div>

            <div className="shop-info">

                <ul className="shop-table">
                    <li><img src={imgExample} alt="Item do Carrinho"/><span>Mouse Gamer Motospeed V40 FMSMS0004PTOM 4000 DPI RGB Preto</span><span><a><FaMinus/></a> <span>1</span> <a><FaPlus /></a></span> <span>R$ 366,67</span> <span><a><FaTrash /></a></span></li>

                    <li><img src={imgExample} alt="Item do Carrinho"/><span>Mouse Gamer Motospeed V40 FMSMS0004PTOM 4000 DPI RGB Preto</span><span><a><FaMinus/></a> <span>1</span>  <a><FaPlus /></a></span> <span>R$ 366,67</span> <span><a><FaTrash /></a></span></li>

                    <li><img src={imgExample} alt="Item do Carrinho"/><span>Mouse Gamer Motospeed V40 FMSMS0004PTOM 4000 DPI RGB Preto</span><span><a><FaMinus/></a> <span>1</span>  <a><FaPlus /></a></span> <span>R$ 366,67</span> <span><a><FaTrash /></a></span></li>

                    <li><img src={imgExample} alt="Item do Carrinho"/><span>Mouse Gamer Motospeed V40 FMSMS0004PTOM 4000 DPI RGB Preto</span><span><a><FaMinus/></a> <span>1</span>  <a><FaPlus /></a></span> <span>R$ 366,67</span> <span><a><FaTrash /></a></span></li>
                </ul>

                <ul className="price-table">
                    <li>Preco</li>
                    <li>preco</li>
                </ul>

                <ul className="shipping">
                    <li><FaTruck /></li>
                </ul>
            </div>
        </div>
    );
}

export default Cart;