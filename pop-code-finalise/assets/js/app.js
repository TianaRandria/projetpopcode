// initialisation donnees
// VARIABLES
const langagesStore = [
  {
    name: "html",
    description:
      "<p>Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5, est le langage de balisage conçu pour représenter les pages web.Ce langage permet :d’écrire de l’hypertexte, d’où son nom,de structurer sémantiquement la page,de mettre en forme le contenu,de créer des formulaires de saisie,d’inclure des ressources multimédias dont des images, des vidéos, et des programmes informatiques,de créer des documents interopérables avec des équipements très variés de manière conforme aux exigences de l’accessibilité du web.</p><p>Il est souvent utilisé conjointement avec le langage de programmation JavaScript et des feuilles de style en cascade (CSS). HTML est inspiré du Standard Generalized Markup Language (SGML). Il s'agit d'un format ouvert.</p>",
    image: "assets/images/logos/html.png",
  },
  {
    name: "javascript",
    description:
      "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les développeurs web. Une grande majorité des sites web l'utilisent, et la majorité des navigateurs web disposent d'un moteur JavaScript pour l'interpréter.JavaScript est aussi employé pour les serveurs Web avec l'utilisation (par exemple) de Node.js ou de Deno.JavaScript a été créé en 1995 par Brendan Eich et intégré au navigateur web Netscape Navigator 2.0. L'implémentation concurrente de JavaScript par Microsoft dans Internet Explorer jusqu'à sa version 9 se nommait JScript, tandis que celle d'Adobe Systems se nommait ActionScript. JavaScript a été standardisé sous le nom d'ECMAScript en juin 1997 par Ecma International dans le standard ECMA-262. La version en vigueur de ce standard depuis juin 2022 est la 13e édition.C'est un langage orienté objet à prototype : les bases du langage et ses principales interfaces sont fournies par des objets. Cependant, à la différence d'un langage orienté objets, les objets de base ne sont pas des instances de classes. En outre, les fonctions sont des objets de première classe. Le langage supporte le paradigme objet, impératif et fonctionnel.JavaScript est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances npm, avec environ 500 000 paquets en août 2017.",
    image: "assets/images/logos/javascript.png",
  },
  {
    name: "css",
    description:
      "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML. Les standards définissant CSS sont publiés par le World Wide Web Consortium (W3C). Introduit au milieu des années 1990, CSS devient couramment utilisé dans la conception de sites web et bien pris en charge par les navigateurs web dans les années 2000.",
    image: "assets/images/logos/css.png",
  },
  {
    name: "python",
    description:
      "Python (prononcé /pi.tɔ̃/) est un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet. Il est doté d'un typage dynamique fort, d'une gestion automatique de la mémoire par ramasse-miettes et d'un système de gestion d'exceptions ; il est ainsi similaire à Perl, Ruby, Scheme, Smalltalk et Tcl.Le langage Python est placé sous une licence libre proche de la licence BSD et fonctionne sur la plupart des plates-formes informatiques, des smartphones aux ordinateurs centraux, de Windows à Unix avec notamment GNU/Linux en passant par macOS, ou encore Android, iOS, et peut aussi être traduit en Java ou .NET. Il est conçu pour optimiser la productivité des programmeurs en offrant des outils de haut niveau et une syntaxe simple à utiliser.Il est également apprécié par certains pédagogues qui y trouvent un langage où la syntaxe, clairement séparée des mécanismes de bas niveau, permet une initiation aisée aux concepts de base de la programmation.",
    image: "assets/images/logos/python.png",
  },
  {
    name: "java",
    description:
      "Java est une technique informatique développée initialement par Sun Microsystems puis acquise par Oracle à la suite du rachat de l'entreprise. Défini à l'origine comme un langage de programmation, Java a évolué pour devenir un ensemble cohérent d'éléments techniques et non techniques. Ainsi, la technologie Java regroupe :Des standards (la plate-forme Java) définis sous forme de spécification par le Java Community Process (JCP), en trois éditions :Java SE (standard edition),Java EE (enterprise edition), s'appuyant sur Java SE,Java ME (micro edition), indépendante des deux précédentes ;Des logiciels (langages informatiques, bibliothèques, frameworks, serveurs d'application, outils d'aide au développement), dont :Des implémentations (concurrentes) de ces spécifications,Un écosystème d'autres logiciels s'appuyant sur tout ou partie de ces standards, voire leur faisant concurrence ;Des communautés d'entreprises, organisations à but non lucratif (fondations, Java User Groups, universités) et indépendants, membres ou non du JCP, possédant tout ou partie des marques, brevets, parts de marché liés à la technologie Java.Java est un des termes les plus connus du monde de l'informatique et de l'Internet. Sa notoriété est telle que Sun, avant d'être acheté par Oracle Corporation, a décidé de l'utiliser pour son symbole boursier au Nasdaq, symbole qui était SUNW à l'origine, et est devenu JAVA.Java est utilisé dans une grande variété de plates-formes depuis les systèmes embarqués et les téléphones mobiles, les ordinateurs individuels, les serveurs, les applications d’entreprise, les superordinateurs, etc.",
    image: "assets/images/logos/java.png",
  },
  {
    name: "bash",
    description:
      "Bash (acronyme de Bourne-Again shell) est un interpréteur en ligne de commande de type script. C'est le shell Unix du projet GNU.Fondé sur le Bourne shell, Bash lui apporte de nombreuses améliorations, provenant notamment du Korn shell et du C shell. Bash est un logiciel libre publié sous licence publique générale GNU. Il est l'interprète par défaut sur de nombreux Unix libres, notamment sur les systèmes GNU/Linux. C'était aussi le shell par défaut de Mac OS X, remplacé avec macOS Catalina (10.15) par zsh. Il a été d'abord porté sous Microsoft Windows par le projet Cygwin, et depuis Windows 10 constitue une option à part entière du système d'exploitation, nommée Windows Subsystem for Linux.",
    image: "assets/images/logos/bash.png",
  },
  {
    name: "powershell",
    description:
      "Windows PowerShell, anciennement Microsoft Command Shell (MSH), nom de code Monad, est une suite logicielle développée par Microsoft qui intègre une interface en ligne de commande, un langage de script nommé PowerShell ainsi qu'un kit de développement. Il est inclus dans Windows 7, Windows 8.1, Windows 10 et Windows 11 (y compris les versions grand public) et s'appuie sur le framework Microsoft .NET.",
    image: "assets/images/logos/powershell.png",
  },
  {
    name: "c#",
    description:
      "C# (C sharp [siː.ʃɑːp] en anglais britannique) est un langage de programmation orientée objet, commercialisé par Microsoft depuis 2002 et destiné à développer sur la plateforme Microsoft .NET.Il est dérivé du C++ et très proche du Java dont il reprend la syntaxe générale ainsi que les concepts, y ajoutant des notions telles que la surcharge des opérateurs, les indexeurs et les délégués. Il est utilisé notamment pour développer des applications web sur la plateforme ASP.NET.",
    image: "assets/images/logos/csharp.png",
  },
  {
    name: "php",
    description:
      "PHP: Hypertext Preprocessor, plus connu sous son sigle PHP (sigle auto-référentiel), est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP, mais pouvant également fonctionner comme n'importe quel langage interprété de façon locale. PHP est un langage impératif orienté objet.PHP a permis de créer un grand nombre de sites web célèbres, comme Facebook et Wikipédia. Il est considéré comme une des bases de la création de sites web dits dynamiques mais également des applications web.",
    image: "assets/images/logos/php.png",
  },
  {
    name: "c++",
    description:
      "C++ est un langage de programmation compilé permettant la programmation sous de multiples paradigmes, dont la programmation procédurale, la programmation orientée objet et la programmation générique. Ses bonnes performances, et sa compatibilité avec le C en font un des langages de programmation les plus utilisés dans les applications où la performance est critique.Créé initialement par Bjarne Stroustrup dans les années 1980, le langage C++ est aujourd'hui normalisé par l'ISO. Sa première normalisation date de 1998 (ISO/CEI 14882:1998), ensuite amendée par l'erratum technique de 2003 (ISO/CEI 14882:2003). Une importante mise à jour a été ratifiée et publiée par l'ISO en septembre 2011 sous le nom de ISO/IEC 14882:2011, ou C++11. Depuis, des mises à jour sont publiées régulièrement : en 2014 (ISO/CEI 14882:2014, ou C++14), en 2017 (ISO/CEI 14882:2017, ou C++17) puis en 2020 (ISO/IEC 14882:2020, ou C++20).",
    image: "assets/images/logos/c++.png",
  },
  {
    name: "typescript",
    description:
      "TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript. Il s'agit d'un sur-ensemble syntaxique strict de JavaScript (c'est-à-dire que tout code JavaScript correct peut être utilisé avec TypeScript). Le code TypeScript est transcompilé en JavaScript, et peut ainsi être interprété par n'importe quel navigateur web ou moteur JavaScript. TypeScript a été cocréé par Anders Hejlsberg, principal inventeur de C#.TypeScript permet un typage statique optionnel des variables et des fonctions, la création de classes et d'interfaces, l'import de modules, tout en conservant l'approche non-contraignante de JavaScript. Il supporte la spécification ECMAScript 6.TypeScript prend en charge les fichiers de définition qui peuvent contenir des informations sur le type des bibliothèques JavaScript existantes, tout comme les fichiers d'en-tête C++ peuvent décrire la structure des fichiers objets existants. Cela permet à d'autres programmes d'utiliser les valeurs définies dans les fichiers comme s'il s'agissait d'entités TypeScript de type statique. Il existe des fichiers d'en-tête tiers pour les bibliothèques populaires telles que jQuery et D3.js. Des en-têtes TypeScript pour les modules de base Node.js sont également disponibles, permettant le développement de programmes Node.js dans TypeScript.Le compilateur TypeScript est lui-même écrit en TypeScript et compilé en JavaScript. Il est sous licence Apache License 2.0. TypeScript est inclus en tant que langage de programmation de première classe dans Microsoft Visual Studio 2013 Update 2 et versions ultérieures, à côté de C# et d'autres langages Microsoft. Une extension officielle permet également à Visual Studio 2012 de prendre en charge TypeScript. Anders Hejlsberg, architecte principal de C# et créateur de Delphi et Turbo Pascal, a travaillé sur le développement de TypeScript.",
    image: "assets/images/logos/typescript.png",
  },
  {
    name: "c",
    description:
      "C est un langage de programmation impératif généraliste, de bas niveau. Inventé au début des années 1970 pour réécrire Unix, C est devenu un des langages les plus utilisés, encore de nos jours. De nombreux langages plus modernes comme C++, C#, Java et PHP ou JavaScript ont repris une syntaxe similaire au C et reprennent en partie sa logique. C offre au développeur une marge de contrôle importante sur la machine (notamment sur la gestion de la mémoire) et est de ce fait utilisé pour réaliser les « fondations » (compilateurs, interpréteurs…) de ces langages plus modernes.",
    image: "assets/images/logos/c.png",
  },
  {
    name: "objective-c",
    description:
      "Objective-C est un langage de programmation orienté objet réflexif. C'est une extension du C ANSI, comme le C++, mais qui se distingue de ce dernier par sa distribution dynamique des messages, son typage faible ou fort, son typage dynamique et son chargement dynamique. Contrairement au C++, il ne permet pas l'héritage multiple mais il existe toutefois des moyens de combiner les avantages de C++ et d'Objective-C.Aujourd'hui, il est principalement utilisé dans les systèmes d'exploitation d'Apple : macOS et son dérivé iOS, basés sur la bibliothèque de classes Cocoa mais il existe aussi une bibliothèque de classes libre GNUstep sous GNU/Linux. Cocoa et GNUstep sont les successeurs de l'API OpenStep, utilisée dans les systèmes d'exploitation NeXTSTEP (à l'origine de macOS) et son pendant libre OPENSTEP.",
    image: "assets/images/logos/objective-c.png",
  },
  {
    name: "ruby",
    description:
      "Ruby est un langage de programmation libre. Il est interprété, orienté objet et multi-paradigme. Le langage a été standardisé au Japon en 2011 (JIS X 3017:2011), et en 2012 par l'Organisation internationale de normalisation (ISO 30170:2012).",
    image: "assets/images/logos/ruby.png",
  },
  {
    name: "go",
    description:
      "Go est un langage de programmation compilé et concurrent inspiré de C et Pascal. Ce langage a été développé par Google à partir d’un concept initial de Robert Griesemer (en), Rob Pike et Ken Thompson. Go possède deux implémentations : la première utilise gc, le compilateur Go ; la seconde utilise gccgo, « frontend » GCC écrit en C++. Go est écrit en C en utilisant yacc et GNU Bison pour l’analyse syntaxique jusqu’à la version 1.4, et en Go lui-même pour les versions suivantes (1.5).Logo de Google GoMascotte de Google Go.Un objectif de Go est donné par Rob Pike, l’un de ses trois créateurs, qui dit à propos des développeurs inexpérimentés : « Ils ne sont pas capables de comprendre un langage brillant, mais nous voulons les amener à réaliser de bons programmes. Ainsi, le langage que nous leur donnons doit être facile à comprendre et facile à adopter »Go veut faciliter et accélérer la programmation à grande échelle : en raison de sa simplicité, il est donc concevable de l’utiliser aussi bien pour écrire des applications, des scripts ou de grands systèmes. Cette simplicité est nécessaire aussi pour assurer la maintenance et l’évolution des programmes sur plusieurs générations de développeurs.S’il vise aussi la rapidité d’exécution, indispensable à la programmation système, il considère le multithreading comme le moyen le plus robuste d’assurer sur les processeurs actuels cette rapidité tout en rendant la maintenance facile par séparation de tâches simples exécutées indépendamment afin d’éviter de créer des « usines à gaz ». Cette conception permet également le fonctionnement sans réécriture sur des architectures multi-cœurs en exploitant immédiatement l’augmentation de puissance correspondante.",
    image: "assets/images/logos/go.png",
  },
  {
    name: "assembly",
    description:
      "En programmation informatique , le langage d'assemblage (ou langage assembleur , ou code machine symbolique), est tout langage de programmation de bas niveau avec une très forte correspondance entre les instructions du langage et l' architecture. instructions du code machine . Le langage d'assemblage a généralement une déclaration par instruction machine (1: 1), mais les constantes, les commentaires , les directives d' assembleur , les étiquettes symboliques de, par exemple,les emplacements de mémoire , les registres et les macros sont généralement également pris en charge.",
    image: "assets/images/logos/assembly.png",
  },
  {
    name: "swift",
    description:
      "Swift (langage d'Apple) est un langage de programmation objet compilé, multi-paradigmes, qui se veut simple, performant et sûr. Il est développé en open source.Le projet de développement de Swift est géré par Apple, qui en est également le principal contributeur ; mais de nombreux membres de la communauté Swift, ainsi que d'autres acteurs, tels que Google et IBM, participent également à son développement. Swift est officiellement supporté sur les systèmes d'exploitation Ubuntu, iOS, macOS, watchOS et tvOS. Un support non officiel (géré par la communauté) existe pour d'autres plateformes Linux, telles que Debian et Fedora.Un manuel officiel en anglais est disponible en ligne.Swift dispose d'une interopérabilité avec le langage C ainsi qu'avec l'Objective-C sur les plateformes d'Apple.Le compilateur de Swift utilise LLVM pour la génération du code machine.",
    image: "assets/images/logos/swift.png",
  },
  {
    name: "kotlin",
    description:
      "Kotlin est un langage de programmation orienté objet et fonctionnel, avec un typage statique qui permet de compiler pour la machine virtuelle Java, JavaScript, et vers plusieurs plateformes en natif (grâce à LLVM). Son développement provient principalement d'une équipe de programmeurs chez JetBrains basée à Saint-Pétersbourg en Russie (son nom vient de l'île de Kotline, près de St. Pétersbourg).Google annonce pendant la conférence Google I/O 2017 que Kotlin devient le second langage de programmation officiellement pris en charge par Android après Java. Le 8 mai 2019, toujours lors de la conférence Google I/O, Kotlin devient officiellement le langage de programmation voulu et recommandé par le géant américain Google pour le développement des applications Android.Pivotal Software annonce le 4 janvier 2017 le support officiel de Kotlin sur la cinquième version du Framework Spring.",
    image: "assets/images/logos/kotlin.png",
  },
  {
    name: "r",
    description:
      "R est un langage de programmation et un logiciel libre destiné aux statistiques et à la science des données soutenu par la R Foundation for Statistical Computing. Il fait partie de la liste des paquets GNU et est écrit en C, Fortran et R.GNU R est un logiciel libre distribué selon les termes de la licence GNU GPL. Le site officiel fournit des binaires pour Linux, Windows et macOS, et des portages existent pour d'autres systèmes d'exploitation.Le langage R est largement utilisé par les statisticiens, les data miners, data scientists pour le développement de logiciels statistiques et l'analyse des données.En janvier 2022, R est classé 12e dans l'index TIOBE qui mesure la popularité des langages de programmation.",
    image: "assets/images/logos/r.png",
  },
  {
    name: "vba",
    description:
      "Visual Basic for Applications (VBA) est une implémentation de Microsoft Visual Basic qui est intégrée dans toutes les applications de Microsoft Office, dans quelques autres applications Microsoft comme Visio et au moins partiellement dans quelques autres applications comme AutoCAD, WordPerfect, MicroStation, Solidworks ou encore ArcGIS. Il remplace et étend les capacités des langages macro spécifiques aux plus anciennes applications comme le langage WordBasic intégré à une ancienne version du logiciel Word, et peut être utilisé pour contrôler la quasi-totalité de l'IHM des applications hôtes, ce qui inclut la possibilité de manipuler les fonctionnalités de l'interface utilisateur comme les menus, et de personnaliser les boîtes de dialogue et les formulaires utilisateurs.Comme son nom l'indique, VBA est très lié à Visual Basic (les syntaxes et concepts des deux langages se ressemblent), mais ne peut normalement qu'exécuter du code dans une application hôte Microsoft Office (et non pas d'une application autonome, il requiert donc une licence de la suite bureautique Microsoft). Il peut cependant être utilisé pour contrôler une application à partir d'une autre (par exemple, créer automatiquement un document Word à partir de données Excel). Le code ainsi exécuté est stocké dans des instances de documents, on l'appelle également macro.VBA est fonctionnellement riche et extrêmement flexible, mais il possède d'importantes limitations, comme son support limité des fonctions de rappel (callbacks), ainsi qu'une gestion des erreurs archaïque, utilisation de handlers d'erreurs en lieu et place d'un mécanisme d'exceptions.Même si ces limitations rendent ce langage très peu utilisé par les développeurs informaticiens soucieux d'utiliser des outils avant tout performants, sa simplicité et sa facilité d'accès ont séduit certaines professions, notamment dans la finance.",
    image: "assets/images/logos/vba.png",
  },
  {
    name: "scala",
    description:
      "Scala est un langage de programmation multi-paradigme conçu à l'École polytechnique fédérale de Lausanne (EPFL) pour exprimer les modèles de programmation courants dans une forme concise et élégante. Son nom vient de l'anglais Scalable language qui signifie à peu près « langage adaptable » ou « langage qui peut être mis à l'échelle ». Il peut en effet être vu comme un métalangage.Scala intègre les paradigmes de programmation orientée objet et de programmation fonctionnelle, avec un typage statique. Il concilie ainsi ces deux paradigmes habituellement opposés (à de rares exceptions près, telle que le langage OCaml) et offre au développeur la possibilité de choisir le paradigme le plus approprié à son problème.Il est prévu pour être compilé en bytecode Java (exécutable sur la JVM), ou .NET. Seule la plateforme Java est supportée officiellement par l'EPFL.Si on souhaite l'utiliser exclusivement avec la JVM, il est alors possible d'utiliser les bibliothèques écrites en Java de façon complètement transparente. Ainsi, Scala bénéficie de la maturité et de la diversité des bibliothèques qui ont fait la force de Java depuis une dizaine d'années. De plus, il est possible d'invoquer du code écrit en Scala à partir de programmes écrits en Java ce qui facilite la transition de Java à Scala.Les développeurs habitués à un seul paradigme (par exemple ceux ayant utilisé principalement Java qui, lui, repose sur la programmation orientée objet) peuvent trouver ce langage déroutant et difficile car il nécessite l'apprentissage de concepts différents si on veut pouvoir exploiter tout son potentiel. Néanmoins, il est tout à fait possible de l'utiliser dans un premier temps comme remplaçant de Java, en profitant alors de sa syntaxe épurée, puis d'utiliser les différents « nouveaux » concepts au fur et à mesure de leur apprentissage.",
    image: "assets/images/logos/scala.png",
  },
  {
    name: "rust",
    description:
      "Rust est un langage de programmation compilé multi-paradigme conçu et développé par Mozilla Research depuis 2010. Il a été conçu pour être « un langage fiable, concurrent, pratique » supportant les styles de programmation purement fonctionnel, modèle d'acteur, procédural, ainsi qu'orienté objet sous certains aspects.En 2020, ses domaines de prédilection sont la programmation système, les applications en ligne de commande, les applications Web via WebAssembly, les services réseaux et les systèmes embarqués.Du fait de la politique de Mozilla, Rust est entièrement développé de façon ouverte (les ingénieurs de Mozilla Research publient leurs idées et les décisions prises lors des réunions) et sollicite les remarques et contributions de la communauté. La conception du langage est graduellement améliorée au travers des retours de l'équipe travaillant sur le moteur de rendu Servo et de façon pragmatique lors de l'écriture du compilateur. Bien que le projet soit financé par Mozilla, la majorité des contributions proviennent de la communauté.",
    image: "assets/images/logos/rust.png",
  },
  {
    name: "dart",
    description:
      "Dart est un langage de programmation optimisé pour les applications sur plusieurs plateformes. Il est développé par Google et est utilisé pour créer des applications mobiles, de bureau, de serveur et web.Dart est un langage orienté objet à ramasse-miettes avec une syntaxe de type C++. Dart peut se compiler en code natif ou en JavaScript. Il prend en charge les interfaces, les mixins,les classes abstraites, les génériques réifiés et l'inférence de type.",
    image: "assets/images/logos/dart.png",
  },
  {
    name: "elixir",
    description:
      "Elixir est un langage de programmation multi-paradigme fonctionnant sur la machine virtuelle Erlang (BEAM). Il est créé en 2011 par le développeur José Valim, personnalité du monde Ruby et l'un des premiers contributeurs au framework de programmation Ruby on Rails. Il intègre les paradigmes de programmation fonctionnelle, programmation concurrente et programmation orientée processus (en), et supporte la métaprogrammation via un système de macros et le polymorphisme via un système dit de protocoles.",
    image: "assets/images/logos/elixir.png",
  },
  {
    name: "clojure",
    description:
      "Clojure est un langage de programmation fonctionnel compilé, multi-plateforme et destiné à la création de programmes sûrs et facilement distribuables. C’est un dialecte de Lisp. Il transpile vers du bytecode Java, du code JavaScript et du bytecode .NET. Clojure est donc disponible sur la JVM, le CLR, les navigateurs et Node.js.",
    image: "assets/images/logos/clojure.png",
  },
  {
    name: "webassembly",
    description:
      "WebAssembly, abrégé wasm, est un standard du World Wide Web pour le développement d’applications. Il est conçu pour compléter JavaScript avec des performances supérieures. Le standard consiste en un bytecode, sa représentation textuelle et un environnement d'exécution dans un bac à sable compatible avec JavaScript. Il peut être exécuté dans un navigateur Web et en dehors. WebAssembly est standardisé dans le cadre du World Wide Web Consortium.Comme WebAssembly ne spécifie qu'un langage de bas niveau, le bytecode est généralement produit en compilant un langage de plus haut niveau. Parmi les premiers langages supportés figurent Rust avec le projet/module (crate) wasm-bindgen ainsi que le C et C++, compilés avec Emscripten (basé sur LLVM). De nombreux autres langages de programmation possèdent aujourd'hui un compilateur WebAssembly, parmi lesquels : C#, Go, Java, Lua, Python ou Ruby.Les navigateurs Web compilent le bytecode wasm dans le langage machine de l'hôte sur lequel ils sont utilisés avant de l'exécuter.",
    image: "assets/images/logos/webassembly.png",
  },
  {
    name: "sql",
    description:
      "SQL (sigle de Structured Query Language, en français langage de requête structurée) est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet de rechercher, d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles.Outre le langage de manipulation des données  :le langage de définition des données permet de créer et de modifier l'organisation des données dans la base de données,le langage de contrôle de transaction permet de commencer et de terminer des transactions,le langage de contrôle des données permet d'autoriser ou d'interdire l'accès à certaines données à certaines personnes.Créé en 1974, normalisé depuis 1986, le langage est reconnu par la grande majorité des systèmes de gestion de bases de données relationnelles (abrégé SGBDR) du marché.SQL fait partie de la même famille que les langages ALPHA (dont il est le descendant), SQUARE, QUEL (intégré à Ingres) ou QBE (Zloof). Il a été appelé SEQUEL à sa naissance, mais ce nom a été changé en SQL du fait que SEQUEL était une marque déposée de l'avionneur Hawker-Siddeley.",
    image: "assets/images/logos/sql.png",
  },
];

