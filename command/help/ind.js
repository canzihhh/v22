exports.limitcount = (prem, limitCounts) => {
	return`
*γ LIMIT COUNT γ*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` πββοΈ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar π`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

β’ Nama : ${pushname}
β’ Nomor : ${sender.split("@")[0]}
β’ Waktu : ${time}
β’ Serial : ${serialUser}

TERIMAKASIH KAK SUDAH DAFTAR DI DATABASE ZAAN , KETIK .menu 
UNTUK MELIHAT FITUR INI.
`
	}
exports.owner = (botname) =>{
	return` πββοΈ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`πββοΈ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`β οΈ Bot bukan admin grup`
	}
exports.err = () =>{
	return`β οΈ MAAF FITUR SEDANG EROR !`
	}
exports.group = () =>{
	return`πββοΈ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`β³ Sedang di proses ~`
	}
exports.ok = () =>{
	return` β OKE SUKSES :] ~`
	}
exports.welcome = () =>{
	return`HALO~
	
	π°ASSALAMUALAIKUM π°

	HALO SAYA BOT YANG DI PROGRAM OLEH CANDRA & ZAAN
	 
	 β»οΈ DIBOT INI BANYAK FITUR-FITUR MENARIK
	
	 π JIKA MAU MENGGUNAKAN BOOT INI TOLONG TEKAN ( .menu )
	
	β οΈ TOLONG JANGAN SPAM BOOT NYA YAA`
      }
exports.leave = () =>{
	return`
β
β°β α¬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, SELAMAT ${salam}

