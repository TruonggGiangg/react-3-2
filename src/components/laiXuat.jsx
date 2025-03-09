const LaiXuat = () => {
    const [principal, setPrincipal] = useState(0);
    const [rate, setRate] = useState(0);
    const [target, setTarget] = useState(0);
    const [results, setResults] = useState([]);

    const calculateInterest = () => {
        let P = principal;
        let r = rate / 100;
        let tempResults = [];
        let year = 1;

        while (true) {
            let A = P * Math.pow(1 + r, year);
            tempResults.push(A);
            if (A >= target) break;
            year++;
        }

        setResults(tempResults);
    };
    return (
        <>

            <div style={{ padding: 20 }}>
                <h2>Tính Lãi Suất Kép</h2>
                <div>
                    <label>Số tiền gốc:</label>
                    <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Lãi suất (% mỗi năm):</label>
                    <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Mục tiêu (VND):</label>
                    <input
                        type="number"
                        value={target}
                        onChange={(e) => setTarget(Number(e.target.value))}
                    />
                </div>
                <button onClick={calculateInterest}>Tính</button>

                {results.length > 0 && (
                    <div>
                        <h3>Kết quả:</h3>
                        {results.map((amount, index) => (
                            <p key={index}>
                                Năm thứ {index + 1}: <b>{amount.toFixed(2)}</b> VND
                            </p>
                        ))}
                        <p><b>Đạt mục tiêu sau {results.length} năm</b></p>
                    </div>
                )}

            </div>
        </>
    )

}

export default LaiXuat