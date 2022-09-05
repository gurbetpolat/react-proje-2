
import "./Users.scss";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { INCREMENT } from './slices/siraCounterSlice'
function Users() {

    const { hangiSira, veriler } = useSelector((state) => state.siraCounter)
    const dispatch = useDispatch();


    return (

        <div className="container" >
            <div className="textalanı">
                <p id="textcümle" className="sözler" style={{ color: veriler[hangiSira].color }}>
                    {veriler[hangiSira].text}
                </p>

                <p className="yazar" style={{ color: veriler[hangiSira].color }}>{veriler[hangiSira].sanatcı} </p>

            </div>

            <div className="user">

                <div className="user-left">
                    <div className="twitter" style={{ backgroundColor: veriler[hangiSira].color }}>
                        <i id="twitter" className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="tumblr" style={{ backgroundColor: veriler[hangiSira].color }}>
                        <i className="fa-brands fa-tumblr"></i>
                    </div>
                </div>

                <div className="user-right">
                    <button id="btn1" onClick={() => {
                        dispatch(INCREMENT());

                    }}
                        style={{ backgroundColor: veriler[hangiSira].color }}
                    >New quote</button>
                </div>




            </div>
        </div>
    );

}

export default Users;