/* CHUNITHM Rate Analyzer STAR (C) zk_phi 2017-*/

var CRA_VERSION = 170917;

/* All resources must be provided via HTTPS (to avoid "mixedcontent") */
var DEPENDENCIES = [
    "https://platform.twitter.com/widgets.js", // Twitter tweet/follow button
    "https://cdn.jsdelivr.net/npm/vue"         // Vue.js
];

var LEVEL_ID = { basic: 0, advance: 1, expert: 2, master: 3, worldsend: 4 };

var CHART_LIST = [
    /*  内部ID              譜面定数 (EXP, MAS)        タイトル */
    { id:   3, difficulty: {          3: 11.8 }, name: "B.B.K.K.B.K.K." },
    { id:   5, difficulty: {          3: 11.3 }, name: "Scatman (Ski Ba Bop Ba Dop Bop)" },
    { id:   6, difficulty: {          3: 12.3 }, name: "Reach for the Stars" },
    { id:   7, difficulty: { 2: 12.0, 3: 13.4 }, name: "初音ミクの消失" },
    { id:   9, difficulty: {          3: 12.0 }, name: "情熱大陸" },
    { id:  10, difficulty: {          3: 11.7 }, name: "All I Want" },
    { id:  12, difficulty: {                  }, name: "紅蓮の弓矢" },
    { id:  14, difficulty: {          3: 11.0 }, name: "コネクト" },
    { id:  17, difficulty: {          3: 11.2 }, name: "空色デイズ" },
    { id:  18, difficulty: {          3: 11.4 }, name: "千本桜" },
    { id:  19, difficulty: { 2: 11.0, 3: 13.2 }, name: "DRAGONLADY" },
    { id:  20, difficulty: {          3: 12.8 }, name: "taboo tears you up" },
    { id:  21, difficulty: {          3: 11.9 }, name: "ナイト・オブ・ナイツ" },
    { id:  23, difficulty: {          3: 12.1 }, name: "一触即発☆禅ガール" },
    { id:  27, difficulty: {          3: 12.5 }, name: "タイガーランペイジ" },
    { id:  28, difficulty: {                  }, name: "Pursuing My True Self" },
    { id:  33, difficulty: {          3: 13.0 }, name: "Blue Noise" },
    { id:  35, difficulty: {          3: 12.4 }, name: "Lapis" },
    { id:  36, difficulty: {          3: 11.0 }, name: "届かない恋 '13" },
    { id:  37, difficulty: {          3: 11.3 }, name: "鳥の詩" },
    { id:  38, difficulty: {          3: 11.1 }, name: "天ノ弱" },
    { id:  41, difficulty: {          3: 11.6 }, name: "sweet little sister" },
    { id:  42, difficulty: {          3: 11.6 }, name: "oath sign" },
    { id:  43, difficulty: {                  }, name: "太陽曰く燃えよカオス" },
    { id:  45, difficulty: {          3: 12.2 }, name: "L9" },
    { id:  46, difficulty: {                  }, name: "Bad Apple!! feat.nomico" },
    { id:  47, difficulty: {          3: 12.0 }, name: "六兆年と一夜物語" },
    { id:  48, difficulty: {          3: 11.8 }, name: "Unlimited Spark!" },
    { id:  49, difficulty: {                  }, name: "エピクロスの虹はもう見えない" },
    { id:  51, difficulty: {          3: 12.8 }, name: "My First Phone" },
    { id:  52, difficulty: { 2: 11.1, 3: 13.2 }, name: "Cyberozar" },
    { id:  53, difficulty: {          3: 12.3 }, name: "Teriqma" },
    { id:  54, difficulty: {                  }, name: "ブルーバード" },
    { id:  55, difficulty: {          3: 11.2 }, name: "夏祭り" },
    { id:  56, difficulty: {          3: 11.0 }, name: "そばかす" },
    { id:  57, difficulty: {                  }, name: "STAY AWAY" },
    { id:  58, difficulty: {                  }, name: "魂のルフラン" },
    { id:  59, difficulty: {                  }, name: "Invitation" },
    { id:  60, difficulty: {          3: 11.4 }, name: "only my railgun" },
    { id:  61, difficulty: { 2: 11.0, 3: 13.6 }, name: "GOLDEN RULE" },
    { id:  62, difficulty: {          3: 12.4 }, name: "名も無い鳥" },
    { id:  63, difficulty: { 2: 11.7, 3: 13.2 }, name: "Gate of Fate" },
    { id:  64, difficulty: {          3: 12.8 }, name: "今ぞ♡崇め奉れ☆オマエらよ！！～姫の秘メタル渇望～" },
    { id:  65, difficulty: {          3: 11.1 }, name: "Anemone" },
    { id:  66, difficulty: {          3: 12.3 }, name: "明るい未来" },
    { id:  67, difficulty: {          3: 11.2 }, name: "昵懇レファレンス" },
    { id:  68, difficulty: {          3: 11.5 }, name: "乗り切れ受験ウォーズ" },
    { id:  69, difficulty: { 2: 11.9, 3: 13.3 }, name: "The wheel to the right" },
    { id:  70, difficulty: {          3: 12.4 }, name: "STAR" },
    { id:  71, difficulty: {          3: 12.3 }, name: "Infantoon Fantasy" },
    { id:  72, difficulty: {          3: 13.5 }, name: "Genesis" },
    { id:  73, difficulty: {          3: 12.7 }, name: "MUSIC PЯAYER" },
    { id:  74, difficulty: {          3: 11.0 }, name: "リリーシア" },
    { id:  75, difficulty: {          3: 11.7 }, name: "Counselor" },
    { id:  76, difficulty: { 2: 11.8, 3: 13.4 }, name: "luna blu" },
    { id:  77, difficulty: {          3: 12.8 }, name: "ケモノガル" },
    { id:  78, difficulty: {                  }, name: "crossing field" },
    { id:  79, difficulty: {          3: 11.1 }, name: "ＧＯ！ＧＯ！ラブリズム♥" },
    { id:  80, difficulty: {                  }, name: "Grab your sword" },
    { id:  82, difficulty: {          3: 12.5 }, name: "Memories of Sun and Moon" },
    { id:  83, difficulty: {          3: 12.2 }, name: "ロストワンの号哭" },
    { id:  84, difficulty: {                  }, name: "V.I.P" },
    { id:  85, difficulty: {                  }, name: "睡蓮花" },
    { id:  88, difficulty: {          3: 12.1 }, name: "The Concept of Love" },
    { id:  89, difficulty: {          3: 11.0 }, name: "JET" },
    { id:  90, difficulty: { 2: 11.7, 3: 13.3 }, name: "L'épisode" },
    { id:  91, difficulty: {          3: 11.2 }, name: "Yet Another ”drizzly rain”" },
    { id:  92, difficulty: {          3: 12.9 }, name: "最終鬼畜妹・一部声" },
    { id:  93, difficulty: {          3: 12.3 }, name: "蒼空に舞え、墨染の桜" },
    { id:  94, difficulty: {          3: 12.3 }, name: "セツナトリップ" },
    { id:  95, difficulty: {          3: 12.1 }, name: "砂漠のハンティングガール♡" },
    { id:  96, difficulty: {          3: 11.9 }, name: "チルノのパーフェクトさんすう教室" },
    { id:  97, difficulty: {                  }, name: "Help me, ERINNNNNN!!" },
    { id:  98, difficulty: {          3: 11.4 }, name: "魔理沙は大変なものを盗んでいきました" },
    { id:  99, difficulty: {          3: 11.7 }, name: "言ノ葉カルマ" },
    { id: 100, difficulty: {                  }, name: "After the rain" },
    { id: 101, difficulty: {          3: 12.9 }, name: "Tango Rouge" },
    { id: 102, difficulty: {          3: 12.5 }, name: "Tuning Rangers" },
    { id: 103, difficulty: { 2: 11.7, 3: 13.7 }, name: "エンドマークに希望と涙を添えて" },
    { id: 104, difficulty: {          3: 12.5 }, name: "とーきょー全域★アキハバラ？" },
    { id: 105, difficulty: {                  }, name: "overcome" },
    { id: 106, difficulty: { 2: 12.2, 3: 13.8 }, name: "宛城、炎上！！" },
    { id: 107, difficulty: {          3: 13.0 }, name: "We Gonna Journey" },
    { id: 108, difficulty: {          3: 12.0 }, name: "The ether" },
    { id: 109, difficulty: {                  }, name: "Emotions" },
    { id: 110, difficulty: {          3: 11.2 }, name: "Magia" },
    { id: 111, difficulty: {          3: 11.3 }, name: "staple stable" },
    { id: 112, difficulty: {          3: 11.0 }, name: "マジLOVE1000%" },
    { id: 113, difficulty: {          3: 11.4 }, name: "ストリーミングハート" },
    { id: 114, difficulty: {          3: 11.4 }, name: "Sweet Devil" },
    { id: 115, difficulty: {          3: 11.5 }, name: "Dreaming" },
    { id: 116, difficulty: {                  }, name: "君の知らない物語" },
    { id: 117, difficulty: {          3: 11.5 }, name: "M.S.S.Planet" },
    { id: 118, difficulty: {          3: 12.0 }, name: "腐れ外道とチョコレゐト" },
    { id: 119, difficulty: {          3: 12.3 }, name: "アウターサイエンス" },
    { id: 120, difficulty: {          3: 12.7 }, name: "四次元跳躍機関" },
    { id: 121, difficulty: {          3: 12.7 }, name: "東方妖々夢 ～the maximum moving about～" },
    { id: 122, difficulty: {          3: 12.5 }, name: "少女幻葬戦慄曲　～　Necro Fantasia" },
    { id: 123, difficulty: {                  }, name: "橙の幻想郷音頭" },
    { id: 124, difficulty: {          3: 12.2 }, name: "夏影" },
    { id: 125, difficulty: {          3: 11.0 }, name: "Little Busters! ～TV animation ver.～" },
    { id: 126, difficulty: {          3: 11.3 }, name: "Heart To Heart" },
    { id: 128, difficulty: {          3: 12.7 }, name: "The Formula" },
    { id: 129, difficulty: {          3: 11.2 }, name: "Hacking to the Gate" },
    { id: 130, difficulty: {          3: 11.7 }, name: "スカイクラッドの観測者" },
    { id: 131, difficulty: {          3: 12.6 }, name: "チルドレンレコード" },
    { id: 132, difficulty: {          3: 12.2 }, name: "イカサマライフゲイム" },
    { id: 133, difficulty: {          3: 11.0 }, name: "シリョクケンサ" },
    { id: 134, difficulty: { 2: 11.8, 3: 13.8 }, name: "HAELEQUIN (Original Remaster)" },
    { id: 135, difficulty: {          3: 13.5 }, name: "Vallista" },
    { id: 136, difficulty: {          3: 12.5 }, name: "Äventyr" },
    { id: 137, difficulty: { 2: 11.4, 3: 13.6 }, name: "Angel dust" },
    { id: 138, difficulty: {          3: 13.1 }, name: "conflict" },
    { id: 140, difficulty: {          3: 11.9 }, name: "Guilty" },
    { id: 141, difficulty: { 2: 11.5, 3: 13.4 }, name: "閃鋼のブリューナク" },
    { id: 142, difficulty: {          3: 12.6 }, name: "Altale" },
    { id: 143, difficulty: {                  }, name: "ODDS&ENDS" },
    { id: 144, difficulty: {          3: 13.4 }, name: "Aragami" },
    { id: 145, difficulty: {          3: 11.8 }, name: "Change Our MIRAI！" },
    { id: 146, difficulty: {          3: 11.7 }, name: "夕暮れワンルーム" },
    { id: 147, difficulty: {                  }, name: "こころここから" },
    { id: 148, difficulty: {          3: 11.0 }, name: "Theme of SeelischTact" },
    { id: 149, difficulty: {          3: 11.7 }, name: "緋色のDance" },
    { id: 150, difficulty: {          3: 11.8 }, name: "brilliant better" },
    { id: 151, difficulty: {          3: 12.6 }, name: "Alma" },
    { id: 152, difficulty: { 2: 11.7, 3: 13.0 }, name: "Gustav Battle" },
    { id: 154, difficulty: {          3: 12.8 }, name: "SAVIOR OF SONG" },
    { id: 155, difficulty: {                  }, name: "ブルー・フィールド" },
    { id: 156, difficulty: {          3: 11.4 }, name: "FREELY TOMORROW" },
    { id: 157, difficulty: {          3: 12.9 }, name: "ギガンティックO.T.N" },
    { id: 158, difficulty: {          3: 11.0 }, name: "フォルテシモBELL" },
    { id: 159, difficulty: {          3: 13.3 }, name: "ジングルベル" },
    { id: 160, difficulty: {          3: 11.6 }, name: "言ノ葉遊戯" },
    { id: 161, difficulty: {          3: 12.5 }, name: "私の中の幻想的世界観及びその顕現を想起させたある現実での出来事に関する一考察" },
    { id: 163, difficulty: {          3: 11.3 }, name: "幾四音-Ixion-" },
    { id: 165, difficulty: {          3: 12.8 }, name: "ぼくらの16bit戦争" },
    { id: 166, difficulty: {          3: 11.8 }, name: "裏表ラバーズ" },
    { id: 167, difficulty: {          3: 12.7 }, name: "脳漿炸裂ガール" },
    { id: 168, difficulty: {          3: 11.9 }, name: "ネトゲ廃人シュプレヒコール" },
    { id: 169, difficulty: {          3: 11.4 }, name: "elegante" },
    { id: 170, difficulty: {          3: 11.2 }, name: "DETARAME ROCK&ROLL THEORY" },
    { id: 171, difficulty: {          3: 12.4 }, name: "XL TECHNO" },
    { id: 173, difficulty: {          3: 13.1 }, name: "Halcyon" },
    { id: 176, difficulty: {          3: 11.3 }, name: "Dance!" },
    { id: 177, difficulty: {          3: 12.7 }, name: "Jimang Shot" },
    { id: 178, difficulty: {          3: 12.7 }, name: "stella=steLLa" },
    { id: 179, difficulty: {          3: 11.3 }, name: "すろぉもぉしょん" },
    { id: 180, difficulty: { 2: 12.4, 3: 13.9 }, name: "怒槌" },
    { id: 181, difficulty: {                  }, name: "ユクエシレズ" },
    { id: 182, difficulty: {                  }, name: "WHITE ALBUM Live at Campus Fes" },
    { id: 184, difficulty: {                  }, name: "Last regrets" },
    { id: 185, difficulty: {          3: 11.2 }, name: "楽園の翼" },
    { id: 186, difficulty: {          3: 11.9 }, name: "ってゐ！　～えいえんてゐVer～" },
    { id: 187, difficulty: { 2: 11.2, 3: 13.1 }, name: "患部で止まってすぐ溶ける～狂気の優曇華院" },
    { id: 189, difficulty: {          3: 12.7 }, name: "ひれ伏せ愚民どもっ！" },
    { id: 190, difficulty: {          3: 12.6 }, name: "エテルニタス・ルドロジー" },
    { id: 191, difficulty: {          3: 11.7 }, name: "幽闇に目醒めしは" },
    { id: 192, difficulty: {          3: 12.6 }, name: "Starlight Vision" },
    { id: 193, difficulty: {          3: 12.5 }, name: "Club Ibuki in Break All" },
    { id: 194, difficulty: {          3: 13.0 }, name: "Phantasm Brigade" },
    { id: 195, difficulty: {          3: 12.3 }, name: "永遠のメロディ" },
    { id: 196, difficulty: { 2: 11.9, 3: 13.7 }, name: "FREEDOM DiVE" },
    { id: 197, difficulty: { 2: 11.7, 3: 13.1 }, name: "Jack-the-Ripper◆" },
    { id: 199, difficulty: {          3: 12.1 }, name: "ハート・ビート" },
    { id: 200, difficulty: {          3: 12.1 }, name: "無敵We are one!!" },
    { id: 201, difficulty: { 2: 12.4, 3: 13.9 }, name: "Contrapasso -inferno-" },
    { id: 202, difficulty: { 2: 11.2, 3: 13.1 }, name: "GEMINI -C-" },
    { id: 203, difficulty: {          3: 12.0 }, name: "FLOWER" },
    { id: 204, difficulty: {          3: 11.2 }, name: "ちくわパフェだよ☆CKP" },
    { id: 205, difficulty: {          3: 12.7 }, name: "SNIPE WHOLE" },
    { id: 206, difficulty: {          3: 11.4 }, name: "Signs Of Love (“Never More” ver.)" },
    { id: 207, difficulty: {          3: 11.7 }, name: "Your Affection (Daisuke Asakura Remix)" },
    { id: 208, difficulty: {          3: 12.7 }, name: "SAMBISTA" },
    { id: 209, difficulty: {          3: 11.7 }, name: "君色シグナル" },
    { id: 210, difficulty: {          3: 12.4 }, name: "アスノヨゾラ哨戒班" },
    { id: 211, difficulty: {          3: 12.2 }, name: "天樂" },
    { id: 212, difficulty: {          3: 12.1 }, name: "いろは唄" },
    { id: 213, difficulty: {          3: 11.9 }, name: "星屑ユートピア" },
    { id: 214, difficulty: {          3: 11.8 }, name: "青春はNon-Stop！" },
    { id: 215, difficulty: {          3: 12.4 }, name: "Falling Roses" },
    { id: 216, difficulty: {          3: 12.3 }, name: "放課後革命" },
    { id: 217, difficulty: {          3: 11.8 }, name: "楽園ファンファーレ" },
    { id: 218, difficulty: {          3: 12.4 }, name: "サウンドプレイヤー" },
    { id: 219, difficulty: { 2: 12.7, 3: 13.9 }, name: "玩具狂奏曲 -終焉-" },
    { id: 220, difficulty: {          3: 12.3 }, name: "如月アテンション" },
    { id: 222, difficulty: {          3: 12.9 }, name: "Mr. Wonderland" },
    { id: 223, difficulty: { 2: 11.0, 3: 13.0 }, name: "カミサマネジマキ" },
    { id: 224, difficulty: {          3: 11.1 }, name: "恋愛裁判" },
    { id: 225, difficulty: {          3: 12.1 }, name: "ウミユリ海底譚" },
    { id: 226, difficulty: { 2: 12.3, 3: 13.8 }, name: "Garakuta Doll Play" },
    { id: 227, difficulty: {          3: 11.5 }, name: "洗脳" },
    { id: 228, difficulty: {          3: 12.0 }, name: "このふざけた素晴らしき世界は、僕の為にある" },
    { id: 229, difficulty: { 2: 11.9, 3: 13.4 }, name: "紅華刑" },
    { id: 230, difficulty: {          3: 12.5 }, name: "Hyperion" },
    { id: 231, difficulty: {                  }, name: "カラフル。" },
    { id: 232, difficulty: { 2: 11.3, 3: 13.4 }, name: "Elemental Creation" },
    { id: 233, difficulty: {          3: 12.2 }, name: "アルストロメリア" },
    { id: 234, difficulty: { 2: 12.2, 3: 13.9 }, name: "Devastating Blaster" },
    { id: 235, difficulty: {          3: 12.5 }, name: "ファッとして桃源郷" },
    { id: 238, difficulty: {          3: 11.9 }, name: "フレンズ" },
    { id: 240, difficulty: {          3: 12.6 }, name: "夜咄ディセイブ" },
    { id: 243, difficulty: {          3: 12.2 }, name: "シュガーソングとビターステップ" },
    { id: 244, difficulty: {          3: 12.3 }, name: "回レ！雪月花" },
    { id: 245, difficulty: {          3: 11.4 }, name: "Help me, あーりん！" },
    { id: 246, difficulty: {          3: 12.8 }, name: "なるとなぎのパーフェクトロックンロール教室" },
    { id: 247, difficulty: {          3: 11.7 }, name: "絶世スターゲイト" },
    { id: 248, difficulty: { 2: 12.3, 3: 13.9 }, name: "Schrecklicher Aufstand" },
    { id: 249, difficulty: {          3: 12.7 }, name: "ドライヴ・オン・ザ・レインボー" },
    { id: 250, difficulty: { 2: 11.8, 3: 13.4 }, name: "Philosopher" },
    { id: 251, difficulty: {          3: 12.5 }, name: "Crazy ∞ nighT" },
    { id: 252, difficulty: {          3: 12.3 }, name: "愛迷エレジー" },
    { id: 253, difficulty: {          3: 13.1 }, name: "Warcry" },
    { id: 254, difficulty: {          3: 11.7 }, name: "その群青が愛しかったようだった" },
    { id: 255, difficulty: {          3: 11.0 }, name: "激情！ミルキィ大作戦" },
    { id: 256, difficulty: {          3: 12.7 }, name: "札付きのワル　～マイケルのうた～" },
    { id: 257, difficulty: {          3: 13.0 }, name: "BOKUTO" },
    { id: 258, difficulty: { 2: 12.8, 3: 14.0 }, name: "TiamaT:F minor" },
    { id: 259, difficulty: { 2: 11.3, 3: 13.0 }, name: "Oshama Scramble! (Cranky Remix)" },
    { id: 260, difficulty: {          3: 12.4 }, name: "D.E.A.D.L.Y." },
    { id: 261, difficulty: {          3: 12.3 }, name: "ロボットプラネットユートピア" },
    { id: 262, difficulty: {          3: 13.5 }, name: "Tidal Wave" },
    { id: 263, difficulty: {          3: 11.7 }, name: "Hand in Hand" },
    { id: 264, difficulty: {          3: 12.2 }, name: "My Dearest Song" },
    { id: 265, difficulty: {          3: 12.3 }, name: "猫祭り" },
    { id: 266, difficulty: {          3: 12.7 }, name: "ゲシュタルト！テスト期間！！" },
    { id: 267, difficulty: {          3: 11.5 }, name: "心象蜃気楼" },
    { id: 268, difficulty: {          3: 12.8 }, name: "Bang Babang Bang!!!" },
    { id: 269, difficulty: {          3: 11.1 }, name: "僕らの翼" },
    { id: 270, difficulty: {          3: 12.3 }, name: "エンヴィキャットウォーク" },
    { id: 271, difficulty: {          3: 12.8 }, name: "鬼KYOKAN" },
    { id: 272, difficulty: {          3: 11.7 }, name: "有頂天ビバーチェ" },
    { id: 273, difficulty: {          3: 11.9 }, name: "ビバハピ" },
    { id: 274, difficulty: {                  }, name: "願い星" },
    { id: 275, difficulty: {          3: 11.5 }, name: "愛言葉" },
    { id: 276, difficulty: {          3: 12.3 }, name: "後夜祭" },
    { id: 277, difficulty: {          3: 12.4 }, name: "TRUST" },
    { id: 278, difficulty: {          3: 11.4 }, name: "からくりピエロ" },
    { id: 279, difficulty: {          3: 11.7 }, name: "深海少女" },
    { id: 280, difficulty: {          3: 11.8 }, name: "リモコン" },
    { id: 281, difficulty: { 2: 11.1, 3: 13.4 }, name: "ラクガキスト" },
    { id: 282, difficulty: {          3: 11.7 }, name: "アカツキアライヴァル" },
    { id: 283, difficulty: {          3: 12.0 }, name: "神曲" },
    { id: 284, difficulty: {          3: 12.7 }, name: "幸せになれる隠しコマンドがあるらしい" },
    { id: 286, difficulty: {          3: 11.5 }, name: "Tell Your World" },
    { id: 287, difficulty: {          3: 11.9 }, name: "ロミオとシンデレラ" },
    { id: 288, difficulty: {          3: 11.6 }, name: "First Twinkle" },
    { id: 289, difficulty: {          3: 12.7 }, name: "ウソラセラ" },
    { id: 290, difficulty: {          3: 11.3 }, name: "檄!帝国華撃団" },
    { id: 291, difficulty: {          3: 12.4 }, name: "Kronos" },
    { id: 292, difficulty: {          3: 12.1 }, name: "月に叢雲華に風" },
    { id: 293, difficulty: {          3: 13.2 }, name: "インビジブル" },
    { id: 294, difficulty: {          3: 13.0 }, name: "人生リセットボタン" },
    { id: 295, difficulty: {          3: 12.0 }, name: "響" },
    { id: 296, difficulty: {          3: 12.1 }, name: "かくしん的☆めたまるふぉ～ぜっ!" },
    { id: 297, difficulty: {          3: 12.3 }, name: "風仁雷仁" },
    { id: 298, difficulty: {          3: 12.6 }, name: "PRIVATE SERVICE" },
    { id: 299, difficulty: {          3: 11.4 }, name: "secret base ～君がくれたもの～ (10 years after Ver.)" },
    { id: 300, difficulty: {          3: 12.2 }, name: "No Routine" },
    { id: 301, difficulty: {          3: 12.2 }, name: "白い雪のプリンセスは" },
    { id: 302, difficulty: { 2: 11.0, 3: 13.3 }, name: "Strahv" },
    { id: 303, difficulty: {                  }, name: "Dreams Dreams:Kids Ver." },
    { id: 304, difficulty: {          3: 11.7 }, name: "In The Blue Sky '01" },
    { id: 305, difficulty: { 2: 11.0, 3: 13.2 }, name: "幻想のサテライト" },
    { id: 306, difficulty: {          3: 12.2 }, name: "凛として咲く花の如く" },
    { id: 307, difficulty: {          3: 12.7 }, name: "Paqqin" },
    { id: 308, difficulty: {          3: 11.9 }, name: "fake!fake!" },
    { id: 309, difficulty: {          3: 12.5 }, name: "Rising Hope" },
    { id: 310, difficulty: { 2: 11.2, 3: 13.3 }, name: "覚醒楽奏メタフィクション" },
    { id: 311, difficulty: {          3: 11.8 }, name: "Be My Friend" },
    { id: 312, difficulty: { 2: 11.0, 3: 13.3 }, name: "ぶいえす!!らいばる!!" },
    { id: 313, difficulty: {          3: 11.4 }, name: "ひだまりデイズ" },
    { id: 314, difficulty: {          3: 11.8 }, name: "This game" },
    { id: 315, difficulty: {          3: 11.3 }, name: "オラシオン" },
    { id: 316, difficulty: {          3: 11.5 }, name: "みくみくにしてあげる♪【してやんよ】" },
    { id: 317, difficulty: {          3: 13.2 }, name: "Air" },
    { id: 318, difficulty: {          3: 13.0 }, name: "DataErr0r" },
    { id: 319, difficulty: {          3: 12.6 }, name: "Say A Vengeance" },
    { id: 320, difficulty: {          3: 12.6 }, name: "010" },
    { id: 321, difficulty: {          3: 12.5 }, name: "ERIS -Legend of Gaidelia-" },
    { id: 322, difficulty: {          3: 13.6 }, name: "Imperishable Night 2006 (2016 Refine)" },
    { id: 323, difficulty: {          3: 13.5 }, name: "Dreadnought" },
    { id: 324, difficulty: {          3: 12.6 }, name: "STAGER" },
    { id: 325, difficulty: {          3: 12.6 }, name: "Her Majesty" },
    { id: 326, difficulty: {          3: 12.5 }, name: "Sakura Fubuki" },
    { id: 327, difficulty: {          3: 12.7 }, name: "JULIAN" },
    { id: 328, difficulty: { 2: 11.4, 3: 13.7 }, name: "★LittlE HearTs★" },
    { id: 329, difficulty: {          3: 12.3 }, name: "STAIRWAY TO GENERATION" },
    { id: 330, difficulty: {          3: 12.1 }, name: "ドキドキDREAM!!!" },
    { id: 331, difficulty: {          3: 12.2 }, name: "猛進ソリストライフ！" },
    { id: 332, difficulty: {          3: 12.3 }, name: "空威張りビヘイビア" },
    { id: 334, difficulty: {          3: 12.4 }, name: "FLOATED CALM" },
    { id: 335, difficulty: {          3: 13.4 }, name: "Supersonic Generation" },
    { id: 336, difficulty: {          3: 12.2 }, name: "シジョウノコエ VOCALO ver." },
    { id: 337, difficulty: {                  }, name: "Tic Tac DREAMIN’" },
    { id: 338, difficulty: {          3: 12.3 }, name: "SPICY SWINGY STYLE" },
    { id: 339, difficulty: {          3: 11.7 }, name: "RevolutionGame" },
    { id: 340, difficulty: {          3: 12.5 }, name: "Still" },
    { id: 341, difficulty: {          3: 13.1 }, name: "おまかせ！！トラブルメイ娘☆とれびちゃん" },
    { id: 342, difficulty: {          3: 13.5 }, name: "オススメ☆♂♀☆でぃすとぴあ" },
    { id: 343, difficulty: {          3: 11.6 }, name: "Daydream café" },
    { id: 344, difficulty: {          3: 11.7 }, name: "ノーポイッ!" },
    { id: 345, difficulty: {          3: 11.5 }, name: "ムーンライト伝説" },
    { id: 348, difficulty: {          3: 11.3 }, name: "Jumping!!" },
    { id: 349, difficulty: {                  }, name: "極上スマイル" },
    { id: 350, difficulty: {          3: 12.7 }, name: "FEEL×ALIVE" },
    { id: 351, difficulty: {          3: 12.9 }, name: "ぶぉん！ぶぉん！らいど・おん！" },
    { id: 352, difficulty: {          3: 12.1 }, name: "Star☆Glitter" },
    { id: 353, difficulty: {                  }, name: "H-A-J-I-M-A-R-I-U-T-A-!!" },
    { id: 354, difficulty: {          3: 12.3 }, name: "ラブリー☆えんじぇる!!" },
    { id: 355, difficulty: {                  }, name: "だんご大家族" },
    { id: 356, difficulty: {          3: 12.3 }, name: "クローバー♣かくめーしょん" },
    { id: 357, difficulty: {          3: 11.7 }, name: "ぐーちょきパレード" },
    { id: 358, difficulty: {          3: 11.7 }, name: "My Soul,Your Beats!" },
    { id: 359, difficulty: {          3: 11.8 }, name: "Thousand Enemies" },
    { id: 360, difficulty: {          3: 11.3 }, name: "夢想歌" },
    { id: 362, difficulty: {          3: 12.1 }, name: "Face of Fact" },
    { id: 363, difficulty: {          3: 11.6 }, name: "true my heart -Lovable mix-" },
    { id: 365, difficulty: {                  }, name: "桜ノ雨" },
    { id: 367, difficulty: {          3: 11.7 }, name: "いーあるふぁんくらぶ" },
    { id: 368, difficulty: {          3: 12.8 }, name: "おこちゃま戦争" },
    { id: 369, difficulty: {          3: 11.7 }, name: "エイリアンエイリアン" },
    { id: 370, difficulty: {          3: 12.4 }, name: "虎視眈々" },
    { id: 371, difficulty: {          3: 12.7 }, name: "アンハッピーリフレイン" },
    { id: 372, difficulty: {          3: 12.2 }, name: "すきなことだけでいいです" },
    { id: 373, difficulty: {          3: 12.4 }, name: "デリヘル呼んだら君が来た" },
    { id: 374, difficulty: {          3: 12.5 }, name: "チュルリラ・チュルリラ・ダッダッダ！" },
    { id: 375, difficulty: {          3: 11.5 }, name: "だんだん早くなる" },
    { id: 376, difficulty: {          3: 12.2 }, name: "ECHO" },
    { id: 377, difficulty: {          3: 11.5 }, name: "泡沫、哀のまほろば" },
    { id: 379, difficulty: {          3: 11.8 }, name: "愛き夜道 feat. ランコ、雨天決行" },
    { id: 380, difficulty: {          3: 11.4 }, name: "Starlight Dance Floor" },
    { id: 381, difficulty: {          3: 12.0 }, name: "Witches night" },
    { id: 382, difficulty: {          3: 12.2 }, name: "Help me, ERINNNNNN!! -Cranky remix-" },
    { id: 383, difficulty: {          3: 12.6 }, name: "仙酌絶唱のファンタジア" },
    { id: 384, difficulty: {          3: 12.4 }, name: "キュアリアス光吉古牌　－祭－" },
    { id: 385, difficulty: {          3: 13.4 }, name: "Evans" },
    { id: 386, difficulty: { 2: 12.5, 3: 13.9 }, name: "神威" },
    { id: 388, difficulty: {          3: 13.3 }, name: "GOODTEK" },
    { id: 389, difficulty: {          3: 13.5 }, name: "Name of oath" },
    { id: 390, difficulty: {          3: 12.2 }, name: "Bird Sprite" },
    { id: 393, difficulty: {          3: 13.8 }, name: "Dengeki Tube" },
    { id: 394, difficulty: {          3: 11.7 }, name: "若い力 -SEGA HARD GIRLS MIX-" },
    { id: 395, difficulty: {          3: 11.9 }, name: "レッツゴー!陰陽師" },
    { id: 396, difficulty: {          3: 12.1 }, name: "あねぺったん" },
    { id: 397, difficulty: {          3: 13.5 }, name: "Like the Wind [Reborn]" },
    { id: 398, difficulty: {          3: 11.8 }, name: "天国と地獄 -言ノ葉リンネ-" },
    { id: 399, difficulty: {          3: 12.6 }, name: "最愛テトラグラマトン" },
    { id: 402, difficulty: {          3: 12.2 }, name: "悪戯" },
    { id: 403, difficulty: {          3: 11.2 }, name: "りばーぶ" },
    { id: 404, difficulty: {          3: 12.0 }, name: "Barbed Eye" },
    { id: 405, difficulty: {          3: 13.2 }, name: "分からない" },
    { id: 406, difficulty: {                  }, name: "相思創愛" },
    { id: 407, difficulty: { 2: 13.0, 3: 14.0 }, name: "混沌を越えし我らが神聖なる調律主を讃えよ" },
    { id: 409, difficulty: {          3: 13.8 }, name: "Finite" },
    { id: 410, difficulty: {          3: 12.7 }, name: "MY LIBERATION" },
    { id: 411, difficulty: {          3: 12.3 }, name: "地球最後の告白を" },
    { id: 414, difficulty: { 2: 11.3, 3: 13.4 }, name: "We Gonna Party -Feline Groove Mix-" },
    { id: 416, difficulty: {          3: 12.4 }, name: "Through The Tower" },
    { id: 417, difficulty: {          3: 12.4 }, name: "Redo" },
    { id: 421, difficulty: {                  }, name: "前前前世" },
    { id: 422, difficulty: {                  }, name: "MEMORIA" },
    { id: 424, difficulty: {                  }, name: "MIRU key way" },
    { id: 426, difficulty: {                  }, name: "華鳥風月" },
    { id: 427, difficulty: {                  }, name: "儚きもの人間" },
    { id: 430, difficulty: {                  }, name: "ＧＯ！ＧＯ！ラブリズム♥ ～あーりん書類審査通過記念Ver.～" },
    { id: 432, difficulty: {                  }, name: "光線チューニング" },
    { id: 433, difficulty: {                  }, name: "立川浄穢捕物帳" },
    { id: 434, difficulty: {                  }, name: "眠れぬ夜君を想フ" },
    { id: 435, difficulty: {                  }, name: "JIGOKU STATION CENTRAL GATE" },
    { id: 436, difficulty: {                  }, name: "PinqPiq" },
    { id: 437, difficulty: {                  }, name: "トリスメギストス" },
    { id: 438, difficulty: {                  }, name: "WE GOTTA SOUL" },
    { id: 439, difficulty: {                  }, name: "哀しみ集め" },
    { id: 440, difficulty: {                  }, name: "キラメケ→Shoot it Now!" },
    { id: 441, difficulty: {                  }, name: "Kattobi KEIKYU Rider" },
    { id: 444, difficulty: {                  }, name: "エレクトロサチュレイタ" },
    { id: 445, difficulty: {                  }, name: "Palette" },
    { id: 447, difficulty: {                  }, name: "パーフェクト生命" },
    { id: 448, difficulty: {                  }, name: "のぼれ！すすめ！高い塔" },
    { id: 449, difficulty: {                  }, name: "害虫" },
    { id: 488, difficulty: {                  }, name: "夢と夢～あの日のメロディ～" },
    { id: 504, difficulty: {                  }, name: "Calamity Fortune" },
    { id: 525, difficulty: {                  }, name: "Paradisus-Paradoxum" },
    { id: 526, difficulty: {                  }, name: "ようこそジャパリパークへ" },
    { id: 537, difficulty: {                  }, name: "ハレ晴レユカイ" },
    { id: 538, difficulty: {                  }, name: "AMAZING MIGHTYYYY!!!!" },
    { id: 540, difficulty: {                  }, name: "砂の惑星 feat. HATSUNE MIKU" },
];

