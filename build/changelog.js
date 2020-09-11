const path = require('path');
const fs = require('fs');

function changelog() {
	let html = '';

	changelogData.forEach(function(version){
		html += `<div class="text-box" id="${version.title.replace(/\./g,'-')}">
		<div class="card-header">
		<a target="_blank" rel="noopener" href="https://github.com/MALSync/MALSync/releases/tag/${version.title}">
		Version ${version.title}
		</a>
		</div>
		<div class="list-group list-group-flush">`;

		version.data.forEach(function(message){
			message = messageHandling(message);
			html += `<div class="list-group-item">
			${message}
			</div>`
		})
		html += '</div></div>';
	})

	function messageHandling(message){
		var issues = /#\d*/g.exec(message);
		if(issues){
			issues.forEach(function(issue){
				message = message.replace(issue,'<a target="_blank" rel="noopener" href="https://github.com/MALSync/MALSync/issues/'+issue.replace('#','')+'">'+issue+'</a>');
			})
		}

		var badges = /\[(.*?)\]/g.exec(message);
		if(badges){
			badges.forEach(function(badge){
				if(badge[0] != '[') return
					var content = badge.replace(/(^\[|\]$)/g,'');
				var type = 'secondary';
				if(content === 'FEATURE'){
					type = 'info';
				}
				if(content === 'BUGFIX'){
					type = 'warning';
				}
				message = message.replace(badge,'<span class="badge badge-'+type+'">'+content+'</span>');
			})
		}

		return message;
	}

	const descFile = path.join(__dirname, '../index.html');
	fs.readFile(descFile, 'utf8', function(err, data) {
	  if (err) {
	    return console.log(err);
	  }
	  const result = data.replace(/<!--changelog-->((.|\n|\r)*)<!--\/changelog-->/g, `<!--changelog-->\n${html}\n<!--/changelog-->`);

	  fs.writeFile(descFile, result, 'utf8', function(err) {
	    if (err) return console.log(err);
	  });
	});


	return;

}

