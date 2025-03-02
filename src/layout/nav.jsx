import search from '../assets/img/List 1.png'
import up from '../assets/img/Chevron up large 1.png'
import slider from '../assets/img/Slider 1.png'
import rating1 from '../assets/img/Rating 11.png'

import rating2 from '../assets/img/Rating 12.png'
import rating3 from '../assets/img/Rating 13.png'
import rating4 from '../assets/img/Rating 14.png'
import rating5 from '../assets/img/Rating 15.png'

const Nav = () => {
    return (
        <>
            <div className="nav-contain">
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                }}>
                    <img src={search} alt="" />
                    <h2>FILTER</h2>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    marginTop: "12px"

                }}>
                    <h4>Type</h4>
                    <img src={up} alt="" />
                </div>

                <div className='checkbox-group'>
                    <div className='checkbox'>
                        <input type="checkbox" />
                        <label htmlFor="">Pan-fried</label>

                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" />
                        <label htmlFor="">Pan-fried</label>

                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" />
                        <label htmlFor="">Pan-fried</label>

                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" />
                        <label htmlFor="">Pan-fried</label>

                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" />
                        <label htmlFor="">Pan-fried</label>

                    </div>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    marginTop: "12px"

                }}>
                    <h4>Time</h4>
                    <img src={up} alt="" />
                </div>

                <div>
                    <img src={slider} alt="" style={{ padding: "12px" }} />
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    marginTop: "12px"

                }}>
                    <h4>Rating</h4>
                    <img src={up} alt="" />
                </div>

                <div className='rating-group'>
                    <div className='rating'>
                        <input type="radio" />
                        <img src={rating1} alt="" />
                    </div>
                    <div className='rating'>
                        <input type="radio" />
                        <img src={rating2} alt="" />
                    </div>
                    <div className='rating'>
                        <input type="radio" />
                        <img src={rating3} alt="" />
                    </div>
                    <div className='rating'>
                        <input type="radio" />
                        <img src={rating4} alt="" />
                    </div>
                    <div className='rating'>
                        <input type="radio" />
                        <img src={rating5} alt="" />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <button style={{
                        backgroundColor: "#ff69b4",
                        padding: "20px 52px",
                        border: "none",
                        borderRadius: "20px",
                        color: "white",
                        marginTop: "12px"
                    }}>
                        APPLY
                    </button>
                </div>

            </div>
        </>
    )
}

export default Nav