// Sistema de Carrito de Compras
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
  // Buscar si el producto ya existe en el carrito
  const productoExistente = carrito.find((item) => item.nombre === nombre);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({
      nombre: nombre,
      precio: precio,
      cantidad: 1,
    });
  }

  actualizarCarrito();
  mostrarNotificacion(`${nombre} agregado al carrito`);
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
  const itemsCarrito = document.getElementById("items-carrito");
  const resumenCarrito = document.getElementById("resumen-carrito");
  const totalCarrito = document.getElementById("total-carrito");
  const contadorCarrito = document.getElementById("contador-carrito");

  // Elementos móviles
  const itemsCarritoMovil = document.getElementById("items-carrito-movil");
  const resumenCarritoMovil = document.getElementById("resumen-carrito-movil");
  const totalCarritoMovil = document.getElementById("total-carrito-movil");
  const contadorCarritoMovil = document.getElementById(
    "contador-carrito-movil"
  );

  // Actualizar contador
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  contadorCarrito.textContent = totalItems;
  contadorCarritoMovil.textContent = totalItems;

  // Contenido HTML para ambos carritos
  if (carrito.length === 0) {
    // Mostrar carrito vacío
    const emptyHtml = `
            <div class="text-center text-gray-500 py-4">
                <svg class="w-8 h-8 mx-auto mb-1 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                </svg>
                <p class="text-sm">Carrito vacío</p>
            </div>
        `;
    itemsCarrito.innerHTML = emptyHtml;
    itemsCarritoMovil.innerHTML = emptyHtml;
    resumenCarrito.classList.add("hidden");
    resumenCarritoMovil.classList.add("hidden");
  } else {
    // Mostrar productos en el carrito de forma compacta
    let html = "";
    let total = 0;

    carrito.forEach((item, index) => {
      const subtotal = item.precio * item.cantidad;
      total += subtotal;

      html += `
                <div class="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                    <div class="flex-1 min-w-0">
                        <h4 class="font-medium text-gray-800 truncate">${item.nombre}</h4>
                        <p class="text-xs text-gray-600">Bs. ${item.precio} x ${item.cantidad}</p>
                    </div>
                    <div class="flex items-center space-x-1 ml-2">
                        <span class="font-bold text-green-600 text-xs">Bs. ${subtotal}</span>
                        <div class="flex items-center space-x-1">
                            <button onclick="cambiarCantidad(${index}, -1)" class="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600">-</button>
                            <span class="w-4 text-center text-xs">${item.cantidad}</span>
                            <button onclick="cambiarCantidad(${index}, 1)" class="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-green-600">+</button>
                        </div>
                        <button onclick="eliminarProducto(${index})" class="text-red-500 hover:text-red-700 ml-1">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
    });

    itemsCarrito.innerHTML = html;
    itemsCarritoMovil.innerHTML = html;
    totalCarrito.textContent = `Bs. ${total}`;
    totalCarritoMovil.textContent = `Bs. ${total}`;
    resumenCarrito.classList.remove("hidden");
    resumenCarritoMovil.classList.remove("hidden");
  }
}

// Función para cambiar cantidad de productos
function cambiarCantidad(index, cambio) {
  carrito[index].cantidad += cambio;

  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }

  actualizarCarrito();
}

// Función para eliminar producto del carrito
function eliminarProducto(index) {
  const producto = carrito[index];
  carrito.splice(index, 1);
  actualizarCarrito();
  mostrarNotificacion(`${producto.nombre} eliminado del carrito`);
}

// Función para limpiar todo el carrito
function limpiarCarrito() {
  carrito = [];
  actualizarCarrito();
  mostrarNotificacion("Carrito limpiado");
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
  const notificacion = document.createElement("div");
  notificacion.className =
    "fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full";
  notificacion.textContent = mensaje;

  document.body.appendChild(notificacion);

  // Animar entrada
  setTimeout(() => {
    notificacion.classList.remove("translate-x-full");
  }, 100);

  // Animar salida
  setTimeout(() => {
    notificacion.classList.add("translate-x-full");
    setTimeout(() => {
      document.body.removeChild(notificacion);
    }, 300);
  }, 2000);
}

// Función para ordenar por WhatsApp
function ordenarPorWhatsApp() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  let mensaje = "🍽️ *PEDIDO - RESTAURANTE EL BAMBÚ*\n\n";
  let total = 0;

  carrito.forEach((item) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;
    mensaje += `• ${item.nombre} x${item.cantidad} = Bs. ${subtotal}\n`;
  });

  mensaje += `\n💰 *TOTAL: Bs. ${total}*\n\n`;
  mensaje +=
    "📍 Por favor confirma mi pedido y dime cuándo estará listo. ¡Gracias!";

  const whatsappUrl = `https://wa.me/59167470858?text=${encodeURIComponent(
    mensaje
  )}`;
  window.open(whatsappUrl, "_blank");

  // Limpiar carrito después de enviar
  setTimeout(() => {
    limpiarCarrito();
  }, 1000);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Botones de agregar al carrito
  document.querySelectorAll(".agregar-carrito").forEach((button) => {
    button.addEventListener("click", function () {
      const nombre = this.getAttribute("data-nombre");
      const precio = parseInt(this.getAttribute("data-precio"));
      agregarAlCarrito(nombre, precio);
    });
  });

  // Botón limpiar carrito
  const limpiarCarritoBtn = document.getElementById("limpiar-carrito");
  if (limpiarCarritoBtn) {
    limpiarCarritoBtn.addEventListener("click", limpiarCarrito);
  }

  // Botón ordenar por WhatsApp
  const ordenarWhatsAppBtn = document.getElementById("ordenar-whatsapp");
  if (ordenarWhatsAppBtn) {
    ordenarWhatsAppBtn.addEventListener("click", ordenarPorWhatsApp);
  }

  // Inicializar carrito
  actualizarCarrito();
});

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animación de aparición al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
}, observerOptions);

// Observar elementos para animación
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".food-card, .bg-white.p-6.rounded-lg"
  );
  elementsToAnimate.forEach((el) => {
    observer.observe(el);
  });
});

// Formulario de contacto
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const name = this.querySelector('input[type="text"]').value;
    const message = this.querySelector("textarea").value;

    // Validación básica
    if (!name || !message) {
      alert("Por favor completa tu nombre y mensaje.");
      return;
    }

    // Crear mensaje para WhatsApp del dueño
    const whatsappMessage = `Hola, soy ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/59167470858?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");

    // Limpiar formulario
    this.reset();
  });
}

