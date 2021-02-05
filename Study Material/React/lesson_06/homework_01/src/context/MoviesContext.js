import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [movies, setMovies] = useState([
    {
      id: 1,
      episode: 'Episode IV',
      name: 'A New Hope',
      year: 1977,
      description: `The galaxy is in a period of civil war. Rebel spies have stolen plans to the Galactic Empire's Death Star, a moon-sized space station capable of destroying an entire planet. Princess Leia, secretly one of the Rebellion's leaders, has obtained its schematics, but her starship is intercepted by an Imperial Star Destroyer under the command of the ruthless Sith Lord Darth Vader, an agent to the Empire. Before she is captured, Leia hides the plans in the memory of astromech droid R2-D2, who, along with protocol droid C-3PO, flees in an escape pod to the desert planet Tatooine.

      The droids are captured by Jawa traders, who sell them to moisture farmers Owen and Beru Lars and their nephew Luke Skywalker. While cleaning R2-D2, Luke accidentally triggers part of a holographic recording of Leia, in which she requests help from Obi-Wan Kenobi. The only Kenobi whom Luke knows is “Old Ben” Kenobi, an elderly hermit. He asks his uncle if he knows anything, but he curtly drops the subject. The next morning, Luke finds R2-D2 missing, and while searching for him, encounters Old Ben. Ben, who reveals his true name to be Obi-Wan, tells Luke of his days as a Jedi Knight, former peacekeepers of the Galactic Republic who derived their power from an energy field called the Force until they were wiped out by the Galactic Empire. Contrary to what his uncle has told him, Luke learns that his father fought alongside Obi-Wan as a Jedi Knight until Vader, a former pupil of Obi-Wan's, turned to the dark side of the Force and murdered him. Obi-Wan then presents Luke with his father's old weapon, a blue-bladed lightsaber.
      
      R2-D2 plays Leia's message for Obi-Wan, in which she begs him to take the Death Star plans to her home planet of Alderaan and give them to her father for analysis. Obi-Wan invites Luke to accompany him to Alderaan and learn the ways of the Force, but Luke declines, saying his aunt and uncle need him. Returning home, however, he finds Imperial stormtroopers have killed his aunt and uncle and destroyed their farm in their search for the droids, leaving Luke no choice but to accept Obi-Wan's invitation. They travel to a cantina in Mos Eisley, where they hire smuggler Han Solo to transport them. Han is intercepted by Greedo, a bounty hunter working for local mobster Jabba the Hutt, to whom Han owes money; the confrontation ends with Han killing Greedo. Obi-Wan, Luke, R2-D2 and C-3PO flee Tatooine, with Han and his Wookiee co-pilot Chewbacca on their ship the Millennium Falcon.
      
      Death Star commander Grand Moff Tarkin orders the destruction of Alderaan, Leia's home planet, using the station's superlaser as a show of force. The Falcon crew discovers the planet's remains and is captured by the Death Star's tractor beam, which Obi-Wan goes to disable. Luke discovers that Leia is imprisoned on the Death Star and scheduled to be executed, and rescues her with the help of Han and Chewbacca in a swashbuckling series of escapes. His task accomplished, Obi-Wan sees that the others need a distraction to board the Falcon, and sacrifices himself in a lightsaber duel with Darth Vader. They depart the hangar but are caught up by four Imperial TIE starfighters which they fight off. Using a tracking beacon placed on the Falcon, the Imperials follow the rebels to the hidden base on Yavin 4.
      
      Leia's schematics show that the Death Star might be destroyed by firing torpedoes into a two-meter-wide thermal exhaust port that directly leads into its reactor, triggering a chain reaction. Han collects a reward for his role in Leia's rescue, intending to leave and repay Jabba. Luke joins the Rebel squadron in a desperate attack against the approaching Death Star. In the ensuing battle, the Rebels suffer heavy losses in several unsuccessful runs. Vader leads a squadron of TIE fighters and prepares to attack Luke's X-wing, but Han returns and attacks the Imperial fighters, sending Vader spiraling into space. Guided by Obi-Wan's spirit, Luke turns off his targeting computer and uses the Force to guide the torpedoes into the exhaust port. The Death Star explodes just before it can fire on the Rebel base, killing Tarkin and the Imperial troops onboard. In a triumphant ceremony at the base, Leia awards Luke and Han medals for their heroism.`,
      image:
        'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
      ratings: [
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
      ],
      averageRate: '',
    },
    {
      id: 2,
      episode: 'Episode V',
      name: 'The Empire Strikes Back',
      year: 1980,
      description: `Three years after the destruction of the Death Star, the Rebel Alliance, led by Princess Leia, has set up a new base on the ice planet Hoth. The Imperial fleet, led by a merciless Darth Vader, hunts for the new Rebel base by dispatching probe droids across the galaxy. Luke Skywalker is captured by a wampa while investigating one such probe and dragged into the creature's cave, but manages to escape using the Force to retrieve his lightsaber. Before Luke succumbs to hypothermia, the Force spirit of his deceased mentor, Obi-Wan Kenobi, instructs him to go to the swamp planet Dagobah to train under Jedi Master Yoda. Han Solo discovers Luke and manages to keep him alive by placing him inside the body of his dead Tauntaun mount, and the two are rescued by a search party the following morning.

      The probe alerts the Imperial fleet to the Rebels' location. The Empire launches a large-scale attack using AT-AT walkers to capture the base, forcing the Rebels to evacuate. Han and Leia escape with C-3PO and Chewbacca on the Millennium Falcon, but the ship's hyperdrive malfunctions. They hide in an asteroid field, where Han and Leia grow closer amidst the tensions. Several bounty hunters, summoned by Vader, assist in searching for the Falcon. Meanwhile, Luke travels with R2-D2 in his X-wing fighter to Dagobah, where he crash-lands. He meets a diminutive creature who reveals himself to be Yoda; the Jedi master reluctantly accepts Luke as his apprentice after conferring with Obi-Wan's spirit. Luke learns more about the Force from Yoda, who lifts his X-wing out of the swamp using the Force.
      
      After evading the Imperial fleet, Han's group travels to the floating Cloud City on the planet Bespin, which is governed by Han's old friend Lando Calrissian. Bounty hunter Boba Fett tracks the Falcon and, with Vader, forces Lando to hand the group over to the Empire. Vader plans to use the group as bait to lure Luke, intending to capture him and turn him to the dark side of the Force. Luke experiences a premonition of Han and Leia in pain and, against the wishes of Yoda and Obi-Wan, abandons his training to rescue them.
      
      Vader intends to hold Luke in suspended animation by imprisoning him in carbonite, selecting Han to be frozen as an experiment. Han survives the process and is given to Fett, who plans to collect a bounty on him from Jabba the Hutt. Lando, still loyal to Han, frees Leia and Chewbacca, but they are too late to stop Fett from departing with Solo. Under attack from stormtroopers, they fight their way back to the Falcon and flee the city. Meanwhile, Luke arrives and engages Vader in a lightsaber duel that leads them over the city's central air shaft. Vader severs Luke's right hand, disarming him, and tempts him to embrace his anger and join the dark side. Luke claims that Vader killed his father, but Vader reveals that he is Luke's biological father. Disbelieving the truth, Luke drops into the air shaft and is ejected beneath the floating city, where he grabs hold of an antenna. He reaches out telepathically to Leia, who senses him and persuades Lando and Chewie to turn back. After Luke is brought aboard, they are chased by TIE fighters towards Vader on his Star Destroyer and find that the Falcon's hyperdrive has been sabotaged, but R2-D2 reactivates it, allowing them to escape.
      
      Luke rejoins the Rebel fleet and his severed hand is replaced with a robotic prosthesis. Lando and Chewbacca begin their quest to save Han, as the other rebels watch the Falcon depart.`,
      image:
        'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg',
      ratings: [
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
      ],
      averageRate: '',
    },
    {
      id: 3,
      episode: 'Episode VI',
      name: 'Return of the Jedi',
      year: 1983,
      description: `A year after Han Solo's capture, C-3PO and R2-D2 are sent to crime lord Jabba the Hutt's palace on Tatooine in a trade bargain made by Luke Skywalker to rescue Han. Disguised as the bounty hunter Boushh, Princess Leia infiltrates the palace under the pretense of collecting the bounty on Chewbacca and unfreezes Han, but is caught and enslaved. Luke soon arrives to bargain for his friends' release, but Jabba drops him through a trapdoor to be executed by a rancor. After Luke kills it, Jabba sentences him, Han, and Chewbacca to death by being fed to the Sarlacc, a huge, carnivorous plant-like desert beast. Having hidden his new lightsaber inside R2-D2, Luke frees himself and battles Jabba's men, including Boba Fett (who ends up falling into the Sarlacc), while Leia uses her chains to strangle Jabba to death. As the others rendezvous with the Rebel Alliance, Luke returns to Dagobah to complete his Jedi training with Yoda, whom he finds is dying. Yoda confirms that Darth Vader, once known as Anakin Skywalker, is Luke's father, and becomes one with the Force. Obi-Wan Kenobi's Force ghost reveals Leia as Luke's twin sister, and tells him that he must face Vader again to finish his training and defeat the Empire.

      The Alliance learns that the Empire has been constructing a second Death Star under the supervision of the Emperor himself. As the station is protected by an energy shield, Han leads a strike team which includes Luke, Leia and Chewbacca to destroy the shield generator on the forest moon of Endor; doing so will allow the Rebel Fleet to destroy the Death Star. The team uses a stolen Imperial shuttle to arrive undetected, and encounters a tribe of Ewoks, gaining their trust after an initial conflict. Later, Luke tells Leia that she is his sister, Vader is their father, and that he must confront him. Surrendering to Imperial troops, he is brought before Vader, and fails to convince his father to reject the dark side of the Force.
      
      Vader takes Luke to meet the Emperor, who intends to turn him to the dark side, and reveals that the Rebel Fleet and the Endor team are headed into a trap. On Endor, Han's team is captured by Imperial forces, but a counterattack by the Ewoks allows the Rebels to infiltrate the shield generator. Meanwhile, Lando Calrissian in the Millennium Falcon and Admiral Ackbar lead the rebel assault on the second Death Star only to find that its shield is still active, and the Imperial fleet is waiting for them.
      
      The Emperor reveals to Luke that the Death Star is fully operational and orders the firing of its massive superlaser, destroying a Rebel starship. He then tempts Luke to give in to his anger. Luke attacks him, but Vader intervenes and the two engage in another lightsaber duel. Vader senses that Luke has a sister and threatens to turn her to the dark side. Enraged, Luke severs Vader's prosthetic hand. The Emperor entreats Luke to kill Vader and take his place, but Luke refuses, declaring himself a Jedi like his father before him. Furious, the Emperor tortures Luke with Force lightning. Unwilling to let his son die, Vader throws the Emperor down a reactor shaft to his death but is mortally electrocuted in the process. At his father's last request, Luke removes his mask, and the redeemed Anakin Skywalker dies in his son's arms.
      
      After the strike team destroys the shield generator, Lando leads a group of Rebel fighters into the Death Star's core. While the Rebel fleet destroys the Super Star Destroyer Executor, Lando and X-wing fighter pilot Wedge Antilles destroy the Death Star's main reactor, escaping from the station's infrastructure before it explodes. Luke also escapes in a shuttle with Anakin's body. On Endor, Leia reveals to Han that Luke is her brother, and they share a kiss. Luke later cremates his father's body on a pyre before reuniting with his friends. As the Rebels and the galaxy celebrate the Empire's defeat, Luke sees the spirits of Yoda, Obi-Wan, and Anakin watching over him.`,
      image:
        'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg',
      ratings: [
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
      ],
      averageRate: '',
    },
    {
      id: 4,
      episode: 'Episode I',
      name: 'The Phantom Menace',
      year: 1999,
      description: `The Trade Federation upsets order in the Galactic Republic by blockading the planet Naboo in preparation for a full-scale invasion. The Republic's leader, Supreme Chancellor Finis Valorum, dispatches Jedi Master Qui-Gon Jinn and his apprentice, Obi-Wan Kenobi, to negotiate with Trade Federation Viceroy Nute Gunray. Darth Sidious, a Sith Lord and the Trade Federation's secret benefactor, orders the Viceroy to kill the Jedi and begin their invasion with an army of battle droids. The Jedi escape and flee to Naboo. During the invasion, Qui-Gon saves the life of a Gungan outcast, Jar Jar Binks. Indebted to Qui-Gon, Jar Jar leads the Jedi to Otoh Gunga, the Gungans' underwater city. The Jedi fail to persuade the Gungan leader, Boss Nass, to help the planet's surface dwellers, but manage to obtain Jar Jar's guidance and underwater transport to Theed, the capital city of Naboo. After rescuing Queen Padmé Amidala, the group make their escape from Naboo aboard her Royal Starship, intending to reach the Republic capital planet of Coruscant.

      Passing through the Federation blockade, the ship is damaged in the crossfire and its hyperdrive is rendered useless. The group land for repairs on the outlying desert planet of Tatooine, situated beyond the Republic's jurisdiction. Qui-Gon, Jar Jar, astromech droid R2-D2, and Padmé—disguised as one of her handmaidens—visit the settlement of Mos Espa to purchase a new part for their hyperdrive. They encounter a junk dealer, Watto, and his nine-year-old slave, Anakin Skywalker, a gifted pilot and engineer who has built a protocol droid, C-3PO. Qui-Gon senses a strong presence of the Force within Anakin, and is convinced that he is the prophesied "Chosen One," destined to restore balance to the Force. With Watto refusing to accept payment in Republic currency, Qui-Gon wagers both the required hyperdrive part and Anakin's freedom in a podrace. Anakin wins the race and joins the group to be trained as a Jedi, leaving behind his mother, Shmi. En route to their starship, Qui-Gon is attacked by Darth Maul, Sidious' apprentice, who was sent to capture Amidala. After a brief lightsaber duel, Qui-Gon escapes onboard the starship with the others.
      
      Qui-Gon and Obi-Wan escort Padmé to Coruscant so that she can plead her people's case to Valorum and the Galactic Senate. Qui-Gon asks the Jedi Council for permission to train Anakin as a Jedi, but the Council refuses, concerned that Anakin is vulnerable to the dark side of the Force. Undaunted, Qui-Gon vows to take up Anakin as his new apprentice. Meanwhile, Naboo's Senator Palpatine persuades Amidala to call for a vote of no confidence in Valorum to elect a more capable leader and to resolve the crisis. Though she is successful in pushing for the vote, Amidala grows frustrated with the corruption in the Senate and decides to return to Naboo. Qui-Gon and Obi-Wan are ordered by the Jedi Council to accompany the queen and investigate the return of the Sith, whom they had believed to be extinct for more than a millennium.
      
      On Naboo, Padmé reveals herself as the queen before the Gungans and persuades them to join in an alliance against the Trade Federation. Jar Jar is promoted to general and joins his tribe in a battle against the droid army, while Padmé leads the search for Gunray in Theed. During a battle in the hangar, Anakin flees to a starfighter and accidentally triggers its autopilot, traveling to the battle against the Federation droid control ship and inadvertently causing its destruction from within, deactivating the droid army. Meanwhile, Darth Maul infiltrates the Theed Palace and engages Qui-Gon and Obi-Wan in a lightsaber duel, mortally wounding the former before being bisected by Obi-Wan and falling down a shaft. Qui-Gon asks Obi-Wan to train Anakin before dying in his arms.
      
      Following the battle, Gunray is arrested by the Republic and Palpatine is elected Chancellor. Grandmaster Yoda promotes Obi-Wan to the rank of Jedi Knight and reluctantly accepts Anakin as Obi-Wan's apprentice. A funeral is held for Qui-Gon, attended by the other Jedi, who contemplate that there is still one Sith remaining. During a celebratory parade on Naboo, Padmé presents a gift of thanks to Boss Nass and the Gungans to establish peace.`,
      image:
        'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg',
      ratings: [
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
      ],
      averageRate: '',
    },
    {
      id: 5,
      episode: 'Episode II',
      name: 'Attack of the Clones',
      year: 2002,
      description: `The Galactic Republic is threatened by a Separatist movement organized by former Jedi Master Count Dooku. Senator Padmé Amidala comes to Coruscant to vote on a motion to create an army to assist the Jedi against the threat. Narrowly avoiding an assassination attempt upon her arrival, she is placed under the protection of Jedi Master Obi-Wan Kenobi and his apprentice Anakin Skywalker. The pair thwart a second attempt on Padmé's life and subdue the assassin, Zam Wesell, who is killed by her employer, a bounty hunter, before she can reveal his identity. The Jedi Council instructs Obi-Wan to find the bounty hunter, while Anakin is tasked to protect Padmé and escort her back to Naboo, where the two fall in love in spite of the Jedi Code that forbids relationships.

      Obi-Wan's search leads him to the mysterious ocean planet of Kamino, where he discovers an army of clones being produced for the Republic in a deceased Jedi's name, with bounty hunter Jango Fett serving as their genetic template. Obi-Wan deduces Jango to be the bounty hunter he is seeking, and after a brief battle, places a homing beacon on Jango's ship, the Slave I. Obi-Wan then follows Jango and his clone son, Boba, to the planet Geonosis. Meanwhile, Anakin is troubled by visions of his mother, Shmi, in pain and decides to return to his homeworld of Tatooine with Padmé to save her. Watto reveals that he sold Shmi to moisture farmer Cliegg Lars, who then freed and married her. Cliegg tells Anakin that she was abducted by Tusken Raiders weeks earlier and is likely dead. Determined to find his mother, Anakin ventures out and finds her at the Tusken campsite, still barely alive. After she dies in his arms, an enraged Anakin massacres the tribe. He later declares to Padmé that he will find a way to prevent the deaths of those he loves.
      
      On Geonosis, Obi-Wan discovers a Separatist gathering led by Count Dooku, who is developing a droid army with Trade Federation Viceroy Nute Gunray and ordered the attempts on Padmé's life. Obi-Wan transmits his findings to the Jedi Council but is subdued by Separatist droids. Dooku meets Obi-Wan in his cell and explains his role in the Confederacy of Independent Systems' formation, while revealing that he had become a Sith Lord and that the Republic is under the control of his new master, Darth Sidious. He then invites Obi-Wan to join him and, when he refuses, claims that his late master and Dooku's former apprentice Qui-Gon Jinn would have, had he been alive. Meanwhile, Senate Representative Jar Jar Binks proposes a successful vote to grant emergency powers to Chancellor Palpatine, allowing the clone army to be authorized.
      
      Anakin and Padmé head to Geonosis to rescue Obi-Wan, but are captured by Jango. Dooku sentences the trio to death, but they are saved by a battalion of clone troopers led by Yoda, Mace Windu, and other Jedi. Windu beheads Jango during the ensuing battle. Obi-Wan and Anakin intercept Dooku, and they engage in a lightsaber duel. Dooku injures Obi-Wan and severs Anakin's right arm, but Yoda intercepts and defends them. Dooku uses the Force to distract Yoda and escapes to Coruscant, where he delivers the plans of a super-weapon to Sidious. As the Jedi acknowledge the beginning of the Clone Wars, Anakin is fitted with a robotic hand and marries Padmé on Naboo, with C-3PO and R2-D2 as the only witnesses.`,
      image:
        'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg',
      ratings: [
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
      ],
      averageRate: '',
    },
    {
      id: 6,
      episode: 'Episode III',
      name: 'Revenge of the Sith',
      year: 2005,
      description: `Above Coruscant, Obi-Wan Kenobi and Anakin Skywalker lead a mission to rescue the kidnapped Supreme Chancellor Palpatine from the cyborg Separatist commander General Grievous. After infiltrating Grievous' flagship, the Jedi battle Count Dooku, whom Anakin overpowers and decapitates at Palpatine's urging. Grievous escapes the battle-torn ship, which the Jedi crash-land on Coruscant. There, Anakin reunites with his wife, Padmé Amidala, who reveals that she is pregnant. While initially excited, Anakin soon begins to have nightmares about Padmé dying in childbirth.

      Palpatine appoints Anakin to the Jedi Council as his personal representative. The Council, suspicious of Palpatine, allows Anakin as a member, but declines to grant him the rank of Jedi Master and instead instructs him to spy on Palpatine, diminishing Anakin's trust in the Jedi. Palpatine tempts Anakin with his knowledge of the Force, including the power to prevent death. Meanwhile, Obi-Wan travels to Utapau, where he kills Grievous, and Yoda travels to the Wookiee homeworld of Kashyyyk to defend it from a Separatist invasion. When Palpatine reveals that he knows the ways of the dark side of the Force and says he has the power to save Padmé's life, Anakin deduces that he is the Sith lord behind the war and reports Palpatine's treachery to Mace Windu, who confronts and subdues him. Desperate to save Padmé's life, Anakin disarms Windu as he is about to kill him, allowing Palpatine to send Windu falling to his death. Anakin pledges himself to the Sith, and Palpatine knights him Darth Vader.
      
      Palpatine then issues Order 66, which commands the clone troopers to kill their commanding Jedi officers, thus sending the Jedi Order into near-extinction. Meanwhile, Vader and a battalion of clone troopers kill the remaining Jedi in the Jedi Temple, after which Vader travels to the volcanic planet Mustafar to assassinate the Separatist leaders. Palpatine declares himself Emperor before the Galactic Senate, transforming the Republic into the Galactic Empire, and denounces the Jedi as traitors. Having survived the chaos, Obi-Wan and Yoda return to Coruscant and learn of Anakin's turn to the dark side. Yoda orders Obi-Wan to confront Vader while he faces Palpatine.
      
      When Padmé learns of Anakin's treachery, she travels to Mustafar – with Obi-Wan stowing away on her ship – and implores Vader to abandon the dark side, but he refuses. Sensing Obi-Wan's presence, and thinking that they are conspiring to kill him, Vader angrily uses the Force to strangle Padmé to unconsciousness. Obi-Wan then engages Vader in a lightsaber duel that ends with Obi-Wan severing Vader's legs and left arm, leaving him at the bank of a lava flow. Obi-Wan picks up Vader's lightsaber, watches in horror as flames consume the fallen Jedi, and leaves him for dead.
      
      On Coruscant, Yoda battles Palpatine until their duel reaches a stalemate. Yoda then flees with Senator Bail Organa and regroups with Obi-Wan and Padmé on the planetoid Polis Massa. There, Padmé gives birth to twins, whom she names Luke and Leia, and dies soon after, having lost her will to live. On Mustafar, Palpatine retrieves a barely alive Vader and takes him to Coruscant, where his mutilated body is treated and covered in a black armored suit. When Vader asks if Padmé is safe, Palpatine says that Vader killed her out of anger, devastating him.
      
      Obi-Wan and Yoda plan to conceal the twins from the Sith and go into exile until the time is right to challenge the Empire. As Padmé's funeral takes place on her homeworld of Naboo, Palpatine and Vader supervise the construction of the Death Star. Bail takes Leia to his homeworld of Alderaan, where he and his wife adopt her, while Obi-Wan delivers Luke to his step-uncle and aunt, Owen and Beru Lars, on Tatooine before going into exile to watch over the boy.`,
      image:
        'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg',
      ratings: [
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
      ],
      averageRate: '',
    },
    {
      id: 7,
      episode: 'Episode VII',
      name: 'The Force Awakens',
      year: 2015,
      description: `Thirty years after the Galactic Civil War, the First Order has risen from the fallen Galactic Empire and seeks to eliminate the New Republic. The Resistance, backed by the Republic and led by General Leia Organa, opposes the First Order. Leia searches for her brother, Luke Skywalker, who has gone missing.

      On the desert planet Jakku, Resistance pilot Poe Dameron receives a map to Luke's location from Lor San Tekka. Stormtroopers commanded by Kylo Ren raid the village and capture Poe, while Kylo kills San Tekka. Poe's droid, BB-8, escapes with the map and encounters a scavenger named Rey. Kylo tortures Poe using the Force and learns of BB-8. Stormtrooper FN-2187, disillusioned by the First Order, frees Poe, and they escape in a stolen TIE fighter. Upon learning that FN-2187 has no other name, Poe gives him the name "Finn". As they head to Jakku to retrieve BB-8, they are shot down by a First Order Star Destroyer and crash-land. Finn survives and assumes that Poe died in the crash. He encounters Rey and BB-8, but the First Order tracks them and launches an airstrike. Rey, Finn, and BB-8 steal the Millennium Falcon and escape the planet.
      
      The Falcon is discovered and boarded by Han Solo and Chewbacca. Gangs seeking to settle debts with Han attack, but the group escape in the Falcon. At the First Order's Starkiller Base, a planet converted into a superweapon, Supreme Leader Snoke allows General Hux to use the weapon for the first time. Snoke questions Kylo's ability to deal with emotions relating to his father, Han Solo, who Kylo states means nothing to him.
      
      Aboard the Falcon, Han determines that BB-8's map is incomplete. He then explains that Luke attempted to rebuild the Jedi Order but exiled himself when an apprentice turned to the dark side, destroyed the temple, and slaughtered the other apprentices. The crew travels to the planet Takodana and meets with cantina owner Maz Kanata, who offers assistance getting BB-8 to the Resistance. Rey is drawn by the Force to a secluded vault, where she finds the lightsaber once belonging to Luke and his father, Anakin Skywalker. She experiences disturbing visions and flees into the woods, confused and terrified. Maz gives Finn the lightsaber for safekeeping.
      
      Starkiller Base destroys the New Republic and its fleet. The First Order attacks Takodana in search of BB-8. Han, Chewbacca, and Finn are saved by Resistance X-wing fighters led by Poe, who survived the crash. Leia arrives at Takodana with C-3PO and reunites with Han. Meanwhile, Kylo captures Rey and takes her to Starkiller Base, but she resists his mind-reading attempts. Snoke orders Kylo to bring Rey to him. Discovering she can use the Force, Rey escapes using a Jedi mind trick on a guard.
      
      At the Resistance base on D'Qar, BB-8 finds R2-D2, who had been inactive since Luke's disappearance. As Starkiller Base prepares to fire once more, the Resistance devises a plan to destroy it by attacking its thermal oscillator. Using the Falcon, Han, Chewbacca, and Finn infiltrate the facility, find Rey, and plant explosives. Han confronts Kylo and implores him to abandon the dark side. Kylo seems to consider this, but ultimately refuses and kills his father. Devastated, Chewbacca shoots Kylo and sets off the explosives, allowing Poe to attack and destroy the base's thermal oscillator.
      
      The injured Kylo pursues Finn and Rey into the woods. Finn fights Kylo with the lightsaber to protect Rey before Kylo knocks him unconscious. Rey takes the lightsaber and channels the Force to defeat Kylo in a duel; they are then separated by a fissure as the planet's surface begins to splinter. Snoke orders Hux to evacuate and bring Kylo to him to complete his training. Chewbacca rescues Rey and the unconscious Finn, and they escape aboard the Falcon. As the Resistance forces flee, Starkiller Base implodes. On D'Qar, Leia, Rey, and Chewbacca mourn Han's death. R2-D2 awakens and reveals the rest of the map, which Rey uses to find the oceanic planet Ahch-To in the Falcon.
      
      On Ahch-To, Rey finds Luke atop a cliff on a remote island. Without a word, she presents him with his father's lightsaber.`,
      image:
        'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg',
      ratings: [
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
      ],
      averageRate: '',
    },
    {
      id: 8,
      episode: 'Episode VIII',
      name: 'The Last Jedi',
      year: 2017,
      description: `Shortly after the destruction of Starkiller Base, General Leia Organa leads the evacuation of Resistance forces when a First Order fleet arrives. Against Leia's orders, Poe Dameron leads a costly counterattack that destroys a First Order dreadnought. The remaining Resistance escapes into hyperspace, but the First Order uses a device to track them, and attacks again. Kylo Ren hesitates to fire on the lead Resistance ship after sensing his mother Leia's presence on board, but his wingmen destroy the bridge, killing most of the Resistance's leaders. Leia is dragged into space, but survives by using the Force. While Leia recovers, Vice Admiral Holdo assumes command of the Resistance. Running low on fuel, the remaining fleet is pursued by the First Order.

      On Ahch-To, Rey attempts to recruit Luke Skywalker to the Resistance. Under self-imposed exile, Luke refuses to help and says that the Jedi should end. After encouragement from R2-D2, he agrees to give Rey three lessons in the ways of the Force. Rey and Kylo begin communicating through the Force, which puzzles them both. Kylo tells Rey that Luke feared his power; Luke confesses that he momentarily contemplated killing Kylo upon sensing that Snoke was corrupting him, which prompted Kylo to destroy Luke's new Jedi Order. Convinced that Kylo can be redeemed, Rey leaves Ahch-To. Luke prepares to burn the Jedi library, but hesitates. The spirit of Luke's master Yoda appears and destroys the library by summoning a bolt of lightning. He encourages Luke to learn from his failure.
      
      Meanwhile, Poe entrusts Finn, mechanic Rose, and BB-8 with a secret mission to deactivate the First Order's tracking device. Maz Kanata directs them to the casino town of Canto Bight, where they meet the hacker DJ. Pursued by the local security, they escape the city with the help of stablehand children and racing animals they set free. Finn, Rose, and DJ infiltrate Snoke's flagship, but are captured by Captain Phasma. Kylo brings Rey to Snoke, who reveals that he connected their minds to discover Luke's whereabouts.
      
      Holdo plans to evacuate the remaining members of the Resistance using small transport vessels. Believing her plan to be cowardly and futile, Poe leads a mutiny. Leia recovers and stuns Poe with a blaster, allowing the evacuation to proceed. Holdo remains aboard the ship as a decoy to mislead Snoke's fleet as the others flee to an abandoned base on Crait. DJ buys his freedom by revealing the Resistance's plan to General Hux, and the First Order fleet begins firing on the evacuation transports, destroying many.
      
      Ordered to kill Rey, Kylo instead kills Snoke and defeats his Praetorian Guard with her help. Rey hopes that Kylo has abandoned the dark side, but he instead asks her to rule the galaxy with him. Refusing, she battles him for control of Luke’s lightsaber, bisecting the weapon. Holdo sacrifices herself by slicing through Snoke's flagship at lightspeed, crippling the First Order fleet. Rey escapes the destruction while Kylo declares himself Supreme Leader. BB-8 frees Finn and Rose; they defeat Phasma and join the survivors on Crait. When the First Order arrives, Poe, Finn, and Rose attack with obsolete speeders. Rey and Chewbacca draw TIE fighters away in the Millennium Falcon, while Rose stops Finn from sacrificing himself. The First Order penetrates the Resistance fortress using a siege cannon.
      
      Luke appears and confronts the First Order, allowing the surviving Resistance to escape. Kylo orders the First Order's forces to fire on Luke, but they fail to harm him. He then engages Luke in a lightsaber duel; upon striking Luke, Kylo realizes that Luke is not physically present, but projecting his image through the Force. Rey helps the remaining Resistance escape on the Falcon. An exhausted Luke dies peacefully on Ahch-To, becoming one with the Force. Rey and Leia sense his death, and Leia tells Rey that the Resistance can rise again.
      
      At Canto Bight, the stablehands recount the story of Luke Skywalker; afterward, one of them moves a broom with the Force and gazes into space.`,
      image:
        'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg',
      ratings: [
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
      ],
      averageRate: '',
    },
    {
      id: 9,
      episode: 'Episode IX',
      name: 'The Rise of Skywalker',
      year: 2019,
      description: `Following a threat of revenge by the revived Emperor Palpatine, Kylo Ren obtains a Sith Wayfinder, leading him to the uncharted planet Exegol. There, he finds Palpatine, who reveals that he created Snoke as a puppet to control the First Order and lure Kylo to the dark side. Palpatine unveils the Final Order—a secret armada of Star Destroyers—and tells Kylo to find and kill Rey, who is continuing her Jedi training under Resistance leader Leia Organa. Finn and Poe Dameron deliver intelligence from a spy that Palpatine is on Exegol; Rey has learned from Luke Skywalker's notes that a Sith Wayfinder can lead them there. Rey, Finn, Poe, Chewbacca, BB-8, and C-3PO depart in the Millennium Falcon to Pasaana, where a clue to a Wayfinder is hidden.

      Kylo initiates a Force bond with Rey to discover her location; he travels to Pasaana with his warrior subordinates, the Knights of Ren. With the help of Lando Calrissian, Rey and her friends find the clue—a dagger inscribed with Sith text, which C-3PO's programming forbids him from interpreting—and the remains of a Jedi hunter named Ochi and his ship. Sensing that Kylo is nearby, Rey goes to confront him. The First Order captures the Falcon, Chewbacca, and the dagger; attempting to save Chewbacca, Rey accidentally destroys a First Order transport with Force lightning. Believing Chewbacca to be dead, the group escapes on Ochi's ship.
      
      The group travels to Kijimi, where a droidsmith extracts the Sith text from C-3PO's memory, revealing coordinates to a Wayfinder. Rey senses Chewbacca is alive, and the group mounts a rescue mission to Kylo's Star Destroyer. Rey recovers the dagger and has visions of Ochi killing her parents with it. Kylo informs her that she is Palpatine's granddaughter; the Sith Lord had ordered Ochi to recover Rey as a child, but her parents hid her on Jakku to protect her. General Hux saves Poe, Finn, and Chewbacca from execution, revealing himself as the spy. He permits the group to escape on the Falcon, but is discovered and killed by Allegiant General Pryde. The group flies the Falcon to the Wayfinder's coordinates on a moon in the Endor system.
      
      Rey retrieves the Wayfinder from the remains of the second Death Star, but she is met by Kylo, who destroys the Wayfinder and duels her. In a dying act, Leia calls to Kylo through the Force, distracting him as Rey impales him. Sensing Leia's death, Rey heals Kylo and takes his ship to exile herself on Ahch-To. There, Luke's Force spirit encourages Rey to face Palpatine and gives her Leia's lightsaber. Rey leaves for Exegol in Luke's X-wing fighter, using the Wayfinder from Kylo's ship. Meanwhile, Kylo converses with a memory of his father, Han Solo; he throws away his lightsaber and reclaims his identity as Ben Solo. Sensing Leia's death and Ben's redemption, Palpatine sends one of his superlaser-equipped Star Destroyers to destroy Kijimi as a show of force. The Resistance, led by Poe and Finn, prepare to attack Palpatine's armada.
      
      Rey transmits her coordinates to R2-D2, allowing the Resistance to follow her to Exegol. There, she confronts Palpatine; he demands that she kill him for his spirit to pass into her. Lando brings reinforcements from across the galaxy to join the battle. Ben overpowers the Knights of Ren and joins Rey, but Palpatine drains their power to rejuvenate himself. He attacks the Resistance fleet with Force lightning and incapacitates Ben. Weakened, Rey hears the voices of past Jedi, who lend her their strength. Palpatine attacks her with lightning, but Rey deflects it using Luke and Leia's lightsabers, killing Palpatine and herself. Ben uses the Force to revive her at the cost of his own life; Rey kisses Ben before he dies. The Resistance defeats Palpatine's armada, while people across the galaxy rise up against the First Order. The Resistance returns to their base to celebrate.
      
      After the celebration, Rey visits Luke's abandoned childhood home on Tatooine and buries his and Leia's lightsabers, having built her own. A passerby asks her name; as the spirits of Luke and Leia watch, she replies, "Rey Skywalker."`,
      image:
        'https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg',
      ratings: [
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
        random(1, 5),
      ],
      averageRate: '',
    },
  ]);

  // this side effect keeps the average rating updated
  // in every movie provided by context.
  // called upon load/mount
  useEffect(() => {
    let moviesArray = [...movies];
    moviesArray.forEach((movie) => {
      let averageRate = 0;
      movie.ratings.forEach((rate) => {
        averageRate += rate;
      });
      averageRate /= movie.ratings.length;
      movie.averageRate = averageRate.toFixed(1);
    });

    setMovies(moviesArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      console.log('context updated...');
    };
  }, [movies]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
