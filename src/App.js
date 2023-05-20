// import logo from './logo.svg';
import './App.css';
import './style.css'

function App() {
  // return <h3>Hello React !!<br/>สวัสดี React</h3>
  
  //ตัวอย่าง
  // let r = 'React'
  // let rn = 'React Native'
  // const el = (
  //       <div>
  //         Create web & Mobile <br/>
  //         witth {r} & {rn}
  //       </div>
  // )
  // return el

  // return เป็นตาราง
  // return (
	// 	<table border="1">
	// 		<tr><th>Product</th><th>Price</th></tr>
	// 		<tr><td>React</td><td>320</td></tr>
	// 		<tr><td>React Native</td><td>340</td></tr>
	// 	</table>
	// )

  const divStyle = {
		color: 'red',
		backgroundColor: 'powderblue',		
		fontSize: 'larger',
		padding: '3px',
	}
	return <div style={divStyle}>Hello React Navi</div>
  // <table border="1">
	//   <tr><th>Product</th><th>Price</th></tr>
	//   <tr><td>React</td><td>320</td></tr>
	//   <tr><td>React Native</td><td>340</td></tr>
	// </table>

}

export default App;
