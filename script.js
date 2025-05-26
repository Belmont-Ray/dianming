// 学生名单
const students = [
    "卜家豪", "陈亚欣", "丁晓萱", "董恩浩", "段鹏松", 
    "房芮禾", "高俊腾", "高鹿桐", "谷天乐", "何沛洋", 
    "贾旭", "靳思同", "李凤豪", "李嘉兴", "李建宇", 
    "李万琪", "李欣宇", "李业勤", "刘百刚", "刘冰倩", 
    "刘峻泽", "刘一翔", "刘宇倩", "刘志龙", "毛诚一", 
    "邵尚薇", "孙健玮", "王宪斌", "王政皓", "王志甲", 
    "王子林", "吴梦瑶", "邢嘉旺", "徐佳慧", "许珈玮", 
    "张连祥", "张淑恒", "张韵", "张照毅", "张智", 
    "张璐璐", "赵含蕊", "赵正阳", "赵珈艺", "祝祥和"
];

// 获取DOM元素
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resultArea = document.getElementById('resultArea');
const studentList = document.getElementById('studentList');

// 初始化学生名单显示
function initStudentList() {
    studentList.innerHTML = '';
    students.forEach(student => {
        const span = document.createElement('span');
        span.textContent = student;
        studentList.appendChild(span);
    });
}

// 随机抽取学生
let timer;
let isRolling = false;

function startRolling() {
    if (isRolling) return;
    
    isRolling = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
    timer = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * students.length);
        resultArea.textContent = students[randomIndex];
    }, 100);
}

function stopRolling() {
    if (!isRolling) return;
    
    clearInterval(timer);
    isRolling = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    
    // 高亮显示选中的学生
    const selectedStudent = resultArea.textContent;
    const studentElements = studentList.querySelectorAll('span');
    studentElements.forEach(el => {
        if (el.textContent === selectedStudent) {
            el.style.backgroundColor = '#ffcccb';
            el.style.fontWeight = 'bold';
        } else {
            el.style.backgroundColor = '#e1f5fe';
            el.style.fontWeight = 'normal';
        }
    });
}

// 事件监听
startBtn.addEventListener('click', startRolling);
stopBtn.addEventListener('click', stopRolling);

// 初始化
initStudentList();