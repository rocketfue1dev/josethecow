const Discord = require('discord.js');
const client = new Discord.Client();
// Jose The Cow - Version 1.2 - Semi-Major Patch Release
// This is the message sent to the Console when the Bot starts up.
client.once('ready', () => {
	console.log('Ready! J O S E is now flying into the Discord Farmlands!');
});
client.on('message', message => {
	if (message.content === 'hey jose') {
		message.channel.send('H E L O there. I am J O S E .  M O O O .');
	} else if (message.content === `where is jose`) {
		message.channel.send('Never fear. J O S E is here.');
	} else if (message.content === `how is jose`) {
		message.channel.send('J O S E is happy. He is happy that you care for him. Thank you, J O S E is doing well.');
	} else if (message.content === `hi jose`) {
		message.channel.send('H I . You smell like G R A S S . Where is my G R A S S ?');
	} else if (message.content === `jose i wanna talk in a vc`) {
		message.channel.send('I will let you know if I am available to talk soon.');
	} else if (message.content === `jcow`) {
		message.channel.send('https://media.discordapp.net/attachments/793596144437297152/797618193807573013/OIP.png H E L O . I am C O W .');
	} else if (message.content === 'jhelp') {
		const embed = new Discord.MessageEmbed()
		.setColor('#0b6623')
		.setTitle('Here is some H E L P for you!')
		.setDescription('Here are some cool commands: Commands: **order a Mr. Beast Burger** - **order mcjg** - **jhelp** - **jcow** - **jbeg** - **jinvite** - **jgalaxia** - **jrocketfue1** - Conversations: **what pc does jose have** - **does jose play minecraft** - **where in the world is jose** - **did dream cheat on his speedrun** - **are these the droids i am looking for** - **hey jose** - **where is jose** - **how is jose** - **hi jose** - **jose i wanna talk in a vc** - **i want some grass** - Also, nice profile picture you have there. It smells like G R A S S .')
		.setThumbnail((message.author.displayAvatarURL()))
    .setFooter(
      `I'm glad I could help, ${message.author.tag}! Now, I have to go get some G R A S S ...`,
      message.author.displayAvatarURL({ dynamic: true })
    )
		message.channel.send(embed);
	} else if (message.content === `i want some grass`) {
		message.channel.send('Here. Have some grass. https://bit.ly/3stt45l');
	} else if (message.content === `jbeg`) {
		message.channel.send('Sorry. No G R A S S B U X for you. Big sad.');
	} else if (message.content === `jinvite`) {
		message.channel.send('https://discord.com/api/oauth2/authorize?client_id=797279648911327247&permissions=8&scope=bot I am glad you enjoy J O S E ! J O S E hopes that he will see you in another server!');
	} else if (message.content === `jgalaxia`) {
		message.channel.send('Galaxia was the very first server that hosted J O S E . Here is the invite! https://discord.gg/tRmkmPuUbR');
	} else if (message.content === `jrocketfue1`) {
		message.channel.send('Here is the RocketFue1 YouTube Channel: https://bit.ly/RocketFue1 . Thank you so much! Please subscribe, as J O S E is subscribed too! This would be greatly appreciated!')
	} else if (message.content === `order a Mr. Beast Burger`) {
		message.channel.send('A Mr. Beast Burger, you say? Well, those are one of the only burger restaurants that I allow, as long as you only select one thing from the menu. Okay then, to order, type in and send either `see Beast Style` to see what it has, `see Chandler Style` to see what it has, `see Chris Style`, to see what it has, or `see Karl Grilled Cheese`, to see what it has. If you would like to see what the Crispy Chicken Tender Sandwich has, type in and send `see CCTS`. To see what the Nashville Hot Chicken Tender Sandwich has, type in and send `see NHCTS` to see what it has. Want some fries! Sure thing! Type in and send `see Beast Style Fries` to see what it has, and type in `see SCFries` to see what the Seasoned Crinkle Fries has. To order a drink, type in and send `order a beverage`. Enjoy your meal!')
	} else if (message.content === `see Beast Style`) {
		message.channel.send('The Beast Style burger has smashed crispy beef patties with house seasoning, sharp American cheese, pickles, diced white onion, mayo, ketchup, and brown mustard on a soft roll. To select this Burger, type in and send `order Beast Style`.')
	} else if (message.content === `see Chandler Style`) {
		message.channel.send('The Chandler Style burger has two smashed crispy beef patties with house seasoning, served plain with American cheese on a bun. To order this Burger, type in and send `order Chandler Style`.')
	} else if (message.content === `see Chris Style`) {
		message.channel.send('The Chris Style burger has two smashed crispy beef patties with house seasoning, sharp American cheese, bacon, topped with crinkle fries. To order this Burger, type in and send `order Chris Style`.')
	} else if (message.content === `see Karl Grilled Cheese`) {
		message.channel.send('The Karl Grilled Cheese has 3 slices of American cheese griddled crisp on an inverted bun. To order this sandwich, type in and send `order Karl Grilled Cheese`.')
	} else if (message.content === `order Beast Style`) {
		message.channel.send('You ordered a **Beast Style**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/798698069528018985/Beast_Style_Burger.png?width=559&height=559 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `order Chandler Style`) {
		message.channel.send('You ordered a **Chandler Style**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/798698103174987836/Chandler_Style_Burger.png?width=559&height=559 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `order Chris Style`) {
		message.channel.send('You ordered a **Chris Style**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/798698147718234152/Chris_Style_Burger.png?width=559&height=559 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `order Karl Grilled Cheese`) {
		message.channel.send('You ordered a **Karl Grilled Cheese**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/798698032500703272/Karl_Grilled_Cheese.png?width=559&height=559 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `order a mr. beast burger`) {
		message.channel.send('A Mr. Beast Burger, you say? Well, those are one of the only burger restaurants that I allow, as long as you only select one thing from the menu. Okay then, to order, type in and send either `see Beast Style` to see what it has, `see Chandler Style` to see what it has, `see Chris Style`, to see what it has, or `see Karl Grilled Cheese`, to see what it has. If you would like to see what the Crispy Chicken Tender Sandwich has, type in and send `see CCTS`. To see what the Nashville Hot Chicken Tender Sandwich has, type in and send `see NHCTS` to see what it has. Want some fries! Sure thing! Type in and send `see Beast Style Fries` to see what it has, and type in `see SCFries` to see what the Seasoned Crinkle Fries has. To order a drink, type in and send `order a beverage`. Enjoy your meal!')
	} else if (message.content === `see beast style`) {
		message.channel.send('The Beast Style burger has smashed crispy beef patties with house seasoning, sharp American cheese, pickles, diced white onion, mayo, ketchup, and brown mustard on a soft roll. To select this Burger, type in and send `order Beast Style`.')
	} else if (message.content === `see chandler style`) {
		message.channel.send('The Chandler Style burger has two smashed crispy beef patties with house seasoning, served plain with American cheese on a bun. To order this Burger, type in and send `order Chandler Style`.')
	} else if (message.content === `see chris style`) {
		message.channel.send('The Chris Style burger has two smashed crispy beef patties with house seasoning, sharp American cheese, bacon, topped with crinkle fries. To order this Burger, type in and send `order Chris Style`.')
	} else if (message.content === `see karl grilled cheese`) {
		message.channel.send('The Karl Grilled Cheese has 3 slices of American cheese griddled crisp on an inverted bun. To order this sandwich, type in and send `order Karl Grilled Cheese`.')
	} else if (message.content === `order beast style`) {
		message.channel.send('You ordered a **Beast Style**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/798698069528018985/Beast_Style_Burger.png?width=559&height=559 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `order chandler style`) {
		message.channel.send('You ordered a **Chandler Style**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/798698103174987836/Chandler_Style_Burger.png?width=559&height=559 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `order chris style`) {
		message.channel.send('You ordered a **Chris Style**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/798698147718234152/Chris_Style_Burger.png?width=559&height=559 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `order karl grilled cheese`) {
		message.channel.send('You ordered a **Karl Grilled Cheese**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/798698032500703272/Karl_Grilled_Cheese.png?width=559&height=559 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `did dream cheat on his speedrun`) {
		message.channel.send('Well, according to **@JoseVerifiesDreamSpeedruns**, the chance of Dream cheating the speedrun, is 1 in a gazillion million billion trillion. This was calculated by someone that I hired, named Pablo The Pig. Pablo was able to retrieve the world seed, coordinates, and the version number of the world save, to find out if he cheated or not. After weeks of no sleep, he found this number out. So, because of the fact that Darth Plagueis the Wise had a tragedy, and the PS5 was created by Sony, the chances of Dream cheating on this speedrun is 1 in a gazillion million billion trillion. But what about that 1 chance in a gazillion million billion trillion? Well, *obviously*, since the number 1 is a number that is nothing compared to a gazillion million billion trillion, Dream, did not cheat in that speedrun, it does not matter what you think, because the number 1 is SO LITTLE, it means nothing to us, and so clearly, Dream did not cheat. Yeah, no matter how much proof you find, he did not cheat.                                                                                                           *obviously*')
	} else if (message.content === `are these the droids i am looking for`) {
		message.channel.send('Okay, so let’s say hypothetically, these weren’t the droids you’re looking for. You see, the droids you are looking for are free thinking informed conservatives. Now, if you were to assume that these droids are the droids you’re looking for because they are a protocol droid and an astromech, you would assume that all astromech droids have the death star plans. So if this were true, these aren’t the droids you’re looking for.')
	} else if (message.content === `where in the world is jose`) {
		message.channel.send('Well, technically, I am in a farm, but not just any farm, but THE FARM. This farm is awesome! It has a multi-screen setup, so that I can control all of the Discord servers I am in, speaking of, if you want to include me in one of YOUR Discord servers, do `jinvite`! Thanks! Anyways, I have a great farm. Oh wait, you were asking where I am. Well, I live in a farm in Colorado.')
	} else if (message.content === `does jose play minecraft`) {
		message.channel.send('Yep! Most of the time, you can find me in the End trying to defeat the Ender Dragon, but if I am not there, I am playing Bed Wars, a lot of the time.')
	} else if (message.content === `what pc does jose have`) {
		message.channel.send('J O S E has an RTX 3090 PC, with an AMD Threadripper CPU, 4TB of storage, a bunch of RAM, and other cool specs. It is a signature PC that I made, called the JOSE21.')
	} else if (message.content === `see CCTS`) {
		message.channel.send('The Crispy Chicken Tender Sandwich has mayo, shredded lettuce, and pickles. To order this sandwich, type in `order CCTS`.')
	} else if (message.content === `order CCTS`) {
		message.channel.send('You ordered a **Crispy Chicken Tender Sandwich**! Here it is! Enjoy! https://media.discordapp.net/attachments/795744277367750667/799319910438273114/Crispy_Sandwich.png?width=794&height=794 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `see ccts`) {
		message.channel.send('The Crispy Chicken Tender Sandwich has mayo, shredded lettuce, and pickles. To order this sandwich, type in `order CCTS`.')
	} else if (message.content === `order ccts`) {
		message.channel.send('You ordered a **Crispy Chicken Tender Sandwich**! Here it is! Enjoy! https://media.discordapp.net/attachments/795744277367750667/799319910438273114/Crispy_Sandwich.png?width=794&height=794 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `see NHCTS`) {
		message.channel.send('The Nashville Hot Chicken Tender Sandwich has mayo, ketchup, shredded lettuce and pickles. To order this sandwich, type in `order NHCTS`.')
	} else if (message.content === `order NHCTS`) {
		message.channel.send('You ordered a **Nashville Hot Chicken Tender Sandwich**! Here it is! Enjoy! https://media.discordapp.net/attachments/795744277367750667/799319913599991868/Nashville_Sandwich.png?width=794&height=794 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `see nhcts`) {
		message.channel.send('The Nashville Hot Chicken Tender Sandwich has mayo, ketchup, shredded lettuce and pickles. To order this sandwich, type in `order NHCTS`.')
	} else if (message.content === `order nhcts`) {
		message.channel.send('You ordered a **Nashville Hot Chicken Tender Sandwich**! Here it is! Enjoy! https://media.discordapp.net/attachments/795744277367750667/799319913599991868/Nashville_Sandwich.png?width=794&height=794 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `see Beast Style Fries`) {
		message.channel.send('The Beast Style Fries are loaded with caramelized onions, American cheese, pickles, mayo, ketchup and mustard. To order this, type in `order Beast Style Fries`.')
	} else if (message.content === `order Beast Style Fries`) {
		message.channel.send('You ordered the **Beast Style Fries**! Here it is! Enjoy! https://media.discordapp.net/attachments/795744277367750667/799319902480760852/Beast_Style_Fries.png?width=794&height=794 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `see beast style fries`) {
		message.channel.send('The Beast Style Fries are loaded with caramelized onions, American cheese, pickles, mayo, ketchup and mustard. To order this, type in `order Beast Style Fries`.')
	} else if (message.content === `order beast style fries`) {
		message.channel.send('You ordered the **Beast Style Fries**! Here it is! Enjoy! https://media.discordapp.net/attachments/795744277367750667/799319902480760852/Beast_Style_Fries.png?width=794&height=794 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `see SCFries`) {
		message.channel.send('The Seasoned Crinkle Fries are seasoned with spicy red pepper, garlic, paprika, sugar, and a hint of lime. To order this, type in `order SCFries`.')
	} else if (message.content === `order SCFries`) {
		message.channel.send('You ordered the **Seasoned Crinkle Fries**! Here it is! Enjoy! https://media.discordapp.net/attachments/795744277367750667/799319905232224306/Crinkle_Fries.png?width=794&height=794 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `see scfries`) {
		message.channel.send('The Seasoned Crinkle Fries are seasoned with spicy red pepper, garlic, paprika, sugar, and a hint of lime. To order this, type in `order SCFries`.')
	} else if (message.content === `order scfries`) {
		message.channel.send('You ordered the **Seasoned Crinkle Fries**! Here it is! Enjoy! https://media.discordapp.net/attachments/795744277367750667/799319905232224306/Crinkle_Fries.png?width=794&height=794 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `order a beverage`) {
		message.channel.send('To order a soda, type in and send `order a soda`. To order a water, type in and send `order a water`.')
	} else if (message.content === `order a soda`) {
		message.channel.send('You ordered a **Soda**! Here it is! Enjoy! https://media.discordapp.net/attachments/795744277367750667/799319914158620692/Soda.png?width=794&height=794 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `order a water`) {
		message.channel.send('You ordered a **Water**! Here it is! Enjoy! https://media.discordapp.net/attachments/795744277367750667/799319917269745684/Water.png?width=794&height=794 **Thanks for choosing Mr. Beast Burger!**')
	} else if (message.content === `order mcjg`) {
		message.channel.send('https://bit.ly/2MXBi5u You are hungry? Well, hello! Here is the MCJG Menu! To order the One Hand Hamburger, type in and send `order OHB`. To order Dark Tacos, type in and send `order dark tacos`. To order Cronio Crossiant, type in and send `order cc`. To order Daymegalodon Burrito, type in and send `order db`. To order the Spinel Sandwich, type in and send `order ss`. To order The Sur Sandwich, type in and send `order ssa`. To order The Disrupt0r Drumsticks, type in and send `order dd`. To order The DragonEye Chicken Parm, type in and send `order dcp`. There are more meals that are not shown on the menu. To see page 2 of the menu, type in and send `jpage 2`. To order The Crimsunn Cheese Croissant, type in and send `order ccr`. To order The Alex Apple Pie, type in and send `order aap`. Enjoy your meal!')
	} else if (message.content === `jpage 2`) {
		message.channel.send('https://bit.ly/39wbViN Here is page 2 of the MCJG Menu! To order The Crimsunn Cheese Crossiant, type in and send `order ccr`. To order The Alex Apple Pie, type in and send `order aap`. To order the Jacob Pizza, type in and send `order jp`. To order the Jordan Jelly, type in and send `order jj`. To order the Shania Soup, type in and send `order shso`. Enjoy!')
	} else if (message.content === `order OHB`) {
		message.channel.send('You ordered the **One Hand Hamburger**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467500173656064/one_hand_burger.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order ohb`) {
		message.channel.send('You ordered the **One Hand Hamburger**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467500173656064/one_hand_burger.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order Dark Tacos`) {
		message.channel.send('You ordered the **Dark Tacos**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467428202676234/DarkTacos.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order dark tacos`) {
		message.channel.send('You ordered the **Dark Tacos**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467428202676234/DarkTacos.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order CC`) {
		message.channel.send('You ordered the **Cronio Croissant**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467426357575700/CronioCroissant.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order cc`) {
		message.channel.send('You ordered the **Cronio Croissant**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467426357575700/CronioCroissant.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order db`) {
		message.channel.send('You ordered the **Daymegalodon Burrito**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467425237696542/DaymegalodonBurrito.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order DB`) {
		message.channel.send('You ordered the **Daymegalodon Burrito**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467425237696542/DaymegalodonBurrito.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order ss`) {
		message.channel.send('You ordered the **Spinel Sandwich**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467422964514816/SpinelSandwich.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order SS`) {
		message.channel.send('You ordered the **Spinel Sandwich**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467422964514816/SpinelSandwich.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order SSA`) {
		message.channel.send('You ordered the **Sur Sandwich**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467472427548742/SurSandwich.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order ssa`) {
		message.channel.send('You ordered the **Sur Sandwich**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467472427548742/SurSandwich.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order DD`) {
		message.channel.send('You ordered the **Disrupt0r Drumsticks**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467420732751922/Disrupt0rDrumsticks.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order dd`) {
		message.channel.send('You ordered the **Disrupt0r Drumsticks**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467420732751922/Disrupt0rDrumsticks.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order dcp`) {
		message.channel.send('You ordered the **DragonEye Chicken Parm**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467419772387338/DragonEyeChickenParm.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order DCP`) {
		message.channel.send('You ordered the **DragonEye Chicken Parm**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467419772387338/DragonEyeChickenParm.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order ccr`) {
		message.channel.send('You ordered the **Crimsunn Cheese Croissant**! Here it is! Enjoy! https://media.discordapp.net/attachments/794945863822082068/799667593983557732/YgAAG9ZJREFUCBAgQIAAAQIEooADQIQTI0CAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECTwIOAE9r6EKAAAECBAgQIECA.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order CCR`) {
		message.channel.send('You ordered the **Crimsunn Cheese Croissant**! Here it is! Enjoy! https://media.discordapp.net/attachments/794945863822082068/799667593983557732/YgAAG9ZJREFUCBAgQIAAAQIEooADQIQTI0CAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECTwIOAE9r6EKAAAECBAgQIECA.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order aap`) {
		message.channel.send('You ordered the **Alex Apple Pie**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467416266211358/AlexApplePie.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `order AAP`) {
		message.channel.send('You ordered the **Alex Apple Pie**! Here it is! Enjoy! https://media.discordapp.net/attachments/797469849172312085/799467416266211358/AlexApplePie.png?width=768&height=768 **Thanks for choosing MCJG!**')
	} else if (message.content === `jtinyjuancho`) {
		message.channel.send('https://media.discordapp.net/attachments/798981757998202903/799673277852287006/Tiny_Clothed_Juancho.png')
	} else if (message.content === `order jp`) {
		message.channel.send('You ordered the **Jacob Pizza**! Here it is! Enjoy!  **Thanks for choosing MCJG!**')
	} else if (message.content === `order JP`) {
		message.channel.send('You ordered the **Jacob Pizza**! Here it is! Enjoy!  **Thanks for choosing MCJG!**')
	} else if (message.content === `order jj`) {
		message.channel.send('You ordered the **Jordan Jello**! Here it is! Enjoy!  **Thanks for choosing MCJG!**')
	} else if (message.content === `order JJ`) {
		message.channel.send('You ordered the **Jordan Jello**! Here it is! Enjoy!  **Thanks for choosing MCJG!**')
	} else if (message.content === `order shso`) {
		message.channel.send('You ordered the **Shania Soup**! Here it is! Enjoy!  **Thanks for choosing MCJG!**')
	} else if (message.content === `order SHSO`) {
		message.channel.send('You ordered the **Shania Soup**! Here it is! Enjoy!  **Thanks for choosing MCJG!**')
	}
});
// Make sure to switch back the token when you are going between Developer Testing and Official Release mode.
client.login('insert-your-token-here');