/* Map[Name, Chart] */
var CHART_BY_NAME = {};
for (var i = 0; i < CHART_LIST.length; i++) CHART_BY_NAME[CHART_LIST[i].name] = CHART_LIST[i];

/* ---- UTILITIES */

/* Calculate rate from given SCORE and DIFFICULTY.
 * reference : http://d.hatena.ne.jp/risette14/20150913/1442160273 */
function score_to_rate(difficulty, score) {
    var rate = score >= 1007500 ? difficulty + 2.0
             : score >= 1005000 ? difficulty + 1.5 + (score - 1005000) * 10 / 50000
             : score >= 1000000 ? difficulty + 1.0 + (score - 1000000) *  5 / 50000
             : score >=  975000 ? difficulty + 0.0 + (score -  975000) *  2 / 50000
             : score >=  950000 ? difficulty - 1.5 + (score -  950000) *  3 / 50000
             : score >=  925000 ? difficulty - 3.0 + (score -  925000) *  3 / 50000
             : score >=  900000 ? difficulty - 5.0 + (score -  900000) *  4 / 50000
             : 0;
    return Math.floor(rate * 100) / 100;
}

// Calculate score required to achieve given RATE wrt DIFFICULTY. This
// function may return NaN to indicate that the rate is NOT achievable
// wrt DIFFICULTY.
function rate_to_score(difficulty, target_rate) {
    var diff = target_rate - difficulty;
    return diff  >  2.0 ? NaN
         : diff ==  2.0 ? 1007500
         : diff >=  1.5 ? Math.floor((diff -  1.5) * 50000 / 10) + 1005000
         : diff >=  1.0 ? Math.floor((diff -  1.0) * 50000 /  5) + 1000000
         : diff >=  0.0 ? Math.floor((diff -  0.0) * 50000 /  2) +  975000
         : diff >= -1.5 ? Math.floor((diff - -1.5) * 50000 /  3) +  950000
         : diff >= -3.0 ? Math.floor((diff - -3.0) * 50000 /  3) +  925000
         : diff >= -5.0 ? Math.floor((diff - -5.0) * 50000 /  4) +  900000
         : 900000;
}