var gameStatus = {
  score: 0,
  tentatives: 0,
  maxTentative: 3,
  restants: 3,
  total: langagesStore.length,
  automaticClose: false,
  closeTime: 4000, // milli-secondes
  estGagnant: false,
  pageGagnant: "gagne.html",
  estPerdant: false,
  pagePerdant: "perdu.html",
  langageRetrouve: [],
};

// initialisena le score
updateScore();
updateRestants();

// fonctionalite generale de la page
const body = document.querySelector("body");
body.addEventListener("keydown", logKey);

// fonctionalite de zoom
const zoomIn = document.querySelector(".zoom-plus");
zoomIn.addEventListener("click", performZoomIn);
const zoomOut = document.querySelector(".zoom-minus");
zoomOut.addEventListener("click", performZoomOut);

// fonctionalite langages trouvees
const resultats = document.querySelector("#btn-results");
resultats.addEventListener("click", switchResultat);

// fonctionalite langage trouvee selection
// https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class
const langageItems = document.querySelectorAll(".langage-list-item");
langageItems.forEach((item) => {
  item.addEventListener("click", loadResultat);
});

// fonctionalite fermeture automatique resultat info
const closeElement = document.querySelector(".reponse-close");
closeElement.addEventListener("click", setModalAutoClose);

