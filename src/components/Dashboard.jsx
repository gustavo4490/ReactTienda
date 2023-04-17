import React from "react";
import Encabezado from "../templates/Encabezado";
import { apiUrl } from "../services/apiRest";
import axios from "axios";

class Dashboard extends React.Component{

    state = {
    productos    : [] 
    }

    clicProducto(id){
        console.log(id);
    }

    componentDidMount(){
        let url = apiUrl + "productos?page=1" ;
        axios.get(url)
        .then(Response =>{
            this.setState({
            productos : Response.data
        })
        })


    }
    render(){
        return(
            <React.Fragment>
                <Encabezado></Encabezado>
                <div className="container">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Existencia</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.productos.map((value,index)=>{
                        return(
                            <tr key ={index} onClick={()=> this.clicProducto(value.idProducto)} >
                                <td>{value.idProducto}</td>
                                <td>{value.NombreProducto}</td>
                                <td>{value.marca}</td>
                                <td>{value.precio}</td>
                                <td>{value.existecia}</td>
                            </tr>
                        )
                    })}
                                                          
                </tbody>
            </table>



                </div>
            </React.Fragment>
        );
    }

}

export default Dashboard