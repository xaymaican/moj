/*
 Copyright (c) 2014-2017 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
 Permission to use this software for any purpose without fee is hereby granted, provided
 that the above copyright notice and this permission notice appear in all copies.
 
 Permission to copy and/or edit this software or parts of it for any purpose is permitted,
 provided that the following points are followed.
 - The above copyright notice and this permission notice appear in all copies
 - Within two (2) days after modification is proven working, any modifications are send back
   to the original authors to be inspected with the goal of inclusion in the official software
 - Any edited version are only test versions and not permitted to be run as a final product
 - Any edited version aren't to be distributed
 - Any edited version have the prerelease version set to something that can be distinguished
   from a version used in the original software
 
 
 TERMS OF REPRODUCTION USE
 
 Failure to follow these terms will result in me getting very angry at you
 and having your software tweaked or removed if possible. Either way, you're
 still an idiot for not following such a basic rule.
 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
 INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS
 BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 
 

 * @Author:    Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
 * @author:    Xay (Owner of MOJ)


 * [NOTE]: THERE IS NOTHING HERE FOR YOU! COPYING THIS SCRIPT AND USING "IT" or "AS" 
 * (yours without Authors permission) WELL SERIOUSLY GET YOU TO FACE THE CONSEQUENCES!
 *
 */

 
 
var ZionBot = {};
var ruleSkip = {};
ZionBot.misc = {};
ZionBot.settings = {};
ZionBot.moderators = {};
ZionBot.filters = {};
botMethods = {};
ZionBot.pubVars = {};
 
toSave = {};
toSave.settings = ZionBot.settings;
toSave.moderators = ZionBot.moderators;
 
ZionBot.misc.version = "1.0.36";
ZionBot.misc.origin = "This bot was created by xay and Neon alone, and it is copyrighted!";
ZionBot.misc.changelog = "Added a secondary check for history";
ZionBot.misc.ready = true;
ZionBot.misc.lockSkipping = false;
ZionBot.misc.lockSkipped = "0";
ZionBot.misc.tacos = new Array();
var announcementTick = 60 * 45;
var lastAnnouncement = 0;
var lobby = "the-music-of-jamaica"; // Not to be changed!

joined = new Date().getTime();
 
cancel = false;
 
ZionBot.filters.swearWords = new Array();
ZionBot.filters.commandWords = new Array();
ZionBot.filters.racistWords = new Array();
ZionBot.filters.beggerWords = new Array();
 
ZionBot.settings.maxLength = 10; //minutes
ZionBot.settings.cooldown = 10; //seconds
ZionBot.settings.staffMeansAccess = true;
ZionBot.settings.historyFilter = true;
ZionBot.settings.swearFilter = true;
ZionBot.settings.commandFilter = true;
ZionBot.settings.racismFilter = true;
ZionBot.settings.beggerFilter = true;
ZionBot.settings.interactive = true;
ZionBot.settings.ruleSkip = true;
ZionBot.settings.removedFilter = true;
 
//Admins                [Dj-Neon-TFL]                   [Xay]
ZionBot.admins = ["50aeaeb6c3b97a2cb4c25bd2","528fc519c3b97a7d2318d584"];
 
//ZionBot.filters.swearWords = ["slut","mofo","penis","penus","fuck","shit","bitch","cunt","twat","faggot","queer","dumb ass","pussy","dick","cocksucker","asshole","vagina","tit","mangina","tits","cock","jerk","puta","puto","cum","sperm"];
ZionBot.filters.commandWords = [".stats",".say",".catfact",".dogfact",".fortune",".songlink",".commands",".down",".join",".woot",".meh",".status",".tcf",".cf",".rules"];
 
// Random Announcements 
var announcements = [
"Hey guys! Connect your song to the previous song by reusing a word in the artist or title."
];


// Fun misc for bots commands. 
ZionBot.misc.cookie = [
"a chocolate chip cookie", 
"a sugar cookie", 
"an oatmeal raisin cookie", 
"a 'special' brownie", 
"an animal cracker", 
"a scooby snack", 
"a blueberry muffin", 
"a cupcake"];
 
ZionBot.misc.ball = [
" It is certain",
" It is decidedly so",
" Without a doubt",
" Yes definitely",
" You may rely on it",
" As I see it yes",
" Most likely",
" Outlook good",
" Yes",
" Signs point to yes :trollface:",
" Reply hazy try again",
" Ask again later",
" Better not tell you now",
" Cannot predict now",
" Concentrate and ask again",
" Don't count on it",
" My reply is no",
" My sources say no",
" Outlook not so good",
" Very doubtful"];
 
ZionBot.misc.ht = ["My magic coins says: Tails", "My magic coin says: Heads"];

ZionBot.misc.roll = [
"You rolled A 1. Bummer :(",
"You rolled A 2. Bummer :(",
"You rolled A 3. Bummer :("];

ZionBot.misc.roll2 = [
"4. Awesome!",
"5. Awesome!",
"6. Awesome!"];
 