function setModalAutoClose(e) {
  if (gameStatus.automaticClose) {
    return;
  }

  gameStatus.automaticClose = true;
  e.target.className = "reponse-close disable";
}

// START - fonctionalite deplacement image rehefa akisaka le souris
// https://stackoverflow.com/questions/13367959/using-mouse-drag-to-control-background-position
// http://jsfiddle.net/joplomacedo/VRvUB/236/
const bgElement = document.querySelector(".background-overlay");

var styles = getComputedStyle(bgElement);
var isMouseDown = false;
var origin_x = 0;
var origin_y = 0;
var origin_bg_pos_x = parseInt(
  styles.getPropertyValue("background-position-x"),
  10
);
var origin_bg_pos_y = parseInt(
  styles.getPropertyValue("background-position-y"),
  10
);

bgElement.addEventListener("mousedown", prepareBgElement);
bgElement.addEventListener("mouseup", releaseBgElement);
bgElement.addEventListener("mousemove", handleBgPosition);

function prepareBgElement(e) {
  // mentionner hoe click maintenu le souris
  isMouseDown = true;
  origin_x = e.clientX;
  origin_y = e.clientY;
}

function releaseBgElement(e) {
  var stylesUpdated = getComputedStyle(e.target);
  // initialisena le position d'origine anle souris
  origin_bg_pos_x = parseInt(
    stylesUpdated.getPropertyValue("background-position-x"),
    10
  );
  origin_bg_pos_y = parseInt(
    stylesUpdated.getPropertyValue("background-position-y"),
    10
  );
  isMouseDown = false;
}

