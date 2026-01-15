// ================== Objects =========================
// Objects in JavaScript are like real-world records – a collection of key-value pairs.
// They help us store structured data (like a student, a product, or a user profile).

let obj = {
    name: "AbuBakar",
    age: 18,
    isEnrolled: true
};

// ============ Nesting and Deep Access ================
let student = {
    name: "Mahnoor",
    age: 20,
    address: {
        city: "Gujranwala",
        postalCode: 52200
    }
};

let city = student.address.city;

// ============ Object Destructuring ===================
let { name, age } = student;

let {
    address: { postalCode }
} = student;

// ============ Loops in Objects =======================
for (let key in obj) {
    console.log(key, obj[key]);
}

Object.keys(obj);
Object.entries(obj);

// ============ Copying Objects ========================
let newObj = { ...obj }; // Shallow copy
let deepCopy = JSON.parse(JSON.stringify(student)); // Deep copy

// ============ Optional Chaining ======================
// Avoids errors if a nested property is undefined
console.log(student?.address?.city);     // Gujranwala
console.log(student?.profile?.email);    // undefined (no error)

// ================= Practice ==========================

// 1. Create an object for a book (title, author, price)
let book = {
    title: "The End of the Day",
    author: "AbuBakar",
    price: 2000
};

// 2. Access properties using both dot and bracket notation
console.log(book.title);
console.log(book["author"]);

// 3. Write a nested object (user with address and location)
let user = {
    name: "Sweetie",
    age: 18,
    address: {
        city: "GRW",
        location: {
            postalCode: 52200
        }
    }
};

// 4. Convert object to array using Object.entries()
let obj1 = {
    student: "AbuBakar",
    sbj: "ICS Stat"
};

console.log(Object.entries(obj1));

// 5. Copy an object using spread operator
let obj2 = { ...obj1 };
