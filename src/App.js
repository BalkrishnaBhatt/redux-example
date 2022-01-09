import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';
import './App.css';


function App() {



  // const [age, setAge] = useState(21);

  // function onAgeUp() {
  //   setAge(age + 1); 
  // }
  // function onAgeDown() {
  //   setAge(age - 1); 
  // }

  const age = useSelector((state) => state.age)
  const history = useSelector((state) => state.history)
  const a = useSelector((state) => state.rA.a)
  const b = useSelector((state) => state.rB.b)


  const dispatch = useDispatch();

  return (
    <div className="App">

      <div className='col'> A: <span></span> {a} <br />
        <button onClick={()=> dispatch({type:'UPDATE_A',b:b}) }>Update A</button>
      </div>
  
  
      <div className='col'> B: <span></span> {b} <br />
        <button onClick={()=> dispatch({type:'UPDATE_B',a:a}) }> Update B</button>
      </div>

      {/* <div>Age: {age} <span></span> </div>
      <button onClick={() => dispatch({ type: 'AGE_UP', val: 1 })} >Age Up</button>
      <button onClick={() => dispatch({ type: 'AGE_DOWN', val: 1 })}>Age Down</button>
      <br />
      <div>
        <ul>
          {
            history.map(item => {
              return <li onClick={() => dispatch({ type: 'DELETE_HISTORY', id: item.id })} className='historyLi' key={item.id}>{item.age}</li>
            })
          }
        </ul>
      </div> */}
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return{
//     onAgeUp: () => dispatch({type:'AGE_UP'}),
//     onAgeDown: () => dispatch({type:'AGE_DOWN'})
//   }
// }

// const mapStateToProps = (state) => {
//   return{
//     age:state.age
//   }
// }

//export default connect(mapStateToProps,mapDispatchToProps) (App);

export default App;
