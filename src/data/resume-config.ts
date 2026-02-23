import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
	personal: {
		name: 'Célia Hoffmann',
		photo: '/images/photo.jpg',
		photoBackEmoji: '💻',
		title: {
			fr: 'Étudiante en développement web',
		},
	},

	seo: {
		title: 'Célia Hoffmann — Étudiante en développement web',
		description: 'CV interactif de Célia Hoffmann : expériences UI/UX, compétences web et parcours BUT MMI.',
	},

	languages: {
		default: 'fr',
		available: ['fr'],
		labels: {
			fr: 'FR',
		},
	},

	contact: [
		{ type: 'phone', label: '07.71.60.83.39' },
		{ type: 'email', label: 'celiahoffmann78@gmail.com' },
		{ type: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/c%C3%A9lia-hoffmann-8baa042b9/' },
		{ type: 'github', label: 'celico7', href: 'https://github.com/celico7' },
		{ type: 'website', label: 'Portfolio', href: 'https://celia-hoffmann-portfolio.vercel.app/' },
	],

	skills: [
		{
			title: { fr: 'Langues' },
			type: 'languages',
			items: [
				{ name: { fr: 'Anglais' }, level: { fr: 'Niveau C1' } },
				{ name: { fr: 'Allemand' }, level: { fr: 'Niveau B2' } },
			],
		},
		{
			title: { fr: 'Soft skills' },
			type: 'text',
			items: [
				{ name: { fr: 'Gestion de projet en autonomie' } },
				{ name: { fr: 'Collaboration inter-services' } },
				{ name: { fr: 'Mentorat & pédagogie' } },
				{ name: { fr: 'Prise de parole en réunion' } },
			],
		},
		{
			title: { fr: 'Développement web' },
			type: 'badges',
			items: [
				{ name: 'HTML' },
				{ name: 'CSS' },
				{ name: 'JavaScript' },
				{ name: 'PHP' },
				{ name: 'Twig' },
				{ name: 'MySQL' },
				{ name: 'Bootstrap' },
				{ name: 'Tailwind' },
				{ name: 'Symfony' },
				{ name: 'Laravel' },
			],
		},
		{
			title: { fr: 'Outils' },
			type: 'badges',
			items: [
				{ name: 'VSCode' },
				{ name: 'Git' },
				{ name: 'PhpMyAdmin' },
				{ name: 'Unity' },
				{ name: 'Unreal Engine' },
				{ name: 'Blender' },
				{ name: 'Figma' },
				{ name: 'Illustrator' },
				{ name: 'Photoshop' },
			],
		},
	],

	experiences: [
		{
			id: 'stage-itgreen-2026',
			company: { fr: 'ITGreen' },
			role: { fr: 'Développeuse web full-stack' },
			type: { fr: 'Stage (4 mois)' },
			period: { fr: 'Février — Juin 2026' },
			description: {
				fr: 'Développement d\'applications web internes en Laravel, conception d\'interfaces utilisateur et mise en place de processus d\'automatisation.',
			},
			techs: ['Laravel', 'PHP', 'Tailwind', 'MySQL'],
			isHighlighted: true,
			details: {
				context: {
					fr: 'Stage de fin d\'études chez ITGreen, entreprise spécialisée dans les solutions numériques éco-responsables.',
				},
				tasks: {
					fr: [
						'Développement front-end et back-end d\'applications web avec Laravel',
						'Conception et gestion de bases de données MySQL',
						'Analyse fonctionnelle et rédaction de spécifications',
						'Conception d\'interfaces UI/UX avec Figma et Tailwind',
						'Mise en place de scripts d\'automatisation de tâches récurrentes',
					],
				},
				env: {
					fr: 'Laravel / PHP / Tailwind CSS / MySQL / Figma',
				},
			},
		},
		{
			id: 'schiller-2025',
			company: { fr: 'SCHILLER Medical' },
			role: { fr: 'UI/UX Designer' },
			type: { fr: 'Stage + Intérim' },
			period: { fr: 'Mai — Août 2025' },
			description: {
				fr: 'Conception d\'interfaces et analyse ergonomique de l\'écran d\'un défibrillateur, en collaboration directe avec la BSPP.',
			},
			techs: ['Figma', 'UI/UX Design'],
			details: {
				context: {
					fr: 'Stage puis mission intérim chez SCHILLER Medical, leader dans la fabrication d\'équipements médicaux de diagnostic et de réanimation.',
				},
				tasks: {
					fr: [
						'Conception des interfaces utilisateur pour l\'écran d\'un défibrillateur',
						'Audit ergonomique et recommandations UX pour améliorer la lisibilité en situation d\'urgence',
						'Collaboration directe avec la BSPP (Brigade des Sapeurs-Pompiers de Paris) pour les retours terrain',
						'Animation de réunions inter-services (R&D, marketing, réglementaire)',
					],
				},
				env: {
					fr: 'Figma / UI Design / UX Research / Ergonomie médicale',
				},
			},
		},
		{
			id: 'job-ete-mairie-2024',
			company: { fr: 'Mairie d\'Oberhoffen-sur-Moder' },
			role: { fr: 'Agent technique polyvalent' },
			type: { fr: 'Job d\'été' },
			period: { fr: 'Été 2024' },
			description: {
				fr: 'Entretien des espaces publics, logistique événementielle et accueil du public.',
			},
			techs: ['Travail en équipe', 'Logistique'],
		},
	],

	education: [
		{
			school: { fr: 'IUT de Haguenau' },
			degree: { fr: 'BUT Métiers du Multimédia et de l\'Internet — 3ème année' },
			specialty: { fr: 'Parcours Développement web et dispositifs interactifs' },
			period: 'Depuis 2023',
			highlights: {
				fr: [
					'Développement web',
					'Communication',
					'UX Design',
					'Création Audiovisuelle',
					'Infographique',
					'Gestion de projet',
					'Mentorat technique auprès des étudiants de 1ère année en développement web',
				],
			},
		},
		{
			school: { fr: 'Lycée Heinrich Nessel — Haguenau' },
			degree: { fr: 'Baccalauréat général' },
			specialty: {
				fr: 'Spécialités : Numérique et Sciences Informatiques, Anglais Monde Contemporain + option mathématiques complémentaires',
			},
			period: 'Diplômée en 2023',
		},
	],

	hobbies: [
		{ title: { fr: 'Jeux vidéo' } },
		{ title: { fr: 'Projets créatifs (Unity, Blender)' } },
		{ title: { fr: 'Veille technologique' } },
		{ title: { fr: 'Musique' } },
	],

	pdf: {
		label: { fr: 'Télécharger le PDF' },
		path: { fr: '/cv/fr/CV_Hoffmann_Celia.pdf' },
	},

	theme: {
		preset: 'lilac',
	},

	labels: {
		sections: {
			contact: { fr: 'COORDONNÉES' },
			skills: { fr: 'COMPÉTENCES' },
			experience: { fr: 'EXPÉRIENCES' },
			education: { fr: 'FORMATIONS' },
			hobbies: { fr: 'INTÉRÊTS ET LOISIRS' },
		},
		experience: {
			mainTasks: { fr: 'Tâches principales :' },
			moreTasks: { fr: 'autres tâches...' },
			training: { fr: 'Formations :' },
			techEnv: { fr: 'Env. :' },
			technologies: { fr: 'Technologies' },
		},
		actions: {
			clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails' },
			switchTheme: { fr: 'Changer le thème' },
			downloadPdf: { fr: 'Télécharger le PDF' },
		},
	},
}
