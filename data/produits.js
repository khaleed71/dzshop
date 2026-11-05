const produits = [
  {
    id: "p1",
    nom: "Souris Gaming Logitech G102",
    prix: 5500,
    categorie: "gaming",
    stock: 15,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85"
    ],
    description: "La Logitech G102 est une souris gaming conçue pour offrir précision, rapidité et confort pendant vos sessions de jeu. Sa forme ergonomique assure une prise en main agréable, tandis que ses boutons facilement accessibles permettent de réagir rapidement en pleine partie. Elle convient aussi bien aux joueurs débutants qu'aux utilisateurs recherchant une souris fiable pour leur ordinateur. Son design sobre et orienté gaming s'intègre facilement à différents setups, que ce soit pour jouer, travailler ou naviguer au quotidien."
  },
  {
    id: "p2",
    nom: "Casque Bluetooth JBL",
    prix: 8500,
    categorie: "audio",
    stock: 8,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Profitez de votre musique, de vos vidéos et de vos appels avec ce casque Bluetooth JBL au design confortable. Ses coussinets rembourrés permettent une utilisation agréable pendant de longues périodes, tandis que son arceau assure un maintien adapté. La connexion sans fil vous offre davantage de liberté de mouvement et évite l'encombrement des câbles. Grâce à ses commandes intégrées, vous pouvez facilement gérer votre écoute. Son design blanc élégant avec les détails caractéristiques JBL en fait également un accessoire moderne et pratique au quotidien."
  },
  {
    id: "p3",
    nom: "Clavier Gaming RGB",
    prix: 6500,
    categorie: "gaming",
    stock: 10,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Ce clavier gaming RGB est conçu pour les joueurs qui souhaitent associer confort, réactivité et style. Son rétroéclairage RGB apporte une ambiance gaming à votre bureau et permet de créer un setup plus moderne et immersif. Les touches sont pensées pour offrir une utilisation agréable aussi bien pendant les jeux que pour la saisie quotidienne. Il convient aux jeux vidéo, au travail, aux études et à toutes les activités nécessitant un clavier confortable. Une solution idéale pour améliorer votre espace gaming sans sacrifier la praticité."
  },
  {
    id: "p4",
    nom: "Écran Asus 24 pouces",
    prix: 30500,
    categorie: "informatique",
    stock: 4,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Cet écran ASUS 24 pouces constitue une solution polyvalente pour le travail, les études, le gaming et le divertissement. Son format offre un espace d'affichage confortable tout en restant suffisamment compact pour s'intégrer facilement sur un bureau. Il permet de travailler sur plusieurs documents, regarder des vidéos, naviguer sur Internet ou profiter de vos jeux dans de bonnes conditions. Son design moderne s'intègre facilement dans un environnement professionnel ou dans un setup gaming."
  },
  {
    id: "p5",
    nom: "Webcam Full HD 1080p",
    prix: 7500,
    categorie: "informatique",
    stock: 12,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Cette webcam Full HD 1080p est idéale pour les visioconférences, les cours en ligne, les réunions à distance et le streaming. Elle permet d'obtenir une image claire et détaillée afin de rester facilement visible pendant vos échanges vidéo. Compacte et pratique, elle peut être installée sur un ordinateur ou un écran compatible. Elle convient aussi bien à une utilisation professionnelle qu'à un usage personnel. Une solution simple pour améliorer la qualité de vos appels vidéo et de vos contenus en ligne."
  },
  {
    id: "p6",
    nom: "Manette Gaming sans fil",
    prix: 6500,
    categorie: "gaming",
    stock: 0,
    image: "https://images.unsplash.com/photo-1606143109674-4f22f3f8db0e?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1606143109674-4f22f3f8db0e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1606143109674-4f22f3f8db0e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1606143109674-4f22f3f8db0e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1606143109674-4f22f3f8db0e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1606143109674-4f22f3f8db0e?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Cette manette gaming sans fil vous permet de jouer plus confortablement tout en profitant d'une plus grande liberté de mouvement. Sa conception est adaptée à une prise en main naturelle et confortable, ce qui la rend agréable pour les longues sessions de jeu. L'absence de câble encombrant permet de conserver un espace de jeu plus propre et plus pratique. Elle constitue un excellent choix pour les amateurs de jeux vidéo recherchant une expérience plus confortable et une meilleure liberté devant leur écran."
  },
  {
    id: "p7",
    nom: "Imprimante HP DeskJet",
    prix: 18500,
    categorie: "informatique",
    stock: 3,
    image: "https://hp.widen.net/content/m2eysft49i/png/m2eysft49i.png?color=ffffff00&dpi=72&h=600&w=800",
    images: [
      "https://hp.widen.net/content/m2eysft49i/png/m2eysft49i.png?color=ffffff00&dpi=72&h=600&w=800",
      "https://hp.widen.net/content/m2eysft49i/png/m2eysft49i.png?color=ffffff00&dpi=72&h=600&w=800",
      "https://hp.widen.net/content/m2eysft49i/png/m2eysft49i.png?color=ffffff00&dpi=72&h=600&w=800",
      "https://hp.widen.net/content/m2eysft49i/png/m2eysft49i.png?color=ffffff00&dpi=72&h=600&w=800",
      "https://hp.widen.net/content/m2eysft49i/png/m2eysft49i.png?color=ffffff00&dpi=72&h=600&w=800"
    ],
    description: "L'imprimante HP DeskJet est une solution pratique pour les impressions du quotidien à la maison, au bureau ou pour les études. Elle permet d'imprimer facilement différents documents tels que des cours, devoirs, factures, formulaires ou documents professionnels. Son format pratique facilite son installation sur un bureau sans prendre trop de place. Elle convient particulièrement aux utilisateurs qui recherchent une imprimante simple et adaptée aux besoins courants."
  },
  {
    id: "p8",
    nom: "Routeur Wi-Fi 6",
    prix: 8900,
    categorie: "informatique",
    stock: 6,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Le routeur Wi-Fi 6 est conçu pour fournir une connexion sans fil rapide et stable à vos différents appareils. Il convient aux maisons, bureaux et espaces nécessitant la connexion simultanée de plusieurs équipements comme les smartphones, ordinateurs, téléviseurs et appareils connectés. Il permet de profiter plus confortablement de la navigation Internet, du streaming, des appels vidéo et des activités en ligne. Une solution moderne pour améliorer la qualité et la stabilité de votre réseau domestique."
  },
  {
    id: "p9",
    nom: "Enceinte Bluetooth JBL",
    prix: 12500,
    categorie: "audio",
    stock: 9,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Cette enceinte Bluetooth JBL est idéale pour profiter de votre musique sans avoir besoin de rester connecté à un câble. Son format pratique permet de l'utiliser à la maison, au bureau ou lors de vos moments de détente. La connexion Bluetooth facilite l'association avec un smartphone, une tablette ou un autre appareil compatible. Son design moderne et son utilisation simple en font un excellent choix pour écouter de la musique, des podcasts ou regarder des contenus multimédias avec davantage de confort."
  },
  {
    id: "p10",
    nom: "Tapis de souris Gaming XXL",
    prix: 3500,
    categorie: "gaming",
    stock: 25,
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Le tapis de souris gaming XXL offre une grande surface permettant d'accueillir confortablement votre souris et votre clavier. Sa large dimension est particulièrement appréciée par les joueurs qui utilisent de grands mouvements de souris. Il permet également de protéger la surface du bureau contre les rayures et les traces liées à une utilisation quotidienne. Son design gaming complète parfaitement un setup informatique et offre une surface confortable pour jouer, travailler ou naviguer."
  },
  {
    id: "p11",
    nom: "Microphone USB Gaming",
    prix: 9500,
    categorie: "audio",
    stock: 5,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332d2?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332d2?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1590602847861-f357a9332d2?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1590602847861-f357a9332d2?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1590602847861-f357a9332d2?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Ce microphone USB gaming est conçu pour les joueurs, créateurs de contenu, streamers et utilisateurs ayant besoin d'une voix claire lors de leurs échanges. Sa connexion USB facilite son installation et son utilisation avec un ordinateur compatible. Il peut être utilisé pour les discussions vocales, les jeux en ligne, les visioconférences, l'enregistrement audio et le streaming. Son design orienté gaming s'intègre facilement à un setup informatique moderne."
  },
  {
    id: "p12",
    nom: "Support PC portable",
    prix: 4500,
    categorie: "informatique",
    stock: 14,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Ce support pour ordinateur portable permet de surélever votre écran afin d'améliorer l'organisation et le confort de votre espace de travail. Il contribue à créer une position plus agréable devant l'ordinateur tout en libérant de l'espace sur le bureau. Il convient à une utilisation à la maison, au bureau ou pour les études. Son design pratique permet également d'obtenir un poste de travail plus propre et mieux organisé."
  },
  {
    id: "p13",
    nom: "Hub USB multiport",
    prix: 4200,
    categorie: "informatique",
    stock: 20,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Le hub USB multiport est une solution pratique pour connecter plusieurs périphériques à votre ordinateur à partir d'un seul point de connexion. Il peut être particulièrement utile avec les ordinateurs portables disposant d'un nombre limité de ports. Vous pouvez ainsi faciliter la connexion de périphériques tels qu'une souris, un clavier, une clé USB ou d'autres accessoires compatibles. Compact et facile à transporter, il constitue un accessoire pratique pour le bureau comme pour les déplacements."
  },
  {
    id: "p14",
    nom: "Clavier sans fil",
    prix: 5500,
    categorie: "informatique",
    stock: 11,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Ce clavier sans fil offre une expérience de frappe pratique tout en permettant de conserver un bureau propre et sans câble encombrant. Il est adapté à différentes utilisations : saisie de documents, navigation Internet, études, travail et utilisation multimédia. Sa conception permet de profiter d'une plus grande liberté de placement devant l'écran. Facile à intégrer dans un espace de travail ou un setup informatique, il constitue un accessoire pratique pour une utilisation quotidienne."
  },
  {
    id: "p15",
    nom: "Souris sans fil",
    prix: 3800,
    categorie: "informatique",
    stock: 18,
    image: "https://content1.rozetka.com.ua/goods/images/big/437575950.jpg",
    images: [
      "https://content1.rozetka.com.ua/goods/images/big/437575950.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/437575950.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/437575950.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/437575950.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/437575950.jpg"
    ],
    description: "Cette souris sans fil est conçue pour offrir une utilisation confortable et pratique au quotidien. Son design ergonomique permet une prise en main agréable, tandis que la connexion sans fil évite l'encombrement d'un câble sur le bureau. Elle convient parfaitement à la navigation Internet, au travail, aux études, à la bureautique et aux tâches quotidiennes sur ordinateur. Son format léger et son design moderne permettent de l'utiliser facilement à la maison, au bureau ou en déplacement."
  },
  {
    id: "p16",
    nom: "Smartphone Samsung Galaxy A16",
    prix: 39000,
    categorie: "telephonie",
    stock: 7,
    image: "https://image.ceneostatic.pl/data/products/178154577/i-samsung-galaxy-a16-4g-sm-a165-4-128gb-czarny.jpg",
    images: [
      "https://image.ceneostatic.pl/data/products/178154577/i-samsung-galaxy-a16-4g-sm-a165-4-128gb-czarny.jpg",
      "https://image.ceneostatic.pl/data/products/178154577/i-samsung-galaxy-a16-4g-sm-a165-4-128gb-czarny.jpg",
      "https://image.ceneostatic.pl/data/products/178154577/i-samsung-galaxy-a16-4g-sm-a165-4-128gb-czarny.jpg",
      "https://image.ceneostatic.pl/data/products/178154577/i-samsung-galaxy-a16-4g-sm-a165-4-128gb-czarny.jpg",
      "https://image.ceneostatic.pl/data/products/178154577/i-samsung-galaxy-a16-4g-sm-a165-4-128gb-czarny.jpg"
    ],
    description: "Le Samsung Galaxy A16 est un smartphone pensé pour accompagner facilement votre quotidien. Il permet de communiquer, naviguer sur Internet, consulter les réseaux sociaux, regarder des vidéos, utiliser vos applications et rester connecté avec vos proches. Son format moderne et son écran confortable offrent une expérience agréable pour les activités quotidiennes. Il constitue une solution adaptée aux utilisateurs recherchant un smartphone polyvalent pour la communication, le divertissement et les besoins courants."
  },
  {
    id: "p17",
    nom: "Coque antichoc pour smartphone",
    prix: 1500,
    categorie: "telephonie",
    stock: 40,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Cette coque antichoc est conçue pour protéger votre smartphone contre les petits chocs, rayures et impacts pouvant survenir lors d'une utilisation quotidienne. Elle ajoute une couche de protection autour de l'appareil tout en permettant de conserver un accès pratique aux fonctions essentielles du téléphone. Elle est particulièrement utile pour les utilisateurs qui souhaitent limiter les risques liés aux chutes accidentelles. Une protection simple et pratique pour garder votre smartphone en meilleur état plus longtemps."
  },
  {
    id: "p18",
    nom: "Chargeur rapide USB-C 20W",
    prix: 2500,
    categorie: "telephonie",
    stock: 30,
    image: "https://images.unsplash.com/photo-1609592424845-50d9c79e4d1a?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1609592424845-50d9c79e4d1a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1609592424845-50d9c79e4d1a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1609592424845-50d9c79e4d1a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1609592424845-50d9c79e4d1a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1609592424845-50d9c79e4d1a?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Ce chargeur rapide USB-C 20W permet de recharger efficacement les appareils compatibles équipés d'une connexion USB-C. Son format compact facilite son utilisation à la maison, au bureau ou pendant les déplacements. Il constitue un accessoire pratique pour remplacer un chargeur perdu ou disposer d'un chargeur supplémentaire. Compatible avec les appareils prenant en charge la puissance correspondante, il permet de simplifier la recharge quotidienne de vos équipements."
  },
  {
    id: "p19",
    nom: "Power Bank 10 000 mAh",
    prix: 3500,
    categorie: "telephonie",
    stock: 0,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Cette batterie externe de 10 000 mAh vous permet de disposer d'une réserve d'énergie supplémentaire lorsque la batterie de votre smartphone ou d'un appareil compatible est faible. Elle est particulièrement pratique lors des déplacements, voyages, journées de travail ou situations où une prise électrique n'est pas facilement accessible. Son format portable permet de l'emporter facilement dans un sac. Un accessoire indispensable pour rester connecté plus longtemps au quotidien."
  },
  {
    id: "p20",
    nom: "Caméra de surveillance Wi-Fi",
    prix: 5500,
    categorie: "maison",
    stock: 9,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Cette caméra de surveillance Wi-Fi permet de garder un œil sur votre maison ou votre espace à distance, selon les fonctions prises en charge par le modèle. Elle se connecte au réseau Wi-Fi afin de faciliter la surveillance depuis un appareil compatible. Elle peut être utilisée pour surveiller une pièce, une entrée, un bureau ou un autre espace. C'est une solution pratique pour renforcer la surveillance de votre environnement et rester informé de ce qui s'y passe."
  },
  {
    id: "p21",
    nom: "Ampoule LED intelligente Wi-Fi",
    prix: 2000,
    categorie: "maison",
    stock: 35,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Cette ampoule LED intelligente Wi-Fi permet de moderniser facilement votre éclairage et de contrôler votre lumière à partir d'un appareil compatible, selon les fonctionnalités disponibles. Elle est idéale pour créer un éclairage plus pratique dans une chambre, un salon, un bureau ou tout autre espace de la maison. La connexion Wi-Fi permet de l'intégrer à votre environnement connecté. Une solution simple pour rendre l'éclairage quotidien plus pratique et plus intelligent."
  },
  {
    id: "p22",
    nom: "Prise intelligente Wi-Fi",
    prix: 2500,
    categorie: "maison",
    stock: 22,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85"
    ],
    description: "La prise intelligente Wi-Fi permet de rendre certains appareils électriques plus pratiques à contrôler. Une fois installée sur une prise compatible et connectée au réseau Wi-Fi, elle peut permettre de gérer l'alimentation d'un appareil à distance selon les fonctions disponibles. Elle est idéale pour moderniser progressivement une maison et intégrer différents équipements dans un environnement connecté. Compacte et facile à utiliser, elle constitue un accessoire intéressant pour une maison intelligente."
  },
  {
    id: "p23",
    nom: "Sonnette vidéo connectée",
    prix: 8500,
    categorie: "maison",
    stock: 5,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85"
    ],
    description: "La sonnette vidéo connectée combine une fonction de sonnette avec une caméra afin de vous permettre de voir ce qui se passe devant votre porte. Connectée à Internet, elle peut faciliter la surveillance de votre entrée depuis un appareil compatible, selon les fonctionnalités du modèle. Elle est particulièrement pratique pour savoir qui se trouve devant votre domicile et garder un meilleur contrôle sur l'accès à votre maison. Une solution moderne pour améliorer la sécurité et la surveillance de votre entrée."
  },
  {
    id: "p24",
    nom: "Capteur de mouvement intelligent",
    prix: 3000,
    categorie: "maison",
    stock: 16,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85"
    ],
    description: "Ce capteur de mouvement intelligent permet de détecter les mouvements dans une pièce ou un espace équipé. Connecté à votre environnement domotique, il peut servir à déclencher différentes actions ou vous alerter selon les possibilités du système utilisé. Il peut être installé dans une entrée, une chambre, un salon, un bureau ou tout autre espace nécessitant une détection de présence. Un accessoire pratique pour améliorer la surveillance et automatiser votre maison connectée."
  }
];
module.exports = produits;