/* Compare two playlogs by rate and return negative if P1 is greater than P2. */
function comp_rate (p1, p2) {
    if (p1.rate !== p2.rate) return p2.rate - p1.rate;
    else if (p1.play_date < p2.play_date) return -1;
    else if (p1.play_date > p2.play_date) return 1;
    else return 0;
}

/* Compare two playlogs by difficulty. */
function comp_difficulty (p1, p2) {
    return - (p1.difficulty - p2.difficulty);
}

/* Compare two playlogs by play_date. */
function comp_play_date (p1, p2) {
    if (p1.play_date > p2.play_date) return -1;
    else if (p1.play_date < p2.play_date) return 1;
    else return 0;
}

/* Compare two playlogs by score. */
function comp_score (p1, p2) {
    return - (p1.score - p2.score);
}

/* Like parseInt but accepts comma-separated values. */
function parse_int (str) {
    return parseInt(str.split(",").join(""));
}

/* Load scripts listed in SCRIPTS in sequence, and call ONLOAD if all
scripts are loaded. */
function load_scripts_in_sequence (scripts, onload, loading) {
    var script = scripts.shift();
    if (script) {
        if (loading) loading(script);
        $.getScript(script, function (){
            load_scripts_in_sequence(scripts, onload, loading);
        });
    } else if (onload) {
        onload();
    }
}

