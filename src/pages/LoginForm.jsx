import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, User, Mail, Lock } from 'lucide-react';

const LoginForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#04091A]">
            {/* Toggle Switch */}
            <div className="flex items-center gap-4 mb-12">
                <button
                    onClick={() => setIsLogin(true)}
                    className={`text-lg font-semibold ${
                        isLogin ? 'text-purple-400' : 'text-gray-500'
                    }`}
                >
                    LOG IN
                </button>
                <div
                    className="relative w-20 h-8 bg-red-500 rounded-full flex items-center cursor-pointer transition"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    <motion.div
                        initial={false}
                        animate={{ x: isLogin ? -32 : 32 }} // Adjust position for smooth transition
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                        }}
                        className="absolute w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
                    >
                        {isLogin ? (
                            <ArrowLeft size={14} className="text-red-500" />
                        ) : (
                            <ArrowRight size={14} className="text-red-500" />
                        )}
                    </motion.div>
                </div>
                <button
                    onClick={() => setIsLogin(false)}
                    className={`text-lg font-semibold ${
                        !isLogin ? 'text-purple-400' : 'text-gray-500'
                    }`}
                >
                    SIGN UP
                </button>
            </div>

            {/* Flip Card Animation */}
            <div className="relative w-[450px] h-[500px]">
                <motion.div
                    className="absolute w-full h-full"
                    initial={false}
                    animate={{ rotateY: isLogin ? 0 : 180 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Login Form */}
                    <div
                        className="absolute w-full h-full bg-gray-900 p-10 rounded-lg shadow-lg"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <h2 className="text-center text-2xl font-bold text-white mb-3">
                            Login
                        </h2>
                        <p className="text-gray-400 text-center text-sm mb-6">
                            Fill in your details below to access your account.
                        </p>
                        <form className="space-y-5">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 pl-12"
                                />
                                <Mail
                                    size={22}
                                    className="absolute left-4 top-4 text-red-500"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    className="w-full p-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 pl-12"
                                />
                                <Lock
                                    size={22}
                                    className="absolute left-4 top-4 text-red-500"
                                />
                            </div>
                            <button className="w-full p-4 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition">
                                Login
                            </button>
                        </form>
                    </div>

                    {/* Sign Up Form (Flipped) */}
                    <div
                        className="absolute w-full h-full bg-gray-900 p-10 rounded-lg shadow-lg"
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                        }}
                    >
                        <h2 className="text-center text-2xl font-bold text-white mb-6">
                            Sign Up
                        </h2>
                        <form className="space-y-5">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 pl-12"
                                />
                                <User
                                    size={22}
                                    className="absolute left-4 top-4 text-red-500"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 pl-12"
                                />
                                <Mail
                                    size={22}
                                    className="absolute left-4 top-4 text-red-500"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    className="w-full p-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 pl-12"
                                />
                                <Lock
                                    size={22}
                                    className="absolute left-4 top-4 text-red-500"
                                />
                            </div>
                            <button className="w-full p-4 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LoginForm;

//----------------------------------------------------------------------------3
// import React, { useState } from 'react';

// const LoginForm = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Email: ', email);
//         console.log('Password: ', password);
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-[#04091A]">
//             <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
//                 {/* Toggle Switch */}
//                 <div className="flex justify-center mb-6">
//                     <button
//                         onClick={() => setIsLogin(true)}
//                         className={`px-4 py-2 text-white font-semibold ${
//                             isLogin
//                                 ? 'text-purple-400 border-b-2 border-purple-400'
//                                 : 'text-gray-500'
//                         }`}
//                     >
//                         Login
//                     </button>
//                     <button
//                         onClick={() => setIsLogin(false)}
//                         className={`px-4 py-2 text-white font-semibold ${
//                             !isLogin
//                                 ? 'text-purple-400 border-b-2 border-purple-400'
//                                 : 'text-gray-500'
//                         }`}
//                     >
//                         Sign Up
//                     </button>
//                 </div>

//                 <h2 className="text-center text-2xl font-bold text-white mb-6">
//                     {isLogin ? 'Login' : 'Sign Up'}
//                 </h2>

//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                     {!isLogin && (
//                         <div>
//                             <label className="text-white">Name:</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your name"
//                                 className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//                             />
//                         </div>
//                     )}

//                     <div>
//                         <label className="text-white">Email:</label>
//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         />
//                     </div>
//                     <div>
//                         <label className="text-white">Password:</label>
//                         <input
//                             type="password"
//                             placeholder="Enter your password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full p-3 bg-purple-500 text-white font-bold rounded hover:bg-purple-600 transition"
//                     >
//                         {isLogin ? 'Login' : 'Sign Up'}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;

/////////////////////////////////////////////////////////////////////////////////////////////////2
// // import React, { useState } from 'react';

// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Email: ', email);
//         console.log('Password: ', password);
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-[#04091A]">
//             <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
//                 <h2 className="text-center text-2xl font-bold text-white mb-6">
//                     Login
//                 </h2>

//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                     <div>
//                         <label className="text-white">Email:</label>
//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
//                         />
//                     </div>
//                     <div>
//                         <label className="text-white">Password:</label>
//                         <input
//                             type="password"
//                             placeholder="Enter your password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full p-3 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition"
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;
///////////////////////////////////////////////////////////////////////////////////////////1
// import React, { useState } from 'react';

// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Email: ', email);
//         console.log('Password: ', password);
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form action="" onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="">Email:</label>
//                     <input
//                         type="email"
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         placeholder="Enter your password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default LoginForm;
