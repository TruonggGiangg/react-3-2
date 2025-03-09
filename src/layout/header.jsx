import logo from '../assets/img/avatar_small.png'

import { getUserAvatar } from '../services/api';
import { useEffect, useState } from 'react';


const Header = () => {
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getUserAvatar();
            if (res.users) {
                setAvatar(res.users[0].image);
            }
        };
        fetchApi();
    }, []);

    console.log(avatar)

    return (
        <>
            <div className="header">
                <img src={logo} alt="" className='logo' />

                <input type="text" className='search-input' />

                <div className='menu'>
                    <div className='menu-item'>
                        Home
                    </div>
                    <div className='menu-item'>
                        Product
                    </div>
                    <div className='menu-item'>
                        Order
                    </div>
                    <div className='menu-item'>
                        About
                    </div>
                </div>

                <button className='recipe-btn'>
                    Your recipe box
                </button>

                <img src={avatar} alt="" className='avatar' />
            </div>
        </>
    )
}

export default Header