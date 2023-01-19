import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { carouselProducts } from '../data';

const ProductCarousel = () => {
  const imgStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  return (
    <Carousel pause="hover" className="bg-primary">
      {carouselProducts.map((product) => (
        <Carousel.Item key={product.id}>
          <div className="carouselContents">
            <Link to={`/search/${product.cat}`}>
              <img style={imgStyle} src={product.img} alt={product.cat} />
              <Carousel.Caption className="carousel-caption">
                <h2 style={{ color: `${product.color}`, fontWeight: '600' }}>
                  {product.title}
                </h2>
              </Carousel.Caption>
            </Link>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
