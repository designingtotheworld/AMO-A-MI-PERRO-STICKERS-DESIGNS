/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, Star, Sparkles, Image as ImageIcon, Mail, ShoppingBag, Send } from 'lucide-react';

export default function App() {
  const [purchasers, setPurchasers] = useState(48);

  useEffect(() => {
    const interval = setInterval(() => {
      setPurchasers(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="pt-4 pb-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <img
            src="https://i.imgur.com/WLmr006.png"
            alt="Logo Amo a Mascota"
            className="w-full max-w-[160px] mx-auto mt-0 mb-4"
            referrerPolicy="no-referrer"
          />

          <img
            src="https://i.imgur.com/KHp7Fzw.png"
            alt="Detalle del kit"
            className="w-full max-w-2xl mx-auto mb-10"
            referrerPolicy="no-referrer"
          />


          <img
            src="https://i.imgur.com/K1NIHpu.png"
            alt="Ejemplo de stickers de mascota"
            className="w-full rounded-xl shadow-lg mb-12"
            referrerPolicy="no-referrer"
          />

          <img
            src="https://i.imgur.com/SCzrad7.png"
            alt="Detalle adicional de stickers"
            className="w-full rounded-xl shadow-lg mb-12"
            referrerPolicy="no-referrer"
          />

          <div className="mt-8 flex flex-col gap-4 max-w-sm mx-auto mb-10">
            <motion.a 
              href="#oferta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-green-600 text-white px-10 py-5 rounded-full font-bold hover:bg-green-700 transition shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-lg text-center cursor-pointer"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              ¡Quiero mi colección ahora!
            </motion.a>
            <p className="text-orange-600 text-sm font-semibold text-center">⚠️ Cupos limitados por semana</p>
            <motion.a 
              href="https://ux0sm3-jg.myshopify.com/cart/8795716419672:1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-10 py-5 rounded-full font-bold hover:from-green-500 hover:to-green-400 transition shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-lg text-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              RESERVA TU LUGAR YA
            </motion.a>
            <div className="mt-4 bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center">
              <div className="text-lg font-semibold text-gray-700 uppercase tracking-widest">Encargala hoy por solo:</div>
              <div className="text-4xl font-extrabold text-gray-900 mt-2">$ARS 24.999</div>
              <p className="mt-1 text-gray-800 italic font-medium">¡Pedila ahora desde nuestra tienda!</p>
              <p className="mt-3 text-sm text-gray-900 font-semibold bg-green-50 rounded-lg p-2 shadow-sm border border-green-100">📦 Tiempo de entrega: 5 a 10 días hábiles desde que recibimos la foto de tu mascota.</p>
            </div>
          </div>

          <img id="oferta" src="https://i.imgur.com/jzZyMjY.png" alt="Colección Pasiones Argentinas" className="w-full max-w-[300px] mx-auto my-4 scroll-mt-24" referrerPolicy="no-referrer" />
          <h1 className="mt-4 text-5xl md:text-6xl font-display tracking-tight text-gray-900">
            Convertí a tu mascota en parte de tu pasión.<br />
            Plancha de 10 stickers UV DTF premium personalizados con su foto.
          </h1>
          <p className="mt-6 text-2xl text-gray-700 max-w-2xl mx-auto font-hand">Impresión UV DTF premium estilo acuarela, resistente al agua y brillante. Tu mascota, lista para pegar en donde quieras.</p>
          <div className="mt-10">
            <img 
              src="https://i.imgur.com/tfzoikl.png"
              alt="Plancha de stickers"
              className="w-full max-w-lg mx-auto rounded-xl shadow-lg mb-4"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://i.imgur.com/h4nVPBK.png"
              alt="Detalle de stickers"
              className="w-full max-w-lg mx-auto rounded-xl shadow-lg mb-12"
              referrerPolicy="no-referrer"
            />
            
            {/* Contenido de la plancha */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto mb-10 text-left">
                <h3 className="font-semibold text-lg mb-4 text-center">10 stickers totales (1 DE LA FOTO DE TU PERRO ORIGINAL TRANSFORMADA EN STICKER Y 2 de cada diseño):</h3>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2"><span>🏆</span> Perro con Copa del Mundo y camiseta Argentina #10</li>
                    <li className="flex gap-2"><span>🧉</span> Perro tomando mate</li>
                    <li className="flex gap-2"><span>😎</span> Perro con anteojos y vincha</li>
                    <li className="flex gap-2"><span>🛡️</span> Perro en el Escudo Argentino</li>
                    <li className="flex gap-2"><span>❤️</span> "Yo amo a mi mascota"</li>
                </ul>
            </div>

            <motion.a 
              href="https://ux0sm3-jg.myshopify.com/cart/8795716419672:1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-medium hover:bg-green-700 transition text-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              Quiero la colección de mi mascota ahora
            </motion.a>
            <p className="mt-4 text-orange-600 text-sm font-semibold">⚠️ Cupos limitados por semana para garantizar la calidad</p>
            <motion.a 
              href="https://ux0sm3-jg.myshopify.com/cart/8795716419672:1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex justify-center items-center gap-2 text-white bg-green-600 hover:bg-green-700 rounded-full py-3 px-6 w-fit mx-auto border border-green-600 font-semibold text-sm shadow-sm transition-all"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <span>RESERVA TU LUGAR YA</span>
            </motion.a>

            <div className="mt-8 mb-6 inline-block">
                <div className="flex items-center gap-3 bg-yellow-400 text-gray-900 px-6 py-4 rounded-xl border border-yellow-500 shadow-lg">
                    <div className="text-4xl font-mono text-gray-900 font-bold tabular-nums tracking-wider">
                        {purchasers}
                    </div>
                    <div className="text-xs border-l border-yellow-600 pl-3 leading-tight uppercase tracking-wide font-medium text-gray-800">
                        personas encargando <br/>en este momento
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Problema & Transformación */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-medium text-center">"Amo a mi mascota, y llevarla conmigo en las cosas que me gustan, me parece increíble."</h2>
            <p className="mt-4 text-gray-600 text-center">Me encantó el producto. Es exactamente lo que buscaba: algo estético, lindo y con diseño que realmente se vea bien pegado en mi laptop, mi termo o mis accesorios favoritos.</p>
          </motion.div>
        </div>
      </section>

      {/* Mecanismo Único */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Bandera Argentina */}
          <div className="flex w-32 h-2 mx-auto mb-6 rounded-full overflow-hidden">
              <div className="w-1/3 bg-sky-300"></div>
              <div className="w-1/3 bg-white"></div>
              <div className="w-1/3 bg-sky-300"></div>
          </div>
            
          <h2 className="text-4xl font-display font-medium">¿Cómo recibo mi colección?</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6 text-lg font-semibold">
            <div className="p-6 bg-white rounded-2xl text-blue-900 shadow-md">1. Comprás la plancha en nuestra tienda.</div>
            <div className="p-6 bg-white rounded-2xl text-blue-900 shadow-md">2. Nos mandás la foto de tu mascota por mensaje.</div>
            <div className="p-6 bg-white rounded-2xl text-blue-900 shadow-md">3. Diseñamos e imprimimos en tecnología UV DTF.</div>
            <div className="p-6 bg-white rounded-2xl text-blue-900 shadow-md">4. En 5-10 días hábiles el producto está listo y lo enviamos a tu dirección por correo.</div>
          </div>
          <p className="mt-8 text-sky-100 italic text-lg opacity-90">* Importante: Los 5 diseños son fijos. No hace falta aprobar diseño. Envianos una foto clara y de frente de tu mascota para mejor resultado.</p>
        </div>
      </section>

      {/* Instrucciones Post-Compra */}
      <section className="py-20 px-6 bg-green-50 border-t border-b border-green-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-green-100 text-green-800 text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">¡Es facilísimo!</span>
            <h3 className="text-3xl md:text-4xl font-display font-black text-gray-900 mt-3">💬 Qué hacer una vez que comprás:</h3>
            <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">Una vez que completes el pago, el proceso sigue de esta manera tan sencilla:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-green-600 font-bold uppercase tracking-wider">Paso 1</span>
                <h4 className="font-extrabold text-gray-900 text-base mt-0.5">Clickeá en comprar</h4>
                <p className="text-gray-600 text-sm mt-1.5">Hacé clic en los botones de nuestra tienda para realizar tu pedido de forma 100% segura.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-green-600 font-bold uppercase tracking-wider">Paso 2</span>
                <h4 className="font-extrabold text-gray-900 text-base mt-0.5">Recibí el mail de SHOPIFY</h4>
                <p className="text-gray-600 text-sm mt-1.5">Te llegará un correo de confirmación de compra desde <strong>Shopify</strong>. ¡Por las dudas <strong>revisá tu casilla de Spam o Correo No Deseado</strong>!</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-green-600 font-bold uppercase tracking-wider">Paso 3</span>
                <h4 className="font-extrabold text-gray-900 text-base mt-0.5">Envianos la foto</h4>
                <p className="text-gray-600 text-sm mt-1.5">Seguí las instrucciones de ese mail y <strong>respondelo enviándonos la foto de tu mascota</strong> (perro, gato, la que quieras).</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-green-600 font-bold uppercase tracking-wider">Paso 4</span>
                <h4 className="font-extrabold text-gray-900 text-base mt-0.5">¡Y listo!</h4>
                <p className="text-gray-600 text-sm mt-1.5">En unos días te avisamos cuando esté lista tu plancha de stickers y la mandamos directo a tu casa x correo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incluye */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-display font-medium text-center mb-16">Lo que te entregamos</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center">
              <div className="p-3 bg-white rounded-full mb-6 shadow-sm">
                <ImageIcon className="text-cyan-400 w-6 h-6" />
              </div>
              <h4 className="font-semibold text-lg mb-3 text-white">Diseño personalizado</h4>
              <p className="text-gray-300 text-sm">Ilustramos a tu mascota en la "Colección Pasiones Argentinas" de forma exclusiva para vos.</p>
            </div>
            <div className="bg-black p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center">
              <div className="p-3 bg-white rounded-full mb-6 shadow-sm">
                <Star className="text-cyan-400 w-6 h-6" />
              </div>
              <h4 className="font-semibold text-lg mb-3 text-white">Kit UV DTF Premium</h4>
              <p className="text-gray-300 text-sm">Plancha con 10 stickers, alta resistencia, brillante y duradera. Producto físico listo para usar.</p>
            </div>
            <div className="bg-black p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center">
              <div className="p-3 bg-white rounded-full mb-6 shadow-sm">
                <Sparkles className="text-cyan-400 w-6 h-6" />
              </div>
              <h4 className="font-semibold text-lg mb-3 text-white">Envío directo a tu hogar</h4>
              <p className="text-gray-300 text-sm">Compra en nuestra tienda, mandanos la foto, y recibí tu kit personalizado en tu domicilio.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Opiniones */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-display font-medium text-center mb-16">Lo que dicen quienes ya transformaron a su mascota</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col">
              <p className="text-gray-700 italic flex-grow">"Perdí a mi perrito abruptamente y lo extraño siempre. Poder tenerlo ahora en mis cosas es increíble, gracias por este producto tan genial."</p>
              <p className="mt-6 font-semibold">- Juan Ignacio</p>
            </div>
            
            <img                
              src="https://i.imgur.com/WraEUug.png"
              alt="Testimonio visual"
              className="w-full h-full object-cover rounded-2xl shadow-sm"
              referrerPolicy="no-referrer"
            />
            
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col">
              <p className="text-gray-700 italic flex-grow">"Impresionante la calidad. Pedí los stickers y los puse en mi termo y en la taza que uso todos los días. Se lavan, se mojan, y siguen intactos. Resistentes al microondas. Realmente se ven súper premium, nada que ver con esas cosas baratas que se despegan a los dos días."</p>
              <p className="mt-6 font-semibold">- Jazmin</p>
            </div>
            
            <img                
              src="https://i.imgur.com/9OEu4eU.png"
              alt="Testimonio visual extra"
              className="w-full h-full object-cover rounded-2xl shadow-sm"
              referrerPolicy="no-referrer"
            />
            
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col">
              <p className="text-gray-700 italic flex-grow">"Es increíble tener literalmente a mi mascota en mis objetos. No es una raza genérica, es mi perro hecho sticker. Estaba cansada de diseños infantiles y buscaba algo estético y minimalista que combinara con mis cosas, y este servicio me dio justo eso. Un lujo total."</p>
              <p className="mt-6 font-semibold">- Agustina</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-display font-medium text-center mb-16">Algunos de nuestros clientes</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
             <img src="https://i.imgur.com/5RfEgm0.png" alt="Cliente" className="rounded-2xl h-64 w-full object-cover shadow-sm" referrerPolicy="no-referrer" />
             <img src="https://i.imgur.com/eCSNU3O.png" alt="Cliente" className="rounded-2xl h-64 w-full object-cover shadow-sm" referrerPolicy="no-referrer" />
             <img src="https://i.imgur.com/9oa7EJM.jpeg" alt="Cliente" className="rounded-2xl h-64 w-full object-cover shadow-sm" referrerPolicy="no-referrer" />
             <img src="https://i.imgur.com/zRLdSxC.png" alt="Cliente" className="rounded-2xl h-64 w-full object-cover shadow-sm" referrerPolicy="no-referrer" />
             <img src="https://i.imgur.com/1v94WvA.png" alt="Cliente" className="rounded-2xl h-64 w-full object-cover shadow-sm" referrerPolicy="no-referrer" />
             <img src="https://i.imgur.com/EPmGZDg.png" alt="Cliente" className="rounded-2xl h-64 w-full object-cover shadow-sm" referrerPolicy="no-referrer" />
             <img src="https://i.imgur.com/AnHF9ML.png" alt="Cliente" className="rounded-2xl h-64 w-full object-cover shadow-sm" referrerPolicy="no-referrer" />
             <img src="https://i.imgur.com/jfQKE4l.png" alt="Cliente" className="rounded-2xl h-64 w-full object-cover shadow-sm" referrerPolicy="no-referrer" />
             <img src="https://i.imgur.com/sd60Bhn.png" alt="Cliente" className="rounded-2xl h-64 w-full object-cover shadow-sm" referrerPolicy="no-referrer" />
             <img src="https://i.imgur.com/dnL0XRo.png" alt="Cliente" className="rounded-2xl h-64 w-full object-cover shadow-sm" referrerPolicy="no-referrer" />
             <div className="rounded-2xl h-64 w-full border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-3xl font-light">+</div>
             <div className="rounded-2xl h-64 w-full border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-3xl font-light">+</div>
          </div>
        </div>
      </section>

      {/* Precio & Bono */}
      <section className="py-20 px-6 text-center bg-white">
        <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <p className="mt-6 text-2xl md:text-3xl font-bold text-gray-900">Tener una plancha de stickers de tu propia mascota no tiene precio.</p>
          <div className="mt-8">
            <p className="text-lg font-semibold text-gray-700">ENCÁRGALA HOY POR SÓLO</p>
            <div className="mt-2 text-5xl font-extrabold text-gray-900">
              $ARS 24.999
            </div>
            <p className="mt-4 text-sm text-gray-900 font-semibold bg-green-50 rounded-lg p-3 border border-green-100">📦 Tiempo de entrega: 5 a 10 días hábiles desde que recibimos la foto de tu mascota.</p>
          </div>
          
          <a 
            href="https://ux0sm3-jg.myshopify.com/cart/8795716419672:1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-full block text-center bg-green-600 text-white py-6 rounded-2xl font-bold text-xl hover:bg-green-700 transition transform hover:scale-105 active:scale-95 shadow-lg"
          >
            ENCARGÁ LA TUYA AHORA
          </a>
        </div>
      </section>
    </div>
  );
}
