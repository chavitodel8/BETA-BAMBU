# 🍽️ Restaurante El Bambú - Sitio Web

Un sitio web moderno y responsive para el restaurante "El Bambú" especializado en comida boliviana.

## ✨ Características

- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Sistema de Carrito**: Agregar productos y ordenar por WhatsApp
- **Menú Interactivo**: Platos y bebidas con precios
- **Formulario de Contacto**: Integrado con WhatsApp
- **Animaciones**: Efectos suaves y profesionales
- **SEO Optimizado**: Meta tags y estructura semántica

## 📱 Responsive Design

El sitio está completamente optimizado para:

- **Móviles** (320px - 640px)
- **Tablets** (641px - 1024px)
- **Desktop** (1025px+)
- **Pantallas grandes** (1280px+)

## 🚀 Opciones de Despliegue

### 1. **GitHub Pages (GRATIS)**

```bash
# 1. Crea un repositorio en GitHub
# 2. Sube todos los archivos
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/el-bambu.git
git push -u origin main

# 3. Ve a Settings > Pages
# 4. Selecciona "Deploy from a branch"
# 5. Elige "main" branch
# 6. Tu sitio estará en: https://tu-usuario.github.io/el-bambu
```

### 2. **Netlify (GRATIS)**

```bash
# 1. Ve a netlify.com
# 2. Arrastra la carpeta del proyecto
# 3. O conecta con GitHub
# 4. Tu sitio estará en: https://tu-sitio.netlify.app
```

### 3. **Vercel (GRATIS)**

```bash
# 1. Ve a vercel.com
# 2. Conecta tu repositorio de GitHub
# 3. Vercel detectará automáticamente que es HTML
# 4. Tu sitio estará en: https://tu-sitio.vercel.app
```

### 4. **Firebase Hosting (GRATIS)**

```bash
# 1. Instala Firebase CLI
npm install -g firebase-tools

# 2. Inicia sesión
firebase login

# 3. Inicializa el proyecto
firebase init hosting

# 4. Despliega
firebase deploy
```

### 5. **Hosting Tradicional**

- **Hostinger**: Desde $2.99/mes
- **GoDaddy**: Desde $3.99/mes
- **Bluehost**: Desde $2.95/mes
- **SiteGround**: Desde $3.99/mes

## 📁 Estructura del Proyecto

```
BAMBU-WEB/
├── index.html          # Página principal
├── css/
│   ├── style.css       # Estilos principales
│   └── responsive.css  # Estilos responsive
├── img/                # Imágenes (agregar aquí)
├── script.js           # JavaScript
└── README.md           # Este archivo
```

## 🛠️ Personalización

### Cambiar Información del Restaurante

1. **Nombre**: Busca "El Bambú" en `index.html`
2. **Teléfono**: Busca "+591 67470858" en todos los archivos
3. **Dirección**: Busca "Av. Principal 123, La Paz"
4. **Horarios**: En la sección de contacto

### Agregar Productos

1. **Platos**: En la sección "Nuestro Menú"
2. **Bebidas**: En la sección "Bebidas"
3. **Precios**: Cambia los valores en `data-precio`

### Cambiar Colores

1. **Variables CSS**: En `css/style.css` línea 3-7
2. **Colores principales**: Verde (#b8e1b5, #6a8c69, #4a6b47)

## 📸 Agregar Imágenes

1. Coloca las imágenes en la carpeta `img/`
2. Reemplaza los placeholders en el HTML:

   ```html
   <!-- Cambiar esto: -->
   <div class="h-48 bg-green-200 flex items-center justify-center">
     <span class="text-green-600">Imagen del Plato</span>
   </div>

   <!-- Por esto: -->
   <img
     src="img/plato-silpancho.jpg"
     alt="Silpancho"
     class="w-full h-48 object-cover"
   />
   ```

## 🔧 Optimizaciones Recomendadas

### Antes del Despliegue

1. **Comprimir imágenes**: Usa TinyPNG o similar
2. **Minificar CSS/JS**: Para producción
3. **Agregar favicon**: Icono del sitio
4. **Configurar dominio**: Si tienes uno personalizado

### SEO

1. **Meta tags**: Ya incluidos
2. **Open Graph**: Para redes sociales
3. **Schema.org**: Para Google
4. **Sitemap**: Para indexación

## 📞 Soporte

Para ayuda con el despliegue o personalización:

- **WhatsApp**: +591 67470858
- **Email**: info@elbambu.com

## 📄 Licencia

Este proyecto es de uso libre para el restaurante El Bambú.

---

**¡Tu sitio web estará listo en minutos! 🚀**
