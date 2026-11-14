document.getElementById("btn-test").addEventListener("click", function () {
    const msg = document.getElementById("message");
    msg.textContent = "✅ Xin chào Nguyễn Trương Tấn Quyền - 1822040819! Website đã hoạt động.";
    
    setTimeout(function () {
        msg.textContent = "";
    }, 3000);
});