function handleBgPosition(e) {
  // ra tsy click + maintenir de tsy ahetsika le background
  if (!isMouseDown) {
    return;
  }

  // ra 1 ny valeur anle zoom de tsy ahetsika le background
  var zoomValue = e.target.getAttribute("data-zoom");
  if (zoomValue == 1 || zoomValue == 1.0) {
    return;
  }

  var tg = e.target;
  var x = e.clientX;
  var y = e.clientY;

  tg.style.backgroundPositionX = x - origin_x + origin_bg_pos_x + "px";
  tg.style.backgroundPositionY = y - origin_y + origin_bg_pos_y + "px";
}
// FIN - fonctionalite deplacement image rehefa akisaka le souris

// resultat selection
function loadResultat(e) {
  var langage = e.srcElement.getAttribute("data-name");
  /** 
     eto le logique tokony hakana ny information anle langage
    **/
  // alaina le objet avy ao amle liste storage
  // https://contactmentor.com/find-object-in-array-of-objects/
  var langageItem = langagesStore.find(
    (item) => item.name.toLowerCase() == langage.toLowerCase()
  );
  updateDetails(langageItem);

  // ciblena le game-overlay
  var gameOverlay = document.getElementById("game-overlay");
  gameOverlay.className = "enable";

  // ciblena le game-area Rehefa Marina le entree
  var gameArea = document.getElementById("game-area");
  gameArea.className = "";
  // ciblena le game-reponse Rehefa Marina le entree
  var gameReponse = document.getElementById("game-reponse");
  gameReponse.className = "enable";
}

