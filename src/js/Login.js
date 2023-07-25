// 完成 Login 函式


    //function checkLoginStatus() {
    //    // 檢查是否有會員登入
    //    const currentMember = JSON.parse(localStorage.getItem('currentMember'));
    //    if (currentMember) {
    //        // 顯示歡迎詞和登出按鈕
    //        document.getElementById('memberName').innerText = `歡迎您，${currentMember.name}！`;
    //        document.getElementById('logoutButton').style.display = 'block';
    //    } else {
    //        // 若未登入，顯示登入按鈕
    //        document.getElementById('loginButton').style.display = 'block';
    //    }
    //}

    //function logout() {
    //    // 登出，將會員資訊從 localStorage 中移除
    //    localStorage.removeItem('currentMember');
    //    // 重新載入頁面
    //    location.reload();
    //}

    //function LoginPermission(userData) {
    //    // 將 userData 資料讀取出來
    //    const permissionLevel = userData.permission;

    //    // 根據 permissionLevel 做權限控制
    //    if (permissionLevel === 1) {
    //        // 管理者可以做的事情


    //    } else if (permissionLevel === 1000) {
    //        // 老師可以做的事情


    //    } else if (permissionLevel === 3000) {
    //        // 會員可以做的事情

    //    } else {
    //        // 限制遊客可以做的事情
    //        console.log(`您無法執行此操作，請先登入。`);
    //        window.location.href = 'https://localhost:7127/Login/Login';
    //    }
    //}   

    //window.addEventListener('load', function () {
    //    checkLoginStatus();
    //});
// }
function updateMemberData(member) {
    // 獲取使用者輸入的新資料
    const newName = document.getElementById("name").value;
    const newEmail = document.getElementById("email").value;
    const newPhone = document.getElementById("phone").value;
    // 獲取其他欄位的新資料...

    // 更新會員資料物件的屬性
    member.name = newName;
    member.email = newEmail;
    member.phone = newPhone;
    // 更新其他欄位...

    // 將更新後的會員資料保存回localStorage
    localStorage.setItem("currentMember", JSON.stringify(member));

    // 進行其他的資料更新或後端送出的動作...

    // 提示使用者更新成功
    alert("資料更新成功！");
}