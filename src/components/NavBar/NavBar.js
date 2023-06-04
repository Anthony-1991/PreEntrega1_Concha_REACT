import React from 'react'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav class="flex bg-black items-center justify-between flex-wrap p-2">
  <a href="/dashboard" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-red-700 hover:text-slate-900">Inicio</a>
  <a href="/team" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-red-700 hover:text-slate-900">Sobre Nosotros</a>
  <a href="/projects" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-red-700 hover:text-slate-900">Contacto</a>
  <a href="/reports" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-red-700 hover:text-slate-900"><CartWidget /></a>
</nav>
  )
}

export default NavBar;