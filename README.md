# 💍 Wedding Coordinator Booking API

This is the backend API for managing wedding coordinators and user bookings. It includes endpoints for creating coordinators, searching, and booking them based on availability.

---

## 🚀 Tech Stack

- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **TypeScript**
- **Zod** (validation)
- **CORS**
- **dotenv**

---

## 📦 Installation

```bash
git clone https://github.com/Babszzz/jg-backend.git
cd wedding-coordinator-api
yarn install
# or
npm install
```

## ⚙️ Environment Setup

Create a .env file in the root and add the following:

```bash
PORT=3501
MONGO_URI=your_own_mongodb_connection_string
```

## 🧪 Running the Server

```bash
yarn dev
# or
npm run dev
```

## 📚 API Endpoints

### 📘 Coordinators

| Method | Endpoint                                         | Description                |
| ------ | ------------------------------------------------ | -------------------------- |
| GET    | `/api/coordinators`                              | List all coordinators      |
| GET    | `/api/coordinators/:id`                          | Get a single coordinator   |
| POST   | `/api/coordinators`                              | Create a new coordinator   |
| GET    | `/api/coordinators/search?name=...&location=...` | Search by name or location |
| POST   | `/api/bookings`                                  | Book a coordinator         |

### 📆 Bookings

| Method | Endpoint        | Description        | Request Body Fields                                           |
| ------ | --------------- | ------------------ | ------------------------------------------------------------- |
| POST   | `/api/bookings` | Book a coordinator | `name`, `email`, `weddingDate`, `guestCount`, `coordinatorId` |

## 🧑‍💻 Author

Made by [Babatunde Shodunke](https://github.com/babszzz)