// Navegación móvil
const mobileMenuButton = document.querySelector(".md\\:hidden button");
const navLinks = document.querySelector(".hidden.md\\:flex");

if (mobileMenuButton && navLinks) {
  mobileMenuButton.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("flex");
    navLinks.classList.toggle("flex-col");
    navLinks.classList.toggle("absolute");
    navLinks.classList.toggle("top-full");
    navLinks.classList.toggle("left-0");
    navLinks.classList.toggle("w-full");
    navLinks.classList.toggle("bg-white");
    navLinks.classList.toggle("shadow-lg");
    navLinks.classList.toggle("p-4");
  });
}

// Efecto de parallax suave en el hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector("#inicio");
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Función para mostrar notificación de cookies
function showCookieNotice() {
  const cookieNotice = document.createElement("div");
  cookieNotice.innerHTML = `
        <div class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <p class="text-sm">Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies.</p>
                <button onclick="this.parentElement.parentElement.remove()" class="bg-green-600 text-white px-4 py-2 rounded ml-4 hover:bg-green-700 transition-colors">
                    Aceptar
                </button>
            </div>
        </div>
    `;
  document.body.appendChild(cookieNotice);
}

// Mostrar notificación de cookies después de 2 segundos
setTimeout(showCookieNotice, 2000);

// Funciones para el carrito móvil
function toggleCarritoMovil() {
  const panel = document.getElementById("panel-carrito-movil");
  const isOpen = panel.classList.contains("scale-100");

  if (isOpen) {
    cerrarCarritoMovil();
  } else {
    abrirCarritoMovil();
  }
}

function abrirCarritoMovil() {
  const panel = document.getElementById("panel-carrito-movil");
  panel.classList.remove("scale-0");
  panel.classList.add("scale-100");
}

function cerrarCarritoMovil() {
  const panel = document.getElementById("panel-carrito-movil");
  panel.classList.remove("scale-100");
  panel.classList.add("scale-0");
}

// Event listeners para carrito móvil
document.addEventListener("DOMContentLoaded", function () {
  // Event listeners para carrito móvil
  const toggleCarritoBtn = document.getElementById("toggle-carrito-movil");
  const cerrarCarritoBtn = document.getElementById("cerrar-carrito-movil");
  const limpiarCarritoMovilBtn = document.getElementById(
    "limpiar-carrito-movil"
  );
  const ordenarWhatsAppMovilBtn = document.getElementById(
    "ordenar-whatsapp-movil"
  );

  if (toggleCarritoBtn) {
    toggleCarritoBtn.addEventListener("click", toggleCarritoMovil);
  }

  if (cerrarCarritoBtn) {
    cerrarCarritoBtn.addEventListener("click", cerrarCarritoMovil);
  }

  if (limpiarCarritoMovilBtn) {
    limpiarCarritoMovilBtn.addEventListener("click", limpiarCarrito);
  }

  if (ordenarWhatsAppMovilBtn) {
    ordenarWhatsAppMovilBtn.addEventListener("click", ordenarPorWhatsApp);
  }
});

// Cerrar carrito móvil al hacer clic fuera
document.addEventListener("click", function (e) {
  const carritoMovil = document.getElementById("carrito-movil");
  const panel = document.getElementById("panel-carrito-movil");

  if (
    carritoMovil &&
    !carritoMovil.contains(e.target) &&
    panel &&
    panel.classList.contains("scale-100")
  ) {
    cerrarCarritoMovil();
  }
});
