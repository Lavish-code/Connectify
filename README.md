# SpinChat App - MERN Stack with Real-Time Chat

A full-featured social media application built with the MERN stack, featuring real-time chat functionality, user authentication, and a modern responsive design.

## 🚀 Features

### Core Functionality
- **User Authentication & Authorization** - Secure JWT-based authentication system
- **Post Management** - Create, delete, and interact with posts
- **Social Interactions** - Like/unlike posts and add comments
- **User Connections** - Follow and unfollow other users
- **Account Controls** - Freeze/unfreeze account functionality

### Real-Time Chat
- **Live Messaging** - Real-time chat powered by Socket.io
- **Image Support** - Send and receive images in conversations
- **Message Status** - Seen/unseen indicators for messages
- **Audio Notifications** - Sound alerts for new messages

### User Experience
- **Responsive Design** - Optimized for all device sizes
- **Dark/Light Mode** - Toggle between themes
- **Modern UI** - Clean interface built with Chakra UI
- **Fast Performance** - Optimized for speed and efficiency

## 🛠️ Tech Stack

- **Frontend**: React.js with Chakra UI
- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Real-Time**: Socket.io for live chat
- **Authentication**: JSON Web Tokens (JWT)
- **File Storage**: Cloudinary for image uploads
- **Deployment**: Ready for production deployment

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account for image storage

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SpinChat-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Build the application**
   ```bash
   npm run build
   ```

5. **Start the application**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:5000`

## 🌟 Key Features Breakdown

### Authentication System
- Secure user registration and login
- JWT token management
- Protected routes and middleware
- Password hashing with bcrypt

### Post Management
- Rich text post creation
- Image upload support
- Post deletion with proper authorization
- Engagement tracking (likes, comments)

### Social Features
- User profiles with customizable information
- Follow/unfollow system
- Activity feeds
- User discovery

### Real-Time Chat
- Instant messaging between users
- Image sharing in conversations
- Message delivery status
- Online/offline indicators
- Push notifications

### UI/UX Features
- Responsive design for mobile and desktop
- Dark/light theme switching
- Smooth animations and transitions
- Intuitive navigation
- Loading states and error handling

## 🚀 Deployment

This application is ready for deployment on platforms like:
- Heroku
- Vercel
- DigitalOcean
- AWS
- Railway

Make sure to set up your environment variables on your chosen platform.

## 📁 Project Structure

```
SpinChat-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── utils/
│   └── public/
└── socket/
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔧 Development

For development mode:
```bash
npm run dev
```

This will start both the backend server and frontend development server concurrently.

## 🐛 Troubleshooting

### Common Issues

- **MongoDB Connection**: Ensure your MongoDB URI is correct and the database is accessible
- **Cloudinary Setup**: Verify your Cloudinary credentials are properly configured
- **Port Conflicts**: Change the PORT in your .env file if port 5000 is in use
- **JWT Errors**: Make sure your JWT_SECRET is set and secure

### Support

If you encounter any issues, please check the troubleshooting guide or open an issue in the repository.

---

Built with ❤️ using the MERN stack
