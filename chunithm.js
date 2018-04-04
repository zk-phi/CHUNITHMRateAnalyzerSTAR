/* CHUNITHM Rate Analyzer STAR (C) zk_phi 2017-*/

var CRA_VERSION = 171104;

var CHART_LIST = [
    /*  内部ID              譜面定数 (EXP, MAS)        タイトル */
    { id:   3, difficulty: {               master: 11.8 }, name: "B.B.K.K.B.K.K." },
    { id:   6, difficulty: {               master: 12.3 }, name: "Reach for the Stars" },
    { id:   7, difficulty: { expert: 12.0, master: 13.4 }, name: "初音ミクの消失" },
    { id:  14, difficulty: {               master: 11.2 }, name: "コネクト" },
    { id:  18, difficulty: {               master: 11.4 }, name: "千本桜" },
    { id:  19, difficulty: { expert: 11.4, master: 13.2 }, name: "DRAGONLADY" },
    { id:  20, difficulty: {               master: 12.8 }, name: "taboo tears you up" },
    { id:  21, difficulty: {               master: 11.9 }, name: "ナイト・オブ・ナイツ" },
    { id:  23, difficulty: {               master: 12.1 }, name: "一触即発☆禅ガール" },
    { id:  27, difficulty: {               master: 12.5 }, name: "タイガーランペイジ" },
    { id:  28, difficulty: {               master: 10.7 }, name: "Pursuing My True Self" },
    { id:  33, difficulty: {               master: 13.1 }, name: "Blue Noise" },
    { id:  34, difficulty: {               master: 12.2 }, name: "亡國覚醒カタルシス" },
    { id:  35, difficulty: {               master: 12.4 }, name: "Lapis" },
    { id:  36, difficulty: {               master: 11.0 }, name: "届かない恋 '13" },
    { id:  37, difficulty: {               master: 11.3 }, name: "鳥の詩" },
    { id:  38, difficulty: {               master: 11.1 }, name: "天ノ弱" },
    { id:  41, difficulty: {               master: 11.6 }, name: "sweet little sister" },
    { id:  45, difficulty: {               master: 12.6 }, name: "L9" },
    { id:  46, difficulty: { expert:  8.1, master: 10.9 }, name: "Bad Apple!! feat.nomico" },
    { id:  47, difficulty: {               master: 12.3 }, name: "六兆年と一夜物語" },
    { id:  48, difficulty: {               master: 11.8 }, name: "Unlimited Spark!" },
    { id:  49, difficulty: {               master: 10.0 }, name: "エピクロスの虹はもう見えない" },
    { id:  51, difficulty: {               master: 12.8 }, name: "My First Phone" },
    { id:  52, difficulty: { expert: 11.1, master: 13.2 }, name: "Cyberozar" },
    { id:  53, difficulty: {               master: 12.3 }, name: "Teriqma" },
    { id:  55, difficulty: {               master: 11.2 }, name: "夏祭り" },
    { id:  59, difficulty: {               master: 10.7 }, name: "Invitation" },
    { id:  61, difficulty: { expert: 11.0, master: 13.6 }, name: "GOLDEN RULE" },
    { id:  62, difficulty: {               master: 12.4 }, name: "名も無い鳥" },
    { id:  63, difficulty: { expert: 11.7, master: 13.4 }, name: "Gate of Fate" },
    { id:  64, difficulty: {               master: 12.8 }, name: "今ぞ♡崇め奉れ☆オマエらよ！！～姫の秘メタル渇望～" },
    { id:  65, difficulty: {               master: 11.1 }, name: "Anemone" },
    { id:  66, difficulty: {               master: 12.3 }, name: "明るい未来" },
    { id:  67, difficulty: {               master: 11.2 }, name: "昵懇レファレンス" },
    { id:  68, difficulty: {               master: 11.5 }, name: "乗り切れ受験ウォーズ" },
    { id:  69, difficulty: { expert: 11.9, master: 13.4 }, name: "The wheel to the right" },
    { id:  70, difficulty: {               master: 12.4 }, name: "STAR" },
    { id:  71, difficulty: {               master: 12.3 }, name: "Infantoon Fantasy" },
    { id:  72, difficulty: {               master: 13.5 }, name: "Genesis" },
    { id:  73, difficulty: {               master: 12.7 }, name: "MUSIC PЯAYER" },
    { id:  74, difficulty: {               master: 11.0 }, name: "リリーシア" },
    { id:  75, difficulty: {               master: 11.7 }, name: "Counselor" },
    { id:  76, difficulty: { expert: 12.0, master: 13.5 }, name: "luna blu" },
    { id:  77, difficulty: {               master: 12.8 }, name: "ケモノガル" },
    { id:  78, difficulty: {               master: 11.0 }, name: "crossing field" },
    { id:  79, difficulty: {               master: 11.1 }, name: "ＧＯ！ＧＯ！ラブリズム♥" },
    { id:  80, difficulty: {               master: 10.5 }, name: "Grab your sword" },
    { id:  82, difficulty: {               master: 12.5 }, name: "Memories of Sun and Moon" },
    { id:  83, difficulty: {               master: 12.2 }, name: "ロストワンの号哭" },
    { id:  88, difficulty: {               master: 12.1 }, name: "The Concept of Love" },
    { id:  89, difficulty: {               master: 11.0 }, name: "JET" },
    { id:  90, difficulty: { expert: 11.7, master: 13.5 }, name: "L'épisode" },
    { id:  91, difficulty: {               master: 11.2 }, name: "Yet Another ”drizzly rain”" },
    { id:  92, difficulty: {               master: 13.0 }, name: "最終鬼畜妹・一部声" },
    { id:  93, difficulty: {               master: 12.3 }, name: "蒼空に舞え、墨染の桜" },
    { id:  94, difficulty: {               master: 12.4 }, name: "セツナトリップ" },
    { id:  95, difficulty: {               master: 12.1 }, name: "砂漠のハンティングガール♡" },
    { id:  96, difficulty: {               master: 11.9 }, name: "チルノのパーフェクトさんすう教室" },
    { id:  97, difficulty: {               master: 10.8 }, name: "Help me, ERINNNNNN!!" },
    { id:  98, difficulty: { expert:  8.5, master: 11.4 }, name: "魔理沙は大変なものを盗んでいきました" },
    { id:  99, difficulty: {               master: 11.7 }, name: "言ノ葉カルマ" },
    { id: 100, difficulty: {               master: 10.9 }, name: "After the rain" },
    { id: 101, difficulty: { expert: 10.7, master: 13.0 }, name: "Tango Rouge" },
    { id: 102, difficulty: {               master: 12.5 }, name: "Tuning Rangers" },
    { id: 103, difficulty: { expert: 11.7, master: 13.7 }, name: "エンドマークに希望と涙を添えて" },
    { id: 104, difficulty: {               master: 12.5 }, name: "とーきょー全域★アキハバラ？" },
    { id: 105, difficulty: {               master: 10.7 }, name: "overcome" },
    { id: 106, difficulty: { expert: 12.2, master: 13.8 }, name: "宛城、炎上！！" },
    { id: 107, difficulty: {               master: 13.1 }, name: "We Gonna Journey" },
    { id: 108, difficulty: {               master: 12.2 }, name: "The ether" },
    { id: 113, difficulty: {               master: 11.4 }, name: "ストリーミングハート" },
    { id: 114, difficulty: {               master: 11.6 }, name: "Sweet Devil" },
    { id: 115, difficulty: {               master: 11.5 }, name: "Dreaming" },
    { id: 116, difficulty: { expert:  7.9, master: 10.5 }, name: "君の知らない物語" },
    { id: 117, difficulty: {               master: 11.5 }, name: "M.S.S.Planet" },
    { id: 118, difficulty: {               master: 12.0 }, name: "腐れ外道とチョコレゐト" },
    { id: 119, difficulty: {               master: 12.3 }, name: "アウターサイエンス" },
    { id: 120, difficulty: {               master: 12.7 }, name: "四次元跳躍機関" },
    { id: 121, difficulty: {               master: 12.7 }, name: "東方妖々夢 ～the maximum moving about～" },
    { id: 122, difficulty: {               master: 12.7 }, name: "少女幻葬戦慄曲　～　Necro Fantasia" },
    { id: 123, difficulty: { expert:  8.2, master: 10.7 }, name: "橙の幻想郷音頭" },
    { id: 124, difficulty: {               master: 12.2 }, name: "夏影" },
    { id: 125, difficulty: {               master: 11.0 }, name: "Little Busters! ～TV animation ver.～" },
    { id: 126, difficulty: {               master: 11.3 }, name: "Heart To Heart" },
    { id: 128, difficulty: {               master: 12.7 }, name: "The Formula" },
    { id: 131, difficulty: {               master: 12.7 }, name: "チルドレンレコード" },
    { id: 132, difficulty: {               master: 12.2 }, name: "イカサマライフゲイム" },
    { id: 133, difficulty: {               master: 11.0 }, name: "シリョクケンサ" },
    { id: 134, difficulty: { expert: 12.2, master: 13.8 }, name: "HAELEQUIN (Original Remaster)" },
    { id: 135, difficulty: {               master: 13.5 }, name: "Vallista" },
    { id: 136, difficulty: {               master: 12.5 }, name: "Äventyr" },
    { id: 137, difficulty: { expert: 11.6, master: 13.7 }, name: "Angel dust" },
    { id: 138, difficulty: { expert: 10.7, master: 13.2 }, name: "conflict" },
    { id: 140, difficulty: {               master: 11.9 }, name: "Guilty" },
    { id: 141, difficulty: { expert: 11.7, master: 13.5 }, name: "閃鋼のブリューナク" },
    { id: 142, difficulty: {               master: 12.6 }, name: "Altale" },
    { id: 143, difficulty: {               master: 10.6 }, name: "ODDS&ENDS" },
    { id: 144, difficulty: {               master: 13.5 }, name: "Aragami" },
    { id: 145, difficulty: {               master: 11.8 }, name: "Change Our MIRAI！" },
    { id: 146, difficulty: {               master: 11.7 }, name: "夕暮れワンルーム" },
    { id: 147, difficulty: { expert:  8.7, master: 10.3 }, name: "こころここから" },
    { id: 148, difficulty: {               master: 11.0 }, name: "Theme of SeelischTact" },
    { id: 149, difficulty: {               master: 11.7 }, name: "緋色のDance" },
    { id: 150, difficulty: {               master: 11.8 }, name: "brilliant better" },
    { id: 151, difficulty: {               master: 12.6 }, name: "Alma" },
    { id: 152, difficulty: { expert: 12.0, master: 13.0 }, name: "Gustav Battle" },
    { id: 154, difficulty: {               master: 12.8 }, name: "SAVIOR OF SONG" },
    { id: 156, difficulty: {               master: 11.4 }, name: "FREELY TOMORROW" },
    { id: 157, difficulty: {               master: 12.9 }, name: "ギガンティックO.T.N" },
    { id: 158, difficulty: {               master: 11.0 }, name: "フォルテシモBELL" },
    { id: 159, difficulty: {               master: 13.3 }, name: "ジングルベル" },
    { id: 160, difficulty: {               master: 11.6 }, name: "言ノ葉遊戯" },
    { id: 161, difficulty: {               master: 12.5 }, name: "私の中の幻想的世界観及びその顕現を想起させたある現実での出来事に関する一考察" },
    { id: 163, difficulty: {               master: 11.3 }, name: "幾四音-Ixion-" },
    { id: 165, difficulty: {               master: 12.8 }, name: "ぼくらの16bit戦争" },
    { id: 166, difficulty: {               master: 11.8 }, name: "裏表ラバーズ" },
    { id: 167, difficulty: { expert: 10.8, master: 12.7 }, name: "脳漿炸裂ガール" },
    { id: 168, difficulty: {               master: 11.9 }, name: "ネトゲ廃人シュプレヒコール" },
    { id: 169, difficulty: {               master: 11.4 }, name: "elegante" },
    { id: 170, difficulty: {               master: 11.2 }, name: "DETARAME ROCK&ROLL THEORY" },
    { id: 171, difficulty: { expert: 10.8, master: 12.4 }, name: "XL TECHNO" },
    { id: 173, difficulty: { expert: 10.7, master: 13.3 }, name: "Halcyon" },
    { id: 176, difficulty: {               master: 11.3 }, name: "Dance!" },
    { id: 177, difficulty: {               master: 12.7 }, name: "Jimang Shot" },
    { id: 178, difficulty: {               master: 12.7 }, name: "stella=steLLa" },
    { id: 179, difficulty: {               master: 11.3 }, name: "すろぉもぉしょん" },
    { id: 180, difficulty: { expert: 12.7, master: 14.0 }, name: "怒槌" },
    { id: 181, difficulty: { expert:  8.1, master: 10.8 }, name: "ユクエシレズ" },
    { id: 182, difficulty: {               master: 10.1 }, name: "WHITE ALBUM Live at Campus Fes" },
    { id: 184, difficulty: { expert:  7.7, master: 10.0 }, name: "Last regrets" },
    { id: 185, difficulty: {               master: 11.2 }, name: "楽園の翼" },
    { id: 186, difficulty: {               master: 11.9 }, name: "ってゐ！　～えいえんてゐVer～" },
    { id: 187, difficulty: { expert: 11.0, master: 13.1 }, name: "患部で止まってすぐ溶ける～狂気の優曇華院" },
    { id: 189, difficulty: {               master: 12.7 }, name: "ひれ伏せ愚民どもっ！" },
    { id: 190, difficulty: {               master: 12.6 }, name: "エテルニタス・ルドロジー" },
    { id: 191, difficulty: {               master: 11.7 }, name: "幽闇に目醒めしは" },
    { id: 192, difficulty: {               master: 12.5 }, name: "Starlight Vision" },
    { id: 193, difficulty: {               master: 12.5 }, name: "Club Ibuki in Break All" },
    { id: 194, difficulty: {               master: 13.0 }, name: "Phantasm Brigade" },
    { id: 195, difficulty: {               master: 12.3 }, name: "永遠のメロディ" },
    { id: 196, difficulty: { expert: 11.5, master: 13.7 }, name: "FREEDOM DiVE" },
    { id: 197, difficulty: { expert: 11.7, master: 13.1 }, name: "Jack-the-Ripper◆" },
    { id: 199, difficulty: {               master: 12.1 }, name: "ハート・ビート" },
    { id: 200, difficulty: {               master: 12.1 }, name: "無敵We are one!!" },
    { id: 201, difficulty: { expert: 12.1, master: 13.9 }, name: "Contrapasso -inferno-" },
    { id: 202, difficulty: { expert: 11.2, master: 13.1 }, name: "GEMINI -C-" },
    { id: 203, difficulty: {               master: 12.0 }, name: "FLOWER" },
    { id: 204, difficulty: {               master: 11.2 }, name: "ちくわパフェだよ☆CKP" },
    { id: 205, difficulty: { expert: 10.7, master: 12.7 }, name: "SNIPE WHOLE" },
    { id: 206, difficulty: {               master: 11.8 }, name: "Signs Of Love (“Never More” ver.)" },
    { id: 207, difficulty: {               master: 11.7 }, name: "Your Affection (Daisuke Asakura Remix)" },
    { id: 208, difficulty: {               master: 12.7 }, name: "SAMBISTA" },
    { id: 209, difficulty: {               master: 11.2 }, name: "君色シグナル" },
    { id: 210, difficulty: {               master: 12.4 }, name: "アスノヨゾラ哨戒班" },
    { id: 211, difficulty: {               master: 12.2 }, name: "天樂" },
    { id: 212, difficulty: {               master: 12.1 }, name: "いろは唄" },
    { id: 213, difficulty: {               master: 11.9 }, name: "星屑ユートピア" },
    { id: 216, difficulty: {               master: 12.3 }, name: "放課後革命" },
    { id: 217, difficulty: {               master: 11.8 }, name: "楽園ファンファーレ" },
    { id: 218, difficulty: {               master: 12.4 }, name: "サウンドプレイヤー" },
    { id: 219, difficulty: { expert: 12.7, master: 14.0 }, name: "玩具狂奏曲 -終焉-" },
    { id: 220, difficulty: {               master: 12.3 }, name: "如月アテンション" },
    { id: 222, difficulty: { expert: 11.1, master: 12.9 }, name: "Mr. Wonderland" },
    { id: 223, difficulty: { expert: 11.0, master: 13.0 }, name: "カミサマネジマキ" },
    { id: 224, difficulty: {               master: 11.1 }, name: "恋愛裁判" },
    { id: 225, difficulty: {               master: 12.1 }, name: "ウミユリ海底譚" },
    { id: 226, difficulty: { expert: 12.3, master: 13.8 }, name: "Garakuta Doll Play" },
    { id: 227, difficulty: {                            }, name: "洗脳" },
    { id: 228, difficulty: {               master: 12.0 }, name: "このふざけた素晴らしき世界は、僕の為にある" },
    { id: 229, difficulty: { expert: 12.0, master: 13.4 }, name: "紅華刑" },
    { id: 230, difficulty: {               master: 12.5 }, name: "Hyperion" },
    { id: 231, difficulty: {               master: 11.0 }, name: "カラフル。" },
    { id: 232, difficulty: { expert: 11.3, master: 13.5 }, name: "Elemental Creation" },
    { id: 233, difficulty: {               master: 12.2 }, name: "アルストロメリア" },
    { id: 234, difficulty: { expert: 12.2, master: 13.9 }, name: "Devastating Blaster" },
    { id: 235, difficulty: {               master: 12.5 }, name: "ファッとして桃源郷" },
    { id: 238, difficulty: {               master: 11.9 }, name: "フレンズ" },
    { id: 240, difficulty: {               master: 12.6 }, name: "夜咄ディセイブ" },
    { id: 243, difficulty: {               master: 12.2 }, name: "シュガーソングとビターステップ" },
    { id: 244, difficulty: {               master: 12.3 }, name: "回レ！雪月花" },
    { id: 245, difficulty: {               master: 11.4 }, name: "Help me, あーりん！" },
    { id: 246, difficulty: { expert: 10.9, master: 12.8 }, name: "なるとなぎのパーフェクトロックンロール教室" },
    { id: 247, difficulty: {               master: 11.7 }, name: "絶世スターゲイト" },
    { id: 248, difficulty: { expert: 12.5, master: 13.9 }, name: "Schrecklicher Aufstand" },
    { id: 249, difficulty: { expert: 10.7, master: 12.7 }, name: "ドライヴ・オン・ザ・レインボー" },
    { id: 250, difficulty: { expert: 11.8, master: 13.5 }, name: "Philosopher" },
    { id: 251, difficulty: {               master: 12.5 }, name: "Crazy ∞ nighT" },
    { id: 252, difficulty: {               master: 12.3 }, name: "愛迷エレジー" },
    { id: 253, difficulty: {               master: 13.1 }, name: "Warcry" },
    { id: 254, difficulty: {               master: 11.7 }, name: "その群青が愛しかったようだった" },
    { id: 255, difficulty: {               master: 11.0 }, name: "激情！ミルキィ大作戦" },
    { id: 256, difficulty: {               master: 12.7 }, name: "札付きのワル　～マイケルのうた～" },
    { id: 257, difficulty: {               master: 13.0 }, name: "BOKUTO" },
    { id: 258, difficulty: { expert: 12.8, master: 14.0 }, name: "TiamaT:F minor" },
    { id: 259, difficulty: { expert: 11.3, master: 13.0 }, name: "Oshama Scramble! (Cranky Remix)" },
    { id: 260, difficulty: {               master: 12.4 }, name: "D.E.A.D.L.Y." },
    { id: 261, difficulty: {               master: 12.3 }, name: "ロボットプラネットユートピア" },
    { id: 262, difficulty: { expert: 10.8, master: 13.5 }, name: "Tidal Wave" },
    { id: 263, difficulty: {               master: 11.7 }, name: "Hand in Hand" },
    { id: 264, difficulty: {               master: 12.2 }, name: "My Dearest Song" },
    { id: 265, difficulty: {               master: 12.3 }, name: "猫祭り" },
    { id: 266, difficulty: {               master: 12.7 }, name: "ゲシュタルト！テスト期間！！" },
    { id: 267, difficulty: {               master: 11.5 }, name: "心象蜃気楼" },
    { id: 268, difficulty: { expert: 10.7, master: 12.8 }, name: "Bang Babang Bang!!!" },
    { id: 269, difficulty: {               master: 11.1 }, name: "僕らの翼" },
    { id: 270, difficulty: {               master: 12.4 }, name: "エンヴィキャットウォーク" },
    { id: 271, difficulty: {               master: 12.8 }, name: "鬼KYOKAN" },
    { id: 272, difficulty: {               master: 11.7 }, name: "有頂天ビバーチェ" },
    { id: 273, difficulty: {               master: 11.9 }, name: "ビバハピ" },
    { id: 274, difficulty: {               master: 11.6 }, name: "願い星" },
    { id: 275, difficulty: {               master: 11.5 }, name: "愛言葉" },
    { id: 276, difficulty: {               master: 12.3 }, name: "後夜祭" },
    { id: 277, difficulty: {               master: 12.4 }, name: "TRUST" },
    { id: 278, difficulty: {               master: 11.4 }, name: "からくりピエロ" },
    { id: 279, difficulty: {               master: 11.7 }, name: "深海少女" },
    { id: 280, difficulty: { expert:  8.6, master: 11.8 }, name: "リモコン" },
    { id: 281, difficulty: { expert: 11.1, master: 13.4 }, name: "ラクガキスト" },
    { id: 282, difficulty: {               master: 11.7 }, name: "アカツキアライヴァル" },
    { id: 283, difficulty: {               master: 12.0 }, name: "神曲" },
    { id: 284, difficulty: {               master: 12.7 }, name: "幸せになれる隠しコマンドがあるらしい" },
    { id: 286, difficulty: {               master: 11.5 }, name: "Tell Your World" },
    { id: 287, difficulty: {               master: 11.9 }, name: "ロミオとシンデレラ" },
    { id: 288, difficulty: {               master: 11.6 }, name: "First Twinkle" },
    { id: 289, difficulty: { expert: 10.7, master: 12.6 }, name: "ウソラセラ" },
    { id: 290, difficulty: {               master: 11.3 }, name: "檄!帝国華撃団" },
    { id: 291, difficulty: {               master: 12.4 }, name: "Kronos" },
    { id: 292, difficulty: {               master: 12.1 }, name: "月に叢雲華に風" },
    { id: 293, difficulty: { expert: 10.8, master: 13.2 }, name: "インビジブル" },
    { id: 294, difficulty: {               master: 12.8 }, name: "人生リセットボタン" },
    { id: 295, difficulty: {               master: 12.0 }, name: "響" },
    { id: 296, difficulty: {               master: 12.1 }, name: "かくしん的☆めたまるふぉ～ぜっ!" },
    { id: 297, difficulty: {               master: 12.3 }, name: "風仁雷仁" },
    { id: 298, difficulty: {               master: 12.6 }, name: "PRIVATE SERVICE" },
    { id: 299, difficulty: {               master: 11.4 }, name: "secret base ～君がくれたもの～ (10 years after Ver.)" },
    { id: 300, difficulty: {               master: 12.2 }, name: "No Routine" },
    { id: 301, difficulty: {               master: 12.2 }, name: "白い雪のプリンセスは" },
    { id: 302, difficulty: { expert: 11.0, master: 13.3 }, name: "Strahv" },
    { id: 303, difficulty: { expert:  7.8, master: 10.6 }, name: "Dreams Dreams:Kids Ver." },
    { id: 304, difficulty: {               master: 11.7 }, name: "In The Blue Sky '01" },
    { id: 305, difficulty: { expert: 11.0, master: 13.1 }, name: "幻想のサテライト" },
    { id: 306, difficulty: {               master: 12.2 }, name: "凛として咲く花の如く" },
    { id: 307, difficulty: {               master: 12.7 }, name: "Paqqin" },
    { id: 308, difficulty: {               master: 11.9 }, name: "fake!fake!" },
    { id: 309, difficulty: {               master: 12.5 }, name: "Rising Hope" },
    { id: 310, difficulty: { expert: 11.2, master: 13.3 }, name: "覚醒楽奏メタフィクション" },
    { id: 311, difficulty: {               master: 11.8 }, name: "Be My Friend" },
    { id: 312, difficulty: { expert: 11.0, master: 13.2 }, name: "ぶいえす!!らいばる!!" },
    { id: 313, difficulty: {               master: 11.4 }, name: "ひだまりデイズ" },
    { id: 314, difficulty: {               master: 11.8 }, name: "This game" },
    { id: 315, difficulty: {               master: 11.3 }, name: "オラシオン" },
    { id: 316, difficulty: {               master: 11.5 }, name: "みくみくにしてあげる♪【してやんよ】" },
    { id: 317, difficulty: {               master: 13.4 }, name: "Air" },
    { id: 318, difficulty: {               master: 13.0 }, name: "DataErr0r" },
    { id: 319, difficulty: {               master: 12.7 }, name: "Say A Vengeance" },
    { id: 320, difficulty: {               master: 12.6 }, name: "010" },
    { id: 321, difficulty: {               master: 12.5 }, name: "ERIS -Legend of Gaidelia-" },
    { id: 322, difficulty: { expert: 11.0, master: 13.6 }, name: "Imperishable Night 2006 (2016 Refine)" },
    { id: 323, difficulty: { expert: 10.9, master: 13.6 }, name: "Dreadnought" },
    { id: 324, difficulty: {               master: 12.6 }, name: "STAGER" },
    { id: 325, difficulty: {               master: 12.6 }, name: "Her Majesty" },
    { id: 326, difficulty: {               master: 12.5 }, name: "Sakura Fubuki" },
    { id: 327, difficulty: { expert: 10.9, master: 12.7 }, name: "JULIAN" },
    { id: 328, difficulty: { expert: 11.4, master: 13.8 }, name: "★LittlE HearTs★" },
    { id: 329, difficulty: {               master: 12.3 }, name: "STAIRWAY TO GENERATION" },
    { id: 330, difficulty: {               master: 12.1 }, name: "ドキドキDREAM!!!" },
    { id: 331, difficulty: {               master: 12.2 }, name: "猛進ソリストライフ！" },
    { id: 332, difficulty: {               master: 12.3 }, name: "空威張りビヘイビア" },
    { id: 334, difficulty: {               master: 12.4 }, name: "FLOATED CALM" },
    { id: 335, difficulty: { expert: 11.2, master: 13.4 }, name: "Supersonic Generation" },
    { id: 336, difficulty: {               master: 12.2 }, name: "シジョウノコエ VOCALO ver." },
    { id: 337, difficulty: {               master: 11.8 }, name: "Tic Tac DREAMIN’" },
    { id: 338, difficulty: {               master: 12.3 }, name: "SPICY SWINGY STYLE" },
    { id: 339, difficulty: {               master: 11.7 }, name: "RevolutionGame" },
    { id: 340, difficulty: {               master: 12.5 }, name: "Still" },
    { id: 341, difficulty: {               master: 13.1 }, name: "おまかせ！！トラブルメイ娘☆とれびちゃん" },
    { id: 342, difficulty: {               master: 13.4 }, name: "オススメ☆♂♀☆でぃすとぴあ" },
    { id: 343, difficulty: {               master: 11.6 }, name: "Daydream café" },
    { id: 344, difficulty: {               master: 11.8 }, name: "ノーポイッ!" },
    { id: 345, difficulty: {               master: 11.7 }, name: "ムーンライト伝説" },
    { id: 348, difficulty: {               master: 11.3 }, name: "Jumping!!" },
    { id: 349, difficulty: {               master: 10.7 }, name: "極上スマイル" },
    { id: 350, difficulty: {               master: 12.7 }, name: "FEEL×ALIVE" },
    { id: 351, difficulty: {               master: 12.9 }, name: "ぶぉん！ぶぉん！らいど・おん！" },
    { id: 352, difficulty: {               master: 12.0 }, name: "Star☆Glitter" },
    { id: 353, difficulty: {               master: 10.9 }, name: "H-A-J-I-M-A-R-I-U-T-A-!!" },
    { id: 354, difficulty: {               master: 12.3 }, name: "ラブリー☆えんじぇる!!" },
    { id: 355, difficulty: { expert:  7.8, master: 10.1 }, name: "だんご大家族" },
    { id: 356, difficulty: {               master: 12.3 }, name: "クローバー♣かくめーしょん" },
    { id: 357, difficulty: {               master: 11.7 }, name: "ぐーちょきパレード" },
    { id: 358, difficulty: {               master: 11.7 }, name: "My Soul,Your Beats!" },
    { id: 359, difficulty: {               master: 11.8 }, name: "Thousand Enemies" },
    { id: 360, difficulty: {               master: 11.3 }, name: "夢想歌" },
    { id: 362, difficulty: {               master: 12.1 }, name: "Face of Fact" },
    { id: 363, difficulty: {               master: 11.6 }, name: "true my heart -Lovable mix-" },
    { id: 365, difficulty: {               master: 10.9 }, name: "桜ノ雨" },
    { id: 367, difficulty: {               master: 11.4 }, name: "いーあるふぁんくらぶ" },
    { id: 368, difficulty: {               master: 12.8 }, name: "おこちゃま戦争" },
    { id: 369, difficulty: {               master: 11.7 }, name: "エイリアンエイリアン" },
    { id: 370, difficulty: {               master: 12.4 }, name: "虎視眈々" },
    { id: 371, difficulty: {               master: 12.7 }, name: "アンハッピーリフレイン" },
    { id: 372, difficulty: {               master: 12.2 }, name: "すきなことだけでいいです" },
    { id: 373, difficulty: {               master: 12.4 }, name: "デリヘル呼んだら君が来た" },
    { id: 374, difficulty: {               master: 12.6 }, name: "チュルリラ・チュルリラ・ダッダッダ！" },
    { id: 375, difficulty: {               master: 11.5 }, name: "だんだん早くなる" },
    { id: 376, difficulty: {               master: 12.2 }, name: "ECHO" },
    { id: 377, difficulty: {               master: 11.5 }, name: "泡沫、哀のまほろば" },
    { id: 379, difficulty: {               master: 12.0 }, name: "愛き夜道 feat. ランコ、雨天決行" },
    { id: 380, difficulty: {               master: 11.4 }, name: "Starlight Dance Floor" },
    { id: 381, difficulty: {               master: 12.0 }, name: "Witches night" },
    { id: 382, difficulty: {               master: 12.2 }, name: "Help me, ERINNNNNN!! -Cranky remix-" },
    { id: 383, difficulty: {               master: 12.6 }, name: "仙酌絶唱のファンタジア" },
    { id: 384, difficulty: {               master: 12.4 }, name: "キュアリアス光吉古牌　－祭－" },
    { id: 385, difficulty: { expert: 10.8, master: 13.4 }, name: "Evans" },
    { id: 386, difficulty: { expert: 12.7, master: 13.9 }, name: "神威" },
    { id: 388, difficulty: { expert: 10.7, master: 13.3 }, name: "GOODTEK" },
    { id: 389, difficulty: { expert: 11.0, master: 13.5 }, name: "Name of oath" },
    { id: 390, difficulty: {               master: 12.2 }, name: "Bird Sprite" },
    { id: 393, difficulty: { expert: 11.7, master: 13.8 }, name: "Dengeki Tube" },
    { id: 394, difficulty: {               master: 11.7 }, name: "若い力 -SEGA HARD GIRLS MIX-" },
    { id: 395, difficulty: {               master: 11.9 }, name: "レッツゴー!陰陽師" },
    { id: 396, difficulty: {               master: 12.1 }, name: "あねぺったん" },
    { id: 397, difficulty: { expert: 11.0, master: 13.5 }, name: "Like the Wind [Reborn]" },
    { id: 398, difficulty: {               master: 11.8 }, name: "天国と地獄 -言ノ葉リンネ-" },
    { id: 399, difficulty: {               master: 12.6 }, name: "最愛テトラグラマトン" },
    { id: 402, difficulty: {               master: 12.2 }, name: "悪戯" },
    { id: 403, difficulty: {               master: 11.2 }, name: "りばーぶ" },
    { id: 404, difficulty: {               master: 12.0 }, name: "Barbed Eye" },
    { id: 405, difficulty: { expert: 10.7, master: 13.2 }, name: "分からない" },
    { id: 406, difficulty: {               master: 12.4 }, name: "相思創愛" },
    { id: 407, difficulty: { expert: 13.2, master: 14.1 }, name: "混沌を越えし我らが神聖なる調律主を讃えよ" },
    { id: 409, difficulty: { expert: 10.9, master: 13.8 }, name: "Finite" },
    { id: 410, difficulty: {               master: 12.7 }, name: "MY LIBERATION" },
    { id: 411, difficulty: {               master: 12.3 }, name: "地球最後の告白を" },
    { id: 414, difficulty: { expert: 11.3, master: 13.3 }, name: "We Gonna Party -Feline Groove Mix-" },
    { id: 416, difficulty: {               master: 12.4 }, name: "Through The Tower" },
    { id: 417, difficulty: {               master: 12.4 }, name: "Redo" },
    { id: 419, difficulty: {               master: 11.7 }, name: "SAKURAスキップ" },
    { id: 420, difficulty: {               master: 12.3 }, name: "Now Loading!!!!" },
    { id: 421, difficulty: {               master: 11.9 }, name: "前前前世" },
    { id: 422, difficulty: {               master: 11.6 }, name: "MEMORIA" },
    { id: 424, difficulty: {               master: 11.6 }, name: "MIRU key way" },
    { id: 426, difficulty: {               master: 11.5 }, name: "華鳥風月" },
    { id: 427, difficulty: {               master: 12.5 }, name: "儚きもの人間" },
    { id: 430, difficulty: {               master: 12.1 }, name: "ＧＯ！ＧＯ！ラブリズム♥ ～あーりん書類審査通過記念Ver.～" },
    { id: 431, difficulty: {               master: 12.6 }, name: "Session High⤴" },
    { id: 432, difficulty: {               master: 12.3 }, name: "光線チューニング" },
    { id: 433, difficulty: {               master: 13.0 }, name: "立川浄穢捕物帳" },
    { id: 434, difficulty: {               master: 13.3 }, name: "眠れぬ夜君を想フ" },
    { id: 435, difficulty: { expert: 11.4, master: 13.3 }, name: "JIGOKU STATION CENTRAL GATE" },
    { id: 436, difficulty: {               master: 12.5 }, name: "PinqPiq" },
    { id: 437, difficulty: {               master: 13.2 }, name: "トリスメギストス" },
    { id: 438, difficulty: {               master: 12.2 }, name: "WE GOTTA SOUL" },
    { id: 439, difficulty: {               master: 12.0 }, name: "哀しみ集め" },
    { id: 440, difficulty: {               master: 12.9 }, name: "キラメケ→Shoot it Now!" },
    { id: 441, difficulty: { expert: 12.5, master: 13.8 }, name: "Kattobi KEIKYU Rider" },
    { id: 442, difficulty: { expert: 12.6, master: 13.9 }, name: "Glorious Crown (tpz over-Over-OVERCUTE REMIX)" },
    { id: 444, difficulty: {               master: 11.7 }, name: "エレクトロサチュレイタ" },
    { id: 445, difficulty: {               master: 12.1 }, name: "Palette" },
    { id: 446, difficulty: {               master: 11.8 }, name: "アマツキツネ" },
    { id: 447, difficulty: {               master: 12.7 }, name: "パーフェクト生命" },
    { id: 448, difficulty: {               master: 13.3 }, name: "のぼれ！すすめ！高い塔" },
    { id: 449, difficulty: {               master: 13.2 }, name: "害虫" },
    { id: 454, difficulty: {               master: 12.5 }, name: "ガチャガチャきゅ～と・ふぃぎゅ@メイト" },
    { id: 455, difficulty: {               master: 12.6 }, name: "Vampire" },
    { id: 456, difficulty: {               master: 12.7 }, name: "ケロ⑨destiny" },
    { id: 457, difficulty: {               master: 12.5 }, name: "Last Moments" },
    { id: 458, difficulty: {               master: 12.8 }, name: "風に乗せた願い" },
    { id: 459, difficulty: {               master: 12.4 }, name: "天狗の落とし文 feat. ｙｔｒ" },
    { id: 463, difficulty: {               master: 12.6 }, name: "Wake up Dreamer" },
    { id: 464, difficulty: { expert: 12.7, master: 14.1 }, name: "World Vanquisher" },
    { id: 466, difficulty: { expert: 11.9, master: 13.7 }, name: "Iudicium" },
    { id: 467, difficulty: {               master: 13.2 }, name: "Twice up Scenery" },
    { id: 468, difficulty: {               master: 12.9 }, name: "奏者はただ背中と提琴で語るのみ" },
    { id: 469, difficulty: { expert: 12.0, master: 13.9 }, name: "Xevel" },
    { id: 470, difficulty: { expert: 11.4, master: 13.5 }, name: "セイクリッド　ルイン" },
    { id: 471, difficulty: { expert: 11.7, master: 13.6 }, name: "極圏" },
    { id: 472, difficulty: { expert: 11.9, master: 13.6 }, name: "Scarlet Lance" },
    { id: 475, difficulty: {               master: 11.6 }, name: "ホシトハナ" },
    { id: 476, difficulty: {               master: 11.7 }, name: "Just Be Friends" },
    { id: 477, difficulty: {               master: 11.9 }, name: "炉心融解" },
    { id: 478, difficulty: {               master: 12.4 }, name: "Fire◎Flower" },
    { id: 479, difficulty: {               master: 12.3 }, name: "卑怯戦隊うろたんだー" },
    { id: 481, difficulty: {               master: 12.5 }, name: "イロトリドリのメロディ" },
    { id: 482, difficulty: {               master: 12.6 }, name: "セハガガガンバッちゃう！！" },
    { id: 483, difficulty: {               master: 12.5 }, name: "Burning Hearts ～炎のANGEL～" },
    { id: 485, difficulty: {               master: 11.8 }, name: "Our Fighting" },
    { id: 486, difficulty: { expert: 11.9, master: 13.8 }, name: "VERTeX" },
    { id: 487, difficulty: { expert: 10.8, master: 12.7 }, name: "-OutsideR:RequieM-" },
    { id: 488, difficulty: {               master: 11.3 }, name: "夢と夢～あの日のメロディ～" },
    { id: 489, difficulty: {               master: 12.5 }, name: "La Baguette Magique" },
    { id: 490, difficulty: { expert: 10.7, master: 12.9 }, name: "bubble attack" },
    { id: 491, difficulty: {               master: 12.5 }, name: "The Darkness of Valhalla" },
    { id: 492, difficulty: {               master: 12.7 }, name: "時の冒険者" },
    { id: 493, difficulty: {               master: 12.5 }, name: "Rendezvous" },
    { id: 494, difficulty: {               master: 12.7 }, name: "EXECUTOR" },
    { id: 495, difficulty: {               master: 12.1 }, name: "不安定な神様" },
    { id: 496, difficulty: { expert: 10.7, master: 13.3 }, name: "Hyper Active" },
    { id: 497, difficulty: {               master: 12.5 }, name: "L'épilogue" },
    { id: 498, difficulty: {               master: 12.5 }, name: "D✪N’T ST✪P R✪CKIN’ ～[✪_✪] MIX～" },
    { id: 499, difficulty: { expert: 12.1, master: 13.9 }, name: "Caliburne ～Story of the Legendary sword～" },
    { id: 500, difficulty: {               master: 11.7 }, name: "プリズム" },
    { id: 501, difficulty: {               master: 11.5 }, name: "星灯" },
    { id: 502, difficulty: {               master: 11.8 }, name: "Clover Heart's" },
    { id: 503, difficulty: {               master: 11.8 }, name: "スイートマジック" },
    { id: 504, difficulty: { expert: 11.5, master: 13.7 }, name: "Calamity Fortune" },
    { id: 505, difficulty: {               master: 11.9 }, name: "Melody！" },
    { id: 506, difficulty: { expert: 12.4, master: 13.6 }, name: "G e n g a o z o" },
    { id: 509, difficulty: {               master: 12.1 }, name: "Vitalization" },
    { id: 512, difficulty: {               master: 11.6 }, name: "フラジール" },
    { id: 513, difficulty: {               master: 12.3 }, name: "Absolunote" },
    { id: 514, difficulty: {               master: 12.4 }, name: "木彫り鯰と右肩ゾンビ" },
    { id: 516, difficulty: {               master: 12.2 }, name: "WAVE" },
    { id: 522, difficulty: {               master: 11.9 }, name: "Philosophyz" },
    { id: 523, difficulty: {               master: 11.8 }, name: "虹色のフリューゲル" },
    { id: 524, difficulty: {               master: 12.5 }, name: "ETERNAL DRAIN" },
    { id: 525, difficulty: {               master: 12.4 }, name: "Paradisus-Paradoxum" },
    { id: 526, difficulty: {               master: 12.1 }, name: "ようこそジャパリパークへ" },
    { id: 528, difficulty: {               master: 12.9 }, name: "チルノのパーフェクトさんすう教室　⑨周年バージョン" },
    { id: 529, difficulty: {               master: 11.8 }, name: "プレパレード" },
    { id: 530, difficulty: {               master: 11.5 }, name: "オレンジ" },
    { id: 531, difficulty: {               master: 10.7 }, name: "ホーリーナイト" },
    { id: 532, difficulty: {               master: 12.4 }, name: "Cosmic twinkle star" },
    { id: 533, difficulty: {               master: 12.3 }, name: "終わりなき物語" },
    { id: 534, difficulty: {               master: 13.3 }, name: "BlazinG AIR" },
    { id: 535, difficulty: {               master: 12.5 }, name: "Change me" },
    { id: 537, difficulty: {               master: 12.0 }, name: "ハレ晴レユカイ" },
    { id: 538, difficulty: { expert: 12.0, master: 13.8 }, name: "AMAZING MIGHTYYYY!!!!" },
    { id: 540, difficulty: {               master: 12.3 }, name: "砂の惑星 feat. HATSUNE MIKU" },
    { id: 541, difficulty: {               master: 11.7 }, name: "ヒトリゴト" },
    { id: 542, difficulty: {               master: 11.6 }, name: "adrenaline!!!" },
    { id: 544, difficulty: {               master: 11.7 }, name: "夢路らびりんす" },
    { id: 545, difficulty: {               master: 11.4 }, name: "全力バタンキュー" },
    { id: 546, difficulty: {               master: 12.4 }, name: "Last Proof" },
    { id: 547, difficulty: {               master: 13.0 }, name: "拝啓ドッペルゲンガー" },
    { id: 548, difficulty: { expert: 12.0, master: 13.8 }, name: "Doppelganger" },
    { id: 549, difficulty: {               master: 11.2 }, name: "色は匂へど散りぬるを" },
    { id: 550, difficulty: {               master: 11.3 }, name: "ポルカドット" },
    { id: 551, difficulty: { expert: 11.4, master: 13.5 }, name: "Sparking Revolver" },
    { id: 552, difficulty: { expert: 11.7, master: 13.8 }, name: "Gate of Doom" },
    { id: 553, difficulty: {               master: 12.5 }, name: "ダンスロボットダンス" },
    { id: 554, difficulty: {               master: 11.6 }, name: "アルカリレットウセイ" },
    { id: 555, difficulty: {               master: 12.3 }, name: "キレキャリオン" },
    { id: 556, difficulty: {               master: 11.8 }, name: "グラーヴェ" },
    { id: 557, difficulty: {               master: 12.5 }, name: "レトロマニア狂想曲" },
    { id: 559, difficulty: { expert: 12.4, master: 13.9 }, name: "otorii INNOVATED -[i]3-" },
    { id: 574, difficulty: {               master: 12.0 }, name: "ネ！コ！" },
    { id: 626, difficulty: {               master: 12.6 }, name: "アンノウン・マザーグース" },
];