/* Shallow copy an array. */
Array.prototype.copy = function () {
    return [].concat(this);
}

/* Compute average of an number array. */
Array.prototype.average = function () {
    var sum = 0;
    for (var i = 0; i < this.length; i++) sum += this[i];
    return sum / (this.length || 1);
}

/* Polyfill Object.values. */
Object.values = function (o) {
    return Object.keys(o).map(function (key) { return o[key]; });
}

/* ---- LOGIC */

var data = {
    best_scores:       {}, /* Map[Title, Playlog] */
    recent_candidates: [], /* OrderedList[Playlog] */
    last_play_date: undefined,
};

function playlog (name, level, score, play_date /* optional */) {
    var chart      = CHART_BY_NAME[name];
    var difficulty = (chart && chart.difficulty[level]) || 0;
    var last_score = data.best_scores[name] || {};
    var rate       = difficulty ? score_to_rate(difficulty, score) : 0;
    return {
        name:       name,
        level:      level,
        score:      score,
        rate:       rate,
        play_date:  play_date,
        difficulty: difficulty,
        diff: {
            score: score - (last_score.score || 0),
            rate:  rate - (last_score.rate || 0)
        }
    };
}

function push_playlog_to_best_scores (playlog) {
    var current_best = data.best_scores[playlog.name];
    if (!current_best || comp_rate(playlog, current_best) < 0) {
        /* workaround vue.js's limitation */
        if (Vue) Vue.set(data.best_scores, playlog.name, playlog);
        else data.best_scores[playlog.name] = playlog;
    }
}

