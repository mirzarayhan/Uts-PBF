import React, { Component } from 'react';
import List from '../Component/List';

class Keranjang extends Component {
    state = {
        listProduk:[],
        listProduk1:[],
        listProduk2:[],
        insertProduk: {
            id: "",
            namaproduk: "",
            harga: ""
        },
        sum:0
    }

    ambilDataDariServerAPI = async () => {
       await fetch('http://localhost:3001/posts')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listProduk: jsonHasilAmbilDariAPI
            })
        })
        this.totalKeranjang()
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    ambilDataDariServerAPIBasket() {
        // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        fetch("http://localhost:3001/posts") // penambahan sort dan order berdasarkan parameter
          .then((response) => response.json()) // ubah response data dari URL API menjadi sebuah data JSON
          .then((jsonHasilAmbilDariAPI) => {
            // data JSON hasil ambil dari API kita masukkan ke dalam listArtikel pada state
            this.setState({
              listBasket: jsonHasilAmbilDariAPI,
            });
          });
    
        let sum = this.state.listProduk.reduce(function (prev, current) {
          return prev + +current.harga;
        }, 0);
        // console.log(total);
        this.setState({
          sum: sum,
        });
        console.log(this.state.sum);
    }

    totalKeranjang() {
        var sum2 = 0;
        console.log(this.state.listProduk);
        this.state.listProduk.forEach(obj => {
            const map = new Map(Object.entries(obj));
            sum2 += parseInt(map.get('harga'));
        });
        console.log(this.state.listProduk);
        this.setState({ sum: sum2 });
    }

    render(){
        return(
            <div className="list-artikel">
               
                <h2>Keranjang Belanja</h2>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <td>No. :</td>
                            <td>ID Produk : </td>
                            <td>Nama : </td>
                            <td>Harga : </td>
                            <td>Qty : </td>
                        </tr>
                    </thead>
                {
                    this.state.listProduk.map(artikel => {
                        return <List key={artikel.idProduk} id={artikel.id} namaproduk={artikel.namaproduk} harga={artikel.harga} gambar={artikel.gambar} stock={artikel.stock} idArtikel={artikel.id}/>
                    })
                    
                }
                </table> 
                <h2>Total = {this.state.sum}</h2>
            </div>
        )
    }
}
export default Keranjang