import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import PasswordInput from "../components/atoms/PasswordInput"; // Import komponen password
import WelcomeGuestModal from "../components/molecules/WelcomeGuestModal";

export default function Register() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    setShowWelcomeModal(true);
  };

  const confirmGuestLogin = () => {
    setShowWelcomeModal(false);
    // Langsung redirect ke home dengan state guest login
    navigate('/', { state: { isGuestLoggedIn: true } });
  };

  return (
    <>
      <Navbar 
        isLoggedIn={false} 
        user={null}
        onGuestLogin={handleGuestLogin}
      />

      <div className="min-h-screen bg-yellow-50/80 font-sans">
        {/* Main Content */}
        <div className="flex justify-center items-center px-5 md:px-30 py-16 min-h-screen">
          <div className="w-full max-w-lg bg-white rounded border border-gray-200 p-6 md:p-9 shadow-sm">
            {/* Header */}
            <div className="text-center mb-9">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                Pendaftaran Akun
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                Yuk, daftarkan akunmu sekarang juga!
              </p>
            </div>

            {/* Form */}
            <form>
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm md:text-base text-gray-500 mb-2">
                    Nama Lengkap <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full h-12 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm md:text-base text-gray-500 mb-2">
                    E-Mail <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full h-12 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm md:text-base text-gray-500 mb-2">
                    Jenis Kelamin <span className="text-orange-500">*</span>
                  </label>
                  <select
                    name="gender"
                    className="w-full h-12 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent cursor-pointer"
                    required
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                {/* Phone Number - Fixed Version */}
                <div>
                  <label className="block text-sm md:text-base text-gray-500 mb-2">
                    No. Hp <span className="text-orange-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center border border-gray-200 rounded-md flex-shrink-0">
                      <div className="flex items-center justify-center w-8 sm:w-11 h-12 border-r border-gray-200 px-1 sm:px-2">
                        <span className="text-sm sm:text-lg">🇮🇩</span>
                      </div>
                      <select className="w-12 sm:w-20 h-12 border-none focus:outline-none text-xs sm:text-sm cursor-pointer">
                        <option value="+62">+62</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="flex-1 min-w-0 h-12 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Password - Using PasswordInput Component */}
                <PasswordInput 
                  label="Kata Sandi" 
                  name="password" 
                  required 
                />

                {/* Confirm Password - Using PasswordInput Component */}
                <PasswordInput 
                  label="Konfirmasi Kata Sandi" 
                  name="confirmPassword" 
                  required 
                />

                {/* Forgot Password Link */}
                <div className="text-right">
                  <a
                    href="./forgotpassword.html"
                    className="text-sm md:text-base text-gray-500 hover:text-gray-700 underline cursor-pointer"
                  >
                    Lupa Password?
                  </a>
                </div>

                {/* Submit Buttons */}
                <div className="space-y-4">
                  <button
                    type="submit"
                    className="w-full h-11 bg-green-400 text-white font-bold rounded-lg hover:bg-green-500 transition-colors cursor-pointer"
                  >
                    Daftar
                  </button>
                  <a
                    href="./login"
                    className="w-full h-11 bg-green-100 text-green-400 font-bold rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center cursor-pointer"
                  >
                    Masuk
                  </a>
                  {/* Login as Guest Button */}
                  <button
                    type="button"
                    onClick={handleGuestLogin}
                    className="w-full h-11 bg-gray-100 text-gray-600 font-bold rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    Masuk sebagai Guest
                  </button>
                </div>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center justify-center my-6">
              <div className="flex-1 h-0.5 bg-gray-200"></div>
              <div className="px-4 bg-white">
                <p className="text-sm md:text-base text-gray-600">atau</p>
              </div>
              <div className="flex-1 h-0.5 bg-gray-200"></div>
            </div>

            {/* Google Sign Up */}
            <button
              type="button"
              className="w-full h-11 flex items-center justify-center gap-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm md:text-base text-gray-700 font-bold">
                Daftar dengan Google
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Welcome Guest Modal */}
      <WelcomeGuestModal 
        isOpen={showWelcomeModal}
        onConfirm={confirmGuestLogin}
      />
    </>
  );
}