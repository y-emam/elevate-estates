import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { OAuth2Client } from 'google-auth-library';

const OAuth2 = OAuth2Client;

interface UserRequestBody {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export async function POST(req: NextRequest) {
    try {
        const { firstName, lastName, email, phone }: UserRequestBody = await req.json();

        const emailReceiver = process.env.EMAIL_RECEIVER;
        const senderEmail = process.env.EMAIL_SENDER;

        const clientId: string = process.env.OAUTH_CLIENT_ID || ''; 
        const clientSecret: string = process.env.OAUTH_CLIENT_SECRET || '';
        const refreshToken: string = process.env.OAUTH_REFRESH_TOKEN || '';

        const oauth2Client = new OAuth2(
          clientId,
          clientSecret,
          "http://localhost:3000/api/auth/callback"
        );
    
        oauth2Client.setCredentials({
          refresh_token: refreshToken
        });

        async function getAccessToken() {
            const { token } = await oauth2Client.getAccessToken() || "";
            return token;
          }
    
        const accessToken = await getAccessToken() as string;
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: senderEmail,
              clientId: clientId,
              clientSecret: clientSecret,
              refreshToken: refreshToken,
              accessToken: accessToken
            },
          });

    
        const info = await transporter.sendMail({
            from: `"Website-Bot" ${senderEmail}`,
            to: emailReceiver, 
            subject: "A new user applied throw the website.", 
            text: `A new user applied throw the website, his data is :
            First Name: ${firstName}
            Last Name: ${lastName}
            Email: ${email}
            Phone: ${phone}`,
             
        });
    
        return NextResponse.json({ message: 'Email sent', info });
      } catch (error) {
        console.log(error);
        
        return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
      }
}

// export async function POST(req: NextApiRequest) {
//     try {
//         const { firstName, lastName, email, phone }: UserRequestBody = req.body;
       
//         const subject = "A new user applied throw the website.";
//         const emailReceiver = process.env.EMAIL_RECEIVER;
//         const senderEmail = process.env.EMAIL_SENDER;
//         const pass = process.env.EMAIL_SENDER_PASS;

//         const transporter = nodemailer.createTransport({
//             host: 'smtp.gmail.com', // Example: smtp.gmail.com
//             port: 587, // or 465 for SSL
//             secure: false, // Use TLS
//             auth: {
//                 user: senderEmail, 
//                 pass: pass, 
//             },
//         });

        // const info = await transporter.sendMail({
        //     from: `"Website-Bot" ${senderEmail}`,
        //     to: emailReceiver, 
        //     subject, 
        //     text: `A new user applied throw the website, his data is :
        //     First Name: ${firstName}
        //     Last Name: ${lastName}
        //     Email: ${email}
        //     Phone: ${phone}`,
             
        // });

//         return NextResponse.json({ message: 'The email has been sent successfully.', info });
//     } catch (err) {
//         console.log(err);
//         return NextResponse.json({ message: 'Error sending email.', err }, { status: 500 });
        
//     }
// }