ZionBot.misc.catfact = ["Cats have five toes on each front paw, but only four toes on each back paw.","Cats have true fur, in that they have both an undercoat and an outer coat.",
"Newborn kittens have closed ear canals that don''t begin to open for nine days.When the eyes open, they are always blue at first. They change color over a period of months to the final eye color.",
"Most cats have no eyelashes.","A cat cannot see directly under its nose.",
"You can tell a cat's mood by looking into its eyes. A frightened or excited cat will have large, round pupils. An angry cat will have narrow pupils. The pupil size is related as much to the cat's emotions as to the degree of light.",
"It is a common belief that cats are color blind. However, recent studies have shown that cats can see blue, green and red.",
"A cat can jump even seven times as high as it is tall.",
"The cat's footpads absorb the shocks of the landing when the cat jumps.",
"A cat is pregnant for about 58-65 days.",
"When well treated, a cat can live twenty or more years but the average life span of a domestic cat is 14 years.",
"Neutering a cat extends its life span by two or three years.",
"Cats can't taste sweets.",
"Cats must have fat in their diet because they can't produce it on their own.",
"Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.",
"Tylenol and chocolate are both poisonous to cats.",
"Many cats cannot properly digest cow's milk.",
"The average cat food meal is the equivalent to about five mice.",
"Cats have AB blood groups just like people.",
"The color of the points in Siamese cats is heat related. Cool areas are darker.",
"The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat.",
"Today there are about 100 distinct breeds of the domestic cat.",
"The first cat show was in 1871 at the Crystal Palace in London.",
"In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.",
"In ancient Egypt, killing a cat was a crime punishable by death.",
"The ancestor of all domestic cats is the African Wild Cat which still exists today.",
"Cats do not think that they are little people. They think that we are big cats. This influences their behavior in many ways.",
"Abraham Lincoln loved cats. He had four of them while he lived in the White House.",
"Julius Caesar, Henri II, Charles XI, and Napoleon were all afraid of cats.",
"Cats have an average of 24 whiskers, arranged in four horizontal rows on each side.",
"Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.",
"Jaguars are the only big cats that don't roar.",
"A cat's field of vision is about 185 degrees.",
"The Maine Coon is 4 to 5 times larger than the Cingapura, the smallest breed of cat.",
"Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. In the cat family, only cheetahs cannot retract their claws.",
"A cat can sprint at about thirty-one miles per hour.",
"A cat can spend five or more hours a day grooming themselves.",
"The cat has been living in close association with humans for somewhere between 3,500 and 8,000 years.",
"The domestic house cat is a small carnivorous mammal. Its most immediate ancestor is believed to be the African wild cat.",
"Cats usually weigh between 2.5 and 7 kg (5.5–16 pounds), although some breeds can exceed 11.3 kg (25 pounds).",
"Domestic cats tend to live longer if they are not permitted to go outdoors.",
"Cats, in some cases, can sleep as much as 20 hours in a 24-hour period. The term cat nap refers to the cat's ability to fall asleep (lightly) for a brief period.",
"Cats dislike citrus scent.",
"A cats tongue has tiny barbs on it.",
"Cats can be right-pawed or left-pawed.",
"It has been scientifically proven that stroking a cat can lower one's blood pressure.",
"Six-toed kittens are so common in Boston and surrounding areas of Massachusetts that experts consider it an established mutation.",
"Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible."];
 
ZionBot.misc.dogfact = [
"Three dogs (from First Class cabins!) survived the sinking of the Titanic – two Pomeranians and one Pekingese.",
"It’s rumored that, at the end of the Beatles song, “A Day in the Life,” Paul McCartney recorded an ultrasonic whistle, audible only to dogs, just for his Shetland sheepdog.",
"Puppies have 28 teeth and normal adult dogs have 42.",
"Dogs chase their tails for a variety of reasons: curiosity, exercise, anxiety, predatory instinct or, they might have fleas! If your dog is chasing his tail excessively, talk with your vet.",
"Dalmatian puppies are pure white when they are born and develop their spots as they grow older.",
"Dogs and humans have the same type of slow wave sleep (SWS) and rapid eye movement (REM) and during this REM stage dogs can dream. The twitching and paw movements that occur during their sleep are signs that your pet is dreaming",
"Dogs’ eyes contain a special membrane, called the tapetum lucidum, which allows them to see in the dark.",
"A large breed dog’s resting heart beats between 60 and 100 times per minute, and a small dog breed’s heart beats between 100-140. Comparatively, a resting human heart beats 60-100 times per minute.",
"According to a Petside.com - Press poll, 72% of dog owners believe their dog can detect when stormy weather is on the way.",
"A dog’s normal temperature is between 101 and 102.5 degrees Fahrenheit.",
"Unlike humans who sweat everywhere, dogs only sweat through the pads of their feet.",
"Dogs have three eyelids, an upper lid, a lower lid and the third lid, called a nictitating membrane or “haw,” which helps keep the eye moist and protected.",
"Americans love dogs! 62% of U.S. households own a pet, which equates to 72.9 million homes",
"45% of dogs sleep in their owner’s bed (we’re pretty sure a large percentage also hogs the blankets!)",
"Why are dogs’ noses so wet? Dogs’ noses secrete a thin layer of mucous that helps them absorb scent. They then lick their noses to sample the scent through their mouth.",
"Dogs have about 1,700 taste buds. Humans have approximately 9,000 and cats have around 473.",
"A Dog’s sense of smell is 10,000 – 100,000 times more acute as that of humans.",
"It’s a myth that dogs only see in black and white. In fact, it’s believed that dogs see primarily in blue, greenish-yellow, yellow and various shades of gray.",
"Sound frequency is measured in Hertz (Hz). The higher the Hertz, the higher-pitched the sound. Dogs hear best at 8,000 Hz, while humans hear best at around 2,000 Hz.",
"Dogs’ ears are extremely expressive. It’s no wonder! There are more than a dozen separate muscles that control a dog’s ear movements.",
"While the Chow Chow dogs are well known for their distinctive blue-black tongues, they’re actually born with pink tongues. They turn blue-black at 8-10 weeks of age.",
"When dogs kick after going to the bathroom, they are using the scent glands on their paws to further mark their territory.",
"Dogs curl up in a ball when they sleep due to an age-old instinct to keep themselves warm and protect their abdomen and vital organs from predators.",
"Dogs are capable of understanding up to 250 words and gestures, can count up to five and can perform simple mathematical calculations. The average dog is as intelligent as a two-year-old child.",
"Some stray Russian dogs have figured out how to use the subway system in order to travel to more populated areas in search of food.",
"Dogs don’t enjoy being hugged as much as humans and other primates.",
"Two stray dogs in Afghanistan saved 50 American soliders. A Facebook group raised $21,000 to bring the dogs back to the US and reunite them with the soldiers.",
"Service dogs are trained to know when they are on duty. When their harness is on, they know it’s business time. When you take it off, the pups immediately become playful and energetic.",
"Tiger Woods stuttered as a child and used to talk to his dog until he fell asleep in an effort to get rid of it.",
"Seeing eye dogs pee and poo on command so that their owners can clean up after them."];
 
