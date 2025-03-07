const encryptedKey = "U2FsdGVkX19vDo+Trh03N/jUL0y/pvyh2l5BdoILTjEDwR3HHb6EG/7rSI52p9xJNTHpw0E9Wtk7/REHppPf0g==";
const password = "123";  // غيّر هذا إلى كلمة سر قوية

// دالة فك التشفير
async function decryptKey(encryptedText) {
    try {
        const response = await fetch("https://example.com/decrypt", {  // يجب أن يكون لديك API لفك التشفير
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ encryptedText, password })
        });
        const data = await response.json();
        return data.decryptedKey;
    } catch (error) {
        console.error("❌ خطأ في فك التشفير:", error);
        return null;
    }
}
