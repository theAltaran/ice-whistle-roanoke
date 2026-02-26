# Ice Whistle Roanoke

A community website for distributing free ICE whistles in Roanoke, VA.

## Environment Variables

To enable the whistle request form to send emails, add these environment variables in Vercel:

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | Your email server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | Email server port | `587` (or `465` for SSL) |
| `SMTP_USER` | Your email address/username | `your-email@gmail.com` |
| `SMTP_PASS` | Your email password or app password | `xxxx xxxx xxxx xxxx` |
| `EMAIL_TO` | (Optional) Where to send requests. Defaults to icewhistleroanoke@gmail.com | `your-email@gmail.com` |

### Gmail Setup

If using Gmail:
1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account > Security > App passwords
3. Generate a new app password for "Mail"
4. Use that 16-character password as `SMTP_PASS`

### Other Email Providers

- **Outlook/Hotmail**: Use `smtp-mail.outlook.com` as host, port `587`
- **Yahoo**: Use `smtp.mail.yahoo.com` as host, port `587`
- **Custom SMTP**: Check your provider's documentation

## Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard (Settings > Environment Variables)
4. Deploy

## Development

```bash
npm install
npm run dev
```

## Features

- Home page with ICE whistle information and usage instructions
- Donate page with PayPal integration
- Download page with STL file and request form
- Contact email on all pages
