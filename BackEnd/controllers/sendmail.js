const nodemailer = require('nodemailer');
const sendmail = async (req, res) => {
  try {
    const { email, subject, message, name, number } = req.body;

    if (!email || !subject || !message || !name || !number) {
      return res
        .status(400)
        .json({ success: false, message: 'All fields are required.' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'fawad7998@gmail.com',
        pass: 'gitxhxqxifvwtxja',
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: 'fawad7998@gmail.com',
      to: 'fawad7998@gmail.com',
      subject: subject,
      html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 20px;">
                  <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                    <div style="text-align: center; border-bottom: 1px solid #eaeaea; padding-bottom: 20px; margin-bottom: 20px;">
                      <h1 style="color: #4CAF50; margin: 0;">New Contact Email</h1>
                    </div>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>From:</strong> ${email}</p>
                    <p><strong>Number:</strong> ${number}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4CAF50; margin-top: 20px; border-radius: 5px;">
                      <p><strong>Message:</strong></p>
                      <p>${message}</p>
                    </div>
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea;">
                      <p>This email was sent from the contact form on your website.</p>
                      <p>&copy; 2024 Your Company | All Rights Reserved</p>
                    </div>
                  </div>
                </div>
            `,
    };

    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email.',
      error: error.toString(),
    });
  }
};

module.exports = sendmail;
