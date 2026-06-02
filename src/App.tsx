/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Check, Star, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function App() {
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
            src="https://i.imgur.com/fMFI17h.png"
            alt="Detalle del kit"
            className="w-full max-w-2xl mx-auto mb-10"
            referrerPolicy="no-referrer"
          />


          <img
            src="https://i.imgur.com/GKTjyHH.png"
            alt="Ejemplo de stickers de mascota"
            className="w-full max-w-lg mx-auto rounded-xl shadow-lg mb-12"
            referrerPolicy="no-referrer"
          />

          <img
            src="https://i.imgur.com/4iM430I.png"
            alt="Detalle adicional de stickers"
            className="w-full max-w-lg mx-auto rounded-xl shadow-lg mb-12"
            referrerPolicy="no-referrer"
          />

          <span className="text-sm font-semibold tracking-widest text-sky-500 uppercase">Amo a Mascota — Icon Edition™</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-display tracking-tight text-gray-900">
            No te pierdas esta oportunidad única de ver a tu perro o gato convertido en stickers premium apto para cualquier superficie.<br />
            <img 
              src="https://i.imgur.com/jzZyMjY.png"
              alt="Edición especial Pasiones Argentinas"                
              className="w-full max-w-sm mx-auto my-6"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://i.imgur.com/6y41Sxj.png"
              alt="Icono adicional"
              className="w-full max-w-sm mx-auto my-6"
              referrerPolicy="no-referrer"
            />
          </h1>
          <p className="mt-6 text-2xl text-gray-700 max-w-2xl mx-auto font-hand">Diseño ilustrado premium listo para imprimir en DTF UV y ponerlo en tus objetos favoritos.</p>
          <div className="mt-10">
            <img 
              src="https://i.imgur.com/YqnoP83.png"
              alt="Plancha de stickers"
              className="w-full max-w-lg mx-auto rounded-xl shadow-lg mb-12"
              referrerPolicy="no-referrer"
            />
            <motion.button 
              className="bg-gray-950 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              Quiero los stickers de mi mascota ahora
            </motion.button>
            <motion.button 
              className="mt-6 flex justify-center items-center gap-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded-full py-3 px-6 w-fit mx-auto border border-emerald-700 font-semibold text-sm shadow-sm transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>RESERVA TU LUGAR YA</span>
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* Problema & Transformación */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-medium">"Amo a mi mascota y quiero llevarla conmigo, pero no en algo infantil."</h2>
            <p className="mt-4 text-gray-600">Muchas opciones se ven infantiles o exageradas. Buscás algo estético y minimalista, que realmente se vea increíble pegado en tu mac, tu termo o tus accesorios favoritos.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-medium">Stickers premium con tecnología DTF UV</h2>
            <p className="mt-4 text-gray-600">Creamos stickers de alta definición con tecnología DTF UV: un material ultra resistente, con acabado brillante, relieve sutil y una adherencia perfecta para cualquier superficie. Es la pieza gráfica premium que tu mascota merece.</p>
          </motion.div>
        </div>
      </section>

      {/* Mecanismo Único */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-medium">Método “Iconización Premium™”</h2>
          <p className="mt-6 text-gray-600">No es un filtro automático. Es un proceso artístico meticuloso de ilustración estética, ajuste de facciones e integración en composiciones minimalistas listas para DTF UV.</p>
        </div>
      </section>

      {/* Incluye */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-display font-medium text-center mb-16">Lo que te entregamos</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 flex flex-col items-center text-center">
              <div className="p-3 bg-sky-200 rounded-full mb-6">
                <ImageIcon className="text-sky-700 w-6 h-6" />
              </div>
              <h4 className="font-semibold text-lg mb-3">Archivo digital de alta resolución</h4>
              <p className="text-gray-600 text-sm">Optimizado para impresión DTF UV: material ultra resistente, acabado brillante y relieve sutil.</p>
            </div>
            <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 flex flex-col items-center text-center">
              <div className="p-3 bg-sky-200 rounded-full mb-6">
                <Star className="text-sky-700 w-6 h-6" />
              </div>
              <h4 className="font-semibold text-lg mb-3">Instrucciones listas para imprenta</h4>
              <p className="text-gray-600 text-sm">Textos para copiar y pegar en el mail (te sugerimos talleres recomendados con envío a domicilio).</p>
            </div>
            <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 flex flex-col items-center text-center">
              <div className="p-3 bg-sky-200 rounded-full mb-6">
                <Sparkles className="text-sky-700 w-6 h-6" />
              </div>
              <h4 className="font-semibold text-lg mb-3">Guía de aplicación paso a paso</h4>
              <p className="text-gray-600 text-sm">Instrucciones precisas para que luzcan perfectos en tus objetos favoritos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-display font-medium text-center mb-16">Lo que dicen quienes ya transformaron a su mascota</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 shadow-sm flex flex-col">
              <p className="text-gray-700 italic flex-grow">"Hace poco perdí a mi mejor amigo, mi perro de 12 años. Tenerlo ahora ilustrado en un sticker minimalista en mi termo, sabiendo que lo voy a tener conmigo siempre, es la mejor manera de recordarlo. Gracias por la sensibilidad."</p>
              <p className="mt-6 font-semibold">- Valentina</p>
            </div>
            
            <img                
              src="https://i.imgur.com/nPZ9Zy5.png"
              alt="Testimonio visual"
              className="w-full h-full object-cover rounded-2xl shadow-sm"
              referrerPolicy="no-referrer"
            />
            
            <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 shadow-sm flex flex-col">
              <p className="text-gray-700 italic flex-grow">"Impresionante la calidad. Pedí los stickers y los puse en mi termo y en la taza que uso todos los días. Se lavan, se mojan, y siguen intactos. Resistentes al microondas. Realmente se ven súper premium, nada que ver con esas cosas baratas que se despegan a los dos días."</p>
              <p className="mt-6 font-semibold">- Lucas</p>
            </div>
            
            <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 shadow-sm flex flex-col">
              <p className="text-gray-700 italic flex-grow">"Estaba cansada de buscar diseños de mascotas y que todo pareciera sacado de un dibujo animado infantil de los años 90. Buscaba algo estético, que combinara con mis cosas, y este servicio me dio justo eso. Minimalismo total. Un lujo."</p>
              <p className="mt-6 font-semibold">- Sofía</p>
            </div>
            
            <img                
              src="https://i.imgur.com/LGvPoEH.png"
              alt="Testimonio visual adicional"
              className="w-full h-full object-cover rounded-2xl shadow-sm"
              referrerPolicy="no-referrer"
            />
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
          </div>
        </div>
      </section>

      {/* Precio & Bono */}
      <section className="py-20 px-6 text-center bg-sky-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-medium">20.000 ARS</h2>
          <p className="mt-4 text-gray-700">Diseño + Personalización + Identidad. Incluye bono extra para remera o tote bag.</p>
          <button className="mt-10 bg-sky-500 text-white px-8 py-4 rounded-full font-medium hover:bg-sky-600 transition">Comprar Icon Edition™</button>
        </div>
      </section>
    </div>
  );
}
