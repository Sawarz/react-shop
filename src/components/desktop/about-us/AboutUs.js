import React from 'react'
import styles from './styles.module.css'
import Emoji from '../../desktop&mobile/emoji/Emoji'
import img from '../../../assets/about-us/about-us.png'

export default function AboutUs() {
  return (
      <div>
          <div className={styles.aboutUs}>
      <h1 className={styles.h1Style}>About us<small className={styles.blueDot}>.</small></h1>
      <div className={styles.imgWrapper}><img className={styles.image}src={img}></img></div>
			<section className={styles.section}>
        <h2 className={styles.headerText}>A company with traditions <Emoji symbol="🗿" label="moai statue" /></h2>
        <div className={styles.underH2Line}></div>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
					corrupti veritatis. Voluptatem necessitatibus sapiente omnis a facere
					ipsa, sed labore consequatur distinctio cupiditate dicta tenetur
					voluptas deserunt iure doloreatque.
				</p>
			</section>
			<section className={styles.section}>
        <h2 className={styles.headerText}>Our people <Emoji symbol="💂" label="english guardsman" /></h2>
        <div className={styles.underH2Line}></div>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
					corrupti veritatis. Voluptatem necessitatibus sapiente omnis a facere
					ipsa, sed labore consequatur distinctio cupiditate dicta tenetur
					voluptas deserunt iure doloreatque.
				</p>
			</section>
			<section className={styles.section}>
        <h2 className={styles.headerText}>What we do for our customers</h2>
        <div className={styles.underH2Line}></div>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
					corrupti veritatis. Voluptatem necessitatibus sapiente omnis a facere
					ipsa, sed labore consequatur distinctio cupiditate dicta tenetur
					voluptas deserunt iure doloreatque.
				</p>
			</section>
			<section className={styles.section}>
        <h2 className={styles.headerText}>Our mission</h2>
        <div className={styles.underH2Line}></div>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
					corrupti veritatis. Voluptatem necessitatibus sapiente omnis a facere
					ipsa, sed labore consequatur distinctio cupiditate dicta tenetur
					voluptas deserunt iure doloreatque.
				</p>
			</section>
		</div>
    </div>
  )
}
