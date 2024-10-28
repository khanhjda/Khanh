import React, { useState } from "react";
import { Page } from "zmp-ui";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

const ItemDetail = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "image/item-detail.jpg",
        "image/banner.jpg", // Thêm các hình ảnh bạn muốn ở đây
    ];

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <Page className="page">
            <div className="img-container">
                <button onClick={handlePrevImage} className="left-button">
                    <ArrowBackIos style={{ fontSize: 24 }} />
                </button>
                <img className="h-full" src={images[currentImageIndex]} alt={`item-detail-${currentImageIndex}`} />
                <button onClick={handleNextImage} className="right-button">
                    <ArrowForwardIos style={{ fontSize: 24 }} />
                </button>
            </div>
            <div className="cost-container">
                <svg className="icon-dollar" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.95841 23.9868V0.590199H9.44741V23.9868H6.95841ZM7.85445 21.2987C6.46061 21.2987 5.12485 21.1162 3.84716 20.7511C2.56948 20.3695 1.54069 19.8799 0.760802 19.2826L2.12975 16.246C2.87645 16.777 3.7559 17.2167 4.76809 17.5652C5.79688 17.897 6.83396 18.063 7.87934 18.063C8.67582 18.063 9.31467 17.9883 9.79587 17.839C10.2937 17.673 10.6587 17.449 10.891 17.1669C11.1233 16.8849 11.2395 16.5613 11.2395 16.1962C11.2395 15.7316 11.057 15.3666 10.6919 15.1011C10.3269 14.819 9.84565 14.595 9.24829 14.429C8.65093 14.2465 7.9872 14.0806 7.25709 13.9312C6.54358 13.7653 5.82177 13.5662 5.09166 13.3339C4.37815 13.1016 3.72271 12.8029 3.12535 12.4378C2.52799 12.0728 2.03849 11.5916 1.65684 10.9942C1.29179 10.3969 1.10926 9.63357 1.10926 8.70434C1.10926 7.70874 1.37476 6.8044 1.90574 5.99133C2.45332 5.16166 3.2664 4.50623 4.34496 4.02502C5.44012 3.52722 6.80907 3.27832 8.45181 3.27832C9.54697 3.27832 10.6255 3.41107 11.6875 3.67656C12.7495 3.92546 13.687 4.30711 14.5001 4.8215L13.2556 7.88297C12.4425 7.41836 11.6294 7.07819 10.8164 6.86248C10.0033 6.63017 9.20681 6.51402 8.42692 6.51402C7.64704 6.51402 7.00819 6.60528 6.51039 6.78781C6.01259 6.97034 5.65584 7.21094 5.44012 7.50962C5.22441 7.79171 5.11655 8.12357 5.11655 8.50522C5.11655 8.95324 5.29908 9.31829 5.66413 9.60038C6.02919 9.86587 6.51039 10.0816 7.10775 10.2475C7.70511 10.4135 8.36055 10.5794 9.07406 10.7453C9.80417 10.9113 10.526 11.1021 11.2395 11.3178C11.9696 11.5335 12.6333 11.8239 13.2307 12.1889C13.8281 12.554 14.3093 13.0352 14.6743 13.6326C15.056 14.2299 15.2468 14.9849 15.2468 15.8975C15.2468 16.8766 14.973 17.7726 14.4254 18.5857C13.8778 19.3987 13.0565 20.0542 11.9613 20.552C10.8827 21.0498 9.51379 21.2987 7.85445 21.2987Z" fill="#2A7D37"/>
                </svg>
                <div className="cost">152.00</div>
                <div className="book-name">SEOUL Spring 2024 - artdrunk</div>
            </div>
            <hr className="my-1 border-gray-600 w-[303px] mx-auto" />
            <div className="info-container">
                <p className={`text-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                    We designed the Seoul Art Guide, published by artdrunk, a global media brand that explores the world through art for everyone. It features a road trip outside of Seoul to introduce you to various scenes of the Korean art scene, an interview with artist KOO JEONG A, who will be exhibiting at the Korean Pavilion at the Venice Biennale, and much more.
                </p>
                <button onClick={toggleExpand} className="toggle-button">
                    {isExpanded ? 'Hide detail' : 'See detail'}
                </button>
            </div>
            <hr className="my-2 border-gray-600 w-[303px] mx-auto" />
            <div className="comment-container"></div>
        </Page>
    );
};

export default ItemDetail;
