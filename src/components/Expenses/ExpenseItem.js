import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'
// import { useState } from 'react';

function ExpenseItem(props){
    // const [title, setTitle]=useState(data.title);

    // let title=data.title;




    
// const clickhandler=()=>{
//     setTitle('updated!!!')
//     console.log("Clicked!!!!");
// }
     
    return(
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <button onClick={clickhandler}>Change title</button> */}
            
        </Card>
        </li>
    );
}

export default ExpenseItem; 