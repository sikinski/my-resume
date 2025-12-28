export function makeEmail(form, currentUrl) {
    const { name, email } = form

    return `
    <div style="font-family: Arial, sans-serif; padding:20px; background:#f7f7f7;">
      <div style="max-width:600px; margin:auto; background:#ffffff; padding:20px; border-radius:8px;">
        
        <h2 style="margin-top:0; color:#333;">Новая заявка с сайта</h2>
        <p style="color:#555; font-size:15px;">Кто-то оставил заявку на сайте. Ниже детали:</p>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0; font-weight:bold; color:#333;">Имя</td>
            <td style="padding:8px 0; color:#555;">${name || "—"}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; font-weight:bold; color:#333;">Email</td>
            <td style="padding:8px 0; color:#555;">${email || "—"}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; font-weight:bold; color:#333;">Страница заявки</td>
            <td style="padding:8px 0; color:#555;">
              <a href="${currentUrl}" style="color:#FFA501; text-decoration:none;">${currentUrl || "—"}</a>
            </td>
          </tr>
        </table>

        <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />
        <p style="font-size:13px; color:#999;">Письмо отправлено автоматически • Не отвечайте на него</p>
      </div>
    </div>
  `
}
