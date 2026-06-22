let defaultBooks = [
    {
        title: "הארי פוטר ואבן החכמים",
        author: "ג'יי קיי רולינג",
        publicationYear: 1997,
        imageUrl: "https://www.poratbooks.co.il/Pictures/036200021392.jpg",
        summary: "ספר פנטזיה על ילד שמגלה שהוא קוסם ומתחיל ללמוד בבית ספר לקוסמים.",
        nytReview: "ביקורת ספרותית: ספר פנטזיה סוחף, מלא דמיון, שמצליח לבנות עולם קסום ולמשוך קוראים צעירים ומבוגרים כאחד."
    },
    {
        title: "הנסיך הקטן",
        author: "אנטואן דה סנט-אכזופרי",
        publicationYear: 1943,
        imageUrl: "https://www.booknet.co.il/Images/Site/Products/39000033077.jpg",
        summary: "סיפור קצר ופילוסופי על נסיך קטן שמטייל בין כוכבים ולומד על החיים.",
        nytReview: "ביקורת ספרותית: יצירה עדינה ועמוקה שמצליחה להעביר רעיונות גדולים על חברות, אהבה ומשמעות החיים בשפה פשוטה ונוגעת."
    },
    {
        title: "אליס בארץ הפלאות",
        author: "לואיס קרול",
        publicationYear: 1865,
        imageUrl: "https://www.prtfl.co.il/wp-content/uploads/2023/03/%D7%90%D7%9C%D7%99%D7%A1-%D7%9B%D7%A8%D7%99%D7%9B%D7%94.jpg",
        summary: "סיפורה של אליס שנכנסת לעולם דמיוני ומלא בדמויות מוזרות.",
        nytReview: "ביקורת ספרותית: ספר מלא דמיון, הומור ומשחקי לשון, שממשיך להשפיע על ספרות הילדים והפנטזיה גם שנים רבות לאחר פרסומו."
    },
    {
        title: "יומנו של חנון",
        author: "ג'ף קיני",
        publicationYear: 2007,
        imageUrl: "https://www.booknet.co.il/Images/Site/Products/4210023910.jpg",
        summary: "יומן מצחיק של ילד בבית הספר שמתאר את חיי היום יום שלו.",
        nytReview: "ביקורת ספרותית: ספר קליל, מצחיק ונגיש, שמצליח להציג את חיי בית הספר מנקודת מבט משעשעת שילדים רבים יכולים להזדהות איתה."
    },
    {
        title: "מטילדה",
        author: "רואלד דאל",
        publicationYear: 1988,
        imageUrl: "https://www.findabook.co.il/assets/images/detail/643456_1_det.jpg",
        summary: "ילדה חכמה במיוחד שמתמודדת עם משפחה ומנהלת בית ספר לא פשוטה.",
        nytReview: "ביקורת ספרותית: סיפור חכם ומעורר השראה על ילדה יוצאת דופן, שמראה את כוחם של ידע, אומץ ודמיון."
    },
    {
        title: "צ'ארלי בממלכת השוקולד",
        author: "רואלד דאל",
        publicationYear: 1964,
        imageUrl: "https://image.tmdb.org/t/p/original/jUTz2UwaXRvuC0jEhfXIsALw1hl.jpg",
        summary: "ילד עני זוכה להיכנס למפעל השוקולד המסתורי של וילי וונקה.",
        nytReview: "ביקורת ספרותית: ספר צבעוני ומלא המצאות, המשלב הומור, ביקורת חברתית והרפתקה מתוקה במיוחד."
    },
    {
        title: "פלא",
        author: "ר. ג'יי פלאסיו",
        publicationYear: 2012,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmNDelgf3qYHPXO0mpbnXwHtkXBF0VYuT_2YAgWSH-sxh_cl2bKD6byvA1IdJNQTult3tJTGY2NSx40ZRAxwNFWLm8twXjNgOe_zBWBCeAw&s=10",
        summary: "סיפור מרגש על ילד מיוחד שמתחיל ללמוד בבית ספר רגיל.",
        nytReview: "ביקורת ספרותית: ספר מרגש וחשוב על קבלה, שונות וחברות, שמעביר מסר אנושי בצורה פשוטה וחזקה."
    },
    {
        title: "ההוביט",
        author: "ג'. ר. ר. טולקין",
        publicationYear: 1937,
        imageUrl: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/010032966-1635688103738559.jpg",
        summary: "בילבו בגינס יוצא למסע הרפתקאות עם גמדים וקוסם.",
        nytReview: "ביקורת ספרותית: הרפתקת פנטזיה קלאסית שמציגה עולם עשיר, דמויות זכירות ומסע התבגרות מרתק."
    },
    {
        title: "מסביב לעולם בשמונים יום",
        author: "ז'ול ורן",
        publicationYear: 1873,
        imageUrl: "https://www.booknet.co.il/Images/Site/Products/2000535759.jpg",
        summary: "מסע הרפתקאות סביב העולם בעקבות התערבות נועזת.",
        nytReview: "ביקורת ספרותית: ספר הרפתקאות קצבי ומלא סקרנות, שמציג מסע עולמי מרתק ורוח של גילוי."
    },
    {
        title: "האסופית",
        author: "לוסי מוד מונטגומרי",
        publicationYear: 1908,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzya9qasfQsI_Bc9SRIShD-Hs44gK6fi1zYg&s",
        summary: "סיפורה של אן, ילדה יתומה עם דמיון גדול ואופי מיוחד.",
        nytReview: "ביקורת ספרותית: סיפור חם, רגיש ומלא קסם על ילדה בעלת דמיון עשיר שמצליחה לשנות את חיי הסובבים אותה."
    }
];