var changelogData = [
{
	title: '0.8.1',
	data: [
	'[BUGFIX] Fix infinite loop in progress check',
	'[FEATURE] Add YugenAnime',
	'[BUGFIX] Fix readm',
	'[BUGFIX] Add new gogoanime domain',
	'[BUGFIX] Add new 9anime domain',
	'[TASK] Remove jaiminisbox',
	'[TASK] Remove krakenscans',
	]
},
{
	title: '0.8.0',
	data: [
	'[FEATURE] Add new progress prediction system',
	'[TASK] Fix mal description in miniMAL',
	'[TASK] Add animesimple db support',
	'[FEATURE] Add Tioanime',
	'[FEATURE] Add Animeondemand',
	'[FEATURE] Add Wuxiaworld',
	'[FEATURE] Add readm',
	'[FEATURE] Add Edelgarde Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add Hatigarm Scanz by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add KKJ Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add Kraken Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add Leviatan Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add Method Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add Nonames Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add Reaper Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add Secret Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add SK Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add Zero Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add Death Toll Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add Helvectica Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add kirei Cake by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add Sense Scans by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[FEATURE] Add ManhuaPlus by <a href="https://github.com/MrSuperKing143" target="_blank" rel="noopener">MrSuperKing143</a>',
	'[TASK] Remove dead pages (kissanime, kissmanga, mangakisa)',
	]
},
{
	title: '0.7.11',
	data: [
	'[FEATURE] Make pop out window size and position configurable',
	'[FEATURE] Readd Animevibe',
	'[SECURITY] Disable background iframes for firefox',
	'[BUGFIX] Minor fixes to many page implementations',
	]
},
{
	title: '0.7.9',
	data: [
	'[FEATURE] Add Simplyaweeb',
	'[FEATURE] Add Animedesu',
	'[FEATURE] Add Justanime',
	'[FEATURE] Add Animeunity',
	'[FEATURE] Add Mangafox',
	'[FEATURE] Add Mangahere',
	'[FEATURE] Add Animesimple',
	'[FEATURE] Add Yayanimes by <a href="https://github.com/Sazzo" target="_blank" rel="noopener">Sazzo</a>',
	'[FEATURE] Add Animixplay ',
	'[FEATURE] Add MyAnimeList video page',
	'[FEATURE] Add MAL api beta implementation',
	'[TASK] Remove onsite miniMAL for extension',
	]
},
{
	title: '0.7.8',
	data: [
	'[BUGFIX] hotfix MyAnimeList and Anilist onsite lists',
	]
},
{
	title: '0.7.7',
	data: [
	'[BUGFIX] Firefox hotfix',
	]
},
{
	title: '0.7.6',
	data: [
	'[FEATURE] The usage of the tag/notes section is now fully optional with the only advantage that it is saved permanent and cross browser',
	'[FEATURE] Add a random anime button for the PTW list in the extension popup',
	'[TASK] Add AnimeId',
	'[TASK] Add AniHub',
	'[TASK] Add scantrad',
	'[TASK] Add AnimeStreamingFR',
	'[TASK] Add TRanimeizle',
	'[TASK] Remove Animeplanet',
	'[TASK] Remove Mangakakalot',
	'[TASK] Remove Dream Animes',
	'[TASK] Remove NovelPlanet',
	]
},
{
	title: '0.7.5',
	data: [
	'[BUGFIX] MAL review profile images resized incorrectly #355',
	'[FEATURE] List view for miniMAL bookmarks',
	'[FEATURE] Mark episode as read/watched shortcut #351',
	'[FEATURE] Add translation progress section to miniMAL (BETA)',
	'[TASK] Ability to de auth accounts #280',
	'[FEATURE] Add tsukimangas',
	'[FEATURE] Add samehadaku',
	'[FEATURE] Add OtakuFR',
	'[FEATURE] Add monoschinos',
	'[FEATURE] Add animefire #344',
	'[TASK] Remove myanime',
	'[TASK] Remove animefever ',
	'[TASK] Remove riee',
	]
},
{
	title: '0.7.4',
	data: [
	'[BUGFIX] Fix MAL manga updates failing #343',
	'[BUGFIX] Fix MAL start date sometimes not set',
	'[FEATURE] Add minimized big popups option #336',
	'[FEATURE] Add option to disable sync for specific pages',
	'[FEATURE] Add animexin',
	]
},
{
	title: '0.7.3',
	data: [
	'[FEATURE] Add dreamsub support',
	'[FEATURE] Add animeshouse support',
	'[FEATURE] Support alternative rating modes on kitsu and anilist',
	'[TASK] Refactor all single list proivider',
	'[TASK] Add sepereate rewatching state',
	'[TASK] Increase list mirroring stability',
	'[BUGFIX] Support new animeultima domain',
	]
},
{
	title: '0.7.1',
	data: [
	'[BUGFIX] Fix shortcuts blocking other shurtcuts(ctrl + c)',
	'[BUGFIX] Fix stuck entries in Firefox',
	'[TASK] Add Amazon Prime Video support #295',
	'[TASK] Add bato.to support',
	'[TASK] Add manga4life support #308',
	]
},
{
	title: '0.7.0',
	data: [
	'[FEATURE] New correction UI (Default Shortcut: C)',
	'[TASK] Reworked Search',
	'[FEATURE] Add Hidive support',
	'[FEATURE] Add FallenAngels support',
	'[FEATURE] Add JaiminisBox support',
	'[FEATURE] Add animestrue support',
	'[FEATURE] Add auto next episode',
	'[BUGFIX] Add new goyabu domain',
	'[TASK] Add option to hide flashm hover messages. #298',
	]
},
{
	title: '0.6.10',
	data: [
	'[TASK] Reimplement shortcuts function',
	'[FEATURE] Add a shortcut for opening the next episode',
	'[TASK] Add new 9anime domain',
	'[TASK] Add new gogoanime domain #279',
	'[TASK] Fix manganelo #274',
	'[TASK] Fix missing mal images',
	'[TASK] Remove Mangarock',
	'[TASK] Remove Wonderfulsubs',
	'[TASK] Rework fullscreen implementation #271',
	]
},
{
	title: '0.6.9',
	data: [
	'[FEATURE] Add Hulu support #204',
	'[FEATURE] Add Aniwatch support',
	'[TASK] Sort MAL watching list by last changed',
	'[BUGFIX] Fix Crunchyroll detail page',
	'[BUGFIX] Move UI on kitsu to the right sidebar #261',
	'[TASK] Add new Turkanime domain',
	'[TASK] Refactor userlist implementations',
	]
},
{
	title: '0.6.8',
	data: [
	'[TASK] add new hydrax url #243',
	'[BUGFIX] Fix double scrollbar in minimal #231',
	'[TASK] remove otakustream',
	'[TASK] remove animevibe',
	'[TASK] Make update check stays silent #237',
	'[BUGFIX] Fix update check #239',
	]
},
{
	title: '0.6.7',
	data: [
	'[FEATURE] Add animesvision.com.br support',
	'[TASK] Revert to only highlighting the last watched episode. Add all episode highlighting option.',
	'[BUGFIX] Ignore ED and OP in episode list',
	'[BUGFIX] Support new kickassanime domain',
	'[BUGFIX] Fix Mangadex nexturl for ltr and fix oneshots tracking',
	'[TASK] Add fouranime, mangakisa and animekisa episode list support',
	]
},
{
	title: '0.6.6',
	data: [
	'[FEATURE] add goyabu.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] add japscan.co by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] add mangaplus by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] add mangakisa.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[BUGFIX] Fix Crunchyroll overview and player',
	]
},
{
	title: '0.6.5',
	data: [
	'[FEATURE] Add posibility to mirror lists automatically once a day',
	'[FEATURE] Add moeclip.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add mangalivre.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add tmofans.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add unionleitor.top by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add posibility to rate anime/manga on finish #157',
	'[BUGFIX] Fix animeflix.io implementation #185',
	'[BUGFIX] Round anilist scores correctly',
	'[TASK] Lazyload lists in miniMAL',
	]
},
{
	title: '0.6.4',
	data: [
	'[FEATURE] add AnimeFever.tv by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] add mangadenizi.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] add serimanga.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[BUGFIX] Fix html encoding in mal comments and tags #180',
	'[BUGFIX] Fix animeflix not working if accessed from home #185',
	'[BUGFIX] Fix episode detection on kissanime #188',
	]
},
{
	title: '0.6.3',
	data: [
	'[FEATURE] Add polish translation by <a href="https://github.com/VATICAN-PSYCHO" target="_blank" rel="noopener">VATICAN-PSYCHO</a>',
	'[FEATURE] Add anime-odcinki.pl by <a href="https://github.com/VATICAN-PSYCHO" target="_blank" rel="noopener">VATICAN-PSYCHO</a>',
	'[FEATURE] Add animezone.pl by <a href="https://github.com/VATICAN-PSYCHO" target="_blank" rel="noopener">VATICAN-PSYCHO</a>',
	'[FEATURE] add animeflix.io by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[BUGFIX] Fix problem with long lists on kitsu',
	'[FEATURE] Add cleanup script for removing all malsync:: tags from lists',
	'[BUGFIX] Add gogoanime.video domain',
	]
},
{
	title: '0.6.2',
	data: [
	'[TASK] Add new gogoanime domain (animego.to)',
	'[TASK] Add new kickassanime.ru domain',
	'[TASK] Add new branitube.net domain',
	'[TASK] Add manganelo/mangakakalot database support',
	'[BUGFIX] Fix twist.moe'
	]
},
{
	title: '0.6.1',
	data: [
	'[FEATURE] Add Discord Rich Presence support <a href="https://github.com/MALSync/MALSync/wiki/Discord-Rich-Presence" target="_blank" rel="noopener">wiki</a>',
	'[FEATURE] Add NekoSama by <a href="https://github.com/Arias800" target="_blank" rel="noopener">Arias800</a>',
	'[FEATURE] Add manganelo.com / mangakakalot.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add Viz.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add dubbedanime.net by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[BUGFIX] Fix local cachekey not specific enough #165',
	'[BUGFIX] Fix for Strict Cookies option',
	]
},
{
	title: '0.6.0',
	data: [
	'[FEATURE] Add Simkl support #122',
	'[FEATURE] Add option to open the miniMAL popup as a seperate window',
	'[FEATURE] add funimation.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add Voiranime #136',
	'[FEATURE] Add french translation',
	'[FEATURE] Add first install page',
	'[FEATURE] Add settings page',
	'[TASK] Add reload button to miniMAL overview',
	'[BUGFIX] New aniflix.tv design',
	'[BUGFIX] Fix localsync overview not working #142',
	'[BUGFIX] Exclude userlist from gogoanime urls #141',
	]
},
{
	title: '0.5.4',
	data: [
	'[FEATURE] Add shinden.pl by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[BUGFIX] Fix branitube',
	'[BUGFIX] Fix aniflix.tv',
	'[FEATURE] Show user ratings in miniMAL bookmarks',
	'[TASK] Only increment Volume count on sync',
	'[BUGFIX] Fix kitsu rewatch count not incremented ',
	]
},
{
	title: '0.5.3',
	data: [
	'[BUGFIX] Add new openload.pw domain',
	'[FEATURE] Add animekisa.tv by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add AnimeIndo.moe by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add wakanim.tv by <a href="https://github.com/Arias800" target="_blank" rel="noopener">Arias800</a>',
	'[TASK] Add dreamanimes.com.br overview page support',
	'[BUGFIX] Fix Netflix when the language is not set to english',
	]
},
{
	title: '0.5.2',
	data: [
	'[FEATURE] miniMAL can now use the metadata from kitsu/anilist #50',
	'[FEATURE] The search fields in miniMAL now use the data from anilist/kitsu and not only mal',
	'[FEATURE] Add <a href="https://github.com/MALSync/MALSync/wiki/List-Sync" target="_blank" rel="noopener">list mirroring</a> between MAL, Anilist and kitsu (ALPHA) #71',
	'[FEATURE] Add Indonesian translation by <a href="https://github.com/nattadasu" target="_blank" rel="noopener">Natsu Tadama</a>',
	'[FEATURE] Add kickassanime.io by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add riie.net by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[BUGFIX] Fix highlighting unreadable in dark themes of mangadex',
	]
},
{
	title: '0.5.1',
	data: [
	'[FEATURE] Add novelplanet.com',
	'[FEATURE] Add (beta.)wonderfulsubs.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add kawaiifu.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add 4Anime.to by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add dreamanimes.com.br by <a href="https://github.com/SwagOtaku" target="_blank" rel="noopener">SwagOtaku</a>',
	'[FEATURE] Add animeultima.eu by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add aniflix.tv by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add animefreak.tv by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add animedaisuki.moe by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add anime-planet.com by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[TASK] Add Local storage fallback import and export',
	'[TASK] Optimise manga search',
	'[BUGFIX] Video skipping #95',
	'[BUGFIX] Fix broken mangarock styling #88',
	]
},
{
	title: '0.5.0',
	data: [
	'[FEATURE] Add Local storage fallback (Beta)',
	'[FEATURE] Add auto resume',
	'[FEATURE] Add animevibe.tv by <a href="https://github.com/SwagOtaku" target="_blank" rel="noopener">SwagOtaku</a>',
	'[FEATURE] Add miniMAL Dark Theme by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[TASK] Make nextEp and updateCheck independent from MAL',
	'[BUGFIX] Fix Netflix season handling',
	]
},
{
	title: '0.4.17',
	data: [
	'[HOTFIX] Fix kitsu not able to update some entries #77',
	'[FEATURE] Add auto fullscreen option #76',
	]
},
{
	title: '0.4.16',
	data: [
	'[FEATURE] Add Proxer.me support by <a href="https://github.com/henrik9999" target="_blank" rel="noopener">orell</a>',
	'[FEATURE] Add VRV.co support',
	]
},
{
	title: '0.4.15',
	data: [
	'[FEATURE] Force English language option',
	'[TASK] Improve Mangarock chapter recognition',
	'[BUGFIX] Fix Otakustream movies not working',
	'[BUGFIX] Fix miniMAL progressbar overflowing',
	'[TASK] Change Emby api key implementation',
	]
},
{
	title: '0.4.14',
	data: [
	'[BUGFIX] Fix netflix on Firefox',
	'[BUGFIX] Fix MAL-Sync on Android',
	'[TASK] Add Swedish localization by <a href="https://github.com/Soitora" target="_blank" rel="noopener">Soitora</a>',
	'[TASK] Add Dutch localization by <a href="https://github.com/SnowDuts" target="_blank" rel="noopener">SnowDuts</a>',
	'[TASK] Add Italian localization by <a href="https://github.com/Lorenzo-B" target="_blank" rel="noopener">Lorenzo-B</a>',
	'[TASK] Add Portuguese-BR localization by <a href="https://github.com/EHLuC" target="_blank" rel="noopener">EHLuC</a>',
	'[TASK] Add German localization',
	]
},
{
	title: '0.4.12',
	data: [
	'[FEATURE] Add localization support by <a href="https://github.com/kaiserdj" target="_blank" rel="noopener">Kaiserdj</a>',
	'[TASK] Add spanish locale by <a href="https://github.com/kaiserdj" target="_blank" rel="noopener">Kaiserdj</a>',
	'[TASK] Add turkish by <a href="https://github.com/cartals" target="_blank" rel="noopener">cartals</a>',
	'[FEATURE] Make miniMAL work independent from Mal entries',
	'[BUGFIX] Fix not able to add mangas to kitsu',
	'[TASK] Add new 9anime domains',
	'[BUGFIX] Fix missing UI on Mangarock',
	]
},
{
	title: '0.4.11',
	data: [
	'[BUGFIX] HOTFIX: Remove debugging alert',
	]
},
{
	title: '0.4.10',
	data: [
	'[BUGFIX] Fix problem with some passwords on kitsu',
	'[BUGFIX] Fix Intro skipping shortcut not working',
	'[TASK] Add Netflix to the database',
	'[TASK] Add related tags to MALs recommendation Page',
	'[BUGFIX] Handle blob files in Emby',
	]
},
{
	title: '0.4.9',
	data: [
	'[FEATURE] Add Kitsu support',
	'[FEATURE] Add resume video feature',
	'[FEATURE] Open miniMAL shortcut (Ctrl+M) #12',
	'[FEATURE] Intro skipper shortcut ( 90 Sec ) (Ctrl+🡆)',
	]
},
{
	title: '0.4.8',
	data: [
	'[FEATURE] Add Animepahe support by <a href="https://github.com/Deterio" target="_blank" rel="noopener">Deterio</a>',
	'[FEATURE] Add Animeflv support by <a href="https://github.com/kaiserdj" target="_blank" rel="noopener">Kaiserdj</a>',
	'[FEATURE] Add JKanime support by <a href="https://github.com/kaiserdj" target="_blank" rel="noopener">Kaiserdj</a>',
	'[BUGFIX] Fix Manual sync',
	'[BUGFIX] Fix Mangadex chapter recognition',
	]
},
{
	title: '0.4.7',
	data: [
	'Sync options get reset back to default.',
	'[FEATURE] Add initial Netflix support',
	'[FEATURE] Add otakustream support',
	'[FEATURE] Sync based on video progress',
	'[BUGFIX] Fix Branitube url',
	]
},
{
	title: '0.4.6',
	data: [
	'[FEATURE] Add Emby support <a href="https://github.com/MALSync/MALSync/wiki/Emby-Plex" target="_blank" rel="noopener">Wiki</a>',
	'[FEATURE] Add Plex support <a href="https://github.com/MALSync/MALSync/wiki/Emby-Plex" target="_blank" rel="noopener">Wiki</a>',
	'[TASK] Readd Branitube support',
	'[FEATURE] Add option to auto close miniMAL when clicking outside',
	'[FEATURE] Add option to hide miniMAL button',
	'[TASK] Add Legacy reader support in mangadex',
	'[BUGFIX] Fix crunchyroll x.5 episode recognition',

	]
},
{
	title: '0.4.5',
	data: [
	'[TASK] Migrate miniMAL to vue.js',
	'[FEATURE] Resume miniMAL popup on open',
	'[FEATURE] Add Stealth miniMAL button option',
	]
},
{
	title: '0.4.4',
	data: [
	'[TASK] Remove branitube',
	'[FEATURE] Use anilist airing api for more reliable episode predictions',
	'[FEATURE] Add anilist rewatch handling',
	'[TASK] Add notification logging',
	'[BUGFIX] Minor anilist fixes',
	'[BUGFIX] Minor anime4you fixes',
	'[BUGFIX] Issue #37',
	]
},
{
	title: '0.4.3',
	data: [
	'[BUGFIX] Fix new crunchyroll language url',
	'[FEATURE] Add action badge when doing an update check',
	'[FEATURE] Add search to anilist',
	'[TASK] Exclude season list on MAL #35',
	'[BUGFIX] Fix Anilist bookmarks sending too many api requests'
	]
},
{
	title: '0.4.2',
	data: [
	'[BUGFIX] Fix anilist authentication',
	'[BUGFIX] Minor style bugfixes'
	]
},
{
	title: '0.4.1',
	data: [
	'[FEATURE] Sort AniList watching bookmarks by last edited',
	'[BUGFIX] Fix canceling rewatching setting episode to 1',
	'[TASK] Use AniList url in different places',
	'[TASK] Style AniList bookmarks',
	'[TASK] MAL/AniList miniMAL settings',
	'[TASK] Add turkanime next episode recognition',
	'[TASK] Remove !important from Prediction',
	]
},
{
	title: '0.4.0',
	data: [
	'[FEATURE] Add AniList support (ALPHA) #19',
	'[BUGFIX] Hide Friend scores if not logged in',
	'[BUGFIX] Fix Turkanime not recognizing episode list',
	]
},
{
	title: '0.3.7',
	data: [
	'[FEATURE] Add rewatching handling',
	'[FEATURE] Auto recommend episode offset #18',
	'[TASK] Move airing anime to top of miniMAL bookmarks',
	'[TASK] Add mangarock and twist.moe to sidebar',
	'[BUGFIX] New anime4you design fixes',
	]
},
{
	title: '0.3.6',
	data: [
	'[FEATURE] Add <a href="https://twist.moe">twist.moe</a>',
	'[FEATURE] Show friend scores on MALs overview page',
	'[FEATURE] Add strict cookies switch #28',
	'[TASK] Remove animeheaven',
	'[TASK] miniMAL contributer section',
	'[BUGFIX] Firefox notifications on click not working',
	]
},
{
	title: '0.3.5',
	data: [
	'[FEATURE] Add <a target="_blank" rel="noopener" href="https://www.anime4you.one">anime4you</a>',
	'[FEATURE] Add <a target="_blank" rel="noopener" href="https://branitube.org">branitube</a>',
	'[FEATURE] Add <a target="_blank" rel="noopener" href="http://www.turkanime.tv">turkanime</a>',
	'[FEATURE] Add manga update check',
	'[TASK] Open miniMAL if "Is anime correct?" is denied',
	]
},
{
	title: '0.3.1',
	data: [
	'[BUGFIX] Fix mangarock implementation not loading when starting from the homepage',
	'[TASK] Clean up overview page UI',
	'[TASK] Add Mangarock and Animeheaven database request support',
	'[TASK] Add welcome message',
	'[TASK] Change "Add to Mal?" dialog',
	]
},
{
	title: '0.3.0',
	data: [
	'[FEATURE] Add <a target="_blank" rel="noopener" href="https://mangarock.com">Mangarock</a>',
	'[FEATURE] Add <a target="_blank" rel="noopener" href="http://animeheaven.eu">AnimeHeaven</a>',
	'[BUGFIX] Use a higher resolution version of the questionmark placeholder on MAL',
	'[FEATURE] Show estimation to next episode in miniMAL',
	'[TASK] Display the last time update check was executed',
	]
},
{
	title: '0.2.14',
	data: [
	'[TASK] Add gogoanimes.co support',
	'[BUGFIX] Fix gogoanime updatecheck',
	'[FEATURE] Add update notification',
	'[FEATURE] Add watching state tags to person and character MAL pages',
	'[BUGFIX] Fix related watching state tags not showing sometimes',
	'[TASK] Add github and changelog badges to miniMAL #22',
	'[BUGFIX] Fix wrong next episode links on gogoanime',
	]
},
{
	title: '0.2.13',
	data: [
	'[FEATURE] Add statuses in related Anime on mal',
	'[FEATURE] Notification Service',
	'[FEATURE] Add userscript mode to webextension',
	'[FEATURE] Add resume watching option #14',
	'[BUGFIX] Missing prediction when no mal-sync tag #20'
	]
},
{
	title: '0.2.12',
	data: [
	'[BUGFIX] Firefox reverting update check to off',
	'[TASK] Extend update check debugging page',
	'[TASK] Save offset values to sync storage',
	'[BUGFIX] Fix miniMAL bookmarks showing wrong episode prediction'
	]
},
{
	title: '0.2.11',
	data: [
	'[FEATURE] Check for new episodes and notify the user'
	]
},
{
	title: '0.2.10',
	data: [
	'[FEATURE] Lazyload miniMAL bookmarks images',
	'[FEATURE] Autoupdate epPrediction on mal detail pages',
	'[TASK] Add update ui for manga in miniMAL',
	'[TASK] Change fail message to update failed',
	'[BUGFIX] Extend next chapter recognition for mangadex',
	'[BUGFIX] Check for mal-sync tags before checking for kal tags'
	]
},
{
	title: '0.2.9',
	data: [
	'[BUGFIX] Episode sync not working',
	]
},
{
	title: '0.2.8',
	data: [
	'[FEATURE] Show link to next episode on overview page',
	'[FEATURE] Add cruchyroll season to every link',
	'[TASK] Replace help icons in miniMAL',
	'[BUGFIX] Force hide continue watching links'
	]
},
{
	title: '0.2.7',
	data: [
	'[FEATURE] Add delay option',
	'[FEATURE] Add option to deactivate the episode prediction',
	'[BUGFIX] Use reading in texts for manga',
	'[BUGFIX] Fix miniMAL popup size for firefox nightly'
	]
},
{
	title: '0.2.6',
	data: [
	'[FEATURE] Switch confirm to flashConfirm',
	'[TASK] Hopefully fix miniMAL not loading in firefox nightly'
	]
},
{
	title: '0.2.5',
	data: [
	'[FEATURE] Add episode prediction',
	'[FEATURE] Enlarge thumbnails on character, people and search pages',
	'[TASK] Add the possibility to deactivate saving urls to MAL tags',
	'[BUGFIX] Fix MAL Search returning no results',
	'[BUGFIX] Fix firefox popup too small'
	]
},
{
	title: '0.2.4',
	data: [
	'[TASK] Bugfixes',
	'[TASK] Set miniMAL popup height to 600px',
	'[FEATURE] Add databaseRequest'
	]
},
{
	title: '0.2.3',
	data: [
	'[BUGFIX] Handle alternative MAL url',
	'[TASK] Update badges'
	]
},
{
	title: '0.2.2',
	data: [
	'[BUGFIX] miniMAL form update not working',
	'[BUGFIX] Crunchyroll video page not working in firefox'
	]
},
{
	title: '0.2.1',
	data: [
	'[BUGFIX] Firefox not loading',
	]
},
{
	title: '0.2.0',
	data: [
	'[FEATURE] Use extensions sync storage',
	'[FEATURE] Support classic animelists',
	'[FEATURE] Add clear cache',
	'[FEATURE] Add Streaming links to miniMAL'
	]
},
{
	title: '0.1.7',
	data: [
	'[FEATURE] Show currently viewed anime in miniMAL popup',
	'[FEATURE] Display bookmarks in miniMAL if no active anime'
	]
},
{
	title: '0.1.6',
	data: [
	'[FEATURE] Add Gogoanime',
	'[FEATURE] Add manual tracking',
	'[TASK] Finish page search',
	'[BUGFIX] Fix mal bookmarks not loading with slow network'
	]
},
{
	title: '0.1.5',
	data: [
	'[FEATURE] Add continue watching links to miniMAL bookmarks',
	'[FEATURE] Add miniMAL information block',
	'[FEATURE] Add miniMAL reviews tab',
	'[FEATURE] Add miniMAL recommendations tab'
	]
},
{
	title: '0.1.4',
	data: [
	'[FEATURE] Add Masteranime',
	'[FEATURE] Add Mangadex',
	'[FEATURE] Add continue watching to miniMAL',
	'[FEATURE] Add ep/status/rating UI to miniMAL'
	]
},
{
	title: '0.1.3',
	data: [
	'Initial Release'
	]
}
];
changelog();