// resultatList
function switchResultat(e) {
  const resultatPanel = document.querySelector(".langages-list");
  // https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript
  if (resultatPanel.classList.contains("enable")) {
    resultatPanel.className = "langages-list";
  } else {
    resultatPanel.className += " enable";
  }
}

// zoom +
function performZoomIn(e) {
  backgroundOverlay = document.querySelector(".background-overlay");
  const zoomValue = backgroundOverlay.getAttribute("data-zoom");
  var newZoom = parseFloat(zoomValue);

  var zoomBar = document.querySelector(".zoom-bar");

  if (newZoom < 2) {
    newZoom = newZoom + 0.2;
    zoomBar.style.height = 55 * newZoom + "px";
  } else {
    zoomBar.style.height = "110px";
    newZoom = 2;
  }

  backgroundOverlay.setAttribute("data-zoom", newZoom.toFixed(1));
  backgroundOverlay.className =
    "background-overlay zoomed-" +
    newZoom.toFixed(1).toString().replace(".", "-");
}

// zoom -
function performZoomOut(e) {
  backgroundOverlay = document.querySelector(".background-overlay");
  backgroundOverlay.className = "background-overlay";

  const zoomValue = backgroundOverlay.getAttribute("data-zoom");
  var newZoom = parseFloat(zoomValue);
  newZoom = newZoom - 0.2;

  var zoomBar = document.querySelector(".zoom-bar");

  if (newZoom > 1.0) {
    backgroundOverlay.className =
      "background-overlay zoomed-" +
      newZoom.toFixed(1).toString().replace(".", "-");
    zoomBar.style.height = 55 * newZoom + "px";
  } else {
    newZoom = 1;
    backgroundOverlay.className = "background-overlay";
    backgroundOverlay.style.backgroundPositionX = 0 + "px";
    backgroundOverlay.style.backgroundPositionY = 0 + "px";
    zoomBar.style.height = "55px";
  }
  backgroundOverlay.setAttribute("data-zoom", newZoom.toFixed(1));
}

