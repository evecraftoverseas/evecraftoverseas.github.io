const products = [
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/H84b649720a684601b599d2c4133ebec5O.jpeg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/H28797485ad0f496baee40cbe0535b7b2k.jpeg',
        title: 'Silhouette Style White Ceramic Vase',
        price: 'RS.499.00',
        originalPrice: 'RS. 1799.00',
        link: '#prod1',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A9dc0ff36201a4c46b5311813e73b22b3g.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/A1145b89afe1e4747a69fbde32cb65fbaw.jpg',
        title: 'Carrara Charcoal Planter With Coaster',
        price: 'RS.499.00',
        originalPrice: 'RS. 1799.00',
        link: '#prod2'
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/S2260e334482847ebb1058db7e93a0ad8K.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/A8c1a22548b474b8eadf9bc85e92b1c47R.jpg',
        title: 'Wavy Ceramic Planter Trio Set (White)',
        price: 'RS.499.00',
        originalPrice: 'RS. 1799.00',
        link: '#prod3'
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/Aaa2cadf332094862b889b6272625560fM.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Aeba61760a1ea416e87917af411e03bbaX.jpg',
        title: 'Geometric Iron Candle Wall Holder Set',
        price: 'RS.499.00',
        originalPrice: 'RS. 1799.00',
        link: '#prod4'
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A854de4c02c48403c9ce3bf1178f012bfQ.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/A58f921a14e3b4e03ad2ae83b4c9c8155R.jpg',
        title: 'Modern Hanging Plant Pot',
        price: 'RS.499.00',
        originalPrice: 'RS. 1799.00',
        link: '#prod5'
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/Seb36634c0a9c4417ab72bacbd7749732I.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Acb917102598b435b93878b541840f644r.jpg',
        title: 'Black Iron Hanging Plant Pot',
        price: 'RS.499.00',
        originalPrice: 'RS. 1799.00',
        link: '#prod6'
    },

    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A43b57f6cdc0141a4a253ac307a56666f5.png_720x720q50.png',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Ad3792ed3deb7493b92847eb545cd13fa4.jpg',
        title: 'Marble Shelf Table for Home Decor',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A7f01ecb3af6b4b5ca8aab9e95d840721J.png_720x720q50.png',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Af343bf2b43454e0489a752a1efd83effO.png_720x720q50.png',
        title: 'Geometric Metal Air Plant Stand with Glass Tube',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/Ac95dd96e492b4f3895c024db0cc4fc26T.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Afc2c1de0065f4e1eb0d10cd70935582ep.jpg',
        title: 'Black Metal Taper Candle Holder',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A548fd4a4ac9b404aad3df9c89fb9b2eeD.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/A0fe03a734d464c28b4d6547635a0bace1.jpg',
        title: 'Marble and Steel Nura Candle Holder',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A58a0526b491f49edb1fee7e7dc7720c85.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Add1f2bec17fd4cd7ac05505d0d80cb7as.jpg',
        title: '3-Bar Iron Towel Wall Rack',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/Af13f9473be414968bd1085d42c1f5fb7v.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Aaa2a1ee7477544b1b9c0adcf9c429e07X.jpg',
        title: 'High-Quality Modern Cupcake Table Decor for Parties',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/Aa708f0b49c0e4a8184cd372be877d82bf.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Ace1e8168d121485e87c0586ee95e7a4an.jpg',
        title: 'Rustic Napkin Holder Set with Salt and Pepper Caddy',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A9f35b73f05844efbab26283f9c2f75e9u.png_720x720q50.png',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/A02470d82b16749afbeab3693c1cdbc0fa.png_720x720q50.png',
        title: 'Geometric Metal Wire Fruit Basket',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A528e8589c7ea426b958c10ac0120519e6.png_720x720q50.png',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/A5acfaa186f574df5a36de7b27e4e81587.png',
        title: 'Hexagon Wood Coasters Set (Laser-Cut MDF)',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/Afbf284c47e8d40fda292f9283c9ad77dQ.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/A1fa726154ca04c54b50b28927cb0bdc3W.jpg',
        title: 'Wholesale High-Quality Wooden Oval Tray for Food',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A6cc9e73e93554eb5a99698f3bf4cc690q.png_720x720q50.png',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Acb35ac7f78d948389d06b25bc46835a7p.png_720x720q50.png',
        title: 'Black Countertop Paper Towel Holder with Non-Slip Wooden Base',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A21a2217e100349088c51dd3a84619b1aq.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Ac0c3996c66464b93a9e96efb496fbcabS.jpg',
        title: 'Wall-Mounted Coffee Mug Holder with 8 Hooks',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/Ae89783e7adea4dc8917545c08cf62af5j.jpg',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/Ae7133d165ebb490e9f05a0dce6ca9d51X.jpg',
        title: '5-Tier Wooden & Iron Wall Shelf with Leaf Design Organizer',
        link: '',
    },
    {
        imageSrc: 'https://s.alicdn.com/@sc04/kf/A573e22ae1760440381545b8b8be3e621Z.png',
        hoverImageSrc: 'https://s.alicdn.com/@sc04/kf/A9ba1b8c7e3a74a9f99ba9de4b5f3c5dfi.png',
        title: '2-Tier Marble Shelf Coffee Table',
        link: '',
    },

    // Add more product data here...
];
const productCardContainer = document.querySelector('.product-card');
// Create dynamic product cards
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // Create an anchor element with the product link
    const productLink = document.createElement('a');
    productLink.href = product.link;

    // Open the link in a new tab
    const productImage = document.createElement('div');
    productImage.className = 'product-image';
    productImage.style.backgroundImage = `url(${product.imageSrc})`;

    // Add hover effect using JavaScript
    productImage.addEventListener('mouseenter', () => {
        productImage.style.backgroundImage = `url(${product.hoverImageSrc})`;
    });

    productImage.addEventListener('mouseleave', () => {
        productImage.style.backgroundImage = `url(${product.imageSrc})`;
    });

    const productTitle = document.createElement('p');
    productTitle.className = 'product-title';
    productTitle.textContent = product.title;

    const productPrice = document.createElement('p');
    productPrice.style.textAlign = 'center';
    productPrice.style.color = 'black';

    productLink.appendChild(productImage);
    productLink.appendChild(productTitle);
    productLink.appendChild(productPrice);

    productDiv.appendChild(productLink);
    productCardContainer.appendChild(productDiv);
});
