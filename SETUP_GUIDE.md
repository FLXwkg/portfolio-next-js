# 📋 Portfolio Setup Guide - EmailJS Configuration

## Quick Start

Your portfolio landing page is now complete! To activate the contact form email functionality, follow these steps:

---

## Step 1: Create EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Confirm your email

---

## Step 2: Create Email Service

1. In the EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, or SMTP)
4. Follow the setup wizard
5. Copy your **Service ID** (looks like: `service_xxxxxxxxx`)

---

## Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Set up your template with these variables:
   ```
   From Name: {{from_name}}
   From Email: {{from_email}}
   Subject: {{subject}}
   Message: {{message}}
   To Email: {{to_email}}
   ```
4. Save and copy your **Template ID** (looks like: `template_xxxxxxxxx`)

---

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxxxxx`)

---

## Step 5: Update Your Code

In `src/components/ContactForm.tsx`, replace:

```typescript
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID_HERE";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE";
```

With your actual credentials from EmailJS.

---

## Step 6: Uncomment EmailJS Code

In `src/components/ContactForm.tsx`, uncomment these lines (around line 45-50):

```typescript
// Remove these comment slashes:
emailjs.init(EMAILJS_PUBLIC_KEY);

// And uncomment the send function:
await emailjs.send(
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  {
    from_name: formState.name,
    from_email: formState.email,
    subject: formState.subject,
    message: formState.message,
    to_email: "your-email@example.com",
  },
  EMAILJS_PUBLIC_KEY
);
```

---

## Step 7: Update Recipient Email

Replace `"your-email@example.com"` with your actual email address in the send function.

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page (all sections composed here)
│   ├── layout.tsx            # Layout with metadata
│   └── globals.css           # Global styles + custom animations
│
└── components/
    ├── HeroSection.tsx       # Hero section with CTA buttons
    ├── AboutSection.tsx      # Professional background
    ├── SkillsSection.tsx     # Technical skills showcase
    ├── ProjectCard.tsx       # Reusable project card component
    ├── ProjectsSection.tsx   # Projects showcase
    ├── ContactForm.tsx       # Contact form with EmailJS (CLIENT)
    ├── ContactSection.tsx    # Contact section with form + info
    └── Footer.tsx            # Professional footer
```

---

## Customization Tips

### Update Personal Info
- **Hero**: Update headline and description in `HeroSection.tsx`
- **About**: Modify experience details in `AboutSection.tsx`
- **Projects**: Add real projects in `ProjectsSection.tsx`
- **Contact**: Update email and social links in `ContactSection.tsx`

### Color Customization
Primary color is `#e0a4ed` (violet). To change it globally:
1. Update `globals.css` CSS variables
2. Search and replace hex codes in components

### Add More Projects
In `ProjectsSection.tsx`, add objects to the `projects` array:
```typescript
{
  id: 5,
  title: "Your Project",
  description: "Description",
  tags: ["Tech1", "Tech2"],
  link: "#",
  emoji: "🚀",
}
```

---

## Features Implemented

✅ **Responsive Design** - Mobile-first, works on all devices  
✅ **Tailwind CSS** - Custom color palette (#e0a4ed, #fcf7fc)  
✅ **Smooth Animations** - Fade-in, slide-up, hover effects  
✅ **Atomic Components** - Modular, reusable component structure  
✅ **EmailJS Integration** - Contact form with email notifications  
✅ **SEO Optimized** - Metadata in layout.tsx  
✅ **Accessibility** - Good contrast, semantic HTML  
✅ **Performance** - Next.js 16 optimizations  

---

## Local Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view your portfolio.

---

## Deployment

Deploy to Vercel with one click:
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables (optional, credentials are public in EmailJS)
5. Deploy

---

## Support & Resources

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**Happy coding! 🚀**
