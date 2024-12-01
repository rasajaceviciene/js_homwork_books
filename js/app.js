// Data structure for book inventory
const inventory = [
    {
        "category": "Informacinės technologijos",
        "books": [
            {
                "title": "Programavimas linksmai",
                "ISBN": "IT-12345",
                "publishing_year": 2019, // New book
                "pages": 250,
                "quantity": 12,
                "price": 25
            },
            {
                "title": "JavaScript for Beginners",
                "ISBN": "IT-12346",
                "publishing_year": 2024,
                "pages": 300,
                "quantity": 8,
                "price": 30
            },
            {
                "title": "Web Development 101",
                "ISBN": "IT-12347",
                "publishing_year": 2018,
                "pages": 350,
                "quantity": 5,
                "price": 40
            },
            {
                "title": "AI Programming",
                "ISBN": "IT-12348",
                "publishing_year": 2021,
                "pages": 450,
                "quantity": 10,
                "price": 50
            },
            {
                "title": "Advanced Python",
                "ISBN": "IT-12349",
                "publishing_year": 2017,
                "pages": 500,
                "quantity": 7,
                "price": 60
            }
        ]
    },
    {
        "category": "Fizika",
        "books": [
            {
                "title": "Mechanika ir Judėjimas",
                "ISBN": "PH-12345",
                "publishing_year": 2015,
                "pages": 320,
                "quantity": 15,
                "price": 20
            },
            {
                "title": "Elektromagnetizmas",
                "ISBN": "PH-12346",
                "publishing_year": 2019,
                "pages": 280,
                "quantity": 10,
                "price": 22
            },
            {
                "title": "Šviesos teorija",
                "ISBN": "PH-12347",
                "publishing_year": 2024,
                "pages": 200,
                "quantity": 18,
                "price": 25
            },
            {
                "title": "Termodinamika",
                "ISBN": "PH-12348",
                "publishing_year": 2021,
                "pages": 400,
                "quantity": 12,
                "price": 30
            },
            {
                "title": "Kvantinė fizika",
                "ISBN": "PH-12349",
                "publishing_year": 2018,
                "pages": 450,
                "quantity": 8,
                "price": 40
            }
        ]
    },
    {
        "category": "Literatūra",
        "books": [
            {
                "title": "Shakespeare: Asmenybė ir kūryba",
                "ISBN": "LT-12345",
                "publishing_year": 2016,
                "pages": 350,
                "quantity": 20,
                "price": 15
            },
            {
                "title": "Poezija ir pasaka",
                "ISBN": "LT-12346",
                "publishing_year": 2018,
                "pages": 280,
                "quantity": 30,
                "price": 18
            },
            {
                "title": "Romanų pasaulis",
                "ISBN": "LT-12347",
                "publishing_year": 2017,
                "pages": 400,
                "quantity": 25,
                "price": 22
            },
            {
                "title": "Klasikiniai kūriniai",
                "ISBN": "LT-12348",
                "publishing_year": 2015,
                "pages": 500,
                "quantity": 10,
                "price": 35
            },
            {
                "title": "Moderni literatūra",
                "ISBN": "LT-12349",
                "publishing_year": 2024,
                "pages": 350,
                "quantity": 8,
                "price": 28
            }
        ]
    },
    {
        "category": "Matematika",
        "books": [
            {
                "title": "Algebra pradedantiesiems",
                "ISBN": "MA-12345",
                "publishing_year": 2016,
                "pages": 250,
                "quantity": 18,
                "price": 15
            },
            {
                "title": "Matematikos pagrindai",
                "ISBN": "MA-12346",
                "publishing_year": 2018,
                "pages": 300,
                "quantity": 12,
                "price": 20
            },
            {
                "title": "Geometrijos pradžiamokslis",
                "ISBN": "MA-12347",
                "publishing_year": 2019,
                "pages": 350,
                "quantity": 14,
                "price": 25
            },
            {
                "title": "Kalkuliacija",
                "ISBN": "MA-12348",
                "publishing_year": 2021,
                "pages": 400,
                "quantity": 10,
                "price": 30
            },
            {
                "title": "Statistika ir tikimybė",
                "ISBN": "MA-12349",
                "publishing_year": 2020,
                "pages": 500,
                "quantity": 5,
                "price": 40
            }
        ]
    },
    {
        "category": "Psichologija",
        "books": [
            {
                "title": "Psichologijos pagrindai",
                "ISBN": "PS-12345",
                "publishing_year": 2017,
                "pages": 280,
                "quantity": 25,
                "price": 20
            },
            {
                "title": "Kognityvinė psichologija",
                "ISBN": "PS-12346",
                "publishing_year": 2019,
                "pages": 320,
                "quantity": 12,
                "price": 22
            },
            {
                "title": "Psichologija ir žmogaus elgsena",
                "ISBN": "PS-12347",
                "publishing_year": 2020,
                "pages": 300,
                "quantity": 10,
                "price": 25
            },
            {
                "title": "Psichoterapija",
                "ISBN": "PS-12348",
                "publishing_year": 2021,
                "pages": 350,
                "quantity": 8,
                "price": 30
            },
            {
                "title": "Socialinė psichologija",
                "ISBN": "PS-12349",
                "publishing_year": 2020,
                "pages": 280,
                "quantity": 15,
                "price": 28
            }
        ]
    }
];

