const charactersArray = [
  {
    name: "22",
    bio:
      "22 é uma deuteragonista no filme animado de 2020 da Disney/Pixar, Soul.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/25/Profile_-_22.png/revision/latest/scale-to-width-down/258?cb=20200316195035&path-prefix=pt-br",
  },
  {
    name: "A Baleia (Procurando Nemo)",
    bio: "Baleia Azul é uma baleia do filme Procurando Nemo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/f/f3/Whale_Finding_Nemo_%28Full_Body_View%29.JPG.jpg/revision/latest/scale-to-width-down/258?cb=20200311224052&path-prefix=pt-br",
  },
  {
    name: "A Bruxa (Valente)",
    bio:
      "A Bruxa é um personagem coadjuvante no filme da Disney/Pixar, Valente. Ela é dublada por Julie Walters.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/f/f3/Witch.jpg/revision/latest/scale-to-width-down/258?cb=20170425205558&path-prefix=pt-br",
  },
  {
    name: "Abuelita (Viva: A Vida é uma Festa)",
    bio:
      "Elena Rivera, mais conhecida como Abuelita, é uma personagem do filme da Disney/Pixar, Viva: A Vida é uma Festa. Ela é a avó de Miguel e age como uma figura paternal protetora para ele.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/f/fe/Characters-abuelita.png/revision/latest/scale-to-width-down/258?cb=20171230200854&path-prefix=pt-br",
  },
  {
    name: "Acer",
    bio: "Acer é um antagonista em Carros 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/6/67/Acer.png/revision/latest/scale-to-width-down/258?cb=20190814121629&path-prefix=pt-br",
  },
  {
    name: "Aiken Axler",
    bio: "Aiken Axler é um corredor da Copa Pistão em Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/96/Aiken_Axler.png/revision/latest/scale-to-width-down/258?cb=20190511225705&path-prefix=pt-br",
  },
  {
    name: "Alegria",
    bio:
      "Alegria é  um artigo destacado, o que significa que tem sido identificado como um dos melhores artigos produzidos pela comunidade da Disney Wiki. Se você vê uma maneira de como esta página pode ser atualizada ou aperfeiçoada sem comprometer o trabalho anterior, sinta-se livre para contribuir.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Alfredo Linguini",
    bio:
      "Linguini é um sujeito muito inseguro e desajeitado. Ele menciona que nunca ninguém esperou nada positivo dele antes, e que já perdeu vários empregos (o que parece ser parcialmente atribuído a sua falta de jeito para fazer as coisas). No entanto, ele é uma pessoa muito bondosa, como mostrado quando ele decide não afogar Remy depois de olhar nos olhos dele. Mesmo assim, ele tem uma certa desconfiança sobre Remy, imaginando que ele roubou a comida e fugiu de casa, ao ver a cama de Remy vazia e a geladeira sem os ovos. Mais tarde, sua confiança em Remy se aprofunda; ao perceber que Remy pode controlar os movimentos de seu corpo puxando seu cabelo, os dois passam a noite aperfeiçoando a manipulação do corpo. A bondade de Linguini também é vista quando ele agradece a Colette por todos seus conselhos, em vez de reclamar sobre a forma rude como ela o trata.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/0/06/Alfredo_Linguini_-_Imagem_promocional_1.jpeg/revision/latest/scale-to-width-down/258?cb=20161024012005&path-prefix=pt-br",
  },
  {
    name: "Alpha",
    bio:
      "Alpha é um antagonista secundário do filme da Disney/Pixar, Up - Altas Aventuras.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a2/Profile-_Alpha.png/revision/latest/scale-to-width-down/258?cb=20200210173344&path-prefix=pt-br",
  },
  {
    name: "Anchor",
    bio: "Anchor é um tubarão martelo do filme Procurando Nemo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/d0/Anchor-FN.png/revision/latest/scale-to-width-down/258?cb=20191206212141&path-prefix=pt-br",
  },
  {
    name: "Andy Davis",
    bio:
      'Andrew "Andy" Davis é um dos personagens principais na trilogia de Toy Story. Ele é dublado por John Morris como criança nos dois filmes e adolescente no terceiro filme, Charlie Bright como criança no terceiro filme e Jack McGraw como criança no quarto filme.',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/0/04/Andy_medium.png/revision/latest/scale-to-width-down/258?cb=20150802012510&path-prefix=pt-br",
  },
  {
    name: "Angus",
    bio:
      "Angus&nbsp;é um cavalo Clydesdale escocês que é o fiel companheiro de Mérida no filme da Disney/Pixar, Valente.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/21/Angus-Brave.png/revision/latest/scale-to-width-down/258?cb=20150516231748&path-prefix=pt-br",
  },
  {
    name: "Arlo",
    bio:
      "Arlo é um protagonista e personagem do filme de 2015 da Disney/Pixar, O Bom Dinossauro. Ele é um apatossauro vivendo com seus pais e irmãos.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Arrasador",
    bio:
      "Arrasador (nome completo Blitz Wagner) é um personagem no filme de 2018 da Disney/Pixar, Os Incríveis 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a4/Krushauer.png/revision/latest/scale-to-width-down/258?cb=20190901213136&path-prefix=pt-br",
  },
  {
    name: "Art",
    bio:
      "Art é um dos tritagonistas do filme de 2013 da Disney/Pixar, Universidade Monstros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/c8/Art-MU.png/revision/latest/scale-to-width-down/258?cb=20171112183444&path-prefix=pt-br",
  },
  {
    name: "Atta",
    bio:
      "Atta é uma princesa&nbsp;(mais tarde rainha) é a deuteragonista do filme de 1998 da Disney/Pixar, Vida de Inseto. Ela é dublada por Julia Louis-Dreyfus.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/9a/3019f98aa3c66fc7fed2d2e531f07887.jpg/revision/latest/scale-to-width-down/258?cb=20150608204300&path-prefix=pt-br",
  },
  {
    name: "Autofone",
    bio:
      "Autofone é um brinquedo Chatter Telephone e um personagem no filme, Toy Story 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/19/Chattertelephone3.jpg/revision/latest/scale-to-width-down/258?cb=20170128013856&path-prefix=pt-br",
  },
  {
    name: "Bailey",
    bio:
      "Bailey é um baleia branca beluga e personagem do filme de 2016 da Disney/Pixar, Procurando Dory.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/3f/Bailey_Render.jpg/revision/latest/scale-to-width-down/258?cb=20160712201159&path-prefix=pt-br",
  },
  {
    name: "Bala no Alvo",
    bio:
      "Bala no Alvo&nbsp;é um dos triagonistas nos filmes Toy Story 2 e Toy Story 3. Ele é o cavalo do Woody.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/42/Bullseye_5.png/revision/latest/scale-to-width-down/258?cb=20171030180140&path-prefix=pt-br",
  },
  {
    name: "Barbie",
    bio: "era uma vez jma menina mt LOUCA DA CABECA chamada  :     🙉💋lalo",
    avatar_url: "",
  },
  {
    name: "Barley Lightfoot",
    bio:
      "Barley Lightfood é um elfo no filme animado de 2020 da Disney/Pixar, Dois Irmãos: Uma Jornada Fantástica.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/1b/BarleyPic.jpg/revision/latest/scale-to-width-down/258?cb=20191201233142&path-prefix=pt-br",
  },
  {
    name: "Barracuda",
    bio: "Barracuda é o antagonista secundário do filme&nbsp;Procurando Nemo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/11/Sem_t%C3%ADtuloD.png/revision/latest/scale-to-width-down/258?cb=20200427185754&path-prefix=pt-br",
  },
  {
    name: "Beta e Gamma",
    bio:
      "Beta e Gamma são dois cães ajudantes do Alpha do filme da Disney/Pixar, Up - Altas Aventuras.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/16/Up-disneyscreencaps.com-5046.png/revision/latest/scale-to-width-down/258?cb=20200210174422&path-prefix=pt-br",
  },
  {
    name: "Betty",
    bio:
      "Betty é uma personagem maior na franquia de Toy Story. Ela é uma boneca de porcelana com a aparência de uma pastora de ovelhas e é apaixonada por Faustão. Ela é dublada por Annie Potts.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Big D",
    bio:
      "Big D é um antagonista no episodio Mate Detetive Privado em Carros Toon",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a2/Tumblr_Bid_D.png/revision/latest/scale-to-width-down/258?cb=20191218214059&path-prefix=pt-br",
  },
  {
    name: "Bill",
    bio: "Bill é um peixe que aparece em Procurando Nemo",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/33/Bill-finding-nemo-45.1.jpg/revision/latest/scale-to-width-down/258?cb=20200308185643&path-prefix=pt-br",
  },
  {
    name: "Bill Andersen",
    bio:
      "Bill Andersen é um personagem do filme de 2015 da Disney/Pixar, Divertida Mente. Ele é o pai da Riley Andersen e marido da Jill Andersen.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/6/62/Bill_Andersen_full_body.jpg/revision/latest/scale-to-width-down/258?cb=20150802225545&path-prefix=pt-br",
  },
  {
    name: "Billy Oilchanger",
    bio: "Billy Oilchanger é um carro de corrida da Copa Pistão em Carros",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/7/71/58.PNG.png/revision/latest/scale-to-width-down/258?cb=20200604235717&path-prefix=pt-br",
  },
  {
    name: "Bing Bong",
    bio:
      'Bing Bong é o tritagonista de Divertida Mente. É o amigo imaginário de Riley em sua mente. Ele tem pele de algodão doce e é um híbrido entre um elefante um gato e um golfinho, gostava muito de brincar com sua amiga Riley, até o momento em que ela cresce e seu relacionamento fica "abandonado".',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/10/Bingbong.png/revision/latest/scale-to-width-down/258?cb=20150612213659&path-prefix=pt-br",
  },
  {
    name: "Bob",
    bio: "Bob é um cavalo-marinho que aparece em Procurando Nemo",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/55/Bob-finding-nemo-45.9.jpg/revision/latest/scale-to-width-down/258?cb=20200308190039&path-prefix=pt-br",
  },
  {
    name: "Bob Cutlass",
    bio: "Bob Cutlass é um personagem de Carros e Carros 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/53/Bob_cutlass.png/revision/latest/scale-to-width-down/258?cb=20190902201655&path-prefix=pt-br",
  },
  {
    name: "Bolha",
    bio: "Bolha é um peixe que aparece em Procurando Nemo",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/0/0c/Bubbles.png/revision/latest/scale-to-width-down/258?cb=20200311165428&path-prefix=pt-br",
  },
  {
    name: "Bonnie Anderson",
    bio:
      "Bonnie Anderson é uma personagem do filme de 2010 da Disney/Pixar, Toy Story 3 e Toy Story 4.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/82/Tumblr_l777pcvdcc1qa44fmo1_500.png/revision/latest/scale-to-width-down/258?cb=20170421213255&path-prefix=pt-br",
  },
  {
    name: "Boo",
    bio:
      "Mary Gibbs, mais conhecida como Boo, é a tritagonista do filme de 2001 da Disney/Pixar, Monstros S.A..",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/8a/Boo.jpg/revision/latest/scale-to-width-down/258?cb=20171030173440&path-prefix=pt-br",
  },
  {
    name: "Boost",
    bio: "O Boost é o protagonista secundário de Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/cd/Boost.png/revision/latest/scale-to-width-down/258?cb=20190511222300&path-prefix=pt-br",
  },
  {
    name: "Brasinha",
    bio:
      "Brasinha é um personagem do filme animado de 2020 da Disney/Pixar, Dois Irmãos: Uma Jornada Fantástica.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/52/Blazey_Onward.png/revision/latest/scale-to-width-down/258?cb=20200307225024&path-prefix=pt-br",
  },
  {
    name: "Brian Spark",
    bio: "Brian Spark é um carro de corrida da Copa Pistão em Carros 3",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/c0/LeakLess2017.png/revision/latest/scale-to-width-down/258?cb=20190915214735&path-prefix=pt-br",
  },
  {
    name: "Brick",
    bio:
      'Brick (nome completa Concretia "Connie" Mason) é uma personagem no filme de 2018 da Disney/Pixar, Os Incríveis 2.',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/58/Brick.png/revision/latest/scale-to-width-down/258?cb=20190901204748&path-prefix=pt-br",
  },
  {
    name: "Brick Yardley",
    bio: "Brick Yardley é um carro de corrida da Copa Pistão em Carros 3",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/f/f7/Brick_yardley.png/revision/latest/scale-to-width-down/258?cb=20190905011256&path-prefix=pt-br",
  },
  {
    name: "Bruce",
    bio: "Bruce é o tubarão branco que aparece em Procurando Nemo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a5/Bruce-FN.png/revision/latest/scale-to-width-down/258?cb=20160313205550&path-prefix=pt-br",
  },
  {
    name: "Brush Curber",
    bio: "Brush Curber é um carro de corrida da Copa Pistão em Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/be/Brush_Curber.png/revision/latest/scale-to-width-down/258?cb=20190821014413&path-prefix=pt-br",
  },
  {
    name: "Bubba",
    bio: "Bubba é um caminhão guincho que aparece no jogo Carros: Race-O-Rama",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/46/Bubba.png/revision/latest/scale-to-width-down/258?cb=20191231135001&path-prefix=pt-br",
  },
  {
    name: "Bubbha",
    bio:
      "Bubbha é o menor antagonista do filme de 2015 da Disney/Pixar, O Bom Dinossauro. Ele é o velociraptor e o líder os três velociraptors. Ele é dublado por Dave Boat.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/23/Bubbha.png/revision/latest/scale-to-width-down/258?cb=20151214021050&path-prefix=pt-br",
  },
  {
    name: "Buck (O Bom Dinossauro)",
    bio:
      "Buck é um personagem do filme de 2015 da Disney / Pixar, O Bom Dinossauro. Ele é o irmão do Arlo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/0/08/Buck_Render.png/revision/latest/scale-to-width-down/258?cb=20151122225740&path-prefix=pt-br",
  },
  {
    name: "BURN-E (personagem)",
    bio:
      'BURN-E (é a sigla de "Basic Utility Repair Nano Engineer") é um robô que apareceu no filme de 2008 da Disney/Pixar, WALL-E.',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/d3/BURN-E.png/revision/latest/scale-to-width-down/258?cb=20170422215449&path-prefix=pt-br",
  },
  {
    name: "Buster (Toy Story)",
    bio:
      "Buster é o cachorro dachshund quem ganhou o presente de natal no final do filme Toy Story. Ele apareceu em Toy Story 2 e Toy Story 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/f/f6/Buster_%28Toy_Story%29.jpg/revision/latest/scale-to-width-down/258?cb=20160628201410&path-prefix=pt-br",
  },
  {
    name: "Butch (O Bom Dinossauro)",
    bio:
      "Butch é um personagem do filme de 2015 da Disney/Pixar, O Bom Dinossauro. Ele é um T-Rex como principal antagonista. Ele é dublado por Sam Elliott.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/e5/Butch_Render.png/revision/latest/scale-to-width-down/258?cb=20151122230325&path-prefix=pt-br",
  },
  {
    name: "Buzz Lightyear",
    bio:
      "Buzz Lightyear é  um artigo destacado, o que significa que tem sido identificado como um dos melhores artigos produzidos pela comunidade da Disney Wiki. Se você vê uma maneira de como esta página pode ser atualizada ou aperfeiçoada sem comprometer o trabalho anterior, sinta-se livre para contribuir.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Cal Weathers",
    bio:
      "Cal Weathers é um carro de corrida da Copa Pistão em Carros 3 Ele é&nbsp;o sobrinho do corredor Rei",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/16/CalWeathers.png/revision/latest/scale-to-width-down/258?cb=20190830184219&path-prefix=pt-br",
  },
  {
    name: "Cardume",
    bio: "Cardume é um bando de peixes que aparece em Procurando&nbsp;",
    avatar_url: "",
  },
  {
    name: "Carl Fredricksen",
    bio:
      "Carl Fredricksen (nascido em 1931) é o protagonista do filme de 2009 da Disney/Pixar, Up - Altas Aventuras. Ele tem 78 anos um idoso viúvo a sua com balões. Ele é dublado por Edward Asner.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/7/71/Carl.png/revision/latest/scale-to-width-down/258?cb=20150731022013&path-prefix=pt-br",
  },
  {
    name: "Carla Veloso",
    bio:
      "Na versão brasileira, Carla é dublada pela cantora brasileira Claudia Leitte.[1] A gravação da Claudia onde apenas Carla na personagem Jeff Gorvette na cena na versão brasileira onde ele conhecer Relâmpago McQueen e Lewis Hamilton (que é renomeado depois e voz de Emerson Fittipaldi na versão brasileira)[2]",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/23/Ve3.jpg/revision/latest/scale-to-width-down/258?cb=20200718155652&path-prefix=pt-br",
  },
  {
    name: "Celia Mae",
    bio:
      "Celia Mae é uma personagem do filme de 2001 da Disney/Pixar, Monstros S.A.. Ela é a namorada do Mike Wazowski.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/ed/Monsters_Inc_Celia_Mae.jpg/revision/latest/scale-to-width-down/258?cb=20170614203956&path-prefix=pt-br",
  },
  {
    name: "Charles Muntz",
    bio:
      "Charles F. Muntz é o famoso explorador admirado por Carl Fredricksen e sua falecida esposa Ellie como criança, e o principal antagonista do filme de 2009 da Disney/Pixar, Up - Altas Aventuras.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/13/CharlesMuntz.png/revision/latest/scale-to-width-down/258?cb=20180415224507&path-prefix=pt-br",
  },
  {
    name: "Charlie (Procurando Dory)",
    bio:
      "Charlie é o pai da Dory e o personagem do filme de 2016 da Disney/Pixar, Procurando Dory.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/c9/Finding_Dory_-_Charlie.png/revision/latest/scale-to-width-down/258?cb=20160703013528&path-prefix=pt-br",
  },
  {
    name: "Chick Hicks",
    bio:
      "é o principal antagonista de Cars e o antagonista secundário em Cars 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/16/300px-Chick_Hicks.png/revision/latest/scale-to-width-down/258?cb=20190511183632&path-prefix=pt-br",
  },
  {
    name: "Chucrute",
    bio:
      "Chucrute é um personagem em filme de 1998 da Disney/Pixar, Vida de Inseto. Ele é dublado por Joe Ranft no original e Garcia Júnior na versão brasileira.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/3e/Chucrute.png/revision/latest/scale-to-width-down/258?cb=20190615164431&path-prefix=pt-br",
  },
  {
    name: "Chum",
    bio: "Chum é um tubarão mako de Procurando Nemo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/6/65/Chum-FN.png/revision/latest/scale-to-width-down/258?cb=20191206212518&path-prefix=pt-br",
  },
  {
    name: "Cocó",
    bio:
      "Cocó (nome completo Strig Tyton) é um personagem da Disney/Pixar, Os Incríveis 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/17/Screech.png/revision/latest/scale-to-width-down/258?cb=20190901214855&path-prefix=pt-br",
  },
  {
    name: "Colette Tatou",
    bio: "Colette Tatou é uma tritagonista no filme Ratatouille.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/d8/Colette_Tatou_Imagem_1.jpg/revision/latest/scale-to-width-down/258?cb=20161025141048&path-prefix=pt-br",
  },
  {
    name: "Colt Bronco",
    bio:
      "Colt Bronco é um personagem no filme de 2020 da Disney/Pixar, Dois Irmãos: Uma Jornada Fantástica.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/47/Colt_Bronco.jpg/revision/latest/scale-to-width-down/258?cb=20200308001710&path-prefix=pt-br",
  },
  {
    name: "Coral",
    bio:
      "Coral é uma personagem secundaria em Procurando Nemo. Ela é a esposa de Marlin e mãe de Nemo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/3d/Coral.jpg/revision/latest/scale-to-width-down/258?cb=20200914182614&path-prefix=pt-br",
  },
  {
    name: "Corey a Manticora",
    bio:
      "Corey a Manticora é uma personagem maior no filme de 2020 da Disney/Pixar, Dois Irmãos: Uma Jornada Fantástica.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/dc/Corey_the_Manticore.jpg/revision/latest/scale-to-width-down/258?cb=20200308003018&path-prefix=pt-br",
  },
  {
    name: "CR",
    bio:
      "CR Carro (Controle Remoto) ou simplesmente CR é o brinquedo carro de corrida com controle remoto do Andy que aparece nos filmes na franquia Toy Story.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/db/Toystory-disneyscreencaps.com-3249.jpg/revision/latest/scale-to-width-down/258?cb=20181010211806&path-prefix=pt-br",
  },
  {
    name: "Crush",
    bio:
      "Crush é uma tartaruga-marinha masculina e o tetartagonista do filme de 2003 da Disney/Pixar, Procurando Nemo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/30/Crush-FN.png/revision/latest/scale-to-width-down/258?cb=20170513205849&path-prefix=pt-br",
  },
  {
    name: "Cruz Ramirez",
    bio:
      "Cruz Ramirez é uma deuteragonista no filme de 2017 da Disney/Pixar, Carros 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b1/CruzRamirez.png/revision/latest/scale-to-width-down/258?cb=20170611202055&path-prefix=pt-br",
  },
  {
    name: "Dale Earnhardt JR (carro)",
    bio: "Dale Ernhardt JR é um carro de corrida da Copa Pistão em Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/d8/DaleB_large.jpg/revision/latest/scale-to-width-down/258?cb=20190514213326&path-prefix=pt-br",
  },
  {
    name: "Daniel Swervez",
    bio:
      "Daniel Swervez é um carro de corrida da Nova Geração da Copa Pistão em Carros 3",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/d0/Daniel_swervez.png/revision/latest/scale-to-width-down/258?cb=20200121220409&path-prefix=pt-br",
  },
  {
    name: "Dante",
    bio:
      "Dante é um cachorro da raça Xoloitzcuintle do filme de 2017 da Disney/Pixar, Viva: A Vida é uma Festa. Ele é o animal de estimação do Miguel.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/ab/Coco_Dante.png/revision/latest/scale-to-width-down/258?cb=20170913171538&path-prefix=pt-br",
  },
  {
    name: "Darrel Cartrip",
    bio: "Darrel Cartrip é um narrador da Copa Pistão em Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/0/00/Darrell_cartrip.png/revision/latest/scale-to-width-down/258?cb=20190830183336&path-prefix=pt-br",
  },
  {
    name: "Darren Leadfoot",
    bio: "Darren Leadfoot é um carro de corrida de Carros",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/c6/Darren_Leadfoot.png/revision/latest/scale-to-width-down/220?cb=20190511221627&path-prefix=pt-br",
  },
  {
    name: "Dean Hardscrabble",
    bio:
      "Dean Abigail Hardscrabble é uma personagem no filme de 2013 da Disney/Pixar, Universidade Monstros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b1/DeanHardscrabble-MU.png/revision/latest/scale-to-width-down/258?cb=20160207005752&path-prefix=pt-br",
  },
  {
    name: "Destiny",
    bio:
      "Destiny é uma Tubarão-Baleia e uma personagem do filme de 2016 da Disney/Pixar, Procurando Dory.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/6/6c/Destiny_Render.jpg/revision/latest/scale-to-width-down/258?cb=20160612214933&path-prefix=pt-br",
  },
  {
    name: "Dirkson D'Agostino",
    bio: "Dirkson D'Agostino é um carro de corrida da Copa Pistão em Carros",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/82/Dirkson_D%27Agostino.png/revision/latest/scale-to-width-down/258?cb=20190806033253&path-prefix=pt-br",
  },
  {
    name: "Doc Hudson",
    bio: "Vovô (antigamente (por Relâmpago McQueen)",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/dd/Doc_Hudson.png/revision/latest/scale-to-width-down/258?cb=20170611203719&path-prefix=pt-br",
  },
  {
    name: "Don Carlton",
    bio: "Don Carlton é um dos tritagonistas em Universidade Monstros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/29/DonCarlton-MU.png/revision/latest/scale-to-width-down/258?cb=20171112194155&path-prefix=pt-br",
  },
  {
    name: "Dory",
    bio:
      "adulta)  Jennifer Hale (nos jogos)  Sloane Murray (criança)  Lucia Geddes (adolescente)     Maíra Góes (adulta)  Noa Bicalho (criança)  Pamella Rodrigues (adolescente)",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/f/fb/Finding-dory-dory-21275dea-c210-4af8-ad27-55e0e1043fea.jpg/revision/latest/scale-to-width-down/258?cb=20161129142143&path-prefix=pt-br",
  },
  {
    name: "Dot",
    bio:
      "Doté uma personagem no filme de 1998 da Disney/Pixar,&nbsp;Vida de Inseto. Ela é dublada por Hayden Panettiere&nbsp;no original e Carol Kapfer na versão brasileira. &nbsp;",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/1e/PrincessCom.png/revision/latest/scale-to-width-down/258?cb=20150919031057&path-prefix=pt-br",
  },
  {
    name: "Dragões",
    bio: "Dragões são criaturas lendários,",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/18/Maleficent-%282014%29-114.png/revision/latest/scale-to-width-down/250?cb=20170820201615&path-prefix=pt-br",
  },
  {
    name: "Dud Throttleman",
    bio: "Dud Throttleman é um carro de corrida da Copa Pistão em Carros 3",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/32/Dud_throttleman.png/revision/latest/scale-to-width-down/258?cb=20190915215529&path-prefix=pt-br",
  },
  {
    name: "Dug",
    bio:
      "Dug é um tritagonista no filme de 2009 da Disney/Pixar, Up - Altas Aventuras. Ele é dublado por Bob Peterson.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/35/Dug-up.jpg/revision/latest/scale-to-width-down/258?cb=20150816210621&path-prefix=pt-br",
  },
  {
    name: "Duke Caboom",
    bio:
      "Duke Caboom é um personagem do filme de 2019 da Disney/Pixar, Toy Story 4.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/ba/Duke_Caboom.png/revision/latest/scale-to-width-down/258?cb=20200112201646&path-prefix=pt-br",
  },
  {
    name: "Earl",
    bio: "Earl é um velociraptor que aparece em O Bom Dinossauro",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/37/Earl_scared.png/revision/latest/scale-to-width-down/258?cb=20190809212345&path-prefix=pt-br",
  },
  {
    name: "Edna Moda",
    bio:
      "Edna Moda é  um artigo destacado, o que significa que tem sido identificado como um dos melhores artigos produzidos pela comunidade da Disney Wiki. Se você vê uma maneira de como esta página pode ser atualizada ou aperfeiçoada sem comprometer o trabalho anterior, sinta-se livre para contribuir.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Ellie Fredricksen",
    bio:
      'Elizabeth "Ellie" Fredricksen (1935-????) é uma personagem que apareceu os eventos antes na sua morte do filme de 2009 da Disney/Pixar, Up - Altas Aventuras. Ela é a esposa de Carl Fredricksen.',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/6/6f/Ellie_up.png/revision/latest/scale-to-width-down/258?cb=20170421021942&path-prefix=pt-br",
  },
  {
    name: "Elétrico",
    bio:
      "Elétrico (nome completo Tom Current) é um personagem no filme da Disney/Pixar, Os Incríveis 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/2b/He-Lectrix.png/revision/latest/scale-to-width-down/258?cb=20190901214121&path-prefix=pt-br",
  },
  {
    name: "Emile",
    bio:
      "Emile é um personagem maior do filme de 2007 da Disney/Pixar, Ratatouille. Ele é o irmão mais velho de Remy.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/80/Emile2.jpg/revision/latest/scale-to-width-down/258?cb=20160714211141&path-prefix=pt-br",
  },
  {
    name: "Emoções da Sra. Andersen",
    bio:
      "Emoções da Sra. Andersen são cinco emoções do filme da Disney/Pixar, Divertida Mente. A líder Tristeza, está dentro na mente da Mãe de Riley.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/ae/Inside-Out-9.png/revision/latest/scale-to-width-down/258?cb=20150619200046&path-prefix=pt-br",
  },
  {
    name: "Emoções do Sr. Andersen",
    bio:
      "Emoções do Sr. Andersen são cinco emoções do filme da Disney/Pixar, Divertida Mente. O líder Raiva, está dentro na mente do Pai de Riley.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/92/Inside-Out-10.png/revision/latest/scale-to-width-down/258?cb=20150701012810&path-prefix=pt-br",
  },
  {
    name: "Eric Roadales",
    bio: "Eric Roadales é um caminhão que Transporta o corredor Aiken ",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b6/Nitroade_Hauler.png/revision/latest/scale-to-width-down/258?cb=20190806001635&path-prefix=pt-br",
  },
  {
    name: "Ernesto de la Cruz",
    bio:
      "Ernesto de la Cruz é o principal antagonista do filme da Disney/Pixar, Viva: A Vida é uma Festa de 2017 pra 2018",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/bc/Ernesto_DE_la_Cruz.jpg/revision/latest/scale-to-width-down/258?cb=20171216212444&path-prefix=pt-br",
  },
  {
    name: "Ernie Gearson",
    bio: "Ernie Gearson é um carro de corrida da Copa Pistão de Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/1f/Ernie_Gearson.png/revision/latest/scale-to-width-down/258?cb=20190511183450&path-prefix=pt-br",
  },
  {
    name: "Esguicho",
    bio:
      "Esguicho é o filho do Crush no filme de 2003 da Disney/Pixar, Procurando Nemo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/d9/Squirt-FN.png/revision/latest/scale-to-width-down/258?cb=20170712191708&path-prefix=pt-br",
  },
  {
    name: "Esguicho (Os Incríveis)",
    bio:
      "Esguicho (nome completo Gus Burns) é um personagem da Disney/Pixar, Os Incríveis 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/dc/Reflux.png/revision/latest/scale-to-width-down/258?cb=20190901212555&path-prefix=pt-br",
  },
  {
    name: "Estica (Toy Story)",
    bio:
      "Estica  é uma polvo roxa que é capaz de esticar os seus tentáculos. É uma dos personagens antagonistas no filme de 2010 da Disney/Pixar, Toy Story 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/6/69/Stretch.jpg/revision/latest/scale-to-width-down/258?cb=20170604204813&path-prefix=pt-br",
  },
  {
    name: "Eugene Carbureski",
    bio: "Eugene Carbureski é um carro de corrida da Copa Pistão em Carros",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/5f/Eugene_Carbureski.png/revision/latest/scale-to-width-down/228?cb=20190824112548&path-prefix=pt-br",
  },
  {
    name: "EVA",
    bio:
      "EVA (Extraterrestrial Vegetation Evaluator) é uma antagonista no filme animado de 2008 da Disney/Pixar, WALL-E. Ela é dublada por Elissa Knight.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Evelyn Deavor",
    bio:
      "Evelyn Deavor é uma principal antagonista no filme da Disney/Pixar, Os Incríveis 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a8/Evelyn_Deavor.png/revision/latest/scale-to-width-down/258?cb=20180707225627&path-prefix=pt-br",
  },
  {
    name: "Família das Cavernas",
    bio:
      "A Família das Cavernas são os personagens da família em O Bom Dinossauro que adotá-lo Spot. A família entre o pai, a mãe, a irmã e o irmão.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/50/TheCaveFamily.png/revision/latest/scale-to-width-down/258?cb=20160718000651&path-prefix=pt-br",
  },
  {
    name: "Ferrugem",
    bio: "Ferrugem é um personagem em Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/0/08/RustyRustEzeArtwork.png/revision/latest/scale-to-width-down/258?cb=20190807194343&path-prefix=pt-br",
  },
  {
    name: "Fillmore (Carros)",
    bio: "Fillmore é um personagem de Carros. Ele é uma kombi hippie 1960.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/3f/Image_%281%29.png/revision/latest/scale-to-width-down/258?cb=20190518215544&path-prefix=pt-br",
  },
  {
    name: "Finn McMissil",
    bio: "Finn McMissil é um tritagonista em Carros 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/4a/Fin.jpg/revision/latest/scale-to-width-down/258?cb=20200723012442&path-prefix=pt-br",
  },
  {
    name: "Flecha Pêra",
    bio:
      "Flecha Roberto Pêra é um dos tritagonistas no filme de 2004 da Disney/Pixar, Os Incríveis e sua continuação de 2018. Ele é o filho de Beto e Helena Pêra e seu irmão mais jovem Zezé Pêra e irmã mais velha Violeta Pêra. Flecha tem super-poderes de correr veloz.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a5/I2_-_Dash.png/revision/latest/scale-to-width-down/258?cb=20180827020219&path-prefix=pt-br",
  },
  {
    name: "Flik",
    bio:
      "Flik é um protagonista do filme de 1998 da Disney/Pixar, Vida de Inseto.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Flip Dover",
    bio:
      "Flip Dover é um carro de corrida da Nova Geração da Copa Pistão que aparece em Carros 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/c4/Flip_dover.png/revision/latest/scale-to-width-down/258?cb=20200130163208&path-prefix=pt-br",
  },
  {
    name: "Flo",
    bio: "Flo é uma personagem na franquia da Disney/Pixar, Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b5/Flo.png/revision/latest/scale-to-width-down/258?cb=20171113170949&path-prefix=pt-br",
  },
  {
    name: "Forrest Woodbush",
    bio: "Forrest Woodbush é um estiracossauro do filme O Bom Dinossauro.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b5/Pet_Collector_Render.png/revision/latest/scale-to-width-down/258?cb=20191201041321&path-prefix=pt-br",
  },
  {
    name: "Francesco Bernoulli",
    bio:
      "Francesco Bernoulli é um personagem maior do filme de 2011 da Disney/Pixar, Carros 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/57/Francesco_bernoulli.png/revision/latest/scale-to-width-down/258?cb=20171112172244&path-prefix=pt-br",
  },
  {
    name: "Frank",
    bio: "Frank é uma colheiteira e o antagonista secundário de Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/c4/Frank_Cars.jpg/revision/latest/scale-to-width-down/258?cb=20191213232210&path-prefix=pt-br",
  },
  {
    name: "Frida Kahlo",
    bio:
      "Frida Kahlo é uma celebridade mexicana que aparece no filme animado de 2017 da Disney/Pixar, Viva: A Vida é uma Festa.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/e8/Frida.PNG.png/revision/latest/scale-to-width-down/258?cb=20200228220107&path-prefix=pt-br",
  },
  {
    name: "Fúlvio e Rubens",
    bio: "Fúlvio e Rubens são dois leões marinhos no filme Procurando Dory.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b1/Profile-_Fluke_and_Rudder.png/revision/latest/scale-to-width-down/258?cb=20191206213320&path-prefix=pt-br",
  },
  {
    name: "Gabby Gabby",
    bio:
      "Gabby Gabby é uma principal antagonista do filme de 2019 da Disney/Pixar, Toy Story 4.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/56/Gabby_Gabby.png/revision/latest/scale-to-width-down/258?cb=20200125203701&path-prefix=pt-br",
  },
  {
    name: "Garfinho",
    bio:
      "Garfinho é um personagem no filme de 2019 da Disney/Pixar, Toy Story 4.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/d8/Garfinho.png/revision/latest/scale-to-width-down/258?cb=20190621032749&path-prefix=pt-br",
  },
  {
    name: "Gelado",
    bio:
      "Lúcio Barro (conhecido como Gelado) é um personagem maior do filme de 2004 da Disney/Pixar, Os Incríveis e sua continuação no futuro filme, Os Incríveis 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/ed/I2_-_Frozone_2.png/revision/latest/scale-to-width-down/258?cb=20180910193551&path-prefix=pt-br",
  },
  {
    name: "Geraldo",
    bio: "Geraldo é um leão marinho no filme Procurando Dory.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/6/6c/Gerald_Sea_Lion.png/revision/latest/scale-to-width-down/258?cb=20191206221123&path-prefix=pt-br",
  },
  {
    name: "Geri",
    bio:
      "Geri é o velho que apareceu no curta O Jogo de Geri e que apareceu no filme da Disney/Pixar, Toy Story 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/48/Geri.jpg/revision/latest/scale-to-width-down/258?cb=20161011015629&path-prefix=pt-br",
  },
  {
    name: "Gill",
    bio:
      'Gill é um Zanclidae mais conhecido como "Ídolo Mouro" e um dos tritagonistas em Procurando Nemo, e maior personagem sua sequência, Procurando Dory.',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/82/Gill-FN.png/revision/latest/scale-to-width-down/258?cb=20170513204231&path-prefix=pt-br",
  },
  {
    name: "Gluglu",
    bio: "Gluglu é um peixe que aparece em Procurando Nemo",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/43/Gurgle.jpg/revision/latest/scale-to-width-down/258?cb=20200309103447&path-prefix=pt-br",
  },
  {
    name: "Gray (Carros)",
    bio: "Gray é um caminhão que Transporta o Corredor Rei de Carros",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/c0/Imag.png/revision/latest/scale-to-width-down/258?cb=20190514220641&path-prefix=pt-br",
  },
  {
    name: "Greg Candyman",
    bio: "Greg Candyman é um carro de corrida da Copa Pistão em Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a3/9acaf288501b75f8fc712b7a07650435037803ca_hq.jpg/revision/latest/scale-to-width-down/258?cb=20190511183427&path-prefix=pt-br",
  },
  {
    name: "Guido",
    bio:
      "Guido é um personagem italiano de Carros. Ele é um Empilhadeira que mora em Radiator Springs.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/10/Guido.png/revision/latest/scale-to-width-down/258?cb=20190531195148&path-prefix=pt-br",
  },
  {
    name: "Hank",
    bio:
      "Hank é o polvo de sete tentaculos e o tetartagonista do filme de 2016 da Disney/Pixar, Procurando Dory.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/df/Hank_Render.jpg/revision/latest/scale-to-width-down/258?cb=20160703014135&path-prefix=pt-br",
  },
  {
    name: "Hannah Phillips",
    bio: "Hannah Phillips é uma personagem de Toy Story.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/ef/Hannah_Phillips_Screenshot_1.png/revision/latest/scale-to-width-down/258?cb=20150511195231&path-prefix=pt-br",
  },
  {
    name: "Harris, Hubert e Hamish",
    bio:
      "Os trigêmeos idênticos Harris, Hubert e Hamish são os três tritagonistas secundários do filme da Disney/Pixar Valente. Eles são cuidados pela sua babá Maudie. Eles são os filhos do Rei Fergus e da Rainha Elinor, irmãos mais novos da Princesa Mérida, e os príncipes do reino escocês de DunBroch.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/9f/Triplets-Brave.jpg/revision/latest/scale-to-width-down/258?cb=20150510210004&path-prefix=pt-br",
  },
  {
    name: "Hipnotizador",
    bio:
      "O Hipnotizador é o antagonista secundário no filme de 2018 da Disney/Pixar, Os Incríveis 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/5f/Screenslaver.jpg/revision/latest/scale-to-width-down/258?cb=20181025191734&path-prefix=pt-br",
  },
  {
    name: "Holley Caixadibrita",
    bio: "Holley Caixadibrita é uma personagem no filme Carros 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/9b/Holly_shiftwell.png/revision/latest/scale-to-width-down/258?cb=20160216213435&path-prefix=pt-br",
  },
  {
    name: "Homenzinhos Verdes",
    bio:
      "Os Brinquedos Aliens (mais conhecidos como Homenzinhos Verdes ou HVs por curta) são os personagens na franquia da Disney/Pixar, Toy Story e Buzz Lightyear do Comando Estelar.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/1f/Aliens_2.png/revision/latest/scale-to-width-down/258?cb=20171030193706&path-prefix=pt-br",
  },
  {
    name: "Hopper",
    bio:
      "Hopper é um principal antagonista do filme de 1998 da Disney/Pixar, Vida de Inseto.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/81/Hopper.png/revision/latest/scale-to-width-down/258?cb=20170808205003&path-prefix=pt-br",
  },
  {
    name: "Héctor Rivera",
    bio:
      "Héctor Rivera é um personagem do filme da Disney/Pixar, Viva: A Vida é uma Festa.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/1e/Coco_Hector_render.png/revision/latest/scale-to-width-down/258?cb=20170913170835&path-prefix=pt-br",
  },
  {
    name: "Ian Lightfoot",
    bio:
      "Ian Lightfoot é um elfo no filme de 2020 da Disney/Pixar, Dois Irmãos: Uma Jornada Fantástica.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/2b/Ian_Lightfoot.png/revision/latest/scale-to-width-down/258?cb=20200225151151&path-prefix=pt-br",
  },
  {
    name: "Imelda",
    bio:
      "Imelda ou Amélia (No Brasil) é uma personagem do filme da Disney/Pixar, Viva: A Vida é uma Festa.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/38/Coco_Imelda_Render.jpg/revision/latest/scale-to-width-down/258?cb=20170924023859&path-prefix=pt-br",
  },
  {
    name: "Imperador Zurg",
    bio:
      " Andrew Stanton (Toy Story 2, apenas no vídeo games)Wayne Knight (A Aventura Começa e série de TV)Bob Amaral (Buzz Lightyear do Comando Estelar vídeo game)James Patrick Stuart (Toy Story 3: O Vídeo Game, Kinect: Disneyland Adventures, Disney INFINITY, O Reino Mágico da Disney)   Renato Rabello",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/c5/Toy-story2-disneyscreencaps.com-8243.jpg/revision/latest/scale-to-width-down/258?cb=20171030170659&path-prefix=pt-br",
  },
  {
    name: "Beto Pêra",
    bio:
      "Beto Pêra (conhecido também como Sr. Incrível) é o protagonista do filme de animação da Disney/Pixar, Os Incríveis de 2004, e o deuteragonista da sequência de 2018.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/6/66/I2_-_Mr._Incredible_2.png/revision/latest/scale-to-width-down/258?cb=20180528004450&path-prefix=pt-br",
  },
  {
    name: "Jack DePost",
    bio:
      "Jack DePost é um carro de corrida da Copa Pistão que aparece em Carros 3",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/f/fa/Jack_depost.jpg/revision/latest/scale-to-width-down/258?cb=20200219181948&path-prefix=pt-br",
  },
  {
    name: "Jackson Storm",
    bio:
      "Jackson Storm é um personagem e antagonista no filme de 2017 da Disney/Pixar, Carros 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/85/JacksonStormCars3Artwork.png/revision/latest/scale-to-width-down/258?cb=20170611202547&path-prefix=pt-br",
  },
  {
    name: "James Cleanair",
    bio: "James Cleanair é um carro de corrida da Copa Pistão em Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/1c/JamesC.png/revision/latest/scale-to-width-down/258?cb=20190514225458&path-prefix=pt-br",
  },
  {
    name: "James P. Sullivan",
    bio:
      "James P. Sullivan é  um artigo destacado, o que significa que tem sido identificado como um dos melhores artigos produzidos pela comunidade da Disney Wiki. Se você vê uma maneira de como esta página pode ser atualizada ou aperfeiçoada sem comprometer o trabalho anterior, sinta-se livre para contribuir.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Jan Flash Nilsson",
    bio:
      "Jan Flash Nilsson é um carro de corrida do Grand Prix Mundial que aparece na versão sueca do filme Carros 2",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/cc/Flashdisney.jpg/revision/latest/scale-to-width-down/258?cb=20200221003346&path-prefix=pt-br",
  },
  {
    name: "Jenny (Procurando Dory)",
    bio:
      "Jenny tem um meio círculo com olhos magenta escuros e barbatanas dorsais mais brilhantes do que a sua filha Dory. Suas pálbebras são um pouco mais escuras e, como a filha e o marido, têm dentes chatos e ligeiramente torcidos.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/10/Finding_Dory_-_Jenny.png/revision/latest/scale-to-width-down/258?cb=20160703012939&path-prefix=pt-br",
  },
  {
    name: "Jessie",
    bio:
      "Jessie é uma personagem dos filmes da franquia da Disney/Pixar, Toy Story. Ela teve sua estréia no segundo filme da franquia, Toy Story 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/7/7a/Jessie.png/revision/latest/scale-to-width-down/258?cb=20150424185533&path-prefix=pt-br",
  },
  {
    name: "Jill Andersen",
    bio:
      "Jill Andersen é uma personagem do filme de 2015 da Disney/Pixar, Divertida Mente. Ela é a mãe de Riley Andersen. Ela é dublada por Diane Lane.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/43/Riley%27s_Mother.jpg/revision/latest/scale-to-width-down/258?cb=20150619194044&path-prefix=pt-br",
  },
  {
    name: "Jimbo (Carros 3)",
    bio:
      "Jimbo é uma caminhonete que aparece em Carros 3. Ele é um dos 8 Irados",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/1f/Jimbo3.png/revision/latest/scale-to-width-down/258?cb=20200301144755&path-prefix=pt-br",
  },
  {
    name: "Jimmy Cables",
    bio:
      "Jimmy&nbsp;Cables é um carro de corrida da Copa Pistão que aparece em Carros 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/47/IMG_4889.JPG.jpg/revision/latest/scale-to-width-down/258?cb=20200301153038&path-prefix=pt-br",
  },
  {
    name: "Joe Gardner",
    bio:
      "Joe Gardner é um protagonista no filme animado de 2020 da Disney/Pixar, Soul.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/35/Profile_-_Joe_Gardener.png/revision/latest/scale-to-width-down/258?cb=20200316184758&path-prefix=pt-br",
  },
  {
    name: "Johnny Worthington III",
    bio:
      'Johnny "O Mandíbula" Worthington é um principal antagonista no filme animado de 2013 da Disney/Pixar, Universidade Monstros.',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/90/Profile-_Johnny_Worthington_III.png/revision/latest/scale-to-width-down/258?cb=20200327183822&path-prefix=pt-br",
  },
  {
    name: "Jordan (Divertida Mente)",
    bio:
      "Jordan é um personagem do filme da Disney/Pixar de 2015, Divertida Mente.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/89/Jordan_Inside_Out.png/revision/latest/scale-to-width-down/258?cb=20170523185245&path-prefix=pt-br",
  },
  {
    name: "Jovem MacGuffin",
    bio:
      "Jovem MacGuffin é um personagem menor em Valente. Ele é filho do Lorde MacGuffin, e um dos pretendentes concorrentes para a mão da Mérida em casamento. Ele é dublado por Kevin McKidd no original e Sérgio Cantú na versão brasileira.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/d2/YoungMacguffin-Brave.png/revision/latest/scale-to-width-down/220?cb=20150922024252&path-prefix=pt-br",
  },
  {
    name: "Jovem Macintosh",
    bio:
      "Jovem Macintosh é um personagem menor em&nbsp;Valente. Ele é filho de Lorde Macintosh, e um dos pretendentes concorrentes para a mão da Princesa Mérida em casamento.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/80/YoungMacintosh.jpeg/revision/latest/scale-to-width-down/211?cb=20151112024352&path-prefix=pt-br",
  },
  {
    name: "Ken Carson",
    bio:
      "Ken (nome completo Kenneth Sean Carson) é uma personagem, formalmente um antagonista secundário do filme Toy Story 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/e1/Ken_Carson.jpg/revision/latest/scale-to-width-down/258?cb=20151025160913&path-prefix=pt-br",
  },
  {
    name: "Kevin Racingtire",
    bio: "Kevin Racingtire é um carro de corrida da Copa Pistão em Carros",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/10/Kevin_Racingtire.png/revision/latest/scale-to-width-down/258?cb=20190821014552&path-prefix=pt-br",
  },
  {
    name: "Lagarto Feitiçeiro",
    bio:
      "Lagarto Feitiçeiro é um lagarto de brinquedo que aparece em Curtas Toy Story no episodio&nbsp; Um Pequeno Grande Erro",
    avatar_url: "",
  },
  {
    name: "Lane Locke",
    bio: "Lane Locke é um carro de corrida da Copa Pistão em Carros 3",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/d3/IMG_4890.JPG.jpg/revision/latest/scale-to-width-down/258?cb=20190901211007&path-prefix=pt-br",
  },
  {
    name: "Laurel Lightfoot",
    bio:
      "Laurel Lightfoot é uma elfa no filme animado de 2020 da Disney/Pixar, Dois Irmãos: Uma Jornada Fantástica. Ela é a mãe de Ian e Barley.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/15/LaurelPic.jpg/revision/latest/scale-to-width-down/258?cb=20200104191424&path-prefix=pt-br",
  },
  {
    name: "Leroy Heming",
    bio: "Leroy Heming é&nbsp;um carro de corrida da Copa Pistão em Carros 3",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/7/75/LeroyH.png/revision/latest/scale-to-width-down/258?cb=20190917211441&path-prefix=pt-br",
  },
  {
    name: "Libby",
    bio:
      "Libby é uma personagem do filme de 2015 da Disney/Pixar, O Bom Dinossauro. Ela é a irmã do Arlo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/53/Libby_Render.png/revision/latest/scale-to-width-down/258?cb=20151122221850&path-prefix=pt-br",
  },
  {
    name: "Lizzie (Carros)",
    bio: "Lizzie é uma personagem de Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/31/Lizzie.png/revision/latest/scale-to-width-down/258?cb=20190531192855&path-prefix=pt-br",
  },
  {
    name: "Lorde Dingwall",
    bio:
      "Lorde Dingwall é um personagem no filme de 2012 da Disney/Pixar, Valente. Ele foi dublado por Robbie Coltrane.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/0/01/LordDingwall.jpeg/revision/latest/scale-to-width-down/258?cb=20160322001454&path-prefix=pt-br",
  },
  {
    name: "Lorde MacGuffin",
    bio:
      "Lorde MacGuffin é um personagem no filme de 2012 da Disney/Pixar, Valente.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b3/LordMacguffin.jpeg/revision/latest/scale-to-width-down/258?cb=20160322000342&path-prefix=pt-br",
  },
  {
    name: "Lorde Macintosh",
    bio:
      "Lorde Macintosh é um personagem do filme de animação da Disney/Pixar de 2012, Valente.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/eb/LordMacintosh.jpeg/revision/latest/scale-to-width-down/258?cb=20160321234950&path-prefix=pt-br",
  },
  {
    name: "Lotso, O Ursinho Fofo",
    bio:
      'Lotso, O Ursinho Fofo (mais conhecido como "Lotso") é um principal antagonista no filme de 2010 da Disney/Pixar, Toy Story 3.',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a3/LotsoHugginBear.png/revision/latest/scale-to-width-down/258?cb=20160321230102&path-prefix=pt-br",
  },
  {
    name: "Louise''Nada''Modesta",
    bio: "Louise é uma corredora de corrida aposentada de Carros 3",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b0/Louise_Nash.png/revision/latest/scale-to-width-down/258?cb=20191213161413&path-prefix=pt-br",
  },
  {
    name: "Luigi",
    bio: "Luigi é um personagem italiano de Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/6/6d/Luigi.png/revision/latest/scale-to-width-down/258?cb=20190731184137&path-prefix=pt-br",
  },
  {
    name: "Lurleane",
    bio:
      "Lurleane é um velociraptor fêmea que aparece no filme O Bom Dinossauro.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/d4/Lurleane_%28The_Good_Dinosaur%29.jpg/revision/latest/scale-to-width-down/258?cb=20190809221957&path-prefix=pt-br",
  },
  {
    name: "M-O",
    bio:
      "M-O (conhecido como Microbe-Obliterator) é um dos tritagonistas em WALL-E.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a0/28506_128851903797012_1406630_a.jpg/revision/latest/scale-to-width-down/258?cb=20170422214420&path-prefix=pt-br",
  },
  {
    name: "Mack",
    bio:
      "Mack é um personagem de Carros e Carros 2 Ele é o motorista de Relâmpago McQueen.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/c0/Mack.png/revision/latest/scale-to-width-down/258?cb=20170614202552&path-prefix=pt-br",
  },
  {
    name: "Mamá Inês",
    bio:
      'Mamá Inês é a avó de Miguel, personagem do filme animado "Viva, a vida é uma festa", sendo alegre e bondosa, apesar de doente, prestes a morrer e seu pai, supostamente, tê-la trocado e a sua mãe por causa da música.',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/90/Mamacoco.jpg/revision/latest/scale-to-width-down/258?cb=20171230195444&path-prefix=pt-br",
  },
  {
    name: "Mamãe Ida",
    bio:
      "Mamãe Ida é uma personagem do filme de 2015 da Disney/Pixar, O Bom Dinossauro. Ela é a mãe do Arlo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/48/Momma_Render.png/revision/latest/scale-to-width-down/258?cb=20151122224919&path-prefix=pt-br",
  },
  {
    name: "Marlin",
    bio:
      "Marlin é o protagonista do filme de 2003 da Disney/Pixar, Procurando Nemo, e o tritagonista na continuação em 2016. É um personagem jogável em Procurando Nemo e Procurando Dory.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/57/Marlin-FN.png/revision/latest/scale-to-width-down/258?cb=20160215030154&path-prefix=pt-br",
  },
  {
    name: "Mate",
    bio:
      "Tom Mate sobrenome Mate é um deuteragonista do filme de 2006 da Disney/Pixar, Carros, e principal protagonista na continuação de 2011, sua sequência de 2017 e na série de curtas de televisão, Carros Toon: A Grande Histórias do Mate. Ele é o caminhão-reboque se torna amigo do Relâmpago McQueen. Ele é dublado por Larry the Cable Guy.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/ee/Mater.png/revision/latest/scale-to-width-down/258?cb=20150523232526&path-prefix=pt-br",
  },
  {
    name: "Maudie",
    bio:
      "Maudie é uma personagem menor no filme da Disney/Pixar, Valente. Ela é a babá de Harris, Hubert e Hamish.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/2d/Maudie.png/revision/latest/scale-to-width-down/258?cb=20150609190426&path-prefix=pt-br",
  },
  {
    name: "Medo",
    bio:
      "Medo tem uma pele roxo-claro. Tem olhos violetas. Só tem um fio de cabelo na cabeça. Tem sobrancelhas muito grossas.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b1/FEAR_Fullbody_Render.png/revision/latest/scale-to-width-down/258?cb=20150619201146&path-prefix=pt-br",
  },
  {
    name: "Meg (Divertida Mente)",
    bio:
      "Meg é uma personagem no filme de 2015 da Disney/Pixar, Divertida Mente. Ela é amiga mais velha da Riley Andersen em Minnesota.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/31/Screen_Shot_2015-05-09_at_6.49.58_PM.png/revision/latest/scale-to-width-down/258?cb=20160222232910&path-prefix=pt-br",
  },
  {
    name: "Melancolia",
    bio:
      "Melancolia é um personagem deletado em Divertida Mente, e teria sido o principal antagonista do filme e teria crescido a medida que ele se tornasse mais importante.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/0/00/Zbrush_doodle_day_693_gloom_inside_out_update_by_unexpectedtoy-dap4gas.png/revision/latest/scale-to-width-down/258?cb=20170919231254&path-prefix=pt-br",
  },
  {
    name: "Melvin",
    bio: "Melvin é um velociraptor do filme O Bom Dinossauro",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/2e/Pervis.png/revision/latest/scale-to-width-down/258?cb=20190809230717&path-prefix=pt-br",
  },
  {
    name: "Miguel Rivera",
    bio:
      "Miguel Rivera é  um artigo destacado, o que significa que tem sido identificado como um dos melhores artigos produzidos pela comunidade da Disney Wiki. Se você vê uma maneira de como esta página pode ser atualizada ou aperfeiçoada sem comprometer o trabalho anterior, sinta-se livre para contribuir.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Mike Wazowski",
    bio:
      "Mike Wazowski é  um artigo destacado, o que significa que tem sido identificado como um dos melhores artigos produzidos pela comunidade da Disney Wiki. Se você vê uma maneira de como esta página pode ser atualizada ou aperfeiçoada sem comprometer o trabalho anterior, sinta-se livre para contribuir.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Miles Eixodarroda",
    bio:
      "Sir Miles Eixodarroda é o principal antagonista no filme de 2011 da Disney/Pixar, Carros 2. Ele é dublado por Eddie Izzard.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/4b/Miles_Axlerod.png/revision/latest/scale-to-width-down/281?cb=20160213013122&path-prefix=pt-br",
  },
  {
    name: "Mirage (Os Incríveis)",
    bio:
      "Mirage é uma antagonista do filme de 2004 da Disney/Pixar, Os Incríveis.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/f/fb/Mirage.png/revision/latest/scale-to-width-down/258?cb=20170808222153&path-prefix=pt-br",
  },
  {
    name: "Misti Motorkross",
    bio: "Misti Motorkross é uma corredora da Copa Pistão no filme Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/1/10/Sem_t%C3%ADtuloDDDD.png/revision/latest/scale-to-width-down/258?cb=20200515204313&path-prefix=pt-br",
  },
  {
    name: "Molt",
    bio:
      "Molt é um personagem em filme de 1998 da Disney/Pixar, Vida de Inseto. Ele é dublado por Richard Kind no original e Hélio Ribeiro na versão brasileira.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/4e/Molt.png/revision/latest/scale-to-width-down/258?cb=20190615174658&path-prefix=pt-br",
  },
  {
    name: "Mor'du",
    bio:
      "Quando Mor'du era humano, ele já possuía um relacionamento familiar próximo com seu pai e seus 3 irmãos mais novos. Ele estava confiante em sua força, mas confundiu isso com caráter, e assim se tornou extremamente arrogante: isso provou ser uma característica que o levou a lutar com seus entes queridos. Como Mérida, ele deixou seu orgulho controlar suas ações e entrou em conflito com sua família, mas ao contrário de Mérida, ele estava disposto a deixar que o ódio e o desejo o dominassem. Seu desejo de poder o levou a ir o suficiente para iniciar uma guerra violenta e, finalmente, matou seus próprios irmãos a sangue frio.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/9e/Mordu.jpg/revision/latest/scale-to-width-down/258?cb=20150801025248&path-prefix=pt-br",
  },
  {
    name: "Mulher Elástica",
    bio:
      "Mulher Elástica é  um artigo destacado, o que significa que tem sido identificado como um dos melhores artigos produzidos pela comunidade da Disney Wiki. Se você vê uma maneira de como esta página pode ser atualizada ou aperfeiçoada sem comprometer o trabalho anterior, sinta-se livre para contribuir.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Mérida",
    bio:
      "Mérida é  um artigo destacado, o que significa que tem sido identificado como um dos melhores artigos produzidos pela comunidade da Disney Wiki. Se você vê uma maneira de como esta página pode ser atualizada ou aperfeiçoada sem comprometer o trabalho anterior, sinta-se livre para contribuir.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Nash e Ramsey",
    bio:
      "Nash e Ramsey são personagens do filme de 2015 da Disney/Pixar, O Bom Dinossauro. Eles são os jovens T-Rex crianças de Butch. Nash ele dublado por A.J. Buckley, e Ramsey ela dublada por Anna Paquin.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/93/Nash_and_ramsey_the_good_dinosaur.jpg/revision/latest/scale-to-width-down/258?cb=20151122230715&path-prefix=pt-br",
  },
  {
    name: "Natalia Certeza",
    bio: "Natalia Certeza é uma analista estatistica que aparece em Carros 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/f/f4/Sem_t%C3%ADtulo_CC.png/revision/latest/scale-to-width-down/258?cb=20200605010247&path-prefix=pt-br",
  },
  {
    name: "Nemo",
    bio:
      "Nemo é o personagem títular do filme de 2003 da Disney/Pixar, Procurando Nemo e um personagem menor da continuação em 2016. É um personagem jogável em Procurando Nemo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Nojinho",
    bio:
      "Nojinho é uma personagem no filme animado de 2015 da Disney/Pixar, Divertida Mente.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/c1/DISGUST_Fullbody_Render.png/revision/latest/scale-to-width-down/258?cb=20150619201953&path-prefix=pt-br",
  },
  {
    name: "O Corvo",
    bio:
      "O Corvo é um personagem maior no filme de 2012 da Disney/Pixar, Valente. Ele é um animal que pertence a Bruxa.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/7/74/Brave_the_crow.jpg/revision/latest/scale-to-width-down/258?cb=20170425210455&path-prefix=pt-br",
  },
  {
    name: "O Rei",
    bio:
      "O Rei é um personagem de Carros e um personagem Secundário de Carros 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/e9/The_King.jpg/revision/latest/scale-to-width-down/258?cb=20190511183702&path-prefix=pt-br",
  },
  {
    name: "O Sorveteiro",
    bio:
      "O Sorveteiro é um caminhão monstro misturado com caminhão de sorvete que aparece em Carros Toon no episodio Mate Caminão Monstro",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b4/I-screamer.jpg/revision/latest/scale-to-width-down/258?cb=20200219133423&path-prefix=pt-br",
  },
  {
    name: "Olho-Vivo",
    bio: "Olho-Vivo é um binoculo de brinquedo em Toy Story.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/db/OlhoVivo.jpg/revision/latest/scale-to-width-down/258?cb=20181216201618&path-prefix=pt-br",
  },
  {
    name: "Papai Henry",
    bio:
      "Papai Henry é um personagem do filme de 2015 da Disney/Pixar, O Bom Dinossauro. Ele é o pai do Arlo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/e0/Poppa_Render.png/revision/latest/scale-to-width-down/258?cb=20151122224122&path-prefix=pt-br",
  },
  {
    name: "Patinho e Coelhinho",
    bio:
      "Patinho e Coelhinho são uns personagens em Toy Story 4. Eles são dublados por Keegan-Michael Key e Jordan Peele.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/98/Patinho_e_Coelhinho.png/revision/latest/scale-to-width-down/258?cb=20190621032534&path-prefix=pt-br",
  },
  {
    name: "Peach (Procurando Nemo)",
    bio: "Peach é uma estrela-do-mar em Procurando Nemo.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/20/1000px-Peach-FindingNemo3D.jpg/revision/latest/scale-to-width-down/258?cb=20191208042821&path-prefix=pt-br",
  },
  {
    name: "Pepita",
    bio:
      "Pepita é uma Alebrije que aparece do filme de 2017 da Disney/Pixar, Viva: A Vida é uma Festa.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/22/Pepita.png/revision/latest/scale-to-width-down/258?cb=20170913171048&path-prefix=pt-br",
  },
  {
    name: "Pete Fedido",
    bio:
      "Pete Fedido é o verdadeiro principal antagonista do filme de 1999 da Disney/Pixar, Toy Story 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/97/Stinky_Pete_1.png/revision/latest/scale-to-width-down/258?cb=20170809024310&path-prefix=pt-br",
  },
  {
    name: "Ponchy Wipeout",
    bio: "Ponchy Wipeout é um carro de corrida da Copa Pistão em Carros",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/bc/Ponchy_Wipeout.png/revision/latest/scale-to-width-down/220?cb=20190514225732&path-prefix=pt-br",
  },
  {
    name: "Porquinho",
    bio:
      "Porquinho é um dos personagens principais na franquia da Disney/Pixar, Toy Story.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/35/Hamm_1.png/revision/latest/scale-to-width-down/258?cb=20171030200245&path-prefix=pt-br",
  },
  {
    name: "Professor Knight",
    bio:
      "Professor Knight é um personagem no filme animado de 2013 da Disney/Pixar, Universidade Monstros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a7/Profile-_Professor_Knight.png/revision/latest/scale-to-width-down/258?cb=20200327194624&path-prefix=pt-br",
  },
  {
    name: "Professor Zundapp",
    bio: "Professor Zundapp é um antagonista em Carros 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/4d/Profile_-_Professor_Z.png/revision/latest/scale-to-width-down/258?cb=20191213233516&path-prefix=pt-br",
  },
  {
    name: "Rainha Elinor",
    bio: "Uma visão de graça, beleza, sabedoria",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/80/QueenElinor.jpg/revision/latest/scale-to-width-down/258?cb=20150504230149&path-prefix=pt-br",
  },
  {
    name: "Rainha Netuna (Toy Story)",
    bio:
      "Rainha Netuna é uma sereia de brinquedo que aparece em Curtas&nbsp;Toy Story no episodio Um Pequeno Grande Erro",
    avatar_url: "",
  },
  {
    name: "Raiva",
    bio:
      "Raiva é um personagem do filme animado de 2015 da Disney/Pixar, Divertida Mente.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/db/Raivabgremoved.png/revision/latest/scale-to-width-down/258?cb=20200125211140&path-prefix=pt-br",
  },
  {
    name: "Ramone",
    bio:
      "Ramone é um personagem de Carros. Ele sempre muda de cor ao longo da franquia",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/f/f7/Ramone.png/revision/latest/scale-to-width-down/258?cb=20190518155519&path-prefix=pt-br",
  },
  {
    name: "Randall Boggs",
    bio:
      'Randall "Randy" Boggs é um antagonista secundário do filme de 2001 da Disney/Pixar, Monstros S.A. e o antagonista do filme de 2013, Universidade Monstros.',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Rei Fergus",
    bio:
      "Rei Fergus é o tritagonista no filme de animação da Disney/Pixar de 2012, Valente. Ele reside no reino de DunBroch nas Terras Altas da Escócia, juntamente com sua família e sua esposa, a Rainha Elinor. Ele é o pai de sua filha mais velha Princesa Mérida e de seus três filhos trigêmeos jovens Harris, Hubert e Hamish.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/22/KingFurgus-Brave.png/revision/latest/scale-to-width-down/258?cb=20150509014124&path-prefix=pt-br",
  },
  {
    name: "Relâmpago McQueen",
    bio:
      "Relâmpago McQueen é um dos personagens principais na franquia Carros. Sua voz é interpretada por Owen Wilson. Em Carros ele é um corredor novato e seu amigo Mate.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/e1/Sem_t%C3%ADtulo_A.png/revision/latest/scale-to-width-down/258?cb=20200605000547&path-prefix=pt-br",
  },
  {
    name: "Remy",
    bio:
      "Remy é um protagonista no filme de 2007 da Disney/Pixar, Ratatouille.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Rex",
    bio:
      "Rex é um boneco de plástico de um Tiranossauro Rex, e um dos personagens na franquia da Disney/Pixar, Toy Story.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/7/71/Rex_1.png/revision/latest/scale-to-width-down/258?cb=20170120180613&path-prefix=pt-br",
  },
  {
    name: "Riley Andersen",
    bio:
      "Riley Andersen é a tetratagonista de Divertida Mente. Ela é uma garota de 11 anos que ama hockey . Riley é feliz e tem uma vida simples em Minnesota,mas tudo fica diferente depois que ela se muda para San Francisco, localizado na California. ",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/6/60/Riley_Anderson.png/revision/latest/scale-to-width-down/258?cb=20150516235048&path-prefix=pt-br",
  },
  {
    name: "River Scott",
    bio: "River Scott é um carro de corrida aposentado em Carros 3",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/52/River_Scott.png/revision/latest/scale-to-width-down/258?cb=20191213162015&path-prefix=pt-br",
  },
  {
    name: "Rod Torque Redline",
    bio: "Rod Torque Redline era um personagem em Carros 2",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Rod_Redline.png/revision/latest/scale-to-width-down/258?cb=20190814021931&path-prefix=pt-br",
  },
  {
    name: "Ronald (Carros 3)",
    bio: "Ronald é um carro de corrida estágiario da nova geração de Carros 3",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/49/Ronald-0.png/revision/latest/scale-to-width-down/258?cb=20190731192202&path-prefix=pt-br",
  },
  {
    name: "Roz",
    bio:
      "Roz é uma personagem menor do filme de 2001 da Disney/Pixar, Monstros S.A., e sua prequela de 2013, Universidade Monstros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/8b/Roz.jpg/revision/latest/scale-to-width-down/258?cb=20171030184208&path-prefix=pt-br",
  },
  {
    name: "Ruivo",
    bio:
      "Ruivo é um caminhão de bombeiro de Carros durante&nbsp;a franquia Ruivo não fala nada mas as vezes ele chora.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/31/Red.png/revision/latest/scale-to-width-down/258?cb=20190603162719&path-prefix=pt-br",
  },
  {
    name: "Russell",
    bio:
      "Russell é o deuteragonista do filme da Disney/Pixar de 2009, Up - Altas Aventuras. Ele é um escoteiro conhecer Carl Fredricksen e vai para Paraíso das Cachoeiras. Ele é dublado por Jordan Nagai.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/2/27/Russell-up.jpg/revision/latest/scale-to-width-down/258?cb=20150612223442&path-prefix=pt-br",
  },
  {
    name: "Ryan Shields",
    bio: "Ryan Shields é um carro de corrida da Copa Pistão em Carros",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/da/RyanShields.png/revision/latest/scale-to-width-down/258?cb=20190514225914&path-prefix=pt-br",
  },
  {
    name: "Sally Carrera",
    bio:
      'Sally Carrera (mais conhecida como "Sally") é a tritagonista em Carros e personagem em Carros 2. Ela é namorada de Relâmpago McQueen. Ela é dublada por Bonnie Hunt.',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/e1/Sally_Carrera.png/revision/latest/scale-to-width-down/258?cb=20160216212721&path-prefix=pt-br",
  },
  {
    name: "Sargento (Toy Story)",
    bio:
      "Sargento (mais conhecido como Sargento do Exército e Sargento Soldado) é um personagem menor na franquia Toy Story.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/e6/SargeTS3.jpg/revision/latest/scale-to-width-down/258?cb=20171030190444&path-prefix=pt-br",
  },
  {
    name: "Scott Squibbles",
    bio:
      "Scott Sebastião Squibbles, também conhecido como Esguicho, é um dos tritagonistas do filme de 2013 da Disney/Pixar, Universidade Monstros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/40/SquishySquibbles-MU.png/revision/latest/scale-to-width-down/258?cb=20171112201500&path-prefix=pt-br",
  },
  {
    name: "Sid Phillips",
    bio:
      'Sidney "Sid" Phillips é o principal antagonista de Toy Story. Ele é mencionado em Toy Story 2. Ele também sua participação em Toy Story 3. Ele é o único personagem que sabe que os brinquedos estão vivos.',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a7/Sid-toy-story.jpg/revision/latest/scale-to-width-down/258?cb=20170517194255&path-prefix=pt-br",
  },
  {
    name: "Slim",
    bio: "Slim é um bicho-pau que aparece no filme Vida de Inseto.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/47/Slimbugslife.png/revision/latest/scale-to-width-down/258?cb=20191125202441&path-prefix=pt-br",
  },
  {
    name: "Slinky",
    bio:
      " Jim Varney (filmes e vídeo games)  Darryl Kurylo (em Toy Story Racer)  Blake Clark (2010-presente)     Francisco José (dois filmes)  Carlos Gesteira (no terceiro e quarto filme)",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/56/Slinky_dog.png/revision/latest/scale-to-width-down/258?cb=20170831215013&path-prefix=pt-br",
  },
  {
    name: "Smokey",
    bio: "Smokey é um personagem em Carros 3",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b2/Smokey.png/revision/latest/scale-to-width-down/258?cb=20190810012952&path-prefix=pt-br",
  },
  {
    name: "Speedy Comet",
    bio: "Speedy Comet é um carro de corrida da Copa Pistão em Carros 3 ",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/9d/Speedycometartworkv2.png/revision/latest/scale-to-width-down/258?cb=20190901172628&path-prefix=pt-br",
  },
  {
    name: "Spot (O Bom Dinossauro)",
    bio:
      "Spot é um personagem do filme de 2015 da Disney/Pixar, O Bom Dinossauro. Ele é um menino humano como seus pais em risco. Ele conheceu Arlo, um apatossauro que faz a sua amizade, ele o primeiro humano para ser um dinossauro.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/c2/Spot_Render_01.png/revision/latest/scale-to-width-down/258?cb=20151122223245&path-prefix=pt-br",
  },
  {
    name: "Sr. Anderson",
    bio:
      "Sr. Anderson é um personagem maior do filme animado de 2019 da Disney/Pixar, Toy Story 4. Ele é o pai da Bonnie Anderson.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a1/Bonnie%E2%80%99s_Dad.jpg/revision/latest/scale-to-width-down/258?cb=20200222231809&path-prefix=pt-br",
  },
  {
    name: "Sr. Cabeça-de-Batata",
    bio:
      "Sr. Cabeça-de-Batata (mais conhecido como Cabeça-de-Batata) é um dos personagens na franquia de Toy Story. Este personagem é baseado no brinquedo na Playskool de mesmo nome. Ele é dublado por Don Rickles.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b1/Mr-potato-head.jpg/revision/latest/scale-to-width-down/258?cb=20190416142153&path-prefix=pt-br",
  },
  {
    name: "Sr. Espeto",
    bio: "Sr. Espeto é um dos brinquedos da Bonnie em Toy Story 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a3/903.png/revision/latest/scale-to-width-down/258?cb=20191125203101&path-prefix=pt-br",
  },
  {
    name: "Sra. Anderson",
    bio:
      "Sra. Anderson (também conhecido como Mãe da Bonnie) é uma personagem em Toy Story 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/aa/Zbvb.jpg/revision/latest/scale-to-width-down/258?cb=20170421211731&path-prefix=pt-br",
  },
  {
    name: "Sra. Cabeça-de-Batata",
    bio:
      "Sra. Cabeça-de-Batata é um brinquedo que aparece nos dois filmes da Disney/Pixar, Toy Story 2 de 1999 e Toy Story 3 de 2010. Ela é apaixonada do Sr. Cabeça-de-Batata. Ela é dublada por Estelle Harris.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/db/Mrspotatohead1.jpg/revision/latest/scale-to-width-down/258?cb=20151012032119&path-prefix=pt-br",
  },
  {
    name: "Sra. Davis",
    bio:
      "Sra. Davis (também conhecida como Mãe do Andy) é uma personagem maior na franquia de filmes, Toy Story. Ela é a mãe do Andy Davis e Molly Davis.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/c/c7/Char_13236.jpg/revision/latest/scale-to-width-down/258?cb=20170421214853&path-prefix=pt-br",
  },
  {
    name: "Stanley (Carros)",
    bio:
      "Stanley é um personagem em Carros Ele foi o funadador de Radiator Springs",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/0/0e/Living_Stanley_%28Cars%29.jpg/revision/latest/scale-to-width-down/258?cb=20191216043151&path-prefix=pt-br",
  },
  {
    name: "Síndrome",
    bio:
      "Síndrome (nome verdadeiro Bochecha) é um principal antagonista no filme de 2004 da Disney/Pixar Os Incríveis Ele é dublado por Jason Lee. O síndrome é um super vilão do filme Os Incríveis , ele não tem super poderes mais sim utiliza armas inventadas por ele  , o Síndrome é conhecido por inventar máquinas para dominar o mundo ( as máquinas parecem uma aranha ) . ",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b3/Syndrome.png/revision/latest/scale-to-width-down/258?cb=20150508174324&path-prefix=pt-br",
  },
  {
    name: "T-Bone",
    bio:
      "T-Bone é um bife de brinquedo que aparece em Curtas Toy Story no episodio Um Pequeno Grande Erro",
    avatar_url: "",
  },
  {
    name: "Ted",
    bio: "Ted é um pequeno polvo que aparece em Procurando Nemo",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/35/Ted-finding-nemo-0.24.jpg/revision/latest/scale-to-width-down/258?cb=20200308190515&path-prefix=pt-br",
  },
  {
    name: "Tempestade (O Bom Dinossauro)",
    bio:
      "Tempestade é um personagem do filme de 2015 da Disney/Pixar, O Bom Dinossauro. Ele é especie de Pterodáctilo. Ele é dublado por Steve Zahn.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/3a/Thunderclap_1.png/revision/latest/scale-to-width-down/258?cb=20151021223319&path-prefix=pt-br",
  },
  {
    name: "Terri e Terry Perry",
    bio:
      '"Terrifying" Terri e Terry Perry são tritagonistas em Universidade Monstros.',
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/aa/TerriTerryPerry-MU.png/revision/latest/scale-to-width-down/258?cb=20160718001229&path-prefix=pt-br",
  },
  {
    name: "Tex (THX)",
    bio: "Tex é um personagem robô.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/6/61/Tex_-_THX.jpg/revision/latest/scale-to-width-down/250?cb=20180528191352&path-prefix=pt-br",
  },
  {
    name: "Tex Dinoco",
    bio:
      "Tex Dinoco é um personagem em Carros Ele é um bilionario e patrocina a Dinoco.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/9/93/Tex_dinoco.png/revision/latest/scale-to-width-down/258?cb=20190814124907&path-prefix=pt-br",
  },
  {
    name: "Thumper",
    bio: "Thumper é um gafanhoto que aparece em Vida de Inseto.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/e8/ThumperAttacks.jpg/revision/latest/scale-to-width-down/258?cb=20200525231928&path-prefix=pt-br",
  },
  {
    name: "Tio Raia",
    bio:
      "Tio Raia é um raia de azul e branco que aparece no filme Procurando Nemo e sua sequência, Procurando Dory.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/e/e1/Mr._Ray.jpg/revision/latest/scale-to-width-down/258?cb=20171021031048&path-prefix=pt-br",
  },
  {
    name: "Todd (Carros)",
    bio:
      "Todd é um personagem melhor em Carros e Carros 2. Ele é o Carro da Pizza Planet na franquia de Toy Story. em todos os filmes da pixar inclusive em vida de insceto o bom dinossauro e valente e em viva a vida e uma festa de 2017 se de sorte carros 3 mesma coisa toy story 4 de 19 e sempre",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/d/d4/Todd%2C_the_pizza_planet_truck.png/revision/latest/scale-to-width-down/258?cb=20160709005309&path-prefix=pt-br",
  },
  {
    name: "Tristeza",
    bio:
      "Tristeza é  um artigo destacado, o que significa que tem sido identificado como um dos melhores artigos produzidos pela comunidade da Disney Wiki. Se você vê uma maneira de como esta página pode ser atualizada ou aperfeiçoada sem comprometer o trabalho anterior, sinta-se livre para contribuir.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Trixie",
    bio:
      "Trixie é um triceratops azul de plástico que apareceu do filme de 2010 da Disney/Pixar, Toy Story 3.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/36/Toy-story-3-trixie.jpg/revision/latest/scale-to-width-down/258?cb=20161006184811&path-prefix=pt-br",
  },
  {
    name: "Unicórnio Arco-Íris",
    bio:
      "Unicórnio Arco-Íris é uma personagem menor do filme da Disney/Pixar, Divertida Mente.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/8b/Inside-Out-82.png/revision/latest/scale-to-width-down/258?cb=20150724031047&path-prefix=pt-br",
  },
  {
    name: "Violeta Pêra",
    bio:
      "Violeta Pêra é uma dos três tritagonistas do filme de 2004 os Incríveis, da Disney/Pixar. Ela também seus super-poderes como invisível e campos de força esféricos de tamanho e força indeterminados. Ela é dublada por Sarah Vowell",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/bc/I2_-_Violet_3.jpg/revision/latest/scale-to-width-down/258?cb=20181121210714&path-prefix=pt-br",
  },
  {
    name: "Voide",
    bio:
      "Voide é  um artigo destacado, o que significa que tem sido identificado como um dos melhores artigos produzidos pela comunidade da Disney Wiki. Se você vê uma maneira de como esta página pode ser atualizada ou aperfeiçoada sem comprometer o trabalho anterior, sinta-se livre para contribuir.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "WALL-E (personagem)",
    bio:
      "WALL-E (mais conhecido como Waste Allocation Load Lifter - Earth-Class) é um personagem titular e protagonista no filme de 2008 da Disney/Pixar, WALL-E. Ele é dublado por Ben Burtt.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Wee Dingwall",
    bio:
      "Wee Dingwall&nbsp;é um personagem menor em&nbsp;Valente. Ele é filho de Lorde Dingwall, e um dos pretendentes concorrentes para a mão da Mérida em casamento. Ele é dublado por Callum O' Neill no original e Charles Emmanuel na versão brasileira.&nbsp;",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/8/86/Wee.png/revision/latest/scale-to-width-down/201?cb=20150920035947&path-prefix=pt-br",
  },
  {
    name: "Wheezy",
    bio: "Wheezy é um pinguim de brinquedo em Toy Story 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/a8/Wheezy.png/revision/latest/scale-to-width-down/258?cb=20191102235542&path-prefix=pt-br",
  },
  {
    name: "Wilden Lightfoot",
    bio:
      "Wilden Lightfoot é um elfo no filme animado de 2020 da Disney/Pixar, Dois Irmãos: Uma Jornada Fantástica.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/a/ab/Mr.LightfootPic.jpg/revision/latest/scale-to-width-down/258?cb=20200308003737&path-prefix=pt-br",
  },
  {
    name: "Will o Wisps",
    bio:
      "Will o Wisps são os personagens menores do filme animado de 2012 da Disney/Pixar, Valente.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b1/Wisp_full.jpg/revision/latest/scale-to-width-down/250?cb=20161117200756&path-prefix=pt-br",
  },
  {
    name: "Wingo",
    bio: "O Wingo é um antagonista secundario em Carros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/5f/Wingo.png/revision/latest/scale-to-width-down/258?cb=20190511212306&path-prefix=pt-br",
  },
  {
    name: "Winston Deavor",
    bio:
      "Winston Deavor é um personagem maior no filme da Disney/Pixar, Os Incríveis 2.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/7/77/Winston_Deavor.png/revision/latest/scale-to-width-down/258?cb=20180707230237&path-prefix=pt-br",
  },
  {
    name: "Woody",
    bio:
      "Woody é  um artigo destacado, o que significa que tem sido identificado como um dos melhores artigos produzidos pela comunidade da Disney Wiki. Se você vê uma maneira de como esta página pode ser atualizada ou aperfeiçoada sem comprometer o trabalho anterior, sinta-se livre para contribuir.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/5/54/Sorcerer_Mickey_sparkling.png/revision/latest/scale-to-width-down/100?cb=20181120193512&path-prefix=pt-br",
  },
  {
    name: "Xerife (Carros)",
    bio:
      "O Xerife é um personagem de Carros. Ele é uma polícia de Radiator Springs.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/3/3e/Sheriff.png/revision/latest/scale-to-width-down/258?cb=20190518145151&path-prefix=pt-br",
  },
  {
    name: "Yeti (Monstros S.A.)",
    bio:
      "Yeti (mais conhecido como O Abominável Homem das Neves) é um personagem do filme de 2001 da Disney/Pixar, Monstros S.A. e prequela de 2013, Universidade Monstros.",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/b/b6/Yeti_%28Monsters_Inc%29.png/revision/latest/scale-to-width-down/258?cb=20170518213323&path-prefix=pt-br",
  },
  {
    name: "Zezé Pêra",
    bio: "Zezé possui 17 super-poderes que são:",
    avatar_url:
      "https://static.wikia.nocookie.net/disney/images/4/41/I2_-_Jack-Jack.png/revision/latest/scale-to-width-down/258?cb=20180601022955&path-prefix=pt-br",
  },
];

module.exports = charactersArray;
