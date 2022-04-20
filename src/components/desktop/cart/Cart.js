import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Cart() {
    let shoppingCart = useSelector((state) => state.shoppingCart)

    let imgs = [];
    for (let i = 0; i < shoppingCart.length; i++){
        imgs[i] = require(`../../../assets/products/${shoppingCart[i].src}`);
    }

    let lowerButtonsContainer = <div className={styles.lowerButtons}>
                                    <div>XD</div>
                                </div>
    
    function renderCart() {
        if(shoppingCart[0]){
            return (<div className={styles.cartContainer}>
                {shoppingCart.map((item, i) => {
                    return (<div className={styles.cartItem}>
                        <img className={styles.productImg} src={imgs[i]}></img>
                        <div className={styles.productInfo}>
                            <div className={styles.productName}>{item.name}</div></div>
                        </div>)
                })}
                {lowerButtonsContainer}
            </div>)
        }
        else {
            return (<div className={styles.cartContainer}>
                <div className={styles.cartContent}>
                    <div className={styles.noItems}>No items in shopping cart.</div>
                </div>
                {lowerButtonsContainer}
            </div>)
        }
        
    }

    return (
        <div className={styles.cartMain}>
            {renderCart()}
            
        </div>
    )
}