/* Map[Name, Chart] */
var CHART_BY_NAME = {};
for (var i = 0; i < CHART_LIST.length; i++) CHART_BY_NAME[CHART_LIST[i].name] = CHART_LIST[i];

/* ---- UTILITIES */

/* Calculate rate from given SCORE and DIFFICULTY.
 * reference : http://d.hatena.ne.jp/risette14/20150913/1442160273 */
function score_to_rate(difficulty, score) {
    if (!difficulty) return 0;
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

/* Calculate score required to achieve given RATE wrt DIFFICULTY. This
 * function may return NaN to indicate that the rate is NOT achievable
 * wrt DIFFICULTY. */
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

/* Format a float to the form "xx.yy". */
function rate_str (num) {
    if (num > 0) return num.toString().substring(0, num >= 10 ? 5 : 4);
    return "NO DATA";
}

/* Format a float to the form " +xx.yy" or " -xx.yy". */
function rate_diff_str (num) {
    return num <= -10.0 ? " " + num.toString().substring(0, 6)
        :  num <= -0.01 ? " " + num.toString().substring(0, 5)
        :  num >=  10.0 ? " +" + num.toString().substring(0, 5)
        :  num >=  0.01 ? " +" + num.toString().substring(0, 4)
        :  "";
}

/* Format an integer to the form "+xxxx" or "-xxxx". */
function score_diff_str (num) {
    return !num ? "" : num < 0 ? num : "+" + num;
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

/* Flatten an array. */
Array.prototype.flatten = function () {
    return [].concat.apply([], this);
}

/* Deepcopy an object. */
Object.deepcopy = function (o) {
    return JSON.parse(JSON.stringify(o));
}

/* Workaround Vue.js's limitation */
Object.set = function (o, key, val) {
    if (Vue) Vue.set(o, key, val);
    else o[key] = val;
}

/* Polyfill Object.values. */
Object.values = function (o) {
    return Object.keys(o).map(function (key) { return o[key]; });
}

/* ---- LOGIC */

var data = {
    best_scores:       {}, /* Map[Title, Level, Playlog] */
    recent_candidates: [], /* OrderedList[Playlog] */
    last_play_date: undefined,
};

function update_playlog_rate (playlog) {
    var chart      = CHART_BY_NAME[playlog.name];
    var difficulty = (chart && chart.difficulty[playlog.level]) || 0;
    var rate       = score_to_rate(difficulty, playlog.score);
    var last_best  = (data.best_scores[playlog.name] || {})[playlog.level];

    Object.assign(playlog, {
        rate: rate,
        difficulty: difficulty,
        diff: {
            rate: rate - (last_best ? last_best.rate : 0),
            score: playlog.score - (last_best ? last_best.score : 0),
        }
    });

    return playlog;
}

function playlog (name, level, score, play_date /* optional */) {
    var playlog = { name: name, level: level, score: score, play_date: play_date };
    return update_playlog_rate(playlog);
}

function push_playlog_to_best_scores (playlog) {
    var current_bests = data.best_scores[playlog.name];
    if (!current_bests) {
        current_bests = {};
        Object.set(data.best_scores, playlog.name, current_bests);
    }

    var current_best = current_bests[playlog.level];
    if (!current_best || comp_rate(playlog, current_best) < 0) {
        Object.set(current_bests, playlog.level, playlog);
    }
}

/* reference: http://max-eipi.hatenablog.com/entry/2016/08/22/031357 */
function push_playlog_to_recent_candidates (playlog) {
    var length              = data.recent_candidates.length;
    var recent_list         = data.recent_candidates.copy().sort(comp_rate).slice(0, 10);
    var rate_is_less        = function (x) { return x.rate < playlog.rate; };
    var score_is_less_or_eq = function (x) { return x.score <= playlog.score; };

    if (playlog.level == "worldsend") return;
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
    var best_scores = Object.values(this.data.best_scores).map(Object.values).flatten();
    var best_list   = best_scores.sort(comp_rate).slice(0, 30);
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
            return playlog(name, level, parse_int(score), date);
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
    var level = $(".box01_title span").html().toLowerCase();
    var logs  = $(".w388.musiclist_box").map(function () {
        var name = $(this).find(".music_title").html();
        var score = $(this).find(".play_musicdata_highscore span").html();
        if (name && score) {
            return playlog(name, level, parse_int(score));
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
    if (data_str) Object.assign(data, JSON.parse(data_str));
    /* recompute rate and diffs */
    Object.values(data.best_scores).map(Object.values).flatten().map(update_playlog_rate);
    data.recent_candidates.map(update_playlog_rate);
}

function save_data () {
    localStorage.setItem("cra_star_data", JSON.stringify(data));
}

/* ---- VIEW MODEL */

var LIST_TITLES = {
    best: "ベストスコア",
    recent: "Recent 枠, 候補枠",
};

var ORDERS = {
    rate:       { title: "レート順", comparator: comp_rate },
    difficulty: { title: "難易度順", comparator: comp_difficulty },
    play_date:  { title: "最近プレーした順", comparator: comp_play_date },
    score:      { title: "スコア順", comparator: comp_score }
};

var SECTIONS = {
    rate: [
        { title: "レート対象",   condition: function (p,i,l) { return i < (l == "recent" ? 10 : 30); } },
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
        props:    ["playlog", "minimum_best"],
        template: "#playlog",
        computed: {
            best_required_score: function () {
                return rate_to_score(this.playlog.difficulty, this.minimum_best);
            },
            extra_infos: function () {
                var res = [];
                if (this.playlog.play_date) {
                    res.push(this.playlog.play_date);
                }
                if (!isNaN(this.best_required_score)) {
                    var diff = this.best_required_score - this.playlog.score;
                    if (diff > 0) res.push("BEST 枠ボーダーまで: " + diff + " (" + this.best_required_score + ")");
                }
                return res;
            }
        },
        filters: { rate_str: rate_str, rate_diff_str: rate_diff_str, score_diff_str: score_diff_str }
    });
    vm = new Vue({
        el: el,
        data: {
            data:           data,
            selected_list:  "best",
            selected_order: "rate",
            scrape_target:  null,
            show_dialog:    true,
            last_rate:      { best: 0, recent: 0, total: 0, opt: 0 },
        },
        created: function () {
            load_data();
            this.last_rate = Object.deepcopy(this.rate);
            if (location.href.match(/Playlog\.html/))
                this.scrape_target = "playlog";
            else if (location.href.match(/MusicGenre\.html/) && $(".box01_title span").length)
                this.scrape_target = "musicgenre";
        },
        computed: {
            list_title: function () {
                return LIST_TITLES[this.selected_list];
            },
            order_title: function () {
                return ORDERS[this.selected_order].title;
            },
            rate: function () {
                return compute_rate();
            },
            best_scores: function () {
                return Object.values(this.data.best_scores).map(Object.values).flatten();
            },
            sorted_list: function () {
                var comparator = ORDERS[this.selected_order].comparator;
                if (this.selected_list == "recent") {
                    return this.data.recent_candidates.copy().sort(comparator);
                } else {
                    return this.best_scores.copy().sort(comparator);
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
            },
            tweet_url: function () {
                return "https://twitter.com/intent/tweet?text=" +
                       "CHUNITHM レート解析結果 →" +
                       " レート: " + rate_str(this.rate.total) +
                       " (Best: " + rate_str(this.rate.best) +
                       " Recent: " + rate_str(this.rate.recent) + ")" +
                       " / 到達可能: " + rate_str(this.rate.opt) +
                       " " + "https://zk-phi.github.io/CHUNITHMRateAnalyzerSTAR/" +
                       "&hashtags=CHUNITHMRateAnalyzerSTAR";
            }
        },
        methods: {
            scrape: function () {
                if (this.scrape_target == "playlog")
                    scrape_playlog_page();
                else if (this.scrape_target == "musicgenre")
                    scrape_musicgenre_page();
                save_data();
                this.show_dialog = false;
            },
            close_dialog: function () {
                this.show_dialog = false;
            },
            set_list: function (list) {
                this.selected_list = list;
            },
            set_order: function (order) {
                this.selected_order = order;
            }
        },
        filters: { rate_str: rate_str, rate_diff_str: rate_diff_str }
    });
}

/* ---- VIEW */

var view = `
<div id="cra">
  <div id="header">
    <div class="item">CHUNITHM Rate Analyzer ☆ (β)</div>
    <div id="hamburger" class="item right clickable shrinked"></div>
    <div class="menu">
      <a target="_blank" href="https://zk-phi.github.io/CHUNITHMRateAnalyzerSTAR/">
        <div class="item clickable">使い方</div>
      </a>
      <div class="item clickable shrinked">リスト: {{ list_title }}</div>
      <div class="submenu">
        <div class="item clickable" @click="set_list('best')">ベストスコア</div>
        <div class="item clickable" @click="set_list('recent')">Recent 枠, 候補枠</div>
      </div>
      <div class="item clickable shrinked">並び順: {{ order_title }}</div>
      <div class="submenu">
        <div class="item clickable" @click="set_order('rate')">レート順</div>
        <div class="item clickable" @click="set_order('difficulty')">難易度順</div>
        <div class="item clickable" @click="set_order('score')">スコア順</div>
        <div class="item clickable" @click="set_order('play_date')">最近プレーした順</div>
      </div>
      <div class="item footer">
        Built with ♡ by <a target="_blank" href="http://twitter.com/zk_phi">@zk_phi</a>
        &lt; Follow me on Twitter
      </div>
    </div>
  </div>

  <div v-if="show_dialog" id="dialog">
    <div class="body">
      <div v-if="scrape_target">
        <p v-if="scrape_target == 'playlog'">
          <span class="nobreak">「プレー履歴」ページを検出しました。</span>
          <span class="nobreak">データを取り込みますか？</span>
          <span class="nobreak">(初めて・久々に使う場合は「楽曲別レコード」で全曲のベストスコアを取り込みなおしてください)</span>
        </p>
        <p v-else>
          <span class="nobreak">「楽曲別レコード」ページを検出しました。</span>
          <span class="nobreak">データを取り込みますか？</span>
          <span class="nobreak">(Best 枠、到達可能レートが計算されます。 Recent 枠はまだ追跡されません)</span>
        </p>
        <p class="actions">
          <span class="action clickable secondary" @click="close_dialog">スキップ</span>
          <span class="action clickable primary" @click="scrape">取り込む</span>
        </p>
      </div>
      <div v-else>
        <span class="nobreak">CHUNITHM-NET を検出できませんでした。</span>
        <span>「プレー履歴」を開いて、または「楽曲別レコード」で難易度を選択して実行してください</span>
        <p class="actions">
          <span class="action clickable primary" @click="close_dialog">前回のデータを見る</span>
        </p>
      </div>
    </div>
  </div>

  <div id="content_wrapper">
    <div id="content">
      <div id="rating" class="section">
        <div class="title">レート</div>
        <div class="title right">
            <a target="_blank" class="twitter" :href="tweet_url">
              ツイートする
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
        </div>
        <div class="body">
          <div class="card">
            <div class="content">
              <div id="total_rate">
                {{ rate.total | rate_str }}<span class="dim">{{ rate.total - last_rate.total | rate_diff_str }}</span>
              </div>
              <div id="rate_details">
                Best: {{ rate.best | rate_str }}<span class="dim">{{ rate.best - last_rate.best | rate_diff_str }}</span>
                /
                Recent: {{ rate.recent | rate_str }}<span class="dim">{{ rate.recent - last_rate.recent | rate_diff_str }}</span>
              </div>
            </div>
            <div class="extra_content">
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
      </div>

      <div id="list" class="section">
        <div class="title">{{ list_title }}</div>
        <div class="body">
          <div v-for="playlog, ix in sorted_list" class="item">
            <p class="subsection" v-if="sections[ix]">{{ sections[ix] }}</p>
            <playlog :playlog="playlog" :minimum_best="rate.minimum_best" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

var playlog_template = `
<template id="playlog">
  <div :class="'card ' + playlog.level">
    <div class="difficulty">{{ playlog.difficulty | rate_str }}</div>
    <div class="content">
      <div class="name">{{ playlog.name }}</div>
      <div class="rate">
        Rate： {{ playlog.rate | rate_str }}
        <span class="dim">{{ playlog.diff.rate | rate_diff_str }}</span>
      </div>
      <div class="score">
        Score：{{ playlog.score }}
        <span class="dim">{{ playlog.diff.score | score_diff_str }}</span>
      </div>
    </div>
    <div v-if="extra_infos.length" class="extra_content">
      <div v-for="info in extra_infos">{{ info }}</div>
    </div>
  </div>
</template>
`;

var head = `
<title>CHUNITHM Rate Analyzer ☆ (β)</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
`;

/* style.css */
var css = `<style>*{margin:0;padding:0;box-sizing:border-box}body{font-size:15px;color:#f4f4f4;font-family:'Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',Meiryo,メイリオ,Osaka,'MS PGothic',arial,helvetica,sans-serif}a,a:hover,a:visited{color:#f4f4f4;text-decoration:none}.clickable{cursor:pointer}.dim{font-size:10px;opacity:.6}#header{position:fixed;top:0;left:0;z-index:1;background-color:#222;box-shadow:0 3px 15px rgba(0,0,0,.7)}@media (max-width:962px){#header{width:100%}.shrinked+*{display:none}#hamburger.shrinked:before{content:"≡"}#hamburger.expanded:before{content:"×"}#header .menu .item.expanded{border-top:1px solid #444}#header .menu .item.shrinked:before{content:"▶ ";color:#aaa}#header .menu .item.expanded:before{content:"▼ ";color:#aaa}}@media (min-width:963px){#header{height:100vh;width:320px}#header .menu{background-color:#333;height:100vh}#header .menu .item{border-top:1px solid #444}#content{margin-left:320px}}#header .item{height:35px;width:100%;padding:10px;line-height:15px}#header .item.right{margin-top:-35px;text-align:right}#header .item.footer{font-size:10px;height:30px;line-height:10px;color:#aaa}#header .menu .item{background-color:#333}#header .submenu .item{background-color:#444}#header .menu .item.clickable:active{background-color:#222}#header .submenu .item.clickable:active{background-color:#333}@media (max-width:962px){#content_wrapper{margin-top:35px}}#content{padding:10px;min-height:100vh;background-color:#222}#content .section{max-width:384px;margin:auto}#content .section+.section{margin-top:10px}#content .section .title{height:35px;line-height:15px;padding:10px;border-radius:3px 3px 0 0;background-color:#444}#content .section .title.right{margin-top:-35px;text-align:right}#content .section .title .twitter{color:#1da1f2}#content .section .body{padding:10px;border-radius:0 0 3px 3px;background-color:#333}#content .card{position:relative;border-radius:3px;background-color:#da9306}#content .card .content{padding:10px}#content .card .extra_content{padding:5px 10px;background-color:rgba(255,255,255,.1);border-radius:0 0 3px 3px;font-size:12px;opacity:.8}#content .card.basic{background-color:#207720}#content .card.advanced{background-color:#ab6b1f}#content .card.expert{background-color:#a7224e}#content .card.master{background-color:#582080}#rating #total_rate{font-size:60px}#list .subsection{margin:10px 0}#list .item+.item{margin-top:20px}#list .card .difficulty{position:absolute;top:10px;right:10px;font-weight:700}#list .card .content .name{font-weight:700;margin-right:40px}#list .card .content .rate,.score{font-size:12px}#dialog:before{position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:-1;background-color:#000;opacity:.7;content:" "}#dialog{position:fixed;left:5vw;top:150px;width:90vw;z-index:2}#dialog .body{width:100%;max-width:500px;padding:20px;margin:auto;border-radius:3px;background-color:#eee;color:#222;border:1px solid #aaa}#dialog .body .nobreak{display:inline-block}#dialog .body .actions{margin-top:30px;text-align:right}#dialog .body .actions .action{margin-left:10px}#dialog .body .actions .action.primary{color:#0275d8;font-weight:700}#dialog .body .actions .action.secondary{color:#444}</style>`;

$.getScript("https://cdn.jsdelivr.net/npm/vue", function () {
    $("head").html(head);
    $("body *").hide();
    $("body").append(view).append(playlog_template).append(css);
    attach_view("#cra");
    $(".shrinked").click(function () { $(this).toggleClass("expanded").toggleClass("shrinked"); });
}, function (s) {
    console.log("Loading: " + s + "...");
});
