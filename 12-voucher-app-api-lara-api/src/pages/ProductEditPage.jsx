/* eslint-disable no-unused-vars */
import React from 'react'
import Container from '../components/Container';
import Breadcrumb from '../components/Breadcrumb';
import ProductEditCard from '../components/ProductEditCard';

const ProductEditPage = () => {
    return (
        <section>
            <Container>
                <Breadcrumb currentPageTitle={"Edit Product"}
                    links={[{ title: "Product Module", path: "/products" }]} />
                <ProductEditCard />
            </Container>
        </section>
    )
}

export default ProductEditPage
