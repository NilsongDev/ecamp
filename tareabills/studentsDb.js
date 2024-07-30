const students = [
    {
        id: 1,
        name: "John Doe",
        birthdate: "1990-01-02",
        address: "123 Main St",
        phone: "123-456-7890",
        email: "john.doe@example.com",
        faculty: "Computer Science",
        department: "Software Engineering",
    },
    {
        id: 2,
        name: "Jane Smith",
        birthdate: "1992-03-04",
        address: "456 Elm St",
        phone: "987-654-3210",
        email: "jane.smith@example.com",
        faculty: "Mathematics",
        department: "Statistics",
    },
    {
        id: 3,
        name: "Alice Johnson",
        birthdate: "1991-05-06",
        address: "789 Oak St",
        phone: "555-123-4567",
        email: "alice.johnson@example.com",
        faculty: "Physics",
        department: "Astrophysics",
    },
];



const bills = [
    {
        id: 1,
        studentId: 1,
        feeType: feeTypes[0],
        description: "2024-08",
        amount: 1000,
        dueDate: "2024-08-20",
        status: paymentStatus[1],
    },
    {
        id: 2,
        studentId: 2,
        feeType: feeTypes[1],
        description: "2024-08",
        amount: 150,
        dueDate: "2024-08-25",
        status: paymentStatus[0],
    },
    {
        id: 3,
        studentId: 1,
        feeType: feeTypes[3],
        description: "2024-08",
        amount: 200,
        dueDate: "2024-08-30",
        status: paymentStatus[2],
    },
    {
        id: 4,
        studentId: 1,
        feeType: feeTypes[0],
        description: "2024-09",
        amount: 20000,
        dueDate: "2024-09-30",
        status: paymentStatus[4],
    },
];





// Exporting as a global variable for simplicity in this context
window.students = students;
