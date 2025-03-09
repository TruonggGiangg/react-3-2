const DetailItem = ({ detailData, setIsOpenDetail }) => {
    if (!detailData) return null;

    const handleClose = (e) => {
        if (e.target.classList.contains("detail-overlay")) {
            setIsOpenDetail(false);
        }
    };

    return (
        <div className="detail-overlay" onClick={handleClose}>
            <div className="detail-modal">
                <button className="close-btn" onClick={() => setIsOpenDetail(false)}>
                    ×
                </button>
                <img className="detail-image" src={detailData.thumbnail} alt={detailData.title} />
                <h2 className="detail-title">{detailData.title}</h2>
                <p className="detail-price">Price: ${detailData.price}</p>
                <p className="detail-description">{detailData.description}</p>
                <p className="detail-stock">Stock: {detailData.stock}</p>
            </div>
        </div>
    );
};

export default DetailItem;
