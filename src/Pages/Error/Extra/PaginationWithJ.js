import React, { useEffect, useState } from "react";

const PaginationWithJ = () => {
    const [tms, setTms] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const size = 7;
    // const status = 'Approved';

    useEffect(() => {
        fetch(`https://tour-x-amky.onrender.com/tms?status=Approved`)
            .then((res) => res.json())
            .then((data) => {
                setTms(data.tms);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

    return (
        <div>
            <ul>
                {tms.map((tm, index) => (
                    <li key={tm._id}>
                        {index + 1} --- {tm.name}
                    </li>
                ))}
                <div>
                    {[...Array(pageCount).keys()].map((number) => (
                        <button
                            key={number}
                            style={{
                                margin: "4px",
                                padding: "4px 8px",
                                border: "1px solid",
                            }}
                            onClick={() => setPage(number)}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default PaginationWithJ;
