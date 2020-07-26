import React from 'react';
import './styles.css';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {

    return (

        <footer>

            <ul className="footer-info FAQ">
                <li><h2>FAQ</h2></li>

                <li><a href="">Como comprar</a></li>
                <li><a href="">Formas de pagamento</a></li>
                <li><a href="">Prazos e entregas</a></li>
                <li><a href="">Segurança</a></li>
            </ul>
            
            <ul className="footer-info ABOUT">
                
                <li><h2>Sobre nós</h2></li>
                <li><a href="">Termos e condições</a></li>
                <li><a href="">Sobre nós</a></li>
                <li><a href="">Trocas e devoluções</a></li>
                <li><a href="">TESTE</a></li>
                  
            </ul>

            <div className="copyright">Copyright © 2020 | Todos os direitos reservados
                <span><FaFacebookF /></span>
                <span className="insta"><FaInstagram /></span>
            </div>
        </footer>
    )
};