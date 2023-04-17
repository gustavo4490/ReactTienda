import React from "react";
//css
import '../assetss/css/login.css';
//imagenes
import logo from '../assetss/img/iconoReact.png';
//Servicios
import {apiUrl} from '../services/apiRest.js'
//Librerias
import axios from "axios";

class Login extends React.Component{
    state = {
        form:{
            "usuario"  : "",
            "password" : ""
        },
        error : false,
        errorMsg : ""    
    }
    //Evitar que se recargue la pagina
    manejadorSumbit(e){
        e.preventDefault();
    }
    manejadorChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        //  console.log(this.state.form);
    }
    manejadorBoton= () => {
        console.log("enviado");
        let url = apiUrl + "auth";
        axios.post(url,this.state.form)
        .then(response =>{
            console.log(response);
        })
    }

    render(){
        return(
           <React.Fragment>
            <div className="wrapper fadeInDown">
  <div id="formContent">

    <div className="fadeIn first">
        <br /><br />
      <img src={logo} width="100px" alt="User Icon" />
      <br /><br />
    </div>

    <form onSubmit={this.manejadorSumbit}>
      <input type="text" id="login" className="fadeIn second" name="usuario" placeholder="login" onChange={this.manejadorChange} />
      <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" onChange={this.manejadorChange} />
      <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton} />
    </form>

    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
           </React.Fragment>
        );
    }

}

export default Login