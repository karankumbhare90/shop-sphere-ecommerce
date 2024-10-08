
const productData = [
    {
        productName: "Essence Mascara Lash Princess",
        price: 9.99,
        category: "Beauty",
        rating: 4.94,
        description: "Volumizing and lengthening mascara for dramatic lashes.",
        available: true,
        image: "https://5.imimg.com/data5/ANDROID/Default/2023/7/326598386/TM/JD/NK/189033354/product-jpeg-500x500.jpg"
    },
    {
        productName: "Revlon Super Lustrous Lipstick",
        price: 12.49,
        category: "Beauty",
        rating: 4.7,
        description: "A creamy lipstick for vibrant, long-lasting color.",
        available: true,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/3/296178265/EX/FQ/OZ/186724856/vivo-mobile-phone.jpg"
    },
    {
        productName: "Maybelline Fit Me Foundation",
        price: 7.99,
        category: "Beauty",
        rating: 4.6,
        description: "Matte foundation that fits every skin tone.",
        available: true,
        image: "https://5.imimg.com/data5/SELLER/Default/2022/4/OV/XU/MN/148217327/oppo-a76-mobile-phone.jpg"
    },
    {
        productName: "L'Oreal Paris Voluminous Mascara",
        price: 8.49,
        category: "Beauty",
        rating: 4.5,
        description: "Mascara that gives 5x fuller lashes.",
        available: false,
        image: "https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg"
    },
    {
        productName: "Clinique Even Better Foundation",
        price: 29.00,
        category: "Beauty",
        rating: 4.8,
        description: "Foundation that improves skin tone over time.",
        available: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpHakpcVot3IdMza0dKL0PkoyCJ0yyTvyYw&s"
    },
    {
        productName: "Anastasia Beverly Hills Brow Wiz",
        price: 21.00,
        category: "Beauty",
        rating: 4.9,
        description: "Ultra-slim brow pencil for natural-looking brows.",
        available: true,
        image: "https://i.pinimg.com/564x/f0/65/2c/f0652c7245d63fbe6fce1f7a70d25b6b.jpg"
    },
    {
        productName: "Fenty Beauty Gloss Bomb",
        price: 18.00,
        category: "Beauty",
        rating: 4.9,
        description: "Explosive shine that feels as good as it looks.",
        available: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPSuGwHYcMThTG_Ox3JRI7FzSGqcVlGsl1UA&s"
    },
    {
        productName: "Tarte Shape Tape Concealer",
        price: 27.00,
        category: "Beauty",
        rating: 4.8,
        description: "Concealer that provides full coverage and lasts all day.",
        available: false,
        image: "https://i.etsystatic.com/19027337/r/il/4b2fb8/2889886032/il_fullxfull.2889886032_tdq5.jpg"
    },
    {
        productName: "NARS Radiant Creamy Concealer",
        price: 30.00,
        category: "Beauty",
        rating: 4.7,
        description: "Multi-action concealer for all skin types.",
        available: true,
        image: "https://ce8a9656c.cloudimg.io/v7/https://blog.mensvector.com/img/37/m-008-mens-accessories-that-will-spice-up-your-style.jpg?w=414&force_format=webp&q=90"
    },
    {
        productName: "Too Faced Better Than Sex Mascara",
        price: 25.00,
        category: "Beauty",
        rating: 4.8,
        description: "The bestselling mascara for intense volume and length.",
        available: false,
        image: "https://sslimages.shoppersstop.com/sys-master/images/h69/hc8/29453554876446/S23VHBWGBEL4786_BROWN.jpg_2000Wx3000H"
    },
    {
        productName: "Urban Decay All Nighter Setting Spray",
        price: 33.00,
        category: "Beauty",
        rating: 4.9,
        description: "Makeup setting spray that keeps your makeup in place for up to 16 hours.",
        available: true,
        image: "https://media.istockphoto.com/id/650233226/photo/military-style-watch.jpg?s=612x612&w=0&k=20&c=PknuHX2Dh0SN2JTKF60Ftxowdiwoudc_zTu9Vd2UD-w="
    },
    {
        productName: "MAC Ruby Woo Lipstick",
        price: 19.00,
        category: "Beauty",
        rating: 4.8,
        description: "A classic, long-wearing matte red lipstick.",
        available: true,
        image: "https://m.media-amazon.com/images/I/71VjQpwtmVL._AC_UF894,1000_QL80_.jpg"
    },
    {
        productName: "Benefit Hoola Matte Bronzer",
        price: 30.00,
        category: "Beauty",
        rating: 4.7,
        description: "Award-winning matte bronzer for a natural-looking tan.",
        available: true,
        image: "https://nextluxury.com/wp-content/uploads/Belts-Fashion-Accessories-For-Men.jpg"
    },
    {
        productName: "Glossier Cloud Paint",
        price: 18.00,
        category: "Beauty",
        rating: 4.6,
        description: "Seamless, buildable gel-cream blush.",
        available: true,
        image: "https://thefoomer.in/cdn/shop/products/jpeg-optimizer_PATP5125.jpg?v=1680162476"
    },
    {
        productName: "Charlotte Tilbury Pillow Talk Lipstick",
        price: 34.00,
        category: "Beauty",
        rating: 4.9,
        description: "Iconic nude-pink lipstick for every skin tone.",
        available: true,
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-shirt/i/b/7/xl-ps-navy-blue-perun-original-imaggpbhyugv78up.jpeg?q=90&crop=false"
    },
    {
        productName: "Huda Beauty Faux Filter Foundation",
        price: 40.00,
        category: "Beauty",
        rating: 4.8,
        description: "High coverage foundation for an airbrushed finish.",
        available: true,
        image: "https://m.media-amazon.com/images/I/61eUbs8ZYkL._AC_UY1100_.jpg"
    },
    {
        productName: "KVD Beauty Tattoo Liner",
        price: 21.00,
        category: "Beauty",
        rating: 4.9,
        description: "Award-winning waterproof liquid eyeliner.",
        available: true,
        image: "https://images.cbazaar.com/images/Maroon-Foil-Printed-Rayon-A-Line-Kurti-KRBS02306460-u.jpg"
    },
    {
        productName: "Beautyblender Original Makeup Sponge",
        price: 20.00,
        category: "Beauty",
        rating: 4.9,
        description: "Iconic makeup sponge for flawless foundation application.",
        available: true,
        image: "https://www.jiomart.com/images/product/original/rvtbbu2bzu/anushil-check-style-stylish-kurti-lurex-weave-designer-kurti-kurti-for-women-kurti-for-girls-colours-red-size-l-product-images-rvtbbu2bzu-0-202301140130.jpg?im=Resize=(500,630)"
    },
    {
        productName: "Morphe Eyeshadow Palette",
        price: 25.00,
        category: "Beauty",
        rating: 4.7,
        description: "A versatile eyeshadow palette with bold colors.",
        available: false,
        image: "https://assets.ajio.com/medias/sys_master/root/20240830/yVwV/66d1f4cf1d763220fab20d8e/-473Wx593H-700349572-pink-MODEL.jpg"
    },
    {
        productName: "Lancome Monsieur Big Mascara",
        price: 25.00,
        category: "Beauty",
        rating: 4.6,
        description: "Volumizing mascara for big, bold lashes.",
        available: true,
        image: "https://5.imimg.com/data5/SELLER/Default/2022/3/VN/PS/OQ/21804803/lilly-present-koyal-3-cotton-daily-wear-kurti-combo-set-3-2022-03-07-16-16-59-500x500.jpeg"
    }
];

export default productData;