function logKey(e) {
  // console.log('eto le code zao', e);
  gererBackspace(e);
  gererEsc(e);
  gererAlphanumeric(e);
  gererEntree(e);
}

// gerena manokana rehefa mipotsitra Backspace le olona. Esorina le derniere charactere anle valeur
// https://flaviocopes.com/how-to-remove-last-char-string-js/
function gererBackspace(e) {
  if (event.keyCode == 8) {
    var inputReponse = document.getElementById("saisie-reponse");
    if (inputReponse.value != "") {
      inputReponse.value = inputReponse.value.slice(0, -1);
    }
  }
}

// gerena manokana rehefa mipotsitra Esc le olona. Zany hoe fafana daholo ny entree, dia desactivena le overay
function gererEsc(e) {
  if (
    event.keyCode == 27 ||
    (e.type == "click" && e.target.className == "close-modal")
  ) {
    // ciblena le input mba hamafana ny entree rehetra ao
    var inputReponse = document.getElementById("saisie-reponse");
    inputReponse.value = "";
    // ciblena le game-overlay
    var gameOverlay = document.getElementById("game-overlay");
    gameOverlay.className = "";
    // ciblena le game-area
    var gameArea = document.getElementById("game-area");
    gameArea.className = "";
    // ciblena le game-reponse
    var gameReponse = document.getElementById("game-reponse");
    gameReponse.className = "";

    if (gameStatus.estGagnant) {
      // redirigena makany am page perdante
      // https://stackoverflow.com/questions/1655065/redirecting-to-a-relative-url-in-javascript
      window.location.href = gameStatus.pageGagnant;
    }
  }
}