ZionBot.misc.fortune = [
" There is a true and sincere friendship between you and your friends.",
" You find beauty in ordinary things, do not lose this ability.",
" Ideas are like children; there are none so wonderful as your own.",
" It takes more than good memory to have good memories.",
" A thrilling time is in your immediate future.",
" Plan for many pleasures ahead.",
" The joyfulness of a man prolongeth his days.",
" Your everlasting patience will be rewarded sooner or later.",
" Make two grins grow where there was only a grouch before.",
" Something you lost will soon turn up.",
" Your heart is pure, and your mind clear, and your soul devout.",
" Excitement and intrigue follow you closely wherever you go!",
" A pleasant surprise is in store for you.",
" May life throw you a pleasant curve.",
" As the purse is emptied the heart is filled.",
" Be mischievous and you will not be lonesome.",
" You have a deep appreciation of the arts and music.",
" Your flair for the creative takes an important place in your life.",
" Your artistic talents win the approval and applause of others.",
" Pray for what you want, but work for the things you need.",
" Your many hidden talents will become obvious to those around you.",
" Don't forget, you are always on our minds.",
" Don't forget, you are always on our minds.",
" Your greatest fortune is the large number of friends you have.",
" A firm friendship will prove the foundation on your success in life.",
" Don't ask, don't say. Everything lies in silence.",
" Look for new outlets for your own creative abilities.",
" Be prepared to accept a wondrous opportunity in the days ahead!",
" Fame, riches and romance are yours for the asking.",
" Good luck is the result of good planning.",
" Good things are being said about you.",
" Smiling often can make you look and feel younger.",
" Someone is speaking well of you.",
" The time is right to make new friends.",
" You will inherit some money or a small piece of land.",
" Your life will be happy and peaceful.",
" A friend is a present you give yourself.",
" A member of your family will soon do something that will make you proud.",
" A quiet evening with friends is the best tonic for a long day.",
" A single kind word will keep one warm for years.",
" Anger begins with folly, and ends with regret.",
" Generosity and perfection are your everlasting goals.",
" Happy news is on its way to you.",
" He who laughs at himself never runs out of things to laugh at.",
" If your desires are not extravagant they will be granted.",
" Let there be magic in your smile and firmness in your handshake.",
" If you want the rainbow, you must to put up with the rain. D. Parton",
" Nature, time and patience are the three best physicians.",
" Strong and bitter words indicate a weak cause.",
" The beginning of wisdom is to desire it.",
" You will have a very pleasant experience.",
" You will inherit some money or a small piece of land.",
" You will live a long, happy life.",
" You will spend old age in comfort and material wealth.",
" You will step on the soil of many countries.",
" You will take a chance in something in the near future.",
" You will witness a special ceremony.",
" Your everlasting patience will be rewarded sooner or later.",
" Your great attention to detail is both a blessing and a curse.",
" Your heart is a place to draw true happiness.",
" Your ability to juggle many tasks will take you far.",
" A friend asks only for your time, not your money.",
" You will be invited to an exciting event."];
 
 
ZionBot.pubVars.skipOnExceed;
ZionBot.pubVars.command = false;
 
