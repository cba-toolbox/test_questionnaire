/* デモ用のストループ課題 */
/* 教示 */
var instructions = {
    type: "html-keyboard-response",
    stimulus: "<p style='text-align:left'>これはテストの質問紙です。</p>"+
        "<p style='text-align:left'>キーボードのキーをどれか押すと質問が始まります。準備ができたら始めてください。</p>",
    post_trial_gap: 1000
};

/*questionnaire*/
var scale = [
  "非常にあてはまる", 
  "かなりあてはまる", 
  "ややあてはまる", 
  "どちらともいえない",
  "あまりあてはまらない",
  "ほとんどあてはまらない",
  "全くあてはまらない"
];

var questionnaire = {
  type: 'survey-likert',
  questions: [
    {prompt: "私はjava scriptが好きだ", name: 'lab', labels: scale},
    {prompt: "私はjsPsychが好きだ", name: 'programming', labels: scale},
    {prompt: "私はlab.jsが好きだ", name: 'psych', labels: scale},
    {prompt: "私はJATOSが好きだ", name: 'Senshu', labels: scale}
  ],
  button_label: '次へ',
};

/*デブリーフィング*/
var debrief = {
  type: "html-keyboard-response",
  stimulus: "<p style='text-align:left'>質問は以上です。キーボードのキーをどれか押すと終わります。</p>",
};

/*タイムラインの設定*/
var timeline = [fullscreen,instructions,questionnaire,debrief];