// mi s'assurer hoe A-Z sy 0-9 ihany no mapandeha anle logique
// https://stackoverflow.com/questions/59763622/how-to-trigger-keydown-event-only-for-alphanumeric-and-special-characters-in-ang
function gererAlphanumeric(e) {
  var gameReponse = document.getElementById("game-reponse");
  // ra mbola eo le reponse de tsy active le saisie
  if (gameReponse.classList.contains("enable")) {
    return;
  }

  if (
    (e.keyCode >= 48 && e.keyCode <= 57) ||
    (e.keyCode >= 65 && e.keyCode <= 90) ||
    e.keyCode == 109 ||
    e.keyCode == 189 || //plus
    e.keyCode == 107 ||
    e.keyCode == 187
  ) {
    // moins
    // affichena eo am console anle navigateur ny coden'le touche vo-presser
    // console.log(e);
    // ciblena le game-overlay
    var gameOverlay = document.getElementById("game-overlay");
    gameOverlay.className = "enable";
    // ciblena le game-area
    var gameArea = document.getElementById("game-area");
    gameArea.className = "enable";
    // ciblena le input mba ampidirana anle lettre notapena tam clavier
    var inputReponse = document.getElementById("saisie-reponse");
    inputReponse.value = inputReponse.value + e.key;
  }
}

