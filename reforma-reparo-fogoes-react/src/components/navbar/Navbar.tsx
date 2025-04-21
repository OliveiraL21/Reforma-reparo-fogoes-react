import './Nav.css';

function Navbar() {
	return (
		<nav className='navbar__container'>
			<div className='navbar__logo-container'>
				<img height={30} width={30} src='../../assets/images/cropped-tools__favicon.png' alt="logotipo da empresa" />
				<span className="company__name">Marcos Reformas e Reparo de Fogões</span>
			</div>
			<ul className='navbar__menulist'>
				<li className='navbar__menulist-item'>Sobre Nós</li>
				<li className='navbar__menulist-item'>Como nos achar</li>
				<li>
					<button >Contato</button>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