console.log("Knygu sarasas:");

console.log("=============================");

let inventoriausBendraVerte = 0;

inventory.forEach(blokas => {
    console.log(`Knygų kategorija: ${blokas.category}`);
    console.log("=============================");
    
    let kategorijosBendraVerte = 0;

    blokas.books.forEach(knyga => {
        console.log(`Knygos pavadinimas: ${knyga.title}`);
        console.log(`ISBN: ${knyga.ISBN}`);
        if(knyga.publishing_year === 2024){
            console.log(`Leidimo metai: ${knyga.publishing_year} / Nauja knyga`);
        }else{
            console.log(`Leidimo metai: ${knyga.publishing_year}`);
        }
        console.log(`Puslapių skaičius: ${knyga.pages}`);
        console.log(`Kiekis: ${knyga.quantity}`);
        console.log(`Kaina: ${knyga.price} EUR`);
        const bendraKnygosVerte = knyga.quantity * knyga.price;
        console.log(`Bendra vertė: ${bendraKnygosVerte} EUR`);
        console.log("=============================");

        kategorijosBendraVerte += bendraKnygosVerte;

    });
    console.log(`Bendra kategorijos "${blokas.category}" verte: ${kategorijosBendraVerte} EUR`);
    console.log("=============================");
    inventoriausBendraVerte += kategorijosBendraVerte;
});

console.log(`Bendra viso inventoriaus verte: ${inventoriausBendraVerte} EUR`);


//console.log(inventory[4].category);

//console.log(inventory[4].books[0].title);

/*let bendraInventoriausVerte = 0;
for (let kategorija in inventory){
    console.log(`Knygu kategorija: ${inventory[kategorija].category}`);
    console.log("=============================");
    let bendraKategorijosVerte = 0;
    for (let knyga in inventory[kategorija].books){
        console.log(`Knygos pavadinimas: ${inventory[kategorija].books[knyga].title}`);
        console.log(`ISBN: ${inventory[kategorija].books[knyga].ISBN}`);
        if(inventory[kategorija].books[knyga].publishing_year==2024){
            console.log(`Leidimo metai: ${inventory[kategorija].books[knyga].publishing_year} / Nauja knyga`);
        }else{
            console.log(`Leidimo metai: ${inventory[kategorija].books[knyga].publishing_year}`);
        }
        console.log(`Puslapiu skaicius: ${inventory[kategorija].books[knyga].pages}`);
        console.log(`Kiekis: ${inventory[kategorija].books[knyga].quantity}`);
        console.log(`Kaina: ${inventory[kategorija].books[knyga].price} EUR`);
        let kiekis = inventory[kategorija].books[knyga].quantity;
        let kaina = inventory[kategorija].books[knyga].price;
        let bendraKnygosVerte = kiekis * kaina
        console.log(`Bendra verte: ${bendraKnygosVerte} EUR`); 
        console.log("=============================");
        bendraKategorijosVerte +=bendraKnygosVerte;
    }
    console.log(`Bendra kategorijos "${inventory[kategorija].category}" verte: ${bendraKategorijosVerte} EUR`);
    console.log("=============================");
    bendraInventoriausVerte += bendraKategorijosVerte;
}
console.log(`Bendra viso inventoriaus verte: ${bendraInventoriausVerte} EUR`);
*/