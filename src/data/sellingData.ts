import type { product } from "../components/SellingCard";

interface sellingCardDataProps {
    id: number;
    iconName: string;
    title: string;
    quote: string;
    products: product[]
}

export const sellingCardData: sellingCardDataProps[] = [
    {
        id: 1,
        iconName: "mingcute:link-line",
        title: "Nike Sae Mall",
        quote: "Just do it bro!",
        products: [
            {
                img: "https://images.unsplash.com/photo-1614179689702-355944cd0918?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFnfGVufDB8fDB8fHww",
                price: 650
            },
            {
                img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVlbHxlbnwwfHwwfHx8MA%3D%3D",
                price: 270
            },
            {
                img: "https://images.unsplash.com/photo-1670398393298-1588f930c726?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293Ym95JTIwaGF0fGVufDB8fDB8fHww",
                price: 99
            }
        ]
    },
    {
        id: 2,
        iconName: "mdi:alphabet-b-circle",
        title: "Barudak Disaster Mall",
        quote: "Unleash Your Fashion",
        products: [
            {
                img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8fHww",
                price: 324
            },
            {
                img: "https://media.istockphoto.com/id/172417586/photo/elegant-black-leather-shoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=zEItpyub1QIwkCRejsQPXnIqYce9o7yRV4zJ0DGEdKE=",
                price: 199
            },
            {
                img: "https://images.unsplash.com/photo-1651761179569-4ba2aa054997?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdoaXRlJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww",
                price: 120
            }
        ]
    },
    {
        id: 3,
        iconName: "uil:google",
        title: "Galaxy Galleria Mall",
        quote: "Be Extraordinary",
        products: [
            {
                img: "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fHww",
                price: 179
            },
            {
                img: "https://media.istockphoto.com/id/2027896885/photo/new-unbranded-fashion-stylish-black-sport-walking-shoes-or-sneakers-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=STE2nowjoKsP8RjM2TU7VuyN4XzFcMsbHViRod6gSww=",
                price: 199
            },
            {
                img: "https://images.unsplash.com/photo-1589226849736-8d0e0c78e869?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9sZGVkJTIwcGFudHxlbnwwfHwwfHx8MA%3D%3D",
                price: 253
            }
        ]
    },
    {
        id: 4,
        iconName: "mdi:alphabet-w-circle",
        title: "Galaxy Galleria Mall",
        quote: "Be Extraordinary",
        products: [
            {
                img: "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFnfGVufDB8fDB8fHww",
                price: 250
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWKT_-5TdpNnte-7XK6wqAQBcwmujggAWvw&s",
                price: 162
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwk9p6fp4fWuN4q7h3NOSklO5cbDsnzGYL8g&s",
                price: 255
            }
        ]
    }
]