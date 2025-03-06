import { Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9, Product10, Product11 } from "./assets/products/index.js"
import { Blog1, Blog2, Blog3, Blog4, Blog6, Blog7, Blog8 } from "./assets/blog/index.js"

const productList = [
    {
        name: "Product 1",
        image: Product1,
        price: 20.25,
        isNew: true,
        isSale: true,
        rating: 3,
        isFeatured: true
    },
    {
        name: "Product 2",
        image: Product2,
        price: 30.56,
        isNew: false,
        isSale: true,
        rating: 4,
        isFeatured: true
    },
    {
        name: "Product 3",
        image: Product3,
        price: 42.20,
        isNew: true,
        isSale: false,
        rating: 3,
        isFeatured: true
    },
    {
        name: "Product 4",
        image: Product4,
        price: 49.00,
        isNew: false,
        isSale: true,
        rating: 4,
        isFeatured: true
    },
    {
        name: "Product 5",
        image: Product5,
        price: 62.50,
        isNew: true,
        isSale: false,
        rating: 5,
        isFeatured: true
    },
    {
        name: "Product 6",
        image: Product6,
        price: 20.25,
        isNew: false,
        isSale: false,
        rating: 3,
        isFeatured: false
    },
    {
        name: "Product 7",
        image: Product7,
        price: 30.56,
        isNew: false,
        isSale: true,
        rating: 4,
        isFeatured: false
    },
    {
        name: "Product 8",
        image: Product8,
        price: 42.20,
        isNew: true,
        isSale: false,
        rating: 3,
        isFeatured: false
    },
    {
        name: "Product 9",
        image: Product9,
        price: 49.00,
        isNew: false,
        isSale: true,
        rating: 4,
        isFeatured: false
    },
    {
        name: "Product 10",
        image: Product10,
        price: 62.50,
        isNew: false,
        isSale: false,
        rating: 5,
        isFeatured: false
    },
    {
        name: "Product 11",
        image: Product11,
        price: 20.25,
        isNew: true,
        isSale: true,
        rating: 3,
        isFeatured: false
    },
    {
        name: "Product 12",
        image: Product2,
        price: 40.56,
        isNew: false,
        isSale: false,
        rating: 4,
        isFeatured: false
    }

]

const blogList = [
    {
        title: "Blog Title 1",
        image: Blog1,
        date: "12 October 2025",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet tenetur ipsam neque obcaecati numquam labore magni deleniti voluptate natus sunt animi architecto iste odit error similique accusamus atque, iure nam."
    },
    {
        title: "Blog Title 2",
        image: Blog2,
        date: "11 October 2025",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur pariatur asperiores eius impedit, magnam ipsa ex odio! Assumenda porro architecto atque sapiente maiores rerum nisi distinctio dolorum, velit ducimus inventore?"
    },
    {
        title: "Blog Title 3",
        image: Blog3,
        date: "10 October 2025",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur pariatur asperiores eius impedit, magnam ipsa ex odio! Assumenda porro architecto atque sapiente maiores rerum nisi distinctio dolorum, velit ducimus inventore?"
    }
]

export { productList, blogList }