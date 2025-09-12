$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Fancybox
	$('.work-box').fancybox();

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
		// Skip language dropdown links
		if ($(this).closest('.language-dropdown').length) {
			return;
		}
		
		var $el = $(this)
			id = $el.attr('href');
		
		// Only animate scroll for valid section IDs
		if (id && id.startsWith('#') && $(id).length) {
			$('html, body').animate({
				scrollTop: $(id).offset().top - 75
			}, 500);
			return false;
		}
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	
	nav.find('a').on('click', function() {
		// Skip language dropdown links
		if ($(this).closest('.language-dropdown').length) {
			return;
		}
		
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

	// Language Selector
	// Load saved language from localStorage
	const savedLang = localStorage.getItem('language') || 'en';
	updateLanguageDisplay(savedLang);

	// Language toggle click handler
	$('.language-toggle').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('.language-selector').toggleClass('active');
	});

	// Language selection handler
	$('.language-dropdown a').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		
		const selectedLang = $(this).data('lang');
		
		// Save to localStorage
		localStorage.setItem('language', selectedLang);
		
		// Update display
		updateLanguageDisplay(selectedLang);
		
		// Close dropdown
		$('.language-selector').removeClass('active');
		
		// Close mobile nav if open
		$('.nav-toggle').removeClass('close-nav');
		nav.removeClass('open');
	});

	// Close dropdown when clicking outside
	$(document).on('click', function() {
		$('.language-selector').removeClass('active');
	});

	// Function to update language display
	function updateLanguageDisplay(lang) {
		const langMap = {
			'en': 'EN',
			'fr': 'FR'
		};
		const changedLang = langMap[lang] || 'EN'
		$('.current-lang').text(changedLang);

		if (changedLang === "FR") {
			$("#about-me-nav").text("À propos de moi")
			$("#latest-works-nav").text("Derniers travaux")
			$("#contact-nav").text("Contactez-moi")
			$("#i-am-text").text("Je suis Levon Sargsyan")
			$("#find-my-work").text("Vous pouvez trouver mes projets ici.")
			$("#find-out-more").text("En savoir plus")
			$("#intro-paragraph").text(`
				Je suis étudiant en cinéma et je travaille comme régisseur de production sur des projets scolaires. Je planifie, j’établis les plannings et je veille au bon déroulement des tournages, aussi bien en préproduction que pendant la production. J’ai également travaillé comme deuxième assistant réalisateur sur un court-métrage, ce qui m’a appris à coordonner les équipes et à soutenir le réalisateur sur le plateau. J’ai aussi réalisé des documentaires, ce qui me permet de comprendre le côté créatif du cinéma. J’aime résoudre les problèmes et maintenir les productions sur la bonne voie, et je cherche à acquérir de l’expérience sur des projets plus ambitieux.	
			`)
			$("#my-expertise").text("Mon expertise")
			$("#product-management").text("Gestion de production")

			$("#schedule-and-planning").text("Planification et organisation des tournages")
			$("#coordinating-crews").text("Coordination des équipes et des départements")
			$("#budget-tracking").text("Suivi budgétaire et gestion des ressources")
			$("#on-set-problem-solving").text("Résolution de problèmes sur le plateau")
			
			$("#pre-production").text("Préproduction")
			$("#script-breakdowns").text("Décomposition de scénario et planification de production")
			$("#location-scouting").text("Coordination du repérage des lieux de tournage")
			$("#equipment-logistics").text("Gestion du matériel et de la logistique")
			
			$("#post-production").text("Postproduction")
			$("#editing-coordination").text("Coordination des plannings de montage, de design sonore et d’étalonnage")
			$("#post-production-workflow").text("Gestion du flux de travail et des délais en postproduction")
			$("#final-delivery").text("Garantie de la livraison des matériaux finaux aux festivals, plateformes ou projections")
			
			$("#assistant-directing").text("Assistanat à la réalisation")
			$("#2nd-assistant-director").text("Deuxième assistant réalisateur sur un court-métrage, en soutien au premier assistant réalisateur et à la coordination des activités sur le plateau")
			$("#maintaining-workflow").text("Contribution au maintien du flux de travail et de la communication entre les départements")
			$("#problem-solving").text("Assistance à la résolution de problèmes pendant les tournages")
			
			$("#my-role-in-filmaking").text("Mon rôle dans le cinéma")
			
			$("#address-field").text("Adresse")
			$("#call-field").text("Téléphone")
			$("#email-field").text("Courriel")
			$("#social-presense").text("Présence sur les réseaux sociaux")
			
			$("#contact-label").text("Contact")
		} else {
			$("#about-me-nav").text("About Me")
			$("#latest-works-nav").text("Latest Works")
			$("#contact-nav").text("Contact Me")
			$("#i-am-text").text("I’m Levon Sargsyan")
			$("#find-my-work").text("You can find my works here.")
			$("#find-out-more").text("Find out more")
			$("#intro-paragraph").text(`
				I’m a film student and work as a production manager on school projects. I plan, schedule, and make sure things run smoothly on set, during pre-production, and through production process. 
            	I’ve also worked as a 2nd Assistant Director on a short film, which taught me how to coordinate crews and support the director on set. I’ve directed documentaries as well, so I understand the creative side of filmmaking. I enjoy solving problems and keeping productions on track, and I’m looking to gain experience on bigger projects.
			`)
			$("#my-expertise").text("my expertise")
			$("#product-management").text("Production Management")
			$("#schedule-and-planning").text("Scheduling and planning shoots")
			$("#coordinating-crews").text("Coordinating crews and departments")
			$("#budget-tracking").text("Budget tracking and resource management")
			$("#on-set-problem-solving").text("On-set problem solving")
		
			$("#pre-production").text("Pre-production")
			$("#script-breakdowns").text("Script breakdowns and production planning")
			$("#location-scouting").text("Location scouting coordination")
			$("#equipment-logistics").text("Equipment and logistics")
			
			$("#post-production").text("Post-Production")
			$("#editing-coordination").text("Coordinating editing, sound design, and color correction schedules")
			$("#post-production-workflow").text("Managing post-production workflow and deadlines")
			$("#final-delivery").text("Ensuring delivery of final materials to festivals, platforms, or screenings")
			
			$("#assistant-directing").text("Assistant Directing")
			$("#2nd-assistant-director").text("2nd Assistant Director on a short film. Supporting the 1st AD and coordinating on-set activities")
			$("#maintaining-workflow").text("Helping maintain workflow and communication between departments")
			$("#problem-solving").text("Assisting in problem-solving during shoots")
				
			$("#my-role-in-filmaking").text("My role in filmmaking")

			$("#address-field").text("Address")
			$("#call-field").text("Call")
			$("#email-field").text("Email")
			$("#social-presense").text("Social presense")

			$("#contact-label").text("Contact")
		}
		console.log(changedLang);
	}

	const customNav = $('nav[role="navigation-custom"]');

	customNav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});
});


function listToggle (e) {
	if (e.getElementsByClassName("li_btn")[0].innerText === "+") {
		e.getElementsByClassName("li_btn")[0].innerText = "-";
		e.nextElementSibling.style.display = "block"
	} else {
		e.getElementsByClassName("li_btn")[0].innerText = "+";
		e.nextElementSibling.style.display = "none"
	}
}