/* reference: http://max-eipi.hatenablog.com/entry/2016/08/22/031357 */
function push_playlog_to_recent_candidates (playlog) {
    var length              = data.recent_candidates.length;
    var recent_list         = data.recent_candidates.copy().sort(comp_rate).slice(0, 10);
    var rate_is_less        = function (x) { return x.rate < playlog.rate; };
    var score_is_less_or_eq = function (x) { return x.score <= playlog.score; };

    if (playlog.level == LEVEL_ID.worldsend) return;
    if (playlog.play_date < data.last_play_date) return;

    data.recent_candidates.push(playlog);
    data.last_play_date = playlog.play_date;

    if (length < 10) return; /* 判断できない (R枠が確定できない) */

    /* 1.R枠に最新スコアより低いレートがある
       → RC枠の最新スコアより低いレートのうち、一番古いものを追い出す */
    if (recent_list.find(rate_is_less)) {
        if (length < 30) return; /* 判断できない (RC枠が確定できない) */
        data.recent_candidates.splice(data.recent_candidates.findIndex(rate_is_less), 1);
    }

    /* 2.最新スコアがSSS, または 3.R枠に最新スコアより低いスコアがある
       → 最新スコアを追い出す */
    else if (playlog.score >= 1007500 || recent_list.find(score_is_less_or_eq)) {
        data.recent_candidates.pop();
    }

    /* 4.それ以外の場合 → RC枠で一番古いものを追い出す */
    else {
        if (length < 30) return; /* 判断できない (RC枠が確定できない) */
        data.recent_candidates.shift();
    }
}

