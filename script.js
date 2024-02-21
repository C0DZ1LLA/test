document.addEventListener("DOMContentLoaded", function() {
    // Retrieve products from local storage or set default products
    let products = JSON.parse(localStorage.getItem('products')) || [
        { id: 1, name: "Κούπα Επαναχρησιμοποιήσιμη Γκρι 12oz", price: 13.50, quantity: 0, total_profit: 0.00 },
        { id: 2, name: "Κούπα Επαναχρησιμοποιήσιμη Μπλε 12oz", price: 13.50, quantity: 0, total_profit: 0.00 },
        { id: 3, name: "Κούπα Επαναχρησιμοποιήσιμη Ανοιχτό Μωβ 12oz", price: 13.50, quantity: 0, total_profit: 0.00 },
        { id: 4, name: "Κούπα Επαναχρησιμοποιήσιμη Κόκκινη 16oz", price: 16.50, quantity: 0, total_profit: 0.00 },
        { id: 5, name: "Κούπα Επαναχρησιμοποιήσιμη Μαύρη 16oz", price: 16.50, quantity: 0, total_profit: 0.00 },
        { id: 6, name: "Κούπα Επαναχρησιμοποιήσιμη Kaffeeform Από Καφέ 12oz", price: 18.00, quantity: 0, total_profit: 0.00 },
        { id: 7, name: "Επαναχρησιμοποιήσιμο Ποτήρι 12oz", price: 1.50, quantity: 0, total_profit: 0.00 },
        { id: 8, name: "Επαναχρησιμοποιήσιμο Ποτήρι 16oz", price: 2.00, quantity: 0, total_profit: 0.00 },
        { id: 9, name: "Θερμός Coffee Island Le Baton 500ml", price: 32.00, quantity: 0, total_profit: 0.00 },
        { id: 10, name: "Θερμός Coffee Island (Λευκό)", price: 11.00, quantity: 0, total_profit: 0.00 },
        { id: 11, name: "Θερμός Coffee Island (Γκρι)", price: 11.00, quantity: 0, total_profit: 0.00 },
        { id: 12, name: "Θερμός Coffee Island (Πολύχρωμο)", price: 13.00, quantity: 0, total_profit: 0.00 },
        { id: 13, name: "Επαναχρησιμοποιήσιμο Μεταλλικό Καλαμάκι (Χρυσό)", price: 4.95, quantity: 0, total_profit: 0.00 },
        { id: 14, name: "Επαναχρησιμοποιήσιμο Μεταλλικό Καλαμάκι (Ασημί)", price: 4.95, quantity: 0, total_profit: 0.00 },
        { id: 15, name: "Επαναχρησιμοποιήσιμο Μεταλλικό Καλαμάκι (Χάλκινο)", price: 4.95, quantity: 0, total_profit: 0.00 },
        { id: 16, name: "Επαναχρησιμοποιήσιμο Μεταλλικό Καλαμάκι (Μαύρο)", price: 4.95, quantity: 0, total_profit: 0.00 },
        { id: 17, name: "Καφετιέρα V60", price: 16.80, quantity: 0, total_profit: 0.00 },
        { id: 18, name: "Dripper V60 Κόκκινο (Πλαστικό)", price: 9.00, quantity: 0, total_profit: 0.00 },
        { id: 19, name: "Φίλτρα για V60 (100 τμχ)", price: 5.80, quantity: 0, total_profit: 0.00 },
        { id: 20, name: "Καφετιέρα Κανάτα Chemex (3 Κούπες)", price: 40.00, quantity: 0, total_profit: 0.00 },
        { id: 21, name: "Χάρτινα Φίλτρα για Chemex (100 τμχ)", price: 12.50, quantity: 0, total_profit: 0.00 },
        { id: 22, name: "Γαλλική Πρέσα 300ml (Olive wood)", price: 29.00, quantity: 0, total_profit: 0.00 },
        { id: 23, name: "Σκεύος Εκχύλισης Aeropress", price: 29.00, quantity: 0, total_profit: 0.00 },
        { id: 24, name: "Φίλτρα Aeropress (350 τμχ)", price: 8.50, quantity: 0, total_profit: 0.00 },
        { id: 25, name: "Eco Κάψουλες Καθαρισμού", price: 7.50, quantity: 0, total_profit: 0.00 },
        { id: 26, name: "Κεραμικός Μύλος Άλεσης Kαφέ", price: 41.40, quantity: 0, total_profit: 0.00 },
        { id: 27, name: "Εσπρεσσιέρα Moka (3 Φλυτζάνια)", price: 25.00, quantity: 0, total_profit: 0.00 },
        { id: 28, name: "Μηχανή παρασκευής Αφρογάλακτος", price: 35.00, quantity: 0, total_profit: 0.00 },
        { id: 29, name: "Shaker για Κρύο Αφρόγαλα", price: 15.70, quantity: 0, total_profit: 0.00 },
        { id: 30, name: "Μπουκάλι για Κρύο Τσάι 750ml (Κόκκινο)", price: 28.00, quantity: 0, total_profit: 0.00 },
        { id: 31, name: "Μπουκάλι για Κρύο Τσάι 750ml (Πράσινο)", price: 28.00, quantity: 0, total_profit: 0.00 },
        { id: 32, name: "Τσαγιέρα-Ποτήρι 200ml (Κόκκινο)", price: 16.80, quantity: 0, total_profit: 0.00 },
        { id: 33, name: "Τσαγιέρα-Ποτήρι 200ml (Πράσινο)", price: 16.80, quantity: 0, total_profit: 0.00 },
        { id: 34, name: "Αεροστεγές Κουτί Αποθήκευσης 'Airplane' 250γρ", price: 11.00, quantity: 0, total_profit: 0.00 },
        { id: 35, name: "Δοχείο Αποθήκευσης Τσάι 'Every day is a new adventure' 100γρ", price: 9.50, quantity: 0, total_profit: 0.00 },
        { id: 36, name: "Αεροστεγές Κουτί Αποθήκευσης 'Bowling' 250γρ", price: 11.00, quantity: 0, total_profit: 0.00 },
        { id: 37, name: "Δοχείο Αποθήκευσης Τσάι 'Theres always time for tea' 100γρ", price: 9.50, quantity: 0, total_profit: 0.00 },
        { id: 38, name: "Κούπα Μικρός Πρίγκιπας", price: 12.00, quantity: 0, total_profit: 0.00 },
        { id: 39, name: "Colombia Las Flores Συσκευασμένος 200γρ", price: 9.05, quantity: 0, total_profit: 0.00 },
        { id: 40, name: "ESPRESSO Espresso Master Blend Συσκευασμένος 250γρ", price: 7.81, quantity: 0, total_profit: 0.00 },
        { id: 41, name: "ESPRESSO Espresso Silk River Blend Συσκευασμένος 250γρ", price: 7.24, quantity: 0, total_profit: 0.00 },
        { id: 42, name: "ESPRESSO Espresso Volcano Blend Συσκευασμένος 250γρ", price: 7.14, quantity: 0, total_profit: 0.00 },
        { id: 42, name: "ESPRESSO Espresso Master Blend (Χύμα)", price: 4.36, quantity: 0, total_profit: 0.00 },
        { id: 43, name: "ESPRESSO Espresso Silk River Blend (Χύμα)", price: 4.07, quantity: 0, total_profit: 0.00 },
        { id: 44, name: "ΜΟΝΟΠΟΙΚΙΛΙΕΣ Rwanda Gisanga Συσκευασμένος 200γρ", price: 7.62, quantity: 0, total_profit: 0.00 },
        { id: 45, name: "ΜΟΝΟΠΟΙΚΙΛΙΕΣ Colombia Dulima Συσκευασμένος 200γρ", price: 7.14, quantity: 0, total_profit: 0.00 },
        { id: 46, name: "ΜΟΝΟΠΟΙΚΙΛΙΕΣ Ethiopia Guji Συσκευασμένος 200γρ", price: 7.33, quantity: 0, total_profit: 0.00 },
        { id: 47, name: "ΜΟΝΟΠΟΙΚΙΛΙΕΣ Peru Santa Teresa Συσκευασμένος 200γρ", price: 7.33, quantity: 0, total_profit: 0.00 },
        { id: 48, name: "ΜΟΝΟΠΟΙΚΙΛΙΕΣ Indonesia Sumatra Συσκευασμένος 200γρ", price: 7.33, quantity: 0, total_profit: 0.00 },
        { id: 49, name: "ΜΟΝΟΠΟΙΚΙΛΙΕΣ Brazil Alta Mogiana Συσκευασμένος 200γρ", price: 7.14, quantity: 0, total_profit: 0.00 },
        { id: 50, name: "ΜΟΝΟΠΟΙΚΙΛΙΕΣ Colombia Organic Συσκευασμένος 200γρ", price: 7.62, quantity: 0, total_profit: 0.00 },
        { id: 51, name: "ΜΟΝΟΠΟΙΚΙΛΙΕΣ Colombia Dulima (Χύμα)", price: 4.57, quantity: 0, total_profit: 0.00 },
        { id: 52, name: "ΜΟΝΟΠΟΙΚΙΛΙΕΣ Ethiopia Guji (Χύμα)", price: 4.86, quantity: 0, total_profit: 0.00 },
        { id: 53, name: "ΜΟΝΟΠΟΙΚΙΛΙΕΣ Peru Santa Teresa (Χύμα)", price: 4.86, quantity: 0, total_profit: 0.00 },
        { id: 54, name: "ΜΟΝΟΠΟΙΚΙΛΙΕΣ Indonesia Sumatra (Χύμα)", price: 4.86, quantity: 0, total_profit: 0.00 },
        { id: 55, name: "ΜΟΝΟΠΟΙΚΙΛΙΕΣ Brazil Alta Mogiana (Χύμα)", price: 4.57, quantity: 0, total_profit: 0.00 },
        { id: 56, name: "ΚΑΨΟΥΛΕΣ Κάψουλες Αλουμινίου Espresso Affection (10 τεμ)", price: 4.10, quantity: 0, total_profit: 0.00 },
        { id: 57, name: "ΚΑΨΟΥΛΕΣ Κάψουλες Αλουμινίου Espresso Serenity (10 τεμ)", price: 4.10, quantity: 0, total_profit: 0.00 },
        { id: 58, name: "ΚΑΨΟΥΛΕΣ Κάψουλες Αλουμινίου Espresso Bliss (10 τεμ)", price: 4.10, quantity: 0, total_profit: 0.00 },
        { id: 59, name: "ΚΑΨΟΥΛΕΣ Κάψουλες Αλουμινίου Espresso Euphoria (10 τεμ)", price: 4.10, quantity: 0, total_profit: 0.00 },
        { id: 60, name: "ΚΑΨΟΥΛΕΣ Κάψουλες Αλουμινίου Espresso Compassion (10 τεμ)", price: 4.29, quantity: 0, total_profit: 0.00 },
        { id: 61, name: "ΚΑΨΟΥΛΕΣ Κάψουλες Αλουμινίου Espresso Colombia (10 τεμ)", price: 4.29, quantity: 0, total_profit: 0.00 },
        { id: 62, name: "ΚΑΨΟΥΛΕΣ Κάψουλες Αλουμινίου Espresso Peru (10 τεμ)", price: 4.29, quantity: 0, total_profit: 0.00 },
        { id: 63, name: "ΚΑΨΟΥΛΕΣ Κάψουλες Αλουμινίου Espresso Indonesia Organic (10 τεμ)", price: 4.57, quantity: 0, total_profit: 0.00 },
        { id: 64, name: "Day Dream Blend Συσκευασμένος 250γρ", price: 5.62, quantity: 0, total_profit: 0.00 },
        { id: 65, name: "Day Dream Blend (Χύμα)", price: 3.07, quantity: 0, total_profit: 0.00 },
        { id: 67, name: "Déjà Vu Blend Συσκευασμένος 250γρ", price: 5.33, quantity: 0, total_profit: 0.00 },
        { id: 68, name: "Déjà Vu Blend (Χύμα)", price: 3.00, quantity: 0, total_profit: 0.00 },
        { id: 69, name: "Φίλτρου Αρωματικός 'Banoffee' Συσκευασμένος 200γρ", price: 5.52, quantity: 0, total_profit: 0.00 },
        { id: 70, name: "Φίλτρου Αρωματικός 'Bueno' Συσκευασμένος 200γρ", price: 5.52, quantity: 0, total_profit: 0.00 },
        { id: 71, name: "Αρωματικός (Χύμα)", price: 3.83, quantity: 0, total_profit: 0.00 },
        { id: 72, name: "Silent Breeze 200γρ", price: 6.67, quantity: 0, total_profit: 0.00 },
        { id: 73, name: "Caramel Breeze 200γρ", price: 6.29, quantity: 0, total_profit: 0.00 },
        { id: 74, name: "Κυπριακός Special Συσκευασμένος 170γρ", price: 2.67, quantity: 0, total_profit: 0.00 },
        { id: 75, name: "Κυπριακός Καφές Σκούρος Συσκευασμένος 170γρ", price: 2.57, quantity: 0, total_profit: 0.00 },
        { id: 76, name: "Κυπριακός Ντεκαφεϊνέ Συσκευασμένος 170γρ", price: 3.24, quantity: 0, total_profit: 0.00 },
        { id: 77, name: "Κυπριακός Καφές Παραδοσιακός Συσκευασμένος 170γρ", price: 2.48, quantity: 0, total_profit: 0.00 },
        { id: 78, name: "Ελληνικός Καφές Παραδοσιακός (Χύμα)", price: 1.90, quantity: 0, total_profit: 0.00 },
        { id: 79, name: "Ελληνικός Καφές Σκούρος (Χύμα)", price: 2.04, quantity: 0, total_profit: 0.00 },
        { id: 80, name: "Ελληνικός Καφές Special (Χύμα)", price: 2.21, quantity: 0, total_profit: 0.00 },
        { id: 81, name: "Coffeeccino Συσκευασμένο 200γρ", price: 4.29, quantity: 0, total_profit: 0.00 },
        { id: 82, name: "Στιγμιαίος Classic Συσκευασμένος 100γρ", price: 3.05, quantity: 0, total_profit: 0.00 },
        { id: 83, name: "Στιγμιαίος Αρωματικός Καραμέλα Συσκευασμένος 100γρ", price: 3.71, quantity: 0, total_profit: 0.00 },
        { id: 84, name: "Πυραμίδα Cinnamon Spicy Herbal Tea (10 τεμ.)", price: 3.00, quantity: 0, total_profit: 0.00 },
        { id: 85, name: "Πυραμίδα Ginger Blend Herbal Tea (10 τμχ.)", price: 3.00, quantity: 0, total_profit: 0.00 },
        { id: 86, name: "Τρίγωνο Τόνου", price: 4.20, quantity: 0, total_profit: 0.00 },
        { id: 87, name: "Λαγανάκι Club Σάντουιτς", price: 4.20, quantity: 0, total_profit: 0.00 },
        { id: 88, name: "Πράσινη Τορτίγια με Κοτόπουλο, Κατσικίσιο Τυρί & Cranberries", price: 4.20, quantity: 0, total_profit: 0.00 },
        { id: 90, name: "Πολύσπορη Μπακέτα με Κοτόπουλο & Αβοκάντο", price: 4.20, quantity: 0, total_profit: 0.00 },
        { id: 91, name: "Τορτίγια Ολικής με Γαλοπούλα, Τυρί & Μουστάρδα", price: 3.90, quantity: 0, total_profit: 0.00 },
        { id: 92, name: "Τρίγωνο Granary με Κοτόπουλο, Αβγό & Αβοκάντο", price: 4.00, quantity: 0, total_profit: 0.00 },
        { id: 93, name: "Πάνινι με Κοτόπουλο, Φέτα & Πέστο", price: 4.00, quantity: 0, total_profit: 0.00 },
        { id: 94, name: "Τρίγωνο Chia με Γαλοπούλα & Τυρί Κρέμα", price: 4.20, quantity: 0, total_profit: 0.00 },
        { id: 95, name: "Ciabatta Λιναρόσπορου με Σαλάμι & Προσούτο", price: 4.20, quantity: 0, total_profit: 0.00 },
        { id: 96, name: "Τορτίγια με Κοτόπουλο & Μουστάρδα με Μέλι", price: 4.20, quantity: 0, total_profit: 0.00 },
        { id: 97, name: "Παραδοσιακή Τριάρα", price: 5.00, quantity: 0, total_profit: 0.00 },
        { id: 98, name: "Σαλάτα με Κοτόπουλο & Παρμεζάνα", price: 5.25, quantity: 0, total_profit: 0.00 },
        { id: 99, name: "Σαλάτα Ζυμαρικών με Κοτόπουλο", price: 5.25, quantity: 0, total_profit: 0.00 },
        { id: 100, name: "Σαλάτα με Ρόκα, Παρμεζάνα & Ρόδι", price: 5.25, quantity: 0, total_profit: 0.00 },
        { id: 101, name: "Μπάρα ξηρών καρπών με φουντούκι, κακάο και σταφίδα 45γρ", price: 1.60, quantity: 0, total_profit: 0.00 },
        { id: 102, name: "Παραδοσιακή Μπουγάτσα Κομμάτι", price: 2.30, quantity: 0, total_profit: 0.00 },
        { id: 103, name: "Pean up γκοφρέτα με γέμιση φυστικοβούτυρο και bitter cream", price: 1.20, quantity: 0, total_profit: 0.00 },
        { id: 184, name: "Muffin Διπλής Σοκολάτας", price: 2.30, quantity: 0, total_profit: 0.00 },
        { id: 105, name: "Muffin Καραμέλας", price: 2.30, quantity: 0, total_profit: 0.00 },
        { id: 106, name: "Muffin Μήλο & Κανέλα", price: 2.30, quantity: 0, total_profit: 0.00 },
        { id: 107, name: "Donut με Ζάχαρη", price: 2.10, quantity: 0, total_profit: 0.00 },
        { id: 108, name: "Donut Πραλίνας", price: 2.10, quantity: 0, total_profit: 0.00 },
        { id: 109, name: "Donut Σοκολάτας", price: 2.10, quantity: 0, total_profit: 0.00 },
        { id: 110, name: "Donut Κανέλας", price: 2.10, quantity: 0, total_profit: 0.00 },
        { id: 111, name: "Φλογέρα με Γέμιση Πραλίνας Φουντουκιού", price: 2.40, quantity: 0, total_profit: 0.00 },
        { id: 112, name: "Croissant Σοκολάτας", price: 2.10, quantity: 0, total_profit: 0.00 },
        { id: 113, name: "Κρουασάν με Πραλίνα Φουντουκιού Συσκευασμένο 110γρ", price: 1.50, quantity: 0, total_profit: 0.00 },
        { id: 114, name: "Croissant Μήλου", price: 2.20, quantity: 0, total_profit: 0.00 },
        { id: 115, name: "Πορτοκαλόπιτα", price: 3.50, quantity: 0, total_profit: 0.00 },
        { id: 116, name: "Σοκολατόπιτα", price: 3.50, quantity: 0, total_profit: 0.00 },
        { id: 117, name: "Καρυδόπιτα", price: 3.50, quantity: 0, total_profit: 0.00 },
        { id: 118, name: "Ρεβανί", price: 3.50, quantity: 0, total_profit: 0.00 },
        { id: 119, name: "Cake Λεμονιού με Παπαρουνόσπορο", price: 1.50, quantity: 0, total_profit: 0.00 },
        { id: 120, name: "Μπάρα Βρώμης, High Protein με Μέλι, Γιαούρτι & Cranberry 60γρ", price: 1.60, quantity: 0, total_profit: 0.00 },
        { id: 121, name: "Mπάρα Βρώμης με Πορτοκάλι & Κακάο 60γρ", price: 1.50, quantity: 0, total_profit: 0.00 },
        { id: 122, name: "Mπάρα Βρώμης με Κακάο & Φουντούκι 60γρ", price: 1.50, quantity: 0, total_profit: 0.00 },
        { id: 123, name: "Σοκολάτα Γάλακτος 50γρ", price: 1.80, quantity: 0, total_profit: 0.00 },
        { id: 124, name: "Μαύρη Σοκολάτα Bitter Χωρίς Ζάχαρη 50γρ", price: 1.80, quantity: 0, total_profit: 0.00 },
        { id: 125, name: "Μαύρη Σοκολάτα Bitter με Φουντούκια 50γρ", price: 1.80, quantity: 0, total_profit: 0.00 },
        { id: 126, name: "Μπισκότα Γεμιστά με Φυστικοβούτυρο 80γρ", price: 1.70, quantity: 0, total_profit: 0.00 },
        { id: 127, name: "Μπισκότα Γεμιστά με Πραλίνα 80γρ", price: 1.70, quantity: 0, total_profit: 0.00 },
        { id: 128, name: "Soft Cookie Σοκολάτας", price: 2.20, quantity: 0, total_profit: 0.00 },
        { id: 129, name: "Soft Cookie Βανίλιας με Κομμάτια Bitter Σοκολάτας", price: 2.20, quantity: 0, total_profit: 0.00 },
        { id: 130, name: "Cookie Βρώμη Σταφίδα", price: 2.20, quantity: 0, total_profit: 0.00 },
        { id: 131, name: "Βιολογικό Παστέλι με Μέλι 34γρ", price: 1.20, quantity: 0, total_profit: 0.00 },
        { id: 132, name: "Βιολογικό Παστέλι με Μέλι και Φιστίκι Αιγίνης 34γρ", price: 1.40, quantity: 0, total_profit: 0.00 },
        { id: 133, name: "Φρέσκα Φρούτα", price: 3.50, quantity: 0, total_profit: 0.00 },
        { id: 134, name: "Επιδόρπιο Γιαουρτιού με Μέλι & Καρύδια", price: 2.75, quantity: 0, total_profit: 0.00 },
        { id: 135, name: "Επιδόρπιο Γιαουρτιού Γκρανόλα & Φραγκοστάφυλο", price: 2.75, quantity: 0, total_profit: 0.00 }
    ];

    // Function to display products
    function displayProducts() {
        const productContainer = document.getElementById("product-container");
        productContainer.innerHTML = ""; // Clear previous content

        products.forEach(product => {
            const productItem = document.createElement("div");
            productItem.classList.add("product-item");
            productItem.innerHTML = `
                <h2>${product.name}</h2>
                <p>Price: €${product.price}</p>
                <p>Quantity: ${product.quantity}</p>
                <p>Total Profit: €${product.total_profit}</p>
                <input type="number" id="add-quantity-${product.id}" placeholder="Quantity to add">
                <button id="add-btn-${product.id}">Add Quantity</button>
                <button class="subtract-btn">Subtract Quantity</button>
            `;
            // Add click event listener to subtract quantity
            productItem.querySelector(`.subtract-btn`).addEventListener("click", () => {
                subtractQuantity(product.id, product.price);
            });

            // Add click event listener to add quantity
            productItem.querySelector(`#add-btn-${product.id}`).addEventListener("click", () => {
                addQuantity(product.id);
            });

            productContainer.appendChild(productItem);
        });
    }

    // Function to update quantity in local storage
    function updateLocalStorage() {
        localStorage.setItem('products', JSON.stringify(products));
    }

    // Function to subtract quantity
    function subtractQuantity(productId, price) {
        products = products.map(product => {
            if (product.id === productId && product.quantity > 0) {
                product.quantity -= 1;
                product.total_profit += price; // Update total profit based on product's price
            }
            return product;
        });
        updateLocalStorage();
        displayProducts();
    }

    // Function to add quantity
    function addQuantity(productId) {
        const additionalQuantity = parseInt(document.getElementById(`add-quantity-${productId}`).value);
        if (!isNaN(additionalQuantity) && additionalQuantity > 0) {
            products = products.map(product => {
                if (product.id === productId) {
                    product.quantity += additionalQuantity;
                }
                return product;
            });
            updateLocalStorage();
            displayProducts();
        } else {
            alert("Please enter a valid quantity to add.");
        }
    }

    // Display products when the page loads
    displayProducts();
});
