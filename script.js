// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon"); //declara una variable(menuIcon) y la inicializa con la función (document.querySelector("#menu-icon")) //
let navbar = document.querySelector(".navbar");  // Esta función busca en el documento HTML un elemento que tenga la clase. El elemento encontrado se asigna a la variable.//


menuIcon.onclick = () => { //cuando se haga clic en ese elemento, se ejecutará el código dentro de la función.//
  menuIcon.classList.toggle("bx-x");
  
  navbar.classList.toggle("active"); 
  navbar.classList.toggle("navbar"); //variable.propiedad del objeto.metodo o funcion.clase //
  console.log(navbar.classList);    //muestra en la consola del navegador el valor actual de la lista de clases del elemento navbar//
  /*navbar.classList.toggle("navbar"); */
  
  /*navbar.classList.remove("active");
  navbar.classList.remove("active"); */
};

//scroll sections
let sections = document.querySelectorAll("section");  //busca todas las etiquetas "section" en el documento y las guarda en una lista llamada "sections". Esto nos permite acceder y manipular cada sección individualmente en el documento.//
let navLinks = document.querySelectorAll("header nav a");  //busca y guarda en la variable "navLinks" todos los enlaces (<a>) que se encuentren dentro de la etiqueta <nav> que a su vez esté dentro de una etiqueta <header>. Estos enlaces pueden ser utilizados para realizar acciones o navegar por diferentes secciones del sitio web.//

window.onscroll = () => { //se activa cuando se realiza un desplazamiento en la ventana del navegador.//
  sections.forEach(sec => {
    let top = window.scrollY;  //Almacena en la variable top la posición actual de desplazamiento vertical de la ventana.//
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach(link => {
        link.classList.remove("active");
      });
      document.querySelector("header nav a[href*='" + id + "']").classList.add("active");  //Remueve la clase "active" de la lista de clases del elemento actual, lo cual desactiva el resaltado o estilo aplicado al enlace de navegación.//
    }
  });

  //sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);  //agrega o remueve la clase "sticky" al elemento header dependiendo de si la condición window.scrollY > 100 es verdadera o falsa. si es V agrega la clase "sticky" si es F se remueve la clase, La función toggle permite alternar la presencia de una clase en un elemento, osea, si la clase está presente, la remueve, y si no está presente, la agrega.//

  //remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove("bx-x"); // me cambia o remueve el icono de menu//
};

//formulario
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  // Evitar que el formulario se envíe de forma predeterminada
  event.preventDefault();

  // Aquí puedes agregar cualquier lógica adicional antes de enviar el formulario

  // Envía el formulario
  form.submit();

  // Retraso de 1 segundo antes de actualizar la página
  setTimeout(() => {

  // Actualiza la página después de enviar el formulario
  location.reload();
}, 1000); // 1000 milisegundos = 1 segundo

});