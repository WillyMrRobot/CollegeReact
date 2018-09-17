import React, { Component } from 'react';

class Navbar extends Component {
	state = { 
		categorias = [
			{"categoria-Id":"1","categoria-nombre":"Nuestro Colegio"},
			{"categoria-Id":"2","categoria-nombre":"Níveles Educativos"},
			{"categoria-Id":"3","categoria-nombre":"Áreas"},
			{"categoria-Id":"4","categoria-nombre":"Proyectos"},
			{"categoria-Id":"5","categoria-nombre":"Información y Servicios"}
		]
	 }
	render() { 
		return (
			<ul class="nav">
				categorias.map((categoria) =>
					<li class="nav-item" key={categoria.categoria-Id}>
						<a class="nav-link active" href="#">{categoria.categoria-nombre}</a>
					</li>
				);
			</ul>
		);
	}
}
 
export default Navbar;