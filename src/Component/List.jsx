import React from "react";

const List = (props) => {
    return(
        <tbody>
            <tr>
                <td className="id">{props.id}</td>
                <td className="id">{props.id}</td>
                <td className="namaproduk">{props.namaproduk}</td>
                <td className="harga">Rp. {props.harga}</td>
                <td className="stock">{props.stock}</td>
            </tr>
        </tbody> 
    )
}

export default List;