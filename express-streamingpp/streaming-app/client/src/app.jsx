import React, { Component } from 'react';
import styles from './css/reg.css';

class App extends Component{
   render(){
      return(
         <div>
            <div className={styles.main_div}>
                <div className={styles.navbar}>
                hello world</div>
                <div className={styles.login_form}>
                </div>
                <div className={styles.footer}>
                </div>
            </div>
         </div>
      );
   }
}
export default App;