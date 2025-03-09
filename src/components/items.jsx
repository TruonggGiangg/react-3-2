import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import "../style/items.css";
import DetailItem from "./detailItem";

const ItemsComponent = () => {
    const [data, setData] = useState([]);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getProducts((currentPage - 1) * limit, limit);
            if (res) {
                setData(res.products);
                setPages(Math.ceil(res.total / limit));
            }
        };
        fetchApi();
    }, [currentPage]); // Gọi lại API khi trang thay đổi

    const handleOpenDetail = (item) => {
        setDetailData(item);
        setIsOpenDetail(true);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="product-container">
                {data.map((x) => (
                    <div className="product-card" key={x.id} onClick={() => handleOpenDetail(x)}>
                        <img className="product-image" src={x.thumbnail} alt={x.title} />
                        <h3 className="product-title">{x.title}</h3>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <p className="product-price">${x.price}</p>
                            <p className="product-stock">{x.stock > 0 ? "In Stock" : "Out of Stock"}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Phân Trang */}
            <div className="pagination" >
                {[...Array(pages)].map((_, i) => (
                    <button
                        key={i}
                        className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {isOpenDetail && (
                <DetailItem
                    detailData={detailData}
                    setIsOpenDetail={setIsOpenDetail}
                />
            )}
        </>
    );
};

export default ItemsComponent;
