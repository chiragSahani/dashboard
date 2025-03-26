# 🚀 Next.js Dashboard  

A modern, responsive **Dashboard UI** built with **Next.js, TypeScript, Tailwind CSS**, and **ShadCN UI**. It features authentication, a sidebar, a navbar with user management, and reusable UI components.

---

## 📌 Features  

✅ **Authentication System** (Login, Logout)  
✅ **Dashboard Layout** (Sidebar + Navbar)  
✅ **Dropdown Menu** (User Settings)  
✅ **Adaptive UI Components** (Accordion, Alerts, Data Table)  
✅ **Responsive Design** with Tailwind CSS  
✅ **State Management** using React Hooks  
✅ **LocalStorage for User Persistence**  

---

## 🛠️ Tech Stack  

- **Next.js 13+** (App Router)  
- **React 18+**  
- **TypeScript**  
- **Tailwind CSS**  
- **ShadCN UI**  
- **Lucide Icons**  

---

## ⚙️ Installation  

1️⃣ Clone the repository:  
```sh
git clone https://github.com/chiragSahani/dashboard.git

```

2️⃣ Install dependencies:  
```sh
npm install  # or yarn install
```

3️⃣ Run the development server:  
```sh
npm run dev  # or yarn dev
```

4️⃣ Open in browser:  
```
http://localhost:3000
```

---

## 📂 Project Structure  

```
dashboard/project
│── app/
│   ├── dashboard/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/
│   │   ├── auth/
│   │   │   ├── login-form.tsx
│   │   ├── dashboard/
│   │   │   ├── data-table.tsx
│   │   │   ├── layout.tsx
│   │   ├── ui/
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
```

---

## 🚀 Usage  

- **Login** with credentials  
- **View Dashboard** with navigation  
- **Manage UI Components** via dropdown  

---

## 🎨 UI Components  

- **Navbar**
- **Sidebar**
- **Dropdown Menu**
- **Data Table**
- **Alerts & Notifications**
- **Accordion UI**

---

## 🛡️ Authentication  

The app uses **localStorage** to persist user sessions.  

```tsx
const [user, setUser] = useState<{ email: string } | null>(null);

useEffect(() => {
  if (typeof window !== "undefined") {
    const userData = localStorage.getItem("user");
    setUser(userData ? JSON.parse(userData) : null);
  }
}, []);

const handleLogout = () => {
  localStorage.removeItem("user");
  router.push("/");
};
```

---



## ⭐ Contribute  

Want to contribute? Feel free to fork the repo and submit a **Pull Request**.  

---