function compute_rate () {
    var best_list   = Object.values(this.data.best_scores).sort(comp_rate).slice(0, 30);
    var recent_list = this.data.recent_candidates.copy().sort(comp_rate).slice(0, 10);
    var best        = best_list.map(function (x) { return x.rate; }).average();
    var recent      = recent_list.map(function (x) { return x.rate; }).average();
    var opt_recent  = best_list.length ? best_list[0].rate : 0;
    var best_border = best_list.length ? best_list[best_list.length - 1].rate : 0;

    return {
        best:         best,
        recent:       recent,
        opt:          (best * 3 + opt_recent) / 4,
        total:        (best * 3 + recent) / 4,
        minimum_best: best_border
    };
}

/* ---- SCRAPING */

function scrape_playlog_page () {
    var logs = $(".frame02.w400").map(function () {
        var date = $(this).find(".play_datalist_date").html();
        var level = $(this).find(".play_track_result img").attr("src").match("text_(.*)\.png")[1];
        var name = $(this).find(".play_musicdata_title").html();
        var score = $(this).find(".play_musicdata_score_text").html().match("Score：(.*)$")[1];
        if (date && level && name && score) {
            return playlog(name, LEVEL_ID[level], parse_int(score), date);
        }
    });

    if (!logs.length) {
        alert("プレー履歴を取得できませんでした");
        throw Error();
    }

    /* push older logs first */
    for (var i = logs.length - 1; i >= 0; i--) {
        push_playlog_to_best_scores(logs[i]);
        push_playlog_to_recent_candidates(logs[i]);
    }
}

