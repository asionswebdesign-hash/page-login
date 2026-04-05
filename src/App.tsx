/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  PlusCircle, 
  Ruler, 
  Triangle, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Plus,
  Minus,
  X,
  Percent,
  Calculator,
  Star
} from 'lucide-react';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Side - Math Board (Hidden on mobile) */}
      <div className="relative hidden w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#47A1FF] to-[#0060A9] p-12 text-white lg:flex lg:w-[55%]">
        {/* Background Decorative Icons */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 gap-8 p-12">
            <Plus size={96} />
            <Minus size={72} />
            <X size={84} />
            <Percent size={64} />
            <Calculator size={96} />
            <Triangle size={72} />
            <Star size={64} />
            <Rocket size={96} />
            <Plus size={84} />
            <Minus size={96} />
          </div>
        </div>

        {/* Floating Cards */}
        <div className="relative z-10 grid max-w-2xl grid-cols-2 gap-12">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center rounded-3xl bg-white/20 p-8 backdrop-blur-md transition-transform hover:scale-105"
          >
            <PlusCircle className="mb-4 text-secondary" size={72} />
            <div className="h-2 w-24 rounded-full bg-white/30"></div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0, rotate: -6 }}
            animate={{ y: 0, opacity: 1, rotate: -6 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-col items-center justify-center rounded-3xl bg-white/20 p-8 backdrop-blur-md transition-transform hover:rotate-0"
          >
            <Ruler className="mb-4 text-white" size={72} />
            <div className="h-2 w-24 rounded-full bg-white/30"></div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0, rotate: 3 }}
            animate={{ y: 0, opacity: 1, rotate: 3 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center justify-center rounded-3xl bg-white/20 p-8 backdrop-blur-md transition-transform hover:rotate-0"
          >
            <Triangle className="mb-4 text-white" size={72} />
            <div className="h-2 w-24 rounded-full bg-white/30"></div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="-mt-12 flex flex-col items-center justify-center rounded-3xl bg-white/20 p-8 backdrop-blur-md transition-transform hover:scale-105"
          >
            <Rocket className="mb-4 text-secondary" size={72} />
            <div className="h-2 w-24 rounded-full bg-white/30"></div>
          </motion.div>
        </div>

        {/* Logo and Tagline */}
        <div className="z-10 mt-16 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mx-auto mb-6 flex h-24 w-24 -rotate-3 items-center justify-center rounded-3xl bg-white shadow-2xl"
          >
            <Rocket className="text-primary" size={60} />
          </motion.div>
          <h1 className="mb-4 text-5xl font-black tracking-tight">Number Hop</h1>
          <p className="mx-auto max-w-sm text-xl font-medium text-blue-100">
            Tingkatkan kemampuan matematikamu dengan cara yang menyenangkan!
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full flex-col lg:w-[45%]">
        <main className="flex flex-grow flex-col items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="mb-8 flex flex-col items-center lg:hidden">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-xl">
                <Rocket className="text-white" size={40} />
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-primary">Number Hop</h1>
            </div>

            {/* Login Card */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative overflow-hidden rounded-[2.5rem] border-4 border-primary-bright/10 bg-white p-8 shadow-[0_32px_64px_-12px_rgba(0,123,255,0.15)] md:p-10"
            >
              <div className="absolute top-0 right-0 p-4">
                <Star className="animate-pulse text-secondary" size={32} fill="currentColor" />
              </div>

              <div className="relative z-10">
                <div className="mb-10 text-center">
                  <h2 className="mb-2 text-3xl font-black text-primary">Selamat Datang Kembali!</h2>
                  <p className="font-semibold text-[#001F2A]/60">Ayo lanjutkan petualangan matematikamu!</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5">
                    <label className="ml-2 text-sm font-black uppercase tracking-wider text-primary" htmlFor="email">
                      Email Kamu
                    </label>
                    <div className="relative">
                      <Mail className="absolute top-1/2 left-5 -translate-y-1/2 text-primary-bright" size={20} />
                      <input 
                        className="h-14 w-full rounded-2xl border-2 border-transparent bg-blue-50/50 pl-14 pr-5 font-bold text-[#001F2A] transition-all duration-300 placeholder:text-blue-200 focus:border-primary focus:ring-4 focus:ring-primary/10"
                        id="email" 
                        placeholder="contoh@email.com" 
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between px-2 items-center">
                      <label className="text-sm font-black uppercase tracking-wider text-primary" htmlFor="password">
                        Kata Sandi
                      </label>
                      <a className="text-xs font-black text-tertiary transition-colors hover:text-primary" href="#">
                        Lupa Password?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute top-1/2 left-5 -translate-y-1/2 text-primary-bright" size={20} />
                      <input 
                        className="h-14 w-full rounded-2xl border-2 border-transparent bg-blue-50/50 pl-14 pr-12 font-bold text-[#001F2A] transition-all duration-300 placeholder:text-blue-200 focus:border-primary focus:ring-4 focus:ring-primary/10"
                        id="password" 
                        placeholder="••••••••" 
                        type={showPassword ? "text" : "password"}
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-1/2 right-5 -translate-y-1/2 text-blue-300 transition-colors hover:text-primary"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <button 
                    className="group mt-8 flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-primary text-xl font-black text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary-bright hover:shadow-primary/40 active:scale-95" 
                    type="submit"
                  >
                    <span>Masuk</span>
                    <Rocket className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                  </button>
                </form>

                <div className="mt-10 text-center">
                  <p className="font-bold text-[#001F2A]/70">
                    Belum punya akun? 
                    <a className="ml-1 font-black text-tertiary underline decoration-2 underline-offset-4 transition-colors hover:text-primary" href="#">
                      Daftar Sekarang
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-col items-center gap-5">
              <div className="flex -space-x-3">
                <img 
                  className="h-12 w-12 rounded-full border-4 border-white shadow-lg" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9-H4Ah9ttKokDzpVeSC-ZhGx5Guw1yp-WADzyZgka4tC2TStuCSvM9_ZySDoLsXU1U_x6D0lpK36YoND_D6inlGrphpqUkyRgdFEYovU6XJ3elKVwZPMN418FbSTLcM4EiSpsOjYhxmyGN2T78N_qjTKkKNKXUf_x_1ah_vLW00f0q-Gu-lBbUE9WzwkAeqy14fYTTsZwMxMygFgpZp4mydxJBtr5NGoIKoIa8UUmqCqfnJWddJG6f0ENjUCu2r00rNXD5P0gyDqG" 
                  alt="User avatar"
                  referrerPolicy="no-referrer"
                />
                <img 
                  className="h-12 w-12 rounded-full border-4 border-white shadow-lg" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAecG-sX3rzZI6I2P2eOCJkYfLSBuadZFIntlGLibR0a_jtqiLj5TymVG0eIautZ3reSNPIBNpUFyLMXxBDDU7n3QHTRoAlLAouJ8KDticWEIpbvAXLNAlrDcEaIXF3YNur2qykkv567wIpy4zDWX9jCPE70YrTugVeJgqzw-U709PwM2jmlJ8SyVC1eAOr3iN644zTXyjaDbhpMwOvMkn095O0LjbeV78lihO1PmBs2S2p4AksnRvg9qccalIplJEj8kgoS2OBIVNj" 
                  alt="User avatar"
                  referrerPolicy="no-referrer"
                />
                <img 
                  className="h-12 w-12 rounded-full border-4 border-white shadow-lg" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Jxpx1ftjzRHONMtuX0JXii7BZ_yz7kcfGchSQGI-5VAQGEQxNH35bylG0DlJpTdnZszuzdPPdogC5DSBuv6BArzEv8W7zlCy72CGgNo5J6GQO4gcOUSBZgUOTP80NdHkwwwZ-tw3jQkQRX36a__Eb_OYNf75zzrIZDCwsMbNBbCcfUVRII6UhjeYTXVtkXOf09XpQf24wnMdv0K0d2evdAXQKpsoGMsq1h5pS0JJ3qOa2iAVtq3_3JM36tkKwb66A3sACwZyH3pX" 
                  alt="User avatar"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-center text-sm font-black text-primary">
                Bergabung dengan 10,000+ Jagoan Matematika!
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto w-full border-t border-blue-50 py-8 px-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-lg font-black text-primary">Number Hop</div>
            <div className="flex flex-wrap justify-center gap-6">
              <a className="text-xs font-bold text-[#001F2A]/40 transition-colors hover:text-primary" href="#">Privacy Policy</a>
              <a className="text-xs font-bold text-[#001F2A]/40 transition-colors hover:text-primary" href="#">Terms of Service</a>
              <a className="text-xs font-bold text-[#001F2A]/40 transition-colors hover:text-primary" href="#">Help Center</a>
            </div>
            <div className="text-center text-[10px] font-bold text-[#001F2A]/30">
              © 2024 Number Hop. Making math a playground for everyone.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
