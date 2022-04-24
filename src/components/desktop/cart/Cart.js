import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../../redux/shoppingCartSlice'

export default function Cart() {
    

    let dispatch = useDispatch();
    let shoppingCart = useSelector((state) => state.shoppingCart)

    let imgs = [];
    for (let i = 0; i < shoppingCart.length; i++){
        imgs[i] = require(`../../../assets/products/${shoppingCart[i].data.src}`);
    }

    let lowerButtonsContainer = <div className={styles.lowerButtons}>
                                    <Link className={styles.cartLink} to="/">Continue shopping</Link>
                                    <Link className={styles.cartLink} to="/payment">Payment</Link>
    </div>
    
    function renderCart() {
        if(shoppingCart[0]){
            return (<div className={styles.cartContainer}>
                {shoppingCart.map((item, i) => {
                    return (<div key={item.data.id} className={styles.cartItem}>
                                <img className={styles.productImg} src={imgs[i]}></img>
                                <div className={styles.productInfo}>
                                    <div className={styles.productName}>{item.data.name}</div>
                                    <div className={styles.quantityWrapper}>
                                    <h2>Quantity:</h2>
                                    <button className={styles.quantityButton} onClick={() => {
                                        dispatch(add(item.data))
                                    }}>+</button>
                                    <div className={styles.productQuantity}>{item.productCount}</div>
                                    <button className={styles.quantityButton} onClick={() => {
                                        dispatch(remove(item.data))
                                }}>-</button>
                            </div>
                            <div className={styles.productPrice}>{item.data.price}</div>
                                </div>
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