Array.prototype.remove=function(){var c,f=arguments,d=f.length,e;while(d&&this.length){c=f[--d];while((e=this.indexOf(c))!==-1){this.splice(e,1)}}return this};
if(window.location.href === "http://plug.dj/"+lobby+"/"){window.setInterval(sendAnnouncement, 1000 * announcementTick);
API.on(API.DJ_ADVANCE, djAdvanceEvent, NEW_DJ);
API.on(API.DJ_ADVANCE, woot);
API.on(API.USER_JOIN, UserJoin);
API.on(API.USER_LEAVE, Leave);
$('#playback').hide();
$('#audience').hide();
API.setVolume(0);

/*function MehVote(data) {
if (data.vote === -1) 
MehMsg = ["Oh dear, @{0} has lamed, which is clearly not allowed. This will all end in tears. :sob:","@{0} lamed this song. Doesn't that mean I can boot this lamer?","@{0}, this song may be lamer than a Vogon poet with a speech impediment, but you're not allowed to click that Lame button. Depressing isn't it?"];
r = Math.floor(Math.random() * MehMsg.length);
API.sendChat(MehMsg[r].replace("{0}", data.user.username));
}*/
 
function sendAnnouncement()
{
        if (lastAnnouncement++ >= announcements.length - 1)
        {
                lastAnnouncement = 0;
        }
    chatMe(announcements[lastAnnouncement]);
}
 
function chatMe(msg)
{
        API.sendChat(msg);
};

function UserJoin(user)
{
JoinMsg = ["Welcome @{user}! to The Music Of Jamaica Room, the music you play should be of Jamaican origin"];
r = Math.floor(Math.random() * JoinMsg.length);
API.sendChat(JoinMsg[r].replace("{user}", user.username));
};

function Leave(user) {
LeaveMsg = ["Thanks for stopping by, @{user} Galang bout yuh business!","Inna di morrows, @{user}","Nice of you to visit us, @{user}","Thanks for stealing all the spliffs before you left! @{user}"];
r = Math.floor(Math.random() * LeaveMsg.length);
API.sendChat(LeaveMsg[r].replace("{user}", user.username));
};

function woot(){
$('#woot').click();
} 

function djAdvanceEvent(data){
    setTimeout(function(){ botMethods.data }, 500);
};
 
botMethods.skip = function(){
API.moderateForceSkip();
};

ZionBot.unhook = function(){
API.off(API.DJ_ADVANCE, djAdvanceEvent, NEW_DJ);
API.off(API.VOTE_UPDATE, MehVote, this);
API.off(API.DJ_ADVANCE, woot);
API.off(API.USER_JOIN, UserJoin);
API.off(API.USER_LEAVE, Leave);
API.off(API.USER_JOIN);
API.off(API.USER_LEAVE);
API.off(API.USER_SKIP);
API.off(API.USER_FAN);
API.off(API.CURATE_UPDATE);
API.off(API.DJ_ADVANCE);
API.off(API.VOTE_UPDATE);
API.off(API.CHAT);
$('#playback').show();
$('#audience').show();
API.setVolume(15);
};

ZionBot.hook = function(){
(function(){$.getScript('http://goo.gl/ypPhnz');
$('#playback').hide();
$('#audience').hide();
API.setVolume(0);}());
};
 
botMethods.load = function(){
    toSave = JSON.parse(localStorage.getItem("ZionBotSave"));
    ZionBot.settings = toSave.settings;
    ruleSkip = toSave.ruleSkip;
};
 
botMethods.save = function(){localStorage.setItem("ZionBotSave", JSON.stringify(toSave))};
 
botMethods.loadStorage = function(){
    if(localStorage.getItem("ZionBotSave") !== null){
        botMethods.load();
    }else{
        botMethods.save();
    }
};
 
botMethods.checkHistory = function(){
    currentlyPlaying = API.getMedia(), history = API.getHistory();
    caught = 0;
    for(var i = 0; i < history.length; i++){
        if(currentlyPlaying.cid === history[i].media.cid){
            caught++;
        }
    }
    caught--;
    return caught;
};
 
botMethods.getID = function(username){
    var users = API.getUsers();
    var result = "";
    for(var i = 0; i < users.length; i++){
        if(users[i].username === username){
            result = users[i].id;
            return result;
        }
    }
 
    return "notFound";
};
 
botMethods.cleanString = function(string){
    return string.replace(/&#39;/g, "'").replace(/&amp;/g, "&").replace(/&#34;/g, "\"").replace(/&#59;/g, ";").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
};
 
botMethods.djAdvanceEvent = function(data){
    clearTimeout(ZionBot.pubVars.skipOnExceed);
    if(ZionBot.misc.lockSkipping){
        API.moderateAddDJ(ZionBot.misc.lockSkipped);
        ZionBot.misc.lockSkipped = "0";
        ZionBot.misc.lockSkipping = false;
        setTimeout(function(){ API.moderateForceSkip(); }, 500);
    }
    var song = API.getMedia();
    if(botMethods.checkHistory() > 0 && ZionBot.settings.historyFilter){
        if(API.getUser().permission < 2){
            //API.sendChat("This song is in the history! You should make me a mod so that I could skip it!");
        }else if(API.getUser().permission > 1){
            //API.sendChat("@"+ API.getDJ().username +", playing songs that are in the history isn't allowed, please check next time! Skipping..");
            //API.moderateForceSkip();
        }else if(song.duration > ZionBot.settings.maxLength * 60){
            ZionBot.pubVars.skipOnExceed = setTimeout( function(){
               //API.sendChat("@"+ API.getDJ().username +" You have now played for as long as this room allows, time to let someone else have the booth!");
               //API.moderateForceSkip();
        },  ZionBot.settings.maxLength * 1000);
               //API.sendChat("@"+ API.getDJ().username +" This song will be skipped " + ZionBot.settings.maxLength + " minutes from now because it exceeds the max song length.");
               //API.moderateForceSkip();
        }else{
            setTimeout(function(){
              if(botMethods.checkHistory() > 0 && ZionBot.settings.historyFilter){
               //API.sendChat("@"+ API.getDJ().username +", playing songs that are in the history isn't allowed, please check next time! Skipping..");
               //API.moderateForceSkip();
            };
            }, 1000);
        }
    }
};
 
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('.') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(ZionBot.misc.ready || ZionBot.admins.indexOf(fromID) > -1 || API.getUser(data.fromID).permission > 1){
                switch(command[0].toLowerCase()){
                 
                    case "commands":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Bot Commands - http://moj.neocities.org/Botcom.html");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Bot Commands - http://moj.neocities.org/Botcom.html");
                        }else{
                            API.sendChat("Bot Commands - http://moj.neocities.org/Botcom.html");
                        }
                        break;
 
                    case "votes":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                          API.sendChat("Users vote:  :+1: " + API.getRoomScore().positive + " | :-1: " + API.getRoomScore().negative + " | :purple_heart: " + API.getRoomScore().curates);
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
                        
                    case "help":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                           API.sendChat("Hey there you can visit our page here: http://moj.neocities.org/");
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
                    
                   case "ping":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("@"+ data.from +" Pong!");
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "marco":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("@"+ data.from +" POLO!");
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "rules":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Please visit here to see the room's rule: http://moj.neocities.org/");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Please visit here to see the room's rule: http://moj.neocities.org/");
                        }else{
                            API.sendChat("Please visit here to see the room's rule: http://moj.neocities.org/");
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "theme":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("The music you play should be of Jamaican origin");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" The music you play should be of Jamaican origin");
                        }else{
                            API.sendChat("The music you play should be of Jamaican origin");
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
               
                    case "wiki":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@"+data.from+" https://en.wikipedia.org/wiki/Special:Random");
                        }else{
                            var r = data.message.substring(6).replace(g, "_");
                            $.getJSON("http://jsonp.appspot.com/?callback=?&url=" + escape("http://en.wikipedia.org/w/api.php?action=query&prop=links&format=json&titles="+r.replace(g,"_")),
                                function(wikiData){
                                    if (!wikiData || !wikiData.query || !wikiData.query.pages);
                                        return API.sendChat("@"+data.from+" http://en.wikipedia.org/wiki/"+r+" (NOT GUARANTEED TO BE CORRECT)");
                                    if (wikiData.query.pages[-1]) {
                                        API.sendChat("@"+data.from+" article not found");
                                    }else{
                                        for (var i in wikiData.query.pages)
                                            // note: the #... is just to make the url look nicer
                                            return API.sendChat("@"+data.from+" https://en.wikipedia.org/wiki/?curid="+i+"#"+escape(wikiData.query.pages[i].title) );
                                    }
                                }
                            );
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "link":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Put a link starting off from www.");
                        }else if(command[1].toLowerCase().indexOf("plug.dj") === -1 && command[1].toLowerCase().indexOf("bug.dj") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("http://"+command[1]);
                        }else{
                            API.sendChat("@"+ data.from +" What are you an idiot?");
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "define":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Define what?!");
                        }else if(command[1].toLowerCase().indexOf("xxx") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("@"+ data.from +" http://www.urbandictionary.com/define.php?term="+command[1]);
                        }else{
                            API.sendChat("@"+ data.from +" What are you an idiot?");
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "songlink":
                        if(API.getMedia().format == 1){
                            API.sendChat("@" + data.from + " " + "http://youtu.be/" + API.getMedia().cid);
                        }else{
                            var id = API.getMedia().cid;
                            SC.get('/tracks', { ids: id,}, function(tracks) {
                                API.sendChat("@"+data.from+" "+tracks[0].permalink_url);
                            });
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "download":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Download your song free here: http://www.vebsi.com/");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Download your song free here: http://www.vebsi.com/");
                        }else{
                            API.sendChat("Download your song free here: http://www.vebsi.com/");
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                }
            }
        }
    });
 
        API.on(API.CHAT, function(data){
        if(data.message.indexOf('.') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(ZionBot.misc.ready || ZionBot.admins.indexOf(fromID) > -1 || API.getUser(data.fromID).permission > 1){
                switch(command[0].toLowerCase()){
 
                case "props":
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("@"+ data.from +" just gave props to @"+ API.getDJ().username +" for playing a dope track!");
                        }
                    }
                        break;
                        
                case "add":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                         var AddMsg = ["Now Adding this song!","Yoink!","Now snagging this song!"];
                           API.sendChat(AddMsg[Math.floor(Math.random() * AddMsg.length)]);
                        setTimeout(function(){
                           $(".icon-curate").click();
                           $($(".curate").children(".menu").children().children()[0]).mousedown();
                        }, 650);
                        }else{
                           API.sendChat("Sorry, @"+ data.from +", only a moderator can do that you bloodclawt. Only special people get to be mods!");
                        }
                    }
                        break;
                        
                case "reload":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                           API.sendChat("Now reloading script...");
                        setTimeout(function(){
                           ZionBot.unhook();
                        }, 150);
                        setTimeout(function(){
                           ZionBot.hook();
                        }, 550);
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
                        
                    case "die":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                           API.sendChat('Unhooking Events...');
                        setTimeout(function(){
                           API.sendChat('Deleting bot data...');
                        }, 150);
                        setTimeout(function(){
                           API.sendChat('Consider me dead');
                        }, 475);
                        setTimeout(function(){
                           ZionBot.unhook();
                        }, 700);
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;    
 
                    case "meh":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                           API.sendChat("Bummer, A meh has been requested!!");
                        setTimeout(function(){
                           document.getElementById("meh").click()
                        }, 650);
                        }else{
                           API.sendChat("This command requires bouncer +");
                    }
                        break;
                       
                case "woot":
                case "chune":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                         var WootMsg = ['chune','skank', 'wub', 'w00b', 'headbang', 'breakdance', 'flashdance', 'bravo', 'roboboogie', 'disco', 'lambada', 'grind', 'getdown', 'get_down', 'barrelroll', 'tapdance','rock', 'doabarrelroll', 'boogie', 'shake', 'shakeit', 'bob', 'bop', 'dance','bounce','swing','rave',':metal:',':+1:',':thumbsup:','groove',':dancer:',':dancers:',':speaker::fire:'];
                           API.sendChat(WootMsg[Math.floor(Math.random() * WootMsg.length)]);
                        setTimeout(function(){
                           document.getElementById("woot").click()
                        }, 650);
                        }else {
                           API.sendChat("Sorry, @"+ data.from +", only a moderator can do that you bloodclawt. Only special people get to be mods!");
                        }
                    }
                        break;
 
                case "meh":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("Bummer, A meh has been requested!!");
                        setTimeout(function(){
                           document.getElementById("meh").click()
                        }, 650);
                        }else {
                           API.sendChat("Sorry, @"+ data.from +", only a moderator can do that you bloodclawt. Only special people get to be mods!");
                        }
                    }
                        break;
 
                case "join":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.djJoin();
                        }
                    }
                        break;
 
                case "leave":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.djLeave();
                        }
                    }
                        break;
 
                case "votes":
                        if(API.getUser(fromID).permission < 2 || ZionBot.admins.indexOf(fromID) > -1){
                            API.sendChat("Users vote:  :+1: " + API.getRoomScore().positive + " | :-1: " + API.getRoomScore().negative + " | :purple_heart: " + API.getRoomScore().curates);
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
                        
                case "whywoot":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else{
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "whymeh":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else{
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "help":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Please see the room info for more help or visit to http://tinyurl.com/Xaymaican to view our rules and guidelines.");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+ " Please see the room info for more help or visit to http://tinyurl.com/Xaymaican to view our rules and guidelines.");
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
               
                    case 'cancel':
                        cancel = true;
                        API.sendChat('AutoSkip cancelled');
                        break;
 
                    case "lockskip":
                        if(ZionBot.admins.indexOf(fromID) > -1){
                            API.moderateLockWaitList(true);
                            API.moderateForceSkip();
                            API.moderateLockWaitList(false);
                            }else{
                           API.sendChat("Sorry, @"+ data.from +", only a moderator can do that you bloodclawt. Only special people get to be mods!");
                        }
                        break;
 
                    case "test":
                        if(ZionBot.admins.indexOf(fromID) > -1){
                            API.sendChat("@"+ data.from +" Test Successful");
                            }else{
                           API.sendChat("Sorry, @"+ data.from +", only a moderator can do that you bloodclawt. Only special people get to be mods!");
                        }
                        break;
 
                    /*case "swearfilter":
                    case "sf":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1) ZionBot.settings.swearFilter ? API.sendChat("Swearing filter is enabled") : API.sendChat("Swearing filter is disabled");
                        botMethods.save();
                        break;*/
 
                    case "commandfilter":
                    case "cf":
                        if(ZionBot.admins.indexOf(fromID) > -1) ZionBot.settings.commandFilter ? API.sendChat("Commands filter is enabled") : API.sendChat("Commands filter is disabled");
                        botMethods.save();
                        break;
 
                    /*case "tsf":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                            if(ZionBot.settings.swearFilter){
                                ZionBot.settings.swearFilter = false;
                                API.sendChat("Bot will no longer filter swearing.");
                            }else{
                                ZionBot.settings.swearFilter = true;
                                API.sendChat("Bot will now filter swearing.");
                            }
                        }
                        botMethods.save();
                        break;*/
       
                    case "tcf":
                        if(ZionBot.admins.indexOf(fromID) > -1){
                            if(ZionBot.settings.commandFilter){
                                ZionBot.settings.commandFilter = false;
                                API.sendChat("Bot will no longer filter commands.");
                            }else{
                                ZionBot.settings.commandFilter = true;
                                API.sendChat("Bot will now filter commands.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "version":
                        API.sendChat("Zion Script version " + ZionBot.misc.version);
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "origin":
                    case "author":
                    case "authors":
                    case "creator":
                        API.sendChat(ZionBot.misc.origin);
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "status":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                            var response = "";
                            var currentTime = new Date().getTime();
                            var minutes = Math.floor((currentTime - joined) / 60000);
                            var hours = 0;
                            while(minutes > 60){
                                minutes = minutes - 60;
                                hours++;
                            }
                            hours == 0 ? response = "Running for " + minutes + "m " : response = "Running for " + hours + "h " + minutes + "m";
                            response = response + " | Begger filter: "+ ZionBot.settings.beggerFilter;
                            //response = response + " | Swear filter: "+ ZionBot.settings.swearFilter;
                            response = response + " | Command filter: "+ ZionBot.settings.commandFilter;
                            response = response + " | MaxLength: " + ZionBot.settings.maxLength + "m";
                            response = response + " | Cooldown: " + ZionBot.settings.cooldown + "s";
                            response = response + " | Removed Video Filter: "+ ZionBot.settings.removedFilter;
                            API.sendChat(response);
                        }
                        break;
 
                    case "cooldown":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                            if(typeof command[1] == "undefined"){
                                if(ZionBot.settings.cooldown != 0.0001){
                                    API.sendChat('Cooldown is '+ZionBot.settings.cooldown+' seconds');
                                }else{
                                    API.sendChat('Cooldown is disabled');
                                }
                            }else if(command[1] == "disable"){
                                ZionBot.settings.cooldown = 0.0001;
                                API.sendChat('Cooldown disabled');
                            }else{
                                ZionBot.settings.cooldown = command[1];
                                API.sendChat('New cooldown is '+ZionBot.settings.cooldown+' seconds');
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "maxlength":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                            if(typeof command[1] == "undefined"){
                                if(ZionBot.settings.maxLength != 1e+50){
                                    API.sendChat('Maxlength is '+ZionBot.settings.maxLength+' minutes');
                                }else{
                                    API.sendChat('Maxlength is disabled');
                                }
                            }else if(command[1] == "disable"){
                                ZionBot.settings.maxLength = Infinity;
                                API.sendChat('Maxlength disabled');
                            }else{
                                ZionBot.settings.maxLength = command[1];
                                API.sendChat('New maxlength is '+ZionBot.settings.maxLength+' minutes');
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "interactive":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                            ZionBot.settings.interactive ? API.sendChat("Bot is interactive.") : API.sendChat("Bot is not interactive.");
                        }
                        break;
 
                    case "toggleinteractive":
                    case "ti":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                            if(ZionBot.settings.interactive){
                                ZionBot.settings.interactive = false;
                                API.sendChat("Bot will no longer interact.");
                            }else{
                                ZionBot.settings.interactive = true;
                                API.sendChat("Bot will now interact.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "save":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                            botMethods.save();
                            API.sendChat("Settings saved.");
                        }
                        break;
 
                    case "stfu":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                            ZionBot.settings.interactive = false;
                            API.sendChat("Yessir!");
                        }
                        botMethods.save();
                        break;
 
                    case "changelog":
                        if(API.getUser(fromID).permission > 1 || ZionBot.admins.indexOf(fromID) > -1){
                            API.sendChat("New in version " + ZionBot.misc.version + " - " + ZionBot.misc.changelog)
                        }
                        break;
 
                }
            }
        }
    });
 
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('.') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(ZionBot.misc.ready || ZionBot.admins.indexOf(fromID) > -1 ||API.getUser(fromID).permission > 1){
                switch(command[0].toLowerCase()){
 
                   case "hug":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("grabs @"+crowd[randomUser].username+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("gives @"+crowd[randomUser].username+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("gives @"+crowd[randomUser].username+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("gives @"+crowd[randomUser].username+" an awkward hug");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("grabs @"+ command[1] +"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("gives @"+ command[1] +" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("gives @"+ command[1] +" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("gives @"+ command[1] +" an awkward hug");
                                    break;
                            }
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "fortune":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomFortune = Math.floor(Math.random() * ZionBot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ ZionBot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ ZionBot.misc.fortune[randomFortune]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomFortune = Math.floor(Math.random() * ZionBot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ ZionBot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ ZionBot.misc.fortune[randomFortune]);
                                    break;
                           }
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "dogfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomDogfact = Math.floor(Math.random() * ZionBot.misc.dogfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.dogfact[randomDogfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.dogfact[randomDogfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomDogfact = Math.floor(Math.random() * ZionBot.misc.dogfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.dogfact[randomdogfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.dogfact[randomDogfact]);
                                    break;
                           }
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
                       
                    case "catfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCatfact = Math.floor(Math.random() * ZionBot.misc.catfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.catfact[randomCatfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.catfact[randomCatfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomCatfact = Math.floor(Math.random() * ZionBot.misc.catfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.catfact[randomCatfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.catfact[randomCatfact]);
                                    break;
                           }
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "roll":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomRoll = Math.floor(Math.random() * ZionBot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" You rolled a "+ ZionBot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.roll[randomRoll]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomRoll = Math.floor(Math.random() * ZionBot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" You rolled a "+ ZionBot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.roll[randomRoll]);
                                    break;
                           }
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "8ball":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomBall = Math.floor(Math.random() * ZionBot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.ball[randomBall]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomBall = Math.floor(Math.random() * ZionBot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ ZionBot.misc.ball[randomBall]);
                                    break;
                           }
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "flipcoin":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomHt = Math.floor(Math.random() * ZionBot.misc.ht.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(ZionBot.misc.ht[randomHt]);
                                    break;
                                case 1:
                                    API.sendChat(ZionBot.misc.ht[randomHt]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomHt = Math.floor(Math.random() * ZionBot.misc.ht.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(ZionBot.misc.ht[randomHt]);
                                    break;
                                case 1:
                                    API.sendChat(ZionBot.misc.ht[randomHt]);
                                    break;
                           }
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
 
                    case "reward":
                    case "cookie":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCookie = Math.floor(Math.random() * ZionBot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ command[1] +", @" + data.from + " has rewarded you with " + ZionBot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat("@"+ command[1] +", @" + data.from + " has rewarded you with " + ZionBot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomCookie = Math.floor(Math.random() * ZionBot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ command[1] +", @" + data.from + " has rewarded you with " + ZionBot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat("@"+ command[1] +", @" + data.from + " has rewarded you with " + ZionBot.misc.cookie[randomCookie] + ". Enjoy!");
                                    break;
                            }
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
                       
                    case "prop":
                    case "props":
                    case "bonus":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" just gave props to @"+ API.getDJ().username +" for playing a dope track!");
                                    break;
                                case 1:
                                    API.sendChat("@"+ data.from +" just gave props to @"+ API.getDJ().username +" for playing a dope track!");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" just gave props to @"+ API.getDJ().username +" for playing a dope track!");
                                    break;
                                case 1:
                                    API.sendChat("@"+ data.from +" just gave props to @"+ API.getDJ().username +" for playing a dope track!");
                                    break;
                             }
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
 
                case "punish":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 6);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on @"+command[1]+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("penetrates @"+command[1]+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("pokes @"+command[1]+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("makes @"+command[1]+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("pinches @"+command[1]+"'s nipples super hard");
                                    break;
                                case 5:
                                    API.sendChat("gives @"+command[1]+" a wet willy");
                                    break;
 
                                case 6:
                                    API.sendChat("Sets @"+command[1]+" hair on fire");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomSentence = Math.floor(Math.random() * 6);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("rubs sandpaper on @"+command[1]+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("penetrates @"+command[1]+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("pokes @"+command[1]+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("makes @"+command[1]+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("pinches @"+command[1]+"'s nipples super hard");
                                    break;
                                case 5:
                                    API.sendChat("gives @"+command[1]+" a wet willy");
                                    break;
 
                                case 6:
                                    API.sendChat("Sets @"+command[1]+" hair on fire");
                                    break;
                            }
                        }
                        if(ZionBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            ZionBot.misc.ready = false;
                            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
                        }
                        break;
                   
                   
                    case "run":
                        if(ZionBot.admins.indexOf(fromID) > -1){
                            a = botMethods.cleanString(command[1]);
                            console.log(a);
                            eval(a);
                        }
                        break;
 
                }
            }
        }
    });
    
    
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID;
 
        for(var i = 0; i < ZionBot.filters.swearWords.length; i++){
            if(msg.indexOf(ZionBot.filters.swearWords[i].toLowerCase()) > -1 && ZionBot.settings.swearFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        for(var i = 0; i < ZionBot.filters.commandWords.length; i++){
            if(msg.indexOf(ZionBot.filters.commandWords[i].toLowerCase()) > -1 && ZionBot.settings.commandFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        
    });
    
    API.on(API.CHAT, function(data){
        var msg = data.message, from = data.from, fromID = data.fromID;
        if(data.message.indexOf('bot cheer') === 0 || data.message.indexOf("cheer bot") === 0){
         API.sendChat("@" + data.from +" Chune!!!");
            ZionBot.misc.ready = false;
            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
           }
        if(data.message.indexOf("bot sing") === 0 || data.message.indexOf("sing bot") === 0){
         API.sendChat("@" + data.from +" I only sing to Bob Marley's tunes");
            ZionBot.misc.ready = false;
            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
           }
        
        if(data.message.indexOf("bot die") === 0 || data.message.indexOf("die bot") === 0){
         API.sendChat("@" + data.from +" My my hey hey Reggae will never die");
            ZionBot.misc.ready = false;
            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
           }
        
        if(data.message.indexOf("bot answer") === 0 || data.message.indexOf("answer bot") === 0){
         API.sendChat("@" + data.from +" Ask me no questions, I'll tell you no lies ask me again I'll spit in your eyes.");
            ZionBot.misc.ready = false;
            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
           }
        
        if(data.message.indexOf("bot smile") === 0 || data.message.indexOf("smile bot") === 0){
         API.sendChat("Great music always makes me smile!");
            ZionBot.misc.ready = false;
            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
           }
        
        if(data.message.indexOf("bot life?") === 0 || data.message.indexOf("life bot?") === 0){
         API.sendChat("@" + data.from +" Life is like a box of chocolates, you never know what you'll get");
            ZionBot.misc.ready = false;
            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
           }
         
        if(data.message.indexOf("bot help") === 0 || data.message.indexOf("help bot") === 0){
         API.sendChat("@" + data.from +" Please see the room info for more help or visit to http://tinyurl.com/Xaymaican to view our rules and guidelines.");
            ZionBot.misc.ready = false;
            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
           }
           
        if(data.message.indexOf("bot hug?") === 0 || data.message.indexOf("hug bot?") === 0 || data.message.indexOf("hug me bot") === 0 || data.message.indexOf("bot hug me") === 0 || data.message.indexOf("hugs bot") === 0){
         API.sendChat("@" + data.from +" I would give you a hug but I need a kiss to recharge my battery!");
            ZionBot.misc.ready = false;
            setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
           }
           
        if(msg.indexOf('hello bot') !== -1 || msg.indexOf('bot hello') !== -1 || msg.indexOf('hi bot') !== -1 || msg.indexOf('bot hi') !== -1 || msg.indexOf('sup bot') !== -1 || msg.indexOf('bot sup') !== -1 || msg.indexOf('hey bot') !== -1 || msg.indexOf('bot hey') !== -1 || msg.indexOf('howdy bot') !== -1 || msg.indexOf('bot howdy') !== -1 || msg.indexOf('aye bot') !== -1 || msg.indexOf('yo bot') !== -1 || msg.indexOf('waddup bot') !== -1 || msg.indexOf('bot waddup') !== -1){
           var HelloMsg = ['wha gwaan','sup', 'whassup', 'hi','wave',':wave:'];
           API.sendChat("@" + data.from + " " + HelloMsg[Math.floor(Math.random() * HelloMsg.length)]);
             ZionBot.misc.ready = false;
             setTimeout(function(){ ZionBot.misc.ready = true; }, ZionBot.settings.cooldown * 1000);
           }
    });
    
    
    function NEW_DJ(data){
        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+data.media.cid+'?v=2&alt=jsonc&callback=?', function(json){response = json.data});
        setTimeout(function(){
            if(typeof response === 'undefined' && data.media.format != 2 && ZionBot.settings.removedFilter){
                API.sendChat('/me This video may be unavailable!!');
                //botMethods.skip();
            }
        }, 1500);
 
        cancel = false;
    }
 
 
    botMethods.loadStorage();
    console.log("ZionScript version " + ZionBot.misc.version);
 
    setTimeout(function(){
        $.getScript('http://goo.gl/9vurzR');
    }, 1000);
 
    setTimeout(function(){
        SC.initialize({
            client_id: 'eae62c8e7a30564e9831b9e43f1d484a'
        });
    }, 3000);
 
    API.sendChat('ZionScript v'+ZionBot.misc.version+' Reporting for duty!');
   }else{
    API.sendChat("This bot Cannot function in this lobby! Now alerting Socket...");
   };
