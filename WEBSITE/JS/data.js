var watchs = [
    {
        id: 1,
        name: "CLASSIC PETITE BONDI",
        price: 179,
        size: 28,
        maxsize:32,
        category: 1
    },
    {
        id: 2,
        name: "CLASSIC PETITE STERLING",
        price: 189,
        size: 28,
        maxsize:32,
        category: 1
    },
    {
        id: 3,
        name: "CLASSIC PETITE ASHFIELD",
        price: 189,
        size: 28,
        maxsize:32,
        category: 1
    },
    {
        id: 4,
        name: "CLASSIC PETITE MELROSE",
        price: 189,
        size: 28,
        maxsize:32,
        category: 1
    },
    {
        id: 5,
        name: "CLASSIC PETITE MELROSE",
        price: 189,
        size: 28,
        maxsize:32,
        category: 1
    },
    {
        id: 6,
        name: "CLASSIC PETITE CORNWALL",
        price: 189,
        size: 28,
        maxsize:32,
        category: 1
    },
    {
        id: 7,
        name: "CLASSIC PETITE CORNWALL",
        price: 189,
        size: 28,
        maxsize:32,
        category: 1
    },
    {
        id: 8,
        name: "CLASSIC PETITE BFISTOL",
        price: 179,
        size: 28,
        maxsize:32,
        category: 1
    },
    {
        id: 9,
        name: "CLASSIC PETITE SHEFFIELD",
        price: 179,
        size: 28,
        maxsize:32,
        category: 1
    },
    {
        id: 10,
        name: "CLASSIC PETITE DURHAM",
        price: 179,
        size: 28,
        maxsize:32,
        category: 1
    },
    {
        id:11,
        name: "CLASSIC PETITE MAWES",
        price: 179,
        size: 28,
        maxsize:32,
        category: 1
    },
    {
        id: 12,
        name: "DAPPER READING",
        price: 179,
        size: 34,
        maxsize:38,
        category: 2
    },
    {
        id: 13,
        name: "DAPPER YORK",
        price: 199,
        size: 34,
        maxsize:38,
        category: 2
    },
    {
        id: 14,
        name: "DAPPER DURHAM",
        price: 199,
        size: 34,
        maxsize:38,
        category: 2
    },
    {
        id: 15,
        name: "DAPPER ST MAWES",
        price: 199,
        size: 34,
        maxsize:38,
        category: 2
    },
    {
        id: 16,
        name: "DAPPER ST MAWES",
        price: 199,
        size: 34,
        maxsize:38,
        category: 2
    },
    {
        id:17,
        name: "CLASSIC ROSELYN",
        price: 189,
        size: 36,
        maxsize:40,
        category: 1
    },
    {
        id:18,
        name: "CLASSIC BAYSWATER",
        price: 189,
        size: 36,
        maxsize:40,
        category: 1
    },
    {
        id:19,
        name: "CLASSIC CORNWALL",
        price: 189,
        size: 36,
        maxsize:40,
        category: 1
    },
    {
        id:20,
        name: "CLASSIC OXFORD",
        price: 199,
        size: 36,
        maxsize:40,
        category: 1
    },
    {
        id:21,
        name:"CLASSIC SHEFFIELD + CORNWALL STRAP",
        price: 275,
        size:40,
        maxsize:40,
        category: 3
    },
    {
        id:22,
        name:"CLASSIC PETITE STERLING + CLASSIC CUFF S",
        price: 249,
        size:28,
        maxsize:28,
        category: 3
    },
    {
        id:23,
        name:"CLASSIC ST MAWES + GLASGOW STRAP",
        price: 275,
        size:40,
        maxsize:40,
        category: 3
    },
    {
        id:24,
        name:"CLASSIC SOUTHAMPTON + GLASGOW STRAP",
        price: 209,
        size:36,
        maxsize:36,
        category: 3
    },
    {
        id:25,
        name:"CLASSIC PETITE MELROSE + CUFF SMALL",
        price: 249,
        size:32,
        maxsize:32,
        category: 3
    },
    {
        id:26,
        name:"CLASSIC PETITE MELROSE + BRISTOL STRAP",
        price: 249,
        size:32,
        maxsize:32,
        category: 3
    },
    {
        id:27,
        name:"CLASSIC BAYSWATER + ROSELYN STRAP",
        price: 250,
        size:40,
        maxsize:40,
        category: 3
    },
    {
        id:28,
        name:"CLASSIC ROSELYN + ST MAWES STRAP",
        price: 250,
        size:36,
        maxsize:36,
        category: 3
    }
];

var users = [
    {
        username: "thuylinh",
        password: "123456"
    }
]

var categories = [
    {
        id: 1,
        name: "Classic",
        description: "<p style='padding-top: 110px;'>The watches in our Classic Collection prove that minimalism is truly timeless. The ultra-thin (6mm) case comes in either silver or rose gold, and makes a subtle yet unmistakable statement about your style – and your spirit. Available in 40mm and 36mm faces.</p>",
        images: ["desk-eng.jpg","dw.jpg","3-product-bundles-start-desk.jpg","m1.jpg","start_anthony_2800x1100px.jpg"]
    },
    {
        id: 2,
        name: "Dapper",
        description: "<p style='padding-top: 110px;'>The Dapper Collection is elegant and polished, with details designed to give it that little something extra. In rose gold or silver, it features deep blue hands, Roman numerals and a date display. It is a sophisticated watch made for every occasion and every outfit. Available in 38mm and 34mm faces.</p>",
        images: ["DW_Banner.jpg","3-product-bundles-start-desk.jpg","all2.jpg","banner-daniel-wellington.jpg"]
    },
    {
        id: 3,
        name: "Gift Sets",
        description: "",
        images: ["DW-gift-sets-hero-desk.jpg","banner-danielwellington-valentine-1920x700.jpg","DW_Banner.jpg","news_2800x850px.jpg","m1.jpg"]
    },
    {
        id: 4,
        name: "Men's Watches",
        description:"<p style='padding-top: 80px;'>Daniel Wellingtons men's watches have a timeless design that you´ll wear on your wrist for years to come. We are on a quest for perfection, one that starts with – and continues to focus on the details. <br><br>Our minimalist, classic timepieces for men have an eggshell white or black watch face and details in silver or rose gold. It´s a watch that is as personal as your choice of strap, whether that is colourful NATO or luxurious leather. Our watch bands are interchangeable to make your watch an iconic companion – no matter the outfit or occasion.</p>",
        images: ["start_anthony_2800x1100px.jpg","m1.jpg","all_watches_2800x850px.jpg","startdrew.jpg"]
    },
    {
        id: 5,
        name: "Women's Watches",
        description: "<p style='padding-top: 70px;'>Our women’s watches have a smart design with interchangeable watch bands – making it a wristwatch unique for every occasion. It´s a watch that is as personal as your choice of strap, whether that is colourful NATO, elegant mesh or luxurious leather. Daniel Wellington is on a quest for perfection, one that starts with – and continues to focus on the details. <br><br>Choose between women’s watches designed to give that little something extra, with a white or black watch face and silver or rose gold details - and make a subtle yet unmistakable statement about your style.</p>",
        images: ["women.jpg","womenwatches.jpg","desk-eng.jpg","mauvatay.jpg","all.jpg"]
    }
]