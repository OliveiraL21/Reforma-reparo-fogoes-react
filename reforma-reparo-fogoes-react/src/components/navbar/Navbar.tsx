import './Nav.css';

const sendToWhatsApp = () => {
	window.open('https://wa.me/5519996521626/?text=ol%c3%a1+!+gostaria+de+solicitar+um+diagnostico+do+meu+fog%c3%a3o', '_blank');
}

function Navbar() {
	return (
		<nav className='navbar__container'>
			<div className='navbar__logo-container'>
				<img height={30} width={30} src='/assets/images/cropped-tools__favicon.png' alt="logotipo da empresa" />
				<span className="company__name">Marcos Reformas e Reparo de Fogões</span>
			</div>
			<ul className='navbar__menulist'>
				<li className='navbar__menulist-item'>
					<a className='navbar__menulist-item-text' href="#sobreNos">Sobre Nós</a>
				</li>
				<li className='navbar__menulist-item'>
					<a href="#" className='navbar__menulist-item-text'>Como nos achar</a>
				</li>
				<li className='navbar__menulist-item'>
					<button className='navbar__menu__button' onClick={sendToWhatsApp}>Contato</button>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
