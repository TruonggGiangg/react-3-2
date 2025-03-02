import logo from '../assets/img/avatar_small.png'

const Footer = () => {
    return (
        <>
            <div className="footer-contain">
                <div style={{
                    flex: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: "28px"
                }}>
                    <h2>About us</h2>
                    <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                    <div style={{
                        display: "flex",
                        gap: "32px"
                    }}>
                        <input type="text"
                            style={{
                                flex: 1,
                                borderRadius: "12px",
                                padding: "8px"
                            }}
                        />
                        <button style={{
                            backgroundColor: "#ff69b4",
                            padding: "8px 32px",
                            border: "none",
                            borderRadius: "20px",
                            color: "white",

                        }}>
                            SEND
                        </button>


                    </div>
                    <div style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center"
                    }}>
                        <img src={logo} alt="" style={{
                            flex: 1,
                            margin: "0 32px"
                        }} />
                        <p>2023 Chefify Company </p>
                        <p>Terms of Service Privacy Policy </p>
                    </div>
                </div>

                <div style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",

                    alignItems: "center"
                }}>
                    <h2 style={{ marginBottom: "28px" }}>
                        Learn More
                    </h2>
                    <p>Our Cooks </p>
                    <p>Our Cooks </p>
                    <p>Our Cooks </p>

                    <h2 style={{ margin: "28px 0" }}>
                        Learn More
                    </h2>
                    <p>Our Cooks </p>
                    <p>Our Cooks </p>
                    <p>Our Cooks </p>
                </div>

                <div style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",

                    alignItems: "center"
                }}>
                    <h2 style={{ marginBottom: "28px" }}>
                        Learn More
                    </h2>
                    <p>Our Cooks </p>
                    <p>Our Cooks </p>
                    <p>Our Cooks </p>
                    <p>Our Cooks </p>
                    <p>Our Cooks </p>
                    <p>Our Cooks </p>
                    <p>Our Cooks </p>
                    <p>Our Cooks </p>
                    <p>Our Cooks </p>
                </div>
            </div>
        </>
    )
}

export default Footer