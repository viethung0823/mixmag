/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from "react";
import "./all.css";
import "./SP.css";
import "./SP.js";
import $ from "jquery";

function App() {
	const [isActiveMenu, setIsActiveMenu] = useState(false);
	function toggleMenu() {
		setIsActiveMenu(!isActiveMenu);
	}
	$(document).ready(function () {});

	return (
		<>
			{/* desktop nav */}
			<div class="do">
				<header class="site-header">
					<div class="containerr d-flex">
						<a href="/" class="site-header__logo">
							<img src="https://res.cloudinary.com/indridcold/image/upload/v1657016704/qsw8pnhkvqzha1nfuskk.png" alt="Mixmag"></img>
						</a>

						<nav class="nav">
							<ul>
								<li class="nav__parent">
									<a href="/">Home</a>
								</li>
								<li class="nav__parent">
									<a href="/music">Music</a>
								</li>
								<li class="nav__parent">
									<a href="/lifestyles">Lifestyles</a>
								</li>
								<li class="nav__parent">
									<a href="/events">Events</a>
								</li>
								<li class="nav__parent">
									<a href="/contacts">Contacts</a>
								</li>

								{/* <li class="nav__parent dropdown__selector">
									<a href="#">
										More <i class="ico ico__arrow ico__arrow--black"></i>
									</a>
									<ul>
										<li class="dropdown__item">
											<a href="/feature/lab-ldn">The Lab LDN</a>
										</li>
										<li class="dropdown__item">
											<a href="/page/contact-mixmag/">Contact Mixmag</a>
										</li>
										<li class="dropdown__item">
											<a href="/page/advertisers-media-pack/">Advertisers/Media Pack</a>
										</li>
										<li class="dropdown__item">
											<a href="/page/mixmag-cookie-policy/">Cookie Policy</a>
										</li>
										<li class="dropdown__item">
											<a href="/page/terms-conditions/">Terms and Conditions</a>
										</li>
									</ul>
								</li> */}
							</ul>
						</nav>
					</div>
				</header>
				<div class="billboard">
					<div>
						<div data-mutual-ad="149393820/Mixmag/Top_Units" class="dfp_billboard" data-dfp-ad="true" id="149393820/Mixmag/Top_Units"></div>
					</div>
				</div>
				<div class="top-bar">
					<div class="containerr">
						<div class="js-ticker">
							<ul class="ticker">
								{/* <li class="ticker__slide">
									<a href="/read/sally-c-announces-third-release-of-big-saldos-chunkers-news">Sally C announces third instalment of 'Big Saldo's Chunkers'</a>
								</li>
								<li class="ticker__slide">
									<a href="/read/black-girl-white-girl-are-prizmatic-on-their-new-ep-news">BLACK GIRL / WHITE GIRL are 'PRIZMATIC' on their new EP</a>
								</li>
								<li class="ticker__slide">
									<a href="/feature/glastonbury-festival-2023-in-30-tracks">Glastonbury Festival 2023 in 30 tracks</a>
								</li>
								<li class="ticker__slide">
									<a href="/feature/15-photos-from-parklife-the-uks-most-energetic-festival">​15 high-energy photos from Parklife 2023</a>
								</li> */}
							</ul>
						</div>
						<a href="/search/" class="top-bar__search">
							<i class="fa-solid fa-magnifying-glass fa-lg"></i>
						</a>
						<ul class="international">
							<li class="dropdown__selector">
								International <i class="ico ico__arrow"></i>
								<ul class="dropdown--international">
									<li class="dropdown__item">
										<a href="https://mixmag.net/">UK and US</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmagadria.com/">Adria</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmag.asia/">Asia</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmag.com.br/">Brazil</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmagcaribbean.com/">Caribbean</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmagca.com/">Centroamerica</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmag.com.cn/">China</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmag.fr/">France</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmaggermany.de/">Germany</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmag.jp/">Japan</a>
									</li>
									<li class="dropdown__item">
										<a href="https://www.mixmag.kr/">Korea</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmagmena.com/arabic">MENA - Arabic</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmagmena.com/">MENA - English</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmagmexico.com/">Mexico</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmagnl.com/">Netherlands</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmagsa.com/">South America</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmag.es/">Spain</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmag.com.tr/">Turkey</a>
									</li>
									<li class="dropdown__item">
										<a href="https://mixmag.asia/vietnam/">Vietnam</a>
									</li>
								</ul>
							</li>
						</ul>
						<ul class="social social-2023">
							<li>
								<a href="https://www.facebook.com/MixmagJapan">
									<i class="fa-brands fa-facebook fa-lg"></i>
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/mixmagjapan">
									<i class="fa-brands fa-instagram fa-lg"></i>
								</a>
							</li>
							<li>
								<a href="https://twitter.com/MixmagJapan">
									<i class="fa-brands fa-twitter fa-lg"></i>
								</a>
							</li>
							<li>
								<a href="https://jp.linkedin.com/company/mixmagjapan">
									<i class="fa-brands fa-linkedin fa-lg"></i>
								</a>
							</li>
							<li>
								<a>
									<i class="fa-brands fa-spotify fa-lg"></i>
								</a>
							</li>
						</ul>{" "}
					</div>
				</div>
			</div>
			{/* mobile nav */}
			<div class="mo mo-fixed-header">
				<header class="site-header-mo">
					<a href="/" class="site-header-mo__logo">
						<img src="https://res.cloudinary.com/indridcold/image/upload/v1657016704/qsw8pnhkvqzha1nfuskk.png" alt="Mixmag"></img>
					</a>
					<a href="/search" class="site-header-mo__left">
						<img src="https://mixmag.net/assets/img/mobile-icons/search.png" height="24" alt="Search"></img>
					</a>
					<a href="#" class="site-header-mo__right js-burger" onClick={toggleMenu}>
						<img src="https://mixmag.net/assets/img/mobile-icons/burger.png" height="24" alt="Menu"></img>
					</a>
				</header>

				<div class="site-header-mo__shortcuts">
					<a href="/" class="site-header-mo__left">
						Home
					</a>

					<a href="/news/">Latest News</a>

					<a class="site-header-mo__right js-burger" onClick={toggleMenu}>
						Menu
					</a>
				</div>

				<nav class={`site-header-mo__nav ${isActiveMenu ? "active" : ""}`}>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/music">Music</a>
						</li>
						<li>
							<a href="/lifestyles">Lifestyles</a>
						</li>
						<li>
							<a href="/events">Events</a>
						</li>
						<li>
							<a href="/contacts">Contacts</a>
						</li>
						{/* <li>
							<a href="#" class="has-sub">
								Mixmag
							</a>
							<ul class="site-header-mo__nav--sub">
								<li class="dropdown__item">
									<a href="/feature/lab-ldn">The Lab LDN</a>
								</li>
								<li class="dropdown__item">
									<a href="/page/contact-mixmag/">Contact Mixmag</a>
								</li>
								<li class="dropdown__item">
									<a href="/page/advertisers-media-pack/">Advertisers/Media Pack</a>
								</li>
								<li class="dropdown__item">
									<a href="/page/mixmag-cookie-policy/">Cookie Policy</a>
								</li>
								<li class="dropdown__item">
									<a href="/page/terms-conditions/">Terms and Conditions</a>
								</li>
							</ul>
						</li> */}
					</ul>
				</nav>
			</div>
		</>
	);
}

export default App;