function normalizeBook(book) {
    let defaultReviews = {
        "הארי פוטר ואבן החכמים": "ביקורת ספרותית: ספר פנטזיה סוחף, מלא דמיון, שמצליח לבנות עולם קסום ולמשוך קוראים צעירים ומבוגרים כאחד.",
        "הנסיך הקטן": "ביקורת ספרותית: יצירה עדינה ועמוקה שמצליחה להעביר רעיונות גדולים על חברות, אהבה ומשמעות החיים בשפה פשוטה ונוגעת.",
        "אליס בארץ הפלאות": "ביקורת ספרותית: ספר מלא דמיון, הומור ומשחקי לשון, שממשיך להשפיע על ספרות הילדים והפנטזיה גם שנים רבות לאחר פרסומו.",
        "יומנו של חנון": "ביקורת ספרותית: ספר קליל, מצחיק ונגיש, שמצליח להציג את חיי בית הספר מנקודת מבט משעשעת שילדים רבים יכולים להזדהות איתה.",
        "מטילדה": "ביקורת ספרותית: סיפור חכם ומעורר השראה על ילדה יוצאת דופן, שמראה את כוחם של ידע, אומץ ודמיון.",
        "צ'ארלי בממלכת השוקולד": "ביקורת ספרותית: ספר צבעוני ומלא המצאות, המשלב הומור, ביקורת חברתית והרפתקה מתוקה במיוחד.",
        "פלא": "ביקורת ספרותית: ספר מרגש וחשוב על קבלה, שונות וחברות, שמעביר מסר אנושי בצורה פשוטה וחזקה.",
        "ההוביט": "ביקורת ספרותית: הרפתקת פנטזיה קלאסית שמציגה עולם עשיר, דמויות זכירות ומסע התבגרות מרתק.",
        "מסביב לעולם בשמונים יום": "ביקורת ספרותית: ספר הרפתקאות קצבי ומלא סקרנות, שמציג מסע עולמי מרתק ורוח של גילוי.",
        "האסופית": "ביקורת ספרותית: סיפור חם, רגיש ומלא קסם על ילדה בעלת דמיון עשיר שמצליחה לשנות את חיי הסובבים אותה."
    };

    return {
        title: book.title,
        author: book.author,
        publicationYear: Number(book.publicationYear || book.publication_year || book.year),
        imageUrl: book.imageUrl || book.img_url,
        summary: book.summary,
        nytReview: book.nytReview || defaultReviews[book.title] || "לא נוספה ביקורת לספר זה."
    };
}

let books = defaultBooks;

let savedBooks = localStorage.getItem("libraryBooks");

if (savedBooks !== null) {
    books = JSON.parse(savedBooks).map(function(book) {
        return normalizeBook(book);
    });
}

let selectedBookTitle = localStorage.getItem("selectedBookTitle");

let selectedBook = books.find(function(book) {
    return book.title === selectedBookTitle;
});

let singleBookPage = document.querySelector("#singleBookPage");

if (selectedBook === undefined) {
    singleBookPage.innerHTML = `
        <div class="single-book-card">
            <div class="single-book-info">
                <h2>הספר לא נמצא</h2>
                <p>לא נבחר ספר להצגה או שהספר נמחק מהקטלוג.</p>
                <a href="index.html" class="back-link">חזרה לקטלוג</a>
            </div>
        </div>
    `;
} else {
    singleBookPage.innerHTML = `
        <div class="single-book-card">
            <img src="${selectedBook.imageUrl}" alt="תמונה של הספר ${selectedBook.title}">

            <div class="single-book-info">
                <h2>${selectedBook.title}</h2>

                <p><strong>מחבר:</strong> ${selectedBook.author}</p>
                <p><strong>שנת הוצאה:</strong> ${selectedBook.publicationYear}</p>

                <h3>תקציר הספר</h3>
                <p>${selectedBook.summary}</p>

                <h3>ביקורת ספרותית</h3>
                <p>${selectedBook.nytReview}</p>

                <a href="index.html" class="back-link">חזרה לקטלוג הספרים</a>
            </div>
        </div>
    `;
}