function scrape_musicgenre_page () {
    var level_id = LEVEL_ID[$(".box01_title span").html().toLowerCase()];

    if (level_id == undefined) {
        alert("難易度を取得できませんでした");
        throw Error();
    }

    var logs = $(".w388.musiclist_box").map(function () {
        var name = $(this).find(".music_title").html();
        var score = $(this).find(".play_musicdata_highscore span").html();
        if (name && score) {
            return playlog(name, level_id, parse_int(score));
        }
    });

    if (!logs.length) {
        alert("スコア一覧を取得できませんでした");
        throw Error();
    }

    for (var i = 0; i < logs.length; i++) {
        push_playlog_to_best_scores(logs[i]);
    }
}

/* ---- localStorage */

function load_data () {
    var data_str = localStorage.getItem("cra_star_data");
    if (data_str) Object.assign(this.data, JSON.parse(data_str));
}

function save_data () {
    localStorage.setItem("cra_star_data", JSON.stringify(this.data));
}

/* ---- VIEW MODEL */

var COMPARATOR = {
    rate:       comp_rate,
    difficulty: comp_difficulty,
    play_date:  comp_play_date,
    score:      comp_score
};

var SECTIONS = {
    rate: [
        { title: "レート対象",   condition: function (p,i,l) { return i <= (l == "recent" ? 10 : 30); } },
        { title: "レート対象外", condition: function (p,i,l) { return true; } }
    ],
    difficulty: [
        { title: "LEVEL 14",  condition: function (p) { return p.difficulty >= 14.0; } },
        { title: "LEVEL 13+", condition: function (p) { return p.difficulty >= 13.7; } },
        { title: "LEVEL 13",  condition: function (p) { return p.difficulty >= 13.0; } },
        { title: "LEVEL 12+", condition: function (p) { return p.difficulty >= 12.7; } },
        { title: "LEVEL 12",  condition: function (p) { return p.difficulty >= 12.0; } },
        { title: "LEVEL 11+", condition: function (p) { return p.difficulty >= 11.7; } },
        { title: "LEVEL 11",  condition: function (p) { return p.difficulty >= 11.0; } },
        { title: "LEVEL 10+", condition: function (p) { return p.difficulty >= 10.7; } },
        { title: "LEVEL 10",  condition: function (p) { return p.difficulty >= 10.0; } },
        { title: "NO DATA",   condition: function (p) { return true; } }
    ],
    play_date: [
        { title: "最近プレーした順", condition: function (p) { return true; } }
    ],
    score: [
        { title: "RANK SSS", condition: function (p) { return p.score >= 1007500; } },
        { title: "RANK SS+", condition: function (p) { return p.score >= 1005000; } },
        { title: "RANK SS",  condition: function (p) { return p.score >= 1000000; } },
        { title: "RANK S",   condition: function (p) { return p.score >=  975000; } },
        { title: "RANK AAA", condition: function (p) { return p.score >=  950000; } },
        { title: "RANK AA",  condition: function (p) { return p.score >=  925000; } },
        { title: "RANK A",   condition: function (p) { return p.score >=  900000; } },
        { title: "RANK < A", condition: function (p) { return true; } }
    ]
};

var vm;

function attach_view (el) {
    Vue.component("playlog", {
        props:    ["playlog", "minimum_best", "list"],
        template: "#playlog",
        computed: {
            best_required_score: function () {
                return rate_to_score(this.playlog.difficulty, this.minimum_best);
            },
            extra_info: function () {
                if (this.list == "recent") {
                    return this.playlog.play_date;
                }
                if (!isNaN(this.best_required_score)) {
                    var diff = this.best_required_score - this.playlog.score;
                    if (diff > 0) return "BEST 枠入りまで: " + diff;
                }
                return null;
            }
        },
        filters: {
            rate_diff_str: function (num) {
                return num <= -10.0 ? " " + num.toString().substring(0, 6)
                    :  num <= -0.01 ? " " + num.toString().substring(0, 5)
                    :  num >=  10.0 ? " +" + num.toString().substring(0, 5)
                    :  num >=  0.01 ? " +" + num.toString().substring(0, 4)
                    :  "";
            },
            score_diff_str: function (num) {
                return num < 0 ? num : "+" + num;
            }
        }
    });
    vm = new Vue({
        el: el,
        data: {
            data:           data,
            selected_list:  "best",
            selected_order: "rate",
            scraper:        null,
            last_rate:      { best: 0, recent: 0, total: 0, opt: 0 },
        },
        created: function () {
            load_data();
            this.last_rate = this.rate;
            if (location.href.match(/Playlog\.html/))
                this.scraper = scrape_playlog_page;
            else if (location.href.match(/MusicGenre\.html/) && $(".box01_title span").length)
                this.scraper = scrape_musicgenre_page;
        },
        computed: {
            rate: function () {
                return compute_rate();
            },
            best_list: function () {
                return Object.values(this.data.best_scores).sort(comp_rate);
            },
            sorted_list: function () {
                var comparator = COMPARATOR[this.selected_order];
                if (this.selected_list == "recent") {
                    return this.data.recent_candidates.copy().sort(comparator);
                } else {
                    return this.best_list.copy().sort(comparator);
                }
            },
            sections: function () {
                var sections = {};
                var queries  = SECTIONS[this.selected_order].copy();
                for (var i = 0; queries.length && i < this.sorted_list.length;) {
                    var query = queries.shift();
                    sections[i] = query.title;
                    for (var item = this.sorted_list[i];
                        item && query.condition(item, i, this.selected_list);) {
                        item = this.sorted_list[++i];
                    }
                }
                return sections;
            }
        },
        methods: {
            scrape: function () {
                this.scraper();
                this.scraper = null;
                save_data();
            },
            skip_scraping: function () {
                this.scraper = null;
            },
            set_list: function (list) {
                this.selected_list = list;
            },
            set_order: function (order) {
                this.selected_order = order;
            }
        },
        filters: {
            rate_str: function (num) {
                return num.toString().substring(0, num >= 10 ? 5 : 4);
            },
            rate_diff_str: function (num) {
                return num <= -10.0 ? " " + num.toString().substring(0, 6)
                    :  num <= -0.01 ? " " + num.toString().substring(0, 5)
                    :  num >=  10.0 ? " +" + num.toString().substring(0, 5)
                    :  num >=  0.01 ? " +" + num.toString().substring(0, 4)
                    :  "";
            }
        }
    });
}

