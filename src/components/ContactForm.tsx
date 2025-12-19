/**
 * Contact Form Component with EmailJS Integration
 * Handles form submission, validation, and email sending
 */


import { useState } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS (replace with your public key)
// Sign up at https://www.emailjs.com/ to get your credentials
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID_HERE";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitState {
  loading: boolean;
  success: boolean;
  error: string;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitState, setSubmitState] = useState<SubmitState>({
    loading: false,
    success: false,
    error: "",
  });

  // Initialize EmailJS on component mount
  // Uncomment after setting your public key
  // useEffect(() => {
  //   emailjs.init(EMAILJS_PUBLIC_KEY);
  // }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setSubmitState({
        loading: false,
        success: false,
        error: "Tous les champs sont requis",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setSubmitState({
        loading: false,
        success: false,
        error: "Veuillez entrer une adresse email valide",
      });
      return;
    }

    setSubmitState({ loading: true, success: false, error: "" });

    try {
      // Note: EmailJS requires initialization with your public key
      // Uncomment the emailjs.send call after setting up EmailJS credentials
      
      // await emailjs.send(
      //   EMAILJS_SERVICE_ID,
      //   EMAILJS_TEMPLATE_ID,
      //   {
      //     from_name: formState.name,
      //     from_email: formState.email,
      //     subject: formState.subject,
      //     message: formState.message,
      //     to_email: "your-email@example.com",
      //   },
      //   EMAILJS_PUBLIC_KEY
      // );

      // For demo purposes, simulate success
      setTimeout(() => {
        setSubmitState({
          loading: false,
          success: true,
          error: "",
        });
        setFormState({ name: "", email: "", subject: "", message: "" });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitState({ loading: false, success: false, error: "" });
        }, 5000);
      }, 800);
    } catch (error) {
      setSubmitState({
        loading: false,
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue. Veuillez réessayer.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#2d2d2d] mb-2">
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Votre nom"
          className="w-full px-4 py-3 bg-white bg-opacity-60 border border-[#e0a4ed] border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0a4ed] focus:border-transparent transition-all duration-300 text-[#2d2d2d] placeholder-[#999]"
          disabled={submitState.loading}
        />
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#2d2d2d] mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="votre.email@example.com"
          className="w-full px-4 py-3 bg-white bg-opacity-60 border border-[#e0a4ed] border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0a4ed] focus:border-transparent transition-all duration-300 text-[#2d2d2d] placeholder-[#999]"
          disabled={submitState.loading}
        />
      </div>

      {/* Subject field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[#2d2d2d] mb-2">
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          placeholder="L'objet de votre message"
          className="w-full px-4 py-3 bg-white bg-opacity-60 border border-[#e0a4ed] border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0a4ed] focus:border-transparent transition-all duration-300 text-[#2d2d2d] placeholder-[#999]"
          disabled={submitState.loading}
        />
      </div>

      {/* Message field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#2d2d2d] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Votre message..."
          rows={6}
          className="w-full px-4 py-3 bg-white bg-opacity-60 border border-[#e0a4ed] border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0a4ed] focus:border-transparent transition-all duration-300 text-[#2d2d2d] placeholder-[#999] resize-none"
          disabled={submitState.loading}
        />
      </div>

      {/* Error message */}
      {submitState.error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {submitState.error}
        </div>
      )}

      {/* Success message */}
      {submitState.success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm animate-fade-in">
          ✓ Message envoyé avec succès! Je vous répondrai dès que possible.
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={submitState.loading}
        className="w-full py-3 bg-[#e0a4ed] text-white font-semibold rounded-lg hover:bg-[#d080e0] transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        {submitState.loading ? (
          <>
            <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Envoi en cours...
          </>
        ) : (
          "Envoyer le message"
        )}
      </button>

      {/* Note about EmailJS setup */}
      <p className="text-xs text-[#999] text-center pt-2">
        💡 <span className="text-[#d080e0] font-medium">Note :</span> Configurez votre clé EmailJS pour activer l'envoi d'emails.
      </p>
    </form>
  );
}
