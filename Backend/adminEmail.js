const adminEmail = ({
    firstName,
    lastName,
    email,
    phone,
    topic,
    description,
    message,
}) => {
    return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Submission - ProC</title>
    <style>
      body {
        background-color: #f5f7f9;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        color: #292e31;
      }

      .email-wrapper {
        width: 100%;
        background-image: url('https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 20px 0;
      }

      .email-content {
        width: 90%;
        max-width: 600px;
        background: #ffffff;
        margin: auto;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
      }

      .email-header {
        text-align: center;
        padding: 30px 20px 10px;
      }

      .email-header img {
        height: 80px;
      }

      .email-body {
        padding: 30px 20px;
      }

      .email-body h1 {
        font-size: 20px;
        margin-bottom: 15px;
        color: #E65F27;
      }

      .email-body p {
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 10px;
        color: #444;
      }

      .email-footer {
        text-align: center;
        padding: 20px;
        font-size: 13px;
        color: #888;
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="email-content">
        <div class="email-header">
          <img src="http://localhost:5173/src/assets/logo.png" alt="ProC Logo" />
        </div>
        <div class="email-body">
          <h1>New Contact Submission</h1>
          <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Topic:</strong> ${topic}</p>
          <p><strong>Role:</strong> ${description}</p>
          <p><strong>Message:</strong> ${message}</p>
          <br/>
          <p><em>Please follow up with this user as soon as possible.</em></p>
        </div>
        <div class="email-footer">
          &copy; ${new Date().getFullYear()} Procedu Services (ProC) — All rights reserved.
        </div>
      </div>
    </div>
  </body>
</html>
  `;
};

export default adminEmail