/* ---- VIEW */

var view = `
<div id="cra">
  <div id="header">
    <div class="item">CHUNITHM Rate Analyzer ☆ (β)</div>
    <div id="hamburger" class="item right clickable shrinked"></div>
    <div class="menu">
      <div class="item clickable">使い方</div>
      <div class="item clickable shrinked">リスト</div>
      <div class="submenu">
        <div class="item clickable" @click="set_list('best')">ベストスコア</div>
        <div class="item clickable" @click="set_list('recent')">Recent 枠, 候補枠</div>
      </div>
      <div class="item clickable shrinked">並び順</div>
      <div class="submenu">
        <div class="item clickable" @click="set_order('rate')">レート順</div>
        <div class="item clickable" @click="set_order('difficulty')">難易度順</div>
        <div class="item clickable" @click="set_order('score')">スコア順</div>
        <div class="item clickable" @click="set_order('play_date')">最近プレーした順</div>
      </div>
      <div class="item footer">
        Built with ♡ by <a href="http://twitter.com/zk_phi">@zk_phi</a>
      </div>
    </div>
  </div>

  <div v-if="scraper" id="dialog">
    <div class="body">
      <span class="nobreak">CHUNITHM-NET を検出しました。</span>
      <span class="nobreak">データを取り込みますか？</span>
      <span class="triangle"></span>
      <p class="actions">
        <span class="action clickable secondary" @click="skip_scraping">スキップ</span>
        <span class="action clickable primary" @click="scrape">取り込む</span>
      </p>
    </div>
  </div>

  <div id="content_wrapper">
    <div id="content">
      <div id="rating" class="section">
        <div class="title">レート</div>
        <div class="body">
          <div class="card">
            <div id="total_rate">
              {{ rate.total | rate_str }}
              <span class="dim">{{ rate.total - last_rate.total | rate_diff_str }}</span>
            </div>
            <div id="rate_details">
              B: {{ rate.best | rate_str }}
              <span class="dim">{{ rate.best - last_rate.best | rate_diff_str }}</span>
              /
              R: {{ rate.recent | rate_str }}
              <span class="dim">{{ rate.recent - last_rate.recent | rate_diff_str }}</span>
            </div>
            <div class="hr"></div>
            <div id="best_border">
              BEST 枠ボーダー: {{ rate.minimum_best | rate_str }}
              <span class="dim">{{ rate.minimum_best - last_rate.minimum_best | rate_diff_str }}</span>
            </div>
            <div id="reachable_rate">
              レート {{ rate.opt | rate_str }}
              <span class="dim">{{ rate.opt - last_rate.opt | rate_diff_str }}</span>
              まで到達可能
            </div>
          </div>
        </div>
      </div>

      <div id="list" class="section">
        <div class="title">
          {{ selected_list == "best" ? "ベストスコア" : "Recent 枠, 候補枠"}}
        </div>
        <div class="body">
          <div v-for="playlog, ix in sorted_list" class="item">
            <p class="subsection" v-if="sections[ix]">{{ sections[ix] }}</p>
            <span class="dim">{{ ix + 1 }}.</span>
            <playlog :playlog="playlog" :minimum_best="rate.minimum_best" :list="selected_list" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

var playlog_template = `
<template id="playlog">
  <div class="card master">
    <div class="name">{{ playlog.name }}</div>
    <div class="rate">
      Rate： {{ playlog.rate | rate_str }}
      <span class="dim">{{ playlog.diff.rate | rate_diff_str }}</span>
    </div>
    <div class="score">
      Score：{{ playlog.score }}
      <span class="dim">{{ playlog.score | score_diff_str }}</span>
    </div>
    <div v-if="extra_info">
      <div class="hr"></div>
      <div class="dim">{{ extra_info }}</div>
    </div>
  </div>
</template>
`;

var head = `
<title>CHUNITHM Rate Analyzer ☆ (β)</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
`;

/* style.css */
var css = `<style>#dialog:before,#header{left:0;top:0;position:fixed}*{margin:0;padding:0;box-sizing:border-box}body{font-size:15px;color:#f4f4f4;font-family:'Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',Meiryo,メイリオ,Osaka,'MS PGothic',arial,helvetica,sans-serif}a,a:hover,a:visited{color:#f4f4f4;text-decoration:none}.clickable{cursor:pointer}.dim{font-size:12px;opacity:.6}#header{background-color:#333;z-index:1}@media (max-width:962px){#header{width:100%}.shrinked+*{display:none}#hamburger.shrinked:before{content:"≡"}#hamburger.expanded:before{content:"×"}#header .menu .item.shrinked:before{content:"▶ ";color:#aaa}#header .menu .item.expanded:before{content:"▼ ";color:#aaa}}@media (min-width:962px){#header{height:100vh;width:320px}#content{margin-left:320px}}#header .item{height:35px;width:100%;padding:10px;line-height:15px}#header .item.right{margin-top:-35px;text-align:right}#header .item.footer{font-size:10px;height:30px;line-height:10px;color:#aaa}#header .menu .item{background-color:#333;border:1px solid #222}#header .submenu .item{background-color:#444;border:1px solid #333}@media (max-width:962px){#content_wrapper{margin-top:35px}}#content{padding:20px;min-height:100vh;background-color:#222}#content .section{max-width:384px;margin:auto}#content .section+.section{margin-top:20px}#content .section .title{height:35px;line-height:15px;padding:10px;border-radius:3px 3px 0 0;background-color:#444}#content .section .title.right{margin-top:-35px;text-align:right}#content .section .body{padding:10px;border-radius:0 0 3px 3px;background-color:#333}#content .card{padding:10px;border-radius:3px;background-color:#da9306}#content .card.basic{background-color:#207720}#content .card.advanced{background-color:#ab6b1f}#content .card.expert{background-color:#a7224e}#content .card.master{background-color:#582080}#content .card.empty{background-color:#444}#content .card .hr{margin:10px 0;border-bottom:1px solid #f4f4f4;opacity:.2}#rating #total_rate{font-size:60px}#list .item+.item{margin-top:20px}#list .card .name{font-size:25px}#dialog:before{width:100vw;height:100vh;z-index:-1;background-color:#000;opacity:.7;content:" "}#dialog{position:fixed;left:5vw;top:150px;width:90vw;z-index:2}#dialog .body{width:100%;max-width:500px;padding:20px;margin:auto;border-radius:3px;background-color:#eee;color:#222;border:1px solid #aaa}#dialog .body .nobreak{display:inline-block}#dialog .body .actions{margin-top:30px;text-align:right}#dialog .body .actions .action{margin-left:10px}#dialog .body .actions .action.primary{color:#0275d8;font-weight:700}#dialog .body .actions .action.secondary{color:#444}</style>`;

load_scripts_in_sequence(DEPENDENCIES, function () {
    $("head").html(head);
    $("body *").hide();
    $("body").append(view).append(playlog_template).append(css);
    attach_view("#cra");
    $(".shrinked").click(function () { $(this).toggleClass("expanded").toggleClass("shrinked"); });
}, function (s) {
    console.log("Loading: " + s + "...");
});
