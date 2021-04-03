import React from "react";

const List = (props) => {
    return(
        <div className="artikel">

            <div className="gambar-artikel">
                <p className="gambar-artikel img"><img src = {props.gambar}/></p>
            </div>
            <div className="konten-barang">
                <div className="kanan">
                    <p className="id">ID Produk : {props.id}</p>
                    <p className="namaproduk">Nama Produk : {props.namaproduk}</p>
                    <p className="harga">Harga Produk : Rp.  {props.harga}</p>
                </div>
                <div className="kiri">
                    <p className="stock">Stock : {props.stock}</p>
                    <button className="btn btn-info" onClick={() =>props.tambahArtikel(props.idArtikel)}>Beli</button>
                </div>

                </div>
        </div>
    )
}

export default List;