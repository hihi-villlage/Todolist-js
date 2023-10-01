import "./styles.css";

const clickAdd = () => {
    //テキストボックスの値をvalueとして取得→初期化する
    const inputTask = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

 //divタグ生成・・・JS上でhtmlの木構造（DOM）を作る createElement
const div = document.createElement("div");
div.className = "list-row";

//liタグ生成
const li = document.createElement("li");
li.innerText = inputTask; //タグの中に文字を入れる

//ボタンタグ作成
const inprogressButton = document.createElement("button");
inprogressButton.innerText = "In progress";
inprogressButton.addEventListener ("click", () => {
    deleteTaskFromtodoList (inprogressButton.parentNode);

    //taskの内容（テキスト.liの中身だけ）をinprogressに追加
    const addTarget = inprogressButton.parentNode;
    const addInprogress = addTarget.firstElementChild.innerText;
    
    //div以下を初期化する
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = addInprogress; //タグの中に文字を入れる

    //ボタン作成
    const doneButton = document.createElement("button");
    doneButton.innerText = "Done";
    doneButton.addEventListener ("click", () =>{
        alert ("ee");
    })


    div.appendChild (li);
    div.appendChild (doneButton);

    document.getElementById("inprogress-tasks").appendChild(div); //inprogressリストにinput内容を追加 
    
});

const deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";
deleteButton.addEventListener ("click", () => {
    deleteTaskFromList (deleteButton.parentNode);
});

//入れ子構造を作る。*タグの配下に＊*タグを入れる *.appendChild(**);
div.appendChild (li);
div.appendChild (inprogressButton);
div.appendChild (deleteButton);

document.getElementById("todo-tasks").appendChild(div); //todoリストにinput内容を追加 

};

//clickイベントを設定（clickしたときのイベント） 
//イベントを付与する時　addEventListener
document.getElementById("add-button").addEventListener("click", () => clickAdd());

//タスクをtodoリストから削除する
const deleteTaskFromtodoList = (target) => {
    document.getElementById ("todo-tasks").removeChild(target);
};

//inprogress