// gerena manokana rehefa mipotsitra Entre le olona. Zany hoe validena le reponse
function gererEntree(e) {
  if (e.keyCode == 13) {
    /** 
         eto le logique tokony hi-validena anle entree
        **/
    var inputReponse = document.getElementById("saisie-reponse");

    // ampiana le nombre de tentatives
    gameStatus.tentatives = gameStatus.tentatives + 1; // ou gameStatus.tentatives++;

    // ra efa valiteny efa natao sady marina
    // https://www.w3schools.com/jsref/jsref_includes_array.asp
    if (gameStatus.langageRetrouve.includes(inputReponse.value.toLowerCase())) {
      alert("ce langage a été déja trouvé");
      // cachena le partie jeux
      var inputReponse = document.getElementById("saisie-reponse");
      inputReponse.value = "";
      // ciblena le game-overlay
      var gameOverlay = document.getElementById("game-overlay");
      gameOverlay.className = "";
      // ciblena le game-area
      var gameArea = document.getElementById("game-area");
      gameArea.className = "";
      // ciblena le game-reponse
      var gameReponse = document.getElementById("game-reponse");
      gameReponse.className = "";
    }
    // https://stackoverflow.com/questions/8217419/how-to-determine-if-javascript-array-contains-an-object-with-an-attribute-that-e
    else if (
      langagesStore.some(
        (e) => e.name.toLowerCase() === inputReponse.value.toLowerCase()
      )
    ) {
      // alaina le objet avy ao amle liste storage
      // https://contactmentor.com/find-object-in-array-of-objects/
      var langageItem = langagesStore.find(
        (item) => item.name.toLowerCase() == inputReponse.value.toLowerCase()
      );
      // atao mise a jour le score
      gameStatus.score = gameStatus.score + 1;
      updateScore();

      // ajoutena ao am liste langageRetrouvee le bonne reponse
      // https://bobbyhadz.com/blog/javascript-array-push-if-not-exist#:~:text=over%20includes()%20.-,To%20push%20an%20element%20in%20an%20array%20if%20it%20doesn,()%20method%20to%20add%20it.
      if (
        !gameStatus.langageRetrouve.includes(inputReponse.value.toLowerCase())
      ) {
        gameStatus.langageRetrouve.push(inputReponse.value.toLowerCase());
      }

      // ra mitovy le isanle bonne reponse sy ny isanle langage au debut de nandresy izy zany
      if (gameStatus.langageRetrouve.length == langagesStore.length) {
        gameStatus.estGagnant = true;
      }

      // ampidirina ao amle affichage liste results
      // https://www.tutorialspoint.com/how-to-add-a-new-element-to-html-dom-in-javascript
      const listResultats = document.querySelector("#js-results");
      var tag = document.createElement("li");
      tag.className = "langage-list-item";
      tag.setAttribute("data-name", langageItem.name.toLowerCase());
      var text = document.createTextNode(langageItem.name);
      tag.appendChild(text);
      tag.addEventListener("click", loadResultat);
      listResultats.appendChild(tag);
      // updatena le details
      updateDetails(langageItem);
      // affichena le details
      // ciblena le game-area Rehefa Marina le entree
      var gameArea = document.getElementById("game-area");
      gameArea.className = "";
      // ciblena le game-reponse Rehefa Marina le entree
      var gameReponse = document.getElementById("game-reponse");
      gameReponse.className = "enable";

      // reinitialisena le valeur anle saisie
      inputReponse.value = "";

      // ra efa ni-clicker anle fermeture auto le olona de tokony mihidy ho azy le panel apres 2 secondes
      if (gameStatus.automaticClose) {
        setTimeout(function () {
          // ciblena le game-overlay de cachena
          var gameOverlay = document.getElementById("game-overlay");
          gameOverlay.className = "";
          // ciblena le game-area de cachena
          var gameArea = document.getElementById("game-area");
          gameArea.className = "";
          // ciblena le game-reponse de cachena
          var gameReponse = document.getElementById("game-reponse");
          gameReponse.className = "";
        }, gameStatus.closeTime);
      }
    } else {
      // atao mise a jour le score
      if (gameStatus.score >= 1) {
        gameStatus.score = gameStatus.score - 1; // ou gameStatus.score -= 1;
        updateScore();
      }

      // atao mise a jour le nombre tentatives restants
      gameStatus.restants--;
      updateRestants();

      // cachena le partie jeux
      var inputReponse = document.getElementById("saisie-reponse");
      inputReponse.value = "";
      // ciblena le game-overlay
      var gameOverlay = document.getElementById("game-overlay");
      gameOverlay.className = "";
      // ciblena le game-area
      var gameArea = document.getElementById("game-area");
      gameArea.className = "";
      // ciblena le game-reponse
      var gameReponse = document.getElementById("game-reponse");
      gameReponse.className = "";
    }
  }
}

function updateScore() {
  const scoreValue = document.querySelector(".score-value");
  // https://stackoverflow.com/questions/31872270/javascript-replace-text-in-an-element
  scoreValue.innerHTML = gameStatus.score + "/" + gameStatus.total;
}

function updateRestants() {
  // ra efa 0 sisa ny tentatives restantes de resy izy zay
  if (gameStatus.restants == 0) {
    gameStatus.estPerdant = true;
    // redirigena makany am page perdante
    // https://stackoverflow.com/questions/1655065/redirecting-to-a-relative-url-in-javascript
    window.location.href = gameStatus.pagePerdant;
    return;
  }

  const scoreStatus = document.querySelector(".score-fault");
  scoreStatus.innerHTML = "";
  for (var i = 0; i < gameStatus.maxTentative - gameStatus.restants; i++) {
    var tag = document.createElement("span");
    tag.className = "x-success";
    tag.innerHTML = "X";
    scoreStatus.appendChild(tag);
  }
  for (var i = 0; i < gameStatus.restants; i++) {
    var tag = document.createElement("span");
    tag.innerHTML = "X";
    scoreStatus.appendChild(tag);
  }
}

function updateDetails(langageItem) {
  const titre = document.querySelector(".reponse-titre");
  titre.innerHTML = langageItem.name;

  var span = document.createElement("span");
  span.className = "close-modal";
  span.innerHTML = "X";
  span.addEventListener("click", gererEsc);
  titre.appendChild(span);

  // https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
  const image = document.querySelector(".reponse-img img");
  image.src = langageItem.image;
  const description = document.querySelector(".reponse-desc");
  description.innerHTML = langageItem.description;
}
