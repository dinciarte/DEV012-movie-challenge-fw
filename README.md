# Movie Classics Collection | Movie Challenge con Framework


## Índice

[1. Definición del Producto](#1-definición-del-producto)

[2. Proceso de Diseño](#2-proceso-de-diseño)

[3. Funcionalidades](#3-funcionalidades)

[4. Historias de Usuarios](#4-historias-de-usuarios)

[5. Despliegue en Vercel](#5-despliegue-en-vercel)

## 1. Definición del Producto

Este proyecto nace bajo la premisa de realizar una Single Page Aplication, la cual cargará toda la información desde un único enlace que permite ir navegando las diferentes vistas sin anchors externos y consume la API de [The Movie Database](https://developer.themoviedb.org/reference). 

Fue realizada con [Angular](https://angular.io/tutorial) así que se esperaba el poder manejar los diferentes módulos, templates y servicios que provee el framework para generar una página web que permite ver catálogo de películas con sus respectivos títulos y fechas de lanzamiento de las mismas en su vista de Home. La página carga una extensa cantidad de películas la cual se puede navegar con un paginador que irá mostrando más películas. También cuenta con un filtrado y ordenado de los diferentes géneros de las películas en el catálogo y por último, cuenta con una sección dedicada para ver detalles.

## 2. Proceso de Diseño

El diseño se genera en base a las necesidades propuestas por el cliente y siguiendo la idea de prototipado de baja fidelidad presentado. 

#### Prototipo de baja fidelidad
![Home](/movie-challenge/src/assets/bajahome.png)
![Details](/movie-challenge/src/assets/bajadetails.png)

#### Prototipo de alta fidelidad
![Home](/movie-challenge/src/assets/altahome.png)
![Details](/movie-challenge/src/assets/altadetails.png)

## 3. Funcionalidades

Es una Single Page Aplicación que permite ver un extenso catálogo de películas el cual se puede ordenar y filtrar según las opciones dispuestas en el Home. También, al hacer click en cualquiera de las películas, seremos redirigidos a la vista de detalles donde se podrá ver mayor información sobre la película seleccionada.

 - Es una aplicación nativa de escritorio.
 - Se trata de una SPA co nmúltiples vistas.
    - Tiene un sistema de enrutamiento para la navegación.
    - Cada vista se carga dinámicamente módulos de Angular y la lógica está compuesta con typescript.
    - Carga la vista correspondiente a la URL al iniciar la aplicación.
 - Al hacer clic en una de las películas, redirige a una vista con su propia URL que muestra información detallada.


## 4. Historia de Usuarios


Historia de usuario 1
Listado de películas

Yo como usuaria quiero visualizar en un tabla (filas y columnas) el catálogo de películas

Criterios de aceptación:
Se debe usar el endpoint /discover/movie.
La aplicación cuenta con una paginación para explorar el catálogo por páginas.
Para cada película se debe mostrar como mínimo: poster, título original y año de lanzamiento.


Historia de usuario 2
Filtro y ordenamiento

Yo como usuaria quiero filtrar y ordenar el catálogo de películas usando los criterios soportados por TheMovie Database API V3

Criterios de aceptación:
Para filtrar se debe usar el endpoint /discover/movie, y alguno de sus parámetros como por ejemplo with_genres.
Para ordenar se debe usar el endpoint /discover/movie, y alguno de sus parámetros como por ejemplo sort_by.
La paginación debe conservar el filtro y ordenamiento
Para cada película se debe mostrar como mínimo: poster, título original y año de lanzamiento.

Historia de usuario 3
Detalle de una película

Yo como usuaria quiero consultar los detalles de una película

Criterios de aceptación:
Se debe usar el endpoint /movie/{movie_id}.
Para la película se debe mostrar como mínimo: poster, título original, año de lanzamiento, géneros, promedio de votación y total de votos.
La interfaz debe permitir retornar al listado de películas conservando el filtro y ordenamiento.

## 5. Despliegue en Vercel

La página se encuentra desplegada en [Vercel](https://movie-classic-collection.vercel.app/home)