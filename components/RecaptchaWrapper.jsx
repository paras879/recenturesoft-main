"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function RecaptchaWrapper({ children }) {
    const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!recaptchaKey) {
        console.warn("Google ReCAPTCHA site key is missing. Contact form will not submit without a valid token if backend expects it.");
        // Fallback for development if keys aren't added yet, but backend will reject if it mandates it
        // Or we can just render the provider anyway (it might show an error in console if key is invalid, which is fine)
    }

    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey || "dummy_key_to_prevent_crash_until_added"}>
            {children}
        </GoogleReCaptchaProvider>
    );
}