β­ββ¬£ *List Menu*
β β’ ${prefix}menu
β β’ ${prefix}help
β β’ ${prefix}haruka
β
β *Download*
β β’ ${prefix}play [query]
β β’ ${prefix}song [judul lagu]
β β’ ${prefix}pinterest [query]
β β’ ${prefix}ytmp3 [url]
β β’ ${prefix}ytmp4 [url]
β β’ ${prefix}tiktok [url]
β β’ ${prefix}tiktoknowm [url]
β β’ ${prefix}tiktokwm [url]
β β’ ${prefix}tiktokaudio [url]
β β’ ${prefix}soundcloud [url]
β β’ ${prefix}telesticker [url]
β β’ ${prefix}spotify [url]
β β’ ${prefix}spotifysearch [query]
β β’ ${prefix}nhentai [code]
β β’ ${prefix}nhentaipdf [code]
β β’ ${prefix}nhentaisearch [query]
β
β *Convert*
β β’ ${prefix}stiker [video/image]
β β’ ${prefix}semoji π
β β’ ${prefix}smeme [text]
β β’ ${prefix}memegen [text|text2]
β β’ ${prefix}fast [video/vn]
β β’ ${prefix}tupai [video/vn]
β β’ ${prefix}vibra [video/vn]
β β’ ${prefix}robot [video/vn]
β β’ ${prefix}slow [video/vn]
β β’ ${prefix}bass [video/vn]
β β’ ${prefix}nightcore [video/vn]
β
β *Education*
β β’ ${prefix}nuliskiri [text]
β β’ ${prefix}nuliskanan [text]
β β’ ${prefix}foliokiri [text]
β β’ ${prefix}foliokanan [text]
β
β *Islamic*
β β’ ${prefix}listsurah
β β’ ${prefix}alquran
β β’ ${prefix}asmaulhusna
β β’ ${prefix}kisahnabi
β β’ ${prefix}alquranaudio
β β’ ${prefix}jadwalsholat
β
β *For wibu*
β β’ ${prefix}nami 
β β’ ${prefix}copper 
β β’ ${prefix}naruto  
β β’ ${prefix}zoro 
β β’ ${prefix}ussop 
β β’ ${prefix}minato 
β β’ ${prefix}sasuke 
β β’ ${prefix}sakura
β β’ ${prefix}luffy 
β β’ ${prefix}sanji  
β β’ ${prefix}boruto 
β β’ ${prefix}sarada 
β β’ ${prefix}mitsuki 
β β’ ${prefix}orochimaru 
β β’ ${prefix}tsunade 
β β’ ${prefix}kakashi 
β β’ ${prefix}killua 
β β’ ${prefix}gon 
β β’ ${prefix}rimuru 
β β’ ${prefix}sagiri 
β β’ ${prefix}natsu 
β β’ ${prefix}tanjirou 
β β’ ${prefix}nezuko 
β β’ ${prefix}senku
β
β *Maker Ephoto360*
β β’ ${prefix}wetglass
β β’ ${prefix}multicolor3d
β β’ ${prefix}watercolor
β β’ ${prefix}luxurygold
β β’ ${prefix}galaxywallpaper
β β’ ${prefix}lighttext
β β’ ${prefix}beautifulflower
β β’ ${prefix}puppycute
β β’ ${prefix}royaltext
β β’ ${prefix}heartshaped
β β’ ${prefix}birthdaycake
β β’ ${prefix}galaxystyle
β β’ ${prefix}hologram3d
β β’ ${prefix}greenneon
β β’ ${prefix}glossychrome
β β’ ${prefix}greenbush
β β’ ${prefix}metallogo
β β’ ${prefix}noeltext
β β’ ${prefix}glittergold
β β’ ${prefix}textcake
β β’ ${prefix}starsnight
β β’ ${prefix}wooden3d
β β’ ${prefix}textbyname
β β’ ${prefix}writegalacy
β β’ ${prefix}galaxybat
β β’ ${prefix}snow3d
β β’ ${prefix}birthdayday
β β’ ${prefix}goldplaybutton
β β’ ${prefix}silverplaybutton
β β’ ${prefix}freefire
β
β *Maker TextPro*
β β’ ${prefix}blackpink
β β’ ${prefix}neon
β β’ ${prefix}greenneon
β β’ ${prefix}advanceglow
β β’ ${prefix}futureneon
β β’ ${prefix}sandwriting
β β’ ${prefix}sandsummer
β β’ ${prefix}sandengraved
β β’ ${prefix}metaldark
β β’ ${prefix}neonlight
β β’ ${prefix}holographic
β β’ ${prefix}text1917
β β’ ${prefix}minion
β β’ ${prefix}deluxesilver
β β’ ${prefix}newyearcard
β β’ ${prefix}bloodfrosted
β β’ ${prefix}halloween
β β’ ${prefix}jokerlogo
β β’ ${prefix}fireworksparkle
β β’ ${prefix}natureleaves
β β’ ${prefix}bokeh
β β’ ${prefix}toxic
β β’ ${prefix}strawberry
β β’ ${prefix}box3d
β β’ ${prefix}roadwarning
β β’ ${prefix}breakwall
β β’ ${prefix}icecold
β β’ ${prefix}luxury
β β’ ${prefix}cloud
β β’ ${prefix}summersand
β β’ ${prefix}horrorblood
β β’ ${prefix}thunder
β
β *Game*
β β’ ${prefix}tebakgambar 
β
β *Anime search*
β β’ ${prefix}character [anime]
β β’ ${prefix}anime [query]
β β’ ${prefix}manga [query]
β β’ ${prefix}kusonime [query]
β β’ ${prefix}kusonimesearch [query]
β β’ ${prefix}otakudesu [query]
β β’ ${prefix}otakudesusearch [query] 
β
β *Random text*
β β’ ${prefix}pantun 
β β’ ${prefix}puisi 
β β’ ${prefix}bucinquote 
β β’ ${prefix}dilanquote 
β β’ ${prefix}katasenja 
β β’ ${prefix}motivasi
β β’ ${prefix}randomquote
β β’ ${prefix}quotemuslim
β β’ ${prefix}quotesgalau
β β’ ${prefix}creepyfact
β β’ ${prefix}cerpen
β β’ ${prefix}cersex
β β’ ${prefix}cersex2
β β’ ${prefix}huluh [text]
β β’ ${prefix}hilih [text]
β β’ ${prefix}heleh [text]
β β’ ${prefix}halah [text]
β β’ ${prefix}reversetext [text]
β β’ ${prefix}cercreepy
β β’ ${prefix}faktaunik
β β’ ${prefix}quotetrump
β β’ ${prefix}animequote
β β’ ${prefix}animequote2
β β’ ${prefix}trumpthink
β
β *Info*
β β’ ${prefix}owner
β β’ ${prefix}daftar
β
β *Owner*
β β’ ${prefix}broadcast [text]
β β’ ${prefix}leave
β β’ ${prefix}antidelete [on/off]
β β’ ${prefix}anticall [on/off]
β β’ >
β β’ $
β β’  => 
β
β *Group*
β β’ ${prefix}sider [reply pesan bot]
β β’ ${prefix}listonline
β β’ ${prefix}delete [reply pesan bot]
β β’ ${prefix}antilink 1 / 0
β β’ ${prefix}hidetag [text]
β β’ ${prefix}linkgrup
β β’ ${prefix}tagall
β β’ ${prefix}kick @tag
β β’ ${prefix}setdesc [text] 
β β’ ${prefix}setname [text]
β  SKRIP INI DIBUAT OLEH CANDRA-ZAAN 
β°ββ¬£
`
	}