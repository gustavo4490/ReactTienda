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
    //usar props
    constructor(props){
        super(props);
    }
    //Info que se envia en axios, los nombres deben de ser iguales a los de la api
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
            if(response.data.status ==="ok"){
                localStorage.setItem("token",response.data.result.token);
                // this.props.history.push("/dashboard"); 
                window.location.href="./dashboard"
            }else{
                this.setState({
                    error: true,
                    errorMsg: response.data.result.error_msg
                })
            }
        }).catch(error=>{
            console.log(error);
            this.setState({
                error: true,
                errorMsg: "Error: al conectar al servidor "
            })
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
    {this.state.error === true &&
    <div id="formFooter">
        <div className="alert alert-danger" role="alert">
            {this.state.errorMsg}
        </div>
    </div>
    }

  </div>
</div>
           </React.Fragment>
        );
    }

}

export default Login