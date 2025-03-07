import React from 'react';
import ProductCard from '../products/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';

const DailyEssentials = () => {
    const { data: products = [] } = useFetchAllProductsQuery();
    const filteredProducts = products.filter(product => product.category === "dialyessentials");

    return (
        <div className='mb-10'>
            <h3 className='text-2xl font-semibold mb-4 text-blue-500'>Daily Essentials</h3>
            {filteredProducts.length > 0 ? (
                <div className="relative">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={{ prevEl: '.daily-prev', nextEl: '.daily-next' }}
                        allowTouchMove={false}
                        speed={600}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 40 },
                            1024: { slidesPerView: 2, spaceBetween: 50 },
                            1180: { slidesPerView: 3, spaceBetween: 50 }
                        }}
                        modules={[Navigation]}
                        className="mySwiper py-8"
                    >
                        {filteredProducts.map((product, index) => (
                            <SwiperSlide key={index}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className="daily-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md z-10">❮</button>
                    <button className="daily-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md z-10">❯</button>
                </div>
            ) : (
                <p className="text-gray-500">No products available in this category.</p>
            )}
        </div>
    );
};

export default DailyEssentials;
