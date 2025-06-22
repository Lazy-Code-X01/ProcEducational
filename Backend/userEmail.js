const userEmail = (fullName, subject) => {
  return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Message Received - Procedu Services</title>
        <style>
          *:not(br):not(tr):not(html) {
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            box-sizing: border-box;
          }
          body {
            background-color: #f5f7f9;
            color: #555;
            margin: 0;
            padding: 0;
          }
          .email-wrapper {
            width: 100%;
            background-image: url('https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            background-size: cover;
            background-position: center;
          }
          .email-content {
            width: 100%;
          }
          .email-masthead {
            text-align: center;
            padding: 25px 0;
          }
          .email-body {
            background: #fff;
            border-top: 1px solid #e7eaec;
            border-bottom: 1px solid #e7eaec;
            width: 100%;
          }
          .email-body_inner {
            width: 570px;
            margin: auto;
            background-color: #fff;
            border-radius: 6px;
          }
          .content-cell {
            padding: 35px;
          }
          h1 {
            color: #333;
            font-size: 20px;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
            color: #666;
          }
          .email-footer {
            text-align: center;
            padding: 20px;
            font-size: 13px;
            color: #999;
          }
          .button--primaryColor {
            display: inline-block;
            background-color: #E65F27;
            color: #fff !important;
            padding: 12px 20px;
            border-radius: 4px;
            text-decoration: none;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <table class="email-wrapper">
          <tr>
            <td>
              <table class="email-content">
                <tr>
                  <td class="email-masthead">
                    <img src="http://localhost:5173/src/assets/logo.png" alt="Procedu Services" height="60" />
                  </td>
                </tr>
                <tr>
                  <td class="email-body">
                    <table class="email-body_inner" align="center">
                      <tr>
                        <td class="content-cell">
                          <h1>Hello ${fullName},</h1>
                          <p>Thank you for contacting <strong>Procedu Services</strong>.</p>
                          <p>We’ve received your message regarding <strong>${subject}</strong>.</p>
                          <p>Our team will review your request and get back to you as soon as possible.</p>
                          <p>We appreciate your interest!</p>
                          <br />
                          <p>Warm regards,</p>
                          <p><strong>Promise C. Ezeh</strong></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="email-footer">
                    <p>&copy; ${new Date().getFullYear()} Procedu Services. All rights reserved.</p>
                    <p>proceduservices.com</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `;
};

export default userEmail;
