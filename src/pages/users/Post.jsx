import React, { useEffect, useState } from 'react'
import { RiBook2Fill, RiDoorLine, RiUser2Fill } from "react-icons/ri";
import Guest from '../../layouts/Guest';
import { createClient } from '@supabase/supabase-js';

export default function Index() {
    const supabase = createClient('')
    const [data, setData] = useState({
        namaProduct: '',
        deskripsiProduct: '',
        hargaProduct: ''
    })
    const [product, setProdcut] = useState([])

    const handleChangedata = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    console.log(data);

    useEffect(() => {
        getProduct();
    }, [])

    const getProduct = () => {
        const { data } = supabase.from('product').select()
        setProdcut(data);
    }

    return (
        <Guest>
            <div className="container">
                <h1>Halaman Admin</h1>
                <form >
                    <div className="row">
                        <div className="header-text bg-primary p-2 text-white rounded-2">
                            Tambah Product
                        </div>

                        <div className="col-md-4 mt-4">
                            <label className='input-label'> Masukkan Nama Barang</label>
                            <div className="input-group">
                                <div className="input-group-text"><RiUser2Fill /></div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Nama Barang'
                                    name='namaProduct'
                                    onChange={handleChangedata} />
                            </div>
                        </div>


                        <div className="col-md-4 mt-4">
                            <label className='input-label'> Masukkan Deskripsi Barang</label>
                            <div className="input-group">
                                <div className="input-group-text"><RiBook2Fill /></div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Deskripsi Barang'
                                    name='deskripsiProduct'
                                    onChange={handleChangedata} />
                            </div>
                        </div>

                        <div className="col-md-4 mt-4">
                            <label className='input-label'> Masukkan Harga Barang</label>
                            <div className="input-group">
                                <div className="input-group-text"><RiDoorLine /></div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Harga Barang'
                                    name='hargaProduct'
                                    onChange={handleChangedata} />
                            </div>
                        </div>

                        <div className='mt-3'>
                            <button className='btn btn-primary' >Simpan</button>
                        </div>


                    </div>
                </form>

                {/* row ke 2 */}
                <div className="row mt-5">
                    <div className="header-text bg-primary p-2 text-white rounded-2">
                        Tambah Product
                    </div>

                    <div className="col-md-4 mt-4">
                        <label className='input-label'> Masukkan Nama Barang</label>
                        <div className="input-group">
                            <div className="input-group-text"><RiUser2Fill /></div>
                            <input type="text" className="form-control" placeholder='Nama Barang' />
                        </div>
                    </div>


                    <div className="col-md-4 mt-4">
                        <label className='input-label'> Masukkan Deskripsi Barang</label>
                        <div className="input-group">
                            <div className="input-group-text"><RiBook2Fill /></div>
                            <input type="text" className="form-control" placeholder='Deskripsi Barang' />
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <label className='input-label'> Masukkan Harga Barang</label>
                        <div className="input-group">
                            <div className="input-group-text"><RiDoorLine /></div>
                            <input type="text" className="form-control" placeholder='Harga Barang' />
                        </div>
                    </div>

                    <div className='mt-3'>
                        <button className='btn btn-primary'>Simpan</button>
                    </div>
                </div>
            </div>
        </Guest>